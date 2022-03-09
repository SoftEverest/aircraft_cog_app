var Reflux = require('reflux');
var aircraftActions = require('../actions/AircraftActions.js');
var AircraftFactoryActions = require('../actions/AircraftFactoryActions.js');
var AircraftConstants = require('../aircraft/AircraftConstants.js');
var _ = require('lodash');
var inside = require('point-in-polygon');


var AircraftModel = Reflux.createStore({

	listenables: [aircraftActions],

	isValid: function () {
		
		//Basic object properties check.
		var requiredProperties = ['registration', 'emptyWeight', 'sta', 'bl', 'staEnvelope', 'blEnvelope',
							  	  'weightsAndBalances', 'fuel_at_landing'];

		return requiredProperties.every(function(requiredProperty, index, array) {
			
			if (!this.hasOwnProperty(requiredProperty)) {
			
				console.log("Could not find property " + requiredProperty);
			
			}

			return this.hasOwnProperty(requiredProperty);

		}, this);

	},

	/**
	 * Confirms given array of points are within Sta envelope
	 * 
	 * @param  {[[arm, weight]]}  points array of points
	 * @return {Boolean}        Returns true if all points are within range
	 */
	isLonInEnvelope: function (points) {

		return this.arePointsInEnvelope(points, this.staEnvelope);

	},

	/**
	 * Confirms given array of points are within Bl envelope
	 * 
	 * @param  {[[arm, weight]]}  points array of points
	 * @return {Boolean}        Returns true if all points are within range
	 */
	isLatInEnvelope: function (points) {

		return this.arePointsInEnvelope(points, this.blEnvelope);

	},

	/**
	 * Checks if array of points is inside the 
	 * londitudinal safety envelope
	 *
	 * These points are normally the different ZFW/TOW totals
	 *
	 * Returns false on first occurance of a item not within range
	 * 
	 * @param  {[[arm, weight]]}  points [Array of points]
	 * @return {Boolean}        [description]
	 */
	arePointsInEnvelope: function (points, envelope) {

		return points.every(function (point) {

			return inside(point, envelope);

		});

	},



	//TODO: We could move this into the build process - pros and cons
	applyWnBDefaults: function () {

		Object.keys(this.weightsAndBalances).map(function (group) {

			if (this.weightsAndBalances[group].hasOwnProperty('defaultItem')) {

				this.weightsAndBalances[group].data.map(function (item, index) {

					//Apply the defaults to this object - as it's a deep copy we have to reference root element
					this.weightsAndBalances[group].data[index] = _.merge({}, this.weightsAndBalances[group].defaultItem, item);

				}, this);
			}
		}, this);
	},

	/**
	 * Gets total weights and arms for a given group/zone.
	 *  
	 * @param  {[type]} group The group key such as cabin, crew, fuel, etc
	 * @return {[type]}       An object consiting of weight, sta and bl.
	 */
	getCoGSubtotalsFor: function (group) {

		if (!this.weightsAndBalances.hasOwnProperty(group)) {
			throw new Error(group + ' group does not exist in weights and balances for aircraft ' + this.registration);
		}

		var items = this.weightsAndBalances[group].data;

		var totalStaMoment 	= 0;
		var totalBlMoment 	= 0;
		var totalWeight 	= 0;

		items.map(function (item) {

			if (!(item.hasOwnProperty('disabled') && item.disabled)) {

				totalWeight  	+= item.weight.value;
				totalBlMoment 	+= item.bl.value * item.weight.value;
				totalStaMoment 	+= item.sta.value * item.weight.value;

			}

		}, this);

		return {
			weight: totalWeight,
			sta: ( totalWeight === 0 ) ? 0 : totalStaMoment / totalWeight,
			bl: ( totalWeight === 0 ) ? 0 : totalBlMoment / totalWeight
		};

	},

	/**
	 * Gets total weights and arms excluding the total fuel.
	 *  
	 * @return {weight, sta, bl}       An object consiting of weight, sta and bl.
	 */
	getCoGZFWnB: function () { 

		if (!this.weightsAndBalances.hasOwnProperty('fuel')) {
			throw new Error('This aircraft does not have a fuel weightsAndBalances section defined.' + this.registration);
		}

		var totalStaMoment 	= this.sta * this.emptyWeight;
		var totalBlMoment 	= this.bl * this.emptyWeight;
		var totalWeight 	= this.emptyWeight;		

		Object.keys(this.weightsAndBalances).map(function (group) {
			
			if (group !== 'fuel') {

				var subTotals = this.getCoGSubtotalsFor(group);
					

				totalWeight  	+= subTotals.weight;
				totalStaMoment 	+= subTotals.sta * subTotals.weight;
				totalBlMoment 	+= subTotals.bl * subTotals.weight;
			}

		}, this);

		return {
			weight: totalWeight,
			sta: ( totalWeight === 0 ) ? 0 : totalStaMoment / totalWeight,
			bl: ( totalWeight === 0 ) ? 0 : totalBlMoment / totalWeight
		};

	},

	/**
	 * Get the TOW , Sta and Bl for this aircraft
	 * 
	 * @return {[dict]} [dictionary containg weight, sta and bl]
	 */
	getCoGTotals: function () {

		var totalStaMoment 	= this.sta * this.emptyWeight;
		var totalBlMoment 	= this.bl * this.emptyWeight;
		var totalWeight 	= this.emptyWeight;		

		Object.keys(this.weightsAndBalances).map(function (group) {

			var subTotals = this.getCoGSubtotalsFor(group);

			totalWeight  	+= subTotals.weight;
			totalStaMoment 	+= subTotals.sta * subTotals.weight;
			totalBlMoment 	+= subTotals.bl * subTotals.weight;

		}, this);

		return {
			weight: totalWeight,
			sta: ( totalWeight === 0 ) ? 0 : totalStaMoment / totalWeight,
			bl: ( totalWeight === 0 ) ? 0 : totalBlMoment / totalWeight
		};
	},

	/**
	 * Get the fuel at landing for this aircraft
	 * 
	 * @return {[dict]} [fuel_at_landing]
	 */
	getCoGLanding: function () {
		if (this.fuel_at_landing) {
			return this.fuel_at_landing;
		}
		else {
			return 0;
		}
	},

	/**
	 * Get details for this aircraft
	 * 
	 * @return {[dict]} [dictionary containg details]
	 */
	getCoGDetails: function () {

		var totalStaMoment 	= this.sta * this.emptyWeight;
		var totalBlMoment 	= this.bl * this.emptyWeight;
		var totalWeight 	= this.emptyWeight;		

		Object.keys(this.weightsAndBalances).map(function (group) {

			var subTotals = this.getCoGSubtotalsFor(group);

			totalWeight  	+= subTotals.weight;
			totalStaMoment 	+= subTotals.sta * subTotals.weight;
			totalBlMoment 	+= subTotals.bl * subTotals.weight;

		}, this);

		var details = JSON.parse(JSON.stringify(this.weightsAndBalances.fuel.data[0].sta.lookup));
		var max_fuel = this.weightsAndBalances.fuel.data[0].weight.value;
		var max_sta = this.weightsAndBalances.fuel.data[0].sta.value;
		
		const newDetails = [];
		for(let each of details) {
			if(each[0] < max_fuel) newDetails.push(each);
			else if(each[0] === max_fuel) {
				newDetails.push(each);
				break;
			}
			else {
				newDetails.push([max_fuel, each[1]]);
				break;
			}
		}
		
		for(let each of newDetails) {
			let temp;
			temp = each[0];
			each[0] = (totalStaMoment - max_fuel * max_sta + Number(temp) * each[1]) / (totalWeight - max_fuel + Number(temp));
			each[1] = totalWeight - max_fuel + Number(temp);
		}

		return {details: newDetails};
	},

	// -------- ACTIONS -----------

	onUpdateWeight: function (group, itemId, newWeight) {

		var items = this.weightsAndBalances[group].data;

		items.every(function (item) {

			if (item.id === itemId) {

				item.weight.value = newWeight;

				return false;

			}

			return true;

		}, this);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onAddItem: function (group, item) {

		//Add the item to the items group
		this.weightsAndBalances[group].data.push(item);

		//Notify the aircraft factory it's model has changed.
		AircraftFactoryActions.updated();
		
		//Tell listers of this model to update.
		this.trigger({aircraft:this});

	},

	onRemoveItem: function (group, itemId) {

		var items = this.weightsAndBalances[group].data;

		items.every(function (item, index) {

			if (item.id === itemId) {

				this.weightsAndBalances[group].data.splice(index, 1);

				return false;

			}

			return true;

		}, this);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onUpdateField: function (groupKey, itemKey, fieldKey, newValue) {

		var items = this.weightsAndBalances[groupKey].data;

		items.every(function (item) {

			if (item.id === itemKey) {

				if (item[fieldKey] !== 'undefined') {

					item[fieldKey].value = newValue;

				}else{
					throw new Error('Could not find ' + fieldKey + ' in ' + 
										groupKey + ' ' + itemKey + 'when updating field.');
				}

				return false;

			}

			return true;

		}, this);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onUpdateLanding: function (newValue) {

		this.fuel_at_landing = newValue;
		
		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onChangeCrewMember: function (groupKey, itemId, newCrewMember) {

		var items = this.weightsAndBalances[groupKey].data;

		items.every(function (item, index) {

			if (item.id === itemId && newCrewMember !== null) {

				this.weightsAndBalances[groupKey].data[index]['crewName'] = newCrewMember.name;
				this.weightsAndBalances[groupKey].data[index]['weight']['value'] = newCrewMember.weight;
				this.weightsAndBalances[groupKey].data[index]['crewId'] = newCrewMember.userid;

				return false;

			} else if (item.id === itemId && newCrewMember === null) { //If null is passed for crew memeber we remove them

				delete this.weightsAndBalances[groupKey].data[index]['crewName'];
				this.weightsAndBalances[groupKey].data[index]['weight']['value'] = 90;
				delete this.weightsAndBalances[groupKey].data[index]['crewId'];
				
				return false;

			}

			return true;


		}, this);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onToggleDisableItem: function (groupKey, itemId) {

		var items = this.weightsAndBalances[groupKey].data;

		items.every(function (item, index) {

			if (item.id === itemId) {

				if (item.hasOwnProperty('disabled') && item.disabled) {

					delete this.weightsAndBalances[groupKey].data[index]['disabled'];

				} else {

					this.weightsAndBalances[groupKey].data[index]['disabled'] = true;

				}

				return false;

			} else {

				return true;

			}

		}, this);


		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onEditItem: function (group, itemId) {

		this.changeEditingState(itemId, group, true);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onStopEditingItem: function (group, itemId) {

		this.changeEditingState(itemId, group, false);

		//Notify the aircraft factory of the new data
		AircraftFactoryActions.updated();

		//Notify listers of this model that it has updated.
		this.trigger({aircraft:this});

	},

	onSetGroupVisibility: function (groupKey, visibility) {
		
			this.weightsAndBalances[groupKey]["visibility"] = visibility;

			//Notify the aircraft factory of the new data
			AircraftFactoryActions.updated();

			//Notify listers of this model that it has updated.
			this.trigger({aircraft:this});

	},

	//--------- HELPERS ------------

	/**
	 * Helper method to find a unique value in a group
	 *
	 * We do this by looping through all in a specifc group checking for the highest
	 * we then add one to the highest.
	 * 
	 * @param  {[string]} group [group id (cabin, fuel)]
	 * @return {[int]}       [Unique id]
	 */
	generateUniqueIdInGroup: function (group) {

		var maxUniqueValue = 0;

		this.weightsAndBalances[group].data.map(function (item) {

			if (item.id > maxUniqueValue) {
				maxUniqueValue = item.id;
			}

		});

		return maxUniqueValue + 1;

	},

	changeEditingState: function (itemId, group, state) {

		var items = this.weightsAndBalances[group].data;

		items.every(function (item, index) {

			if (item.id === itemId) {

				item.editing.editable = state;

				return false;

			}

			return true;

		}, this);


	}

});

module.exports = AircraftModel;