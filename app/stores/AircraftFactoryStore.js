/** 
 * Singleton Aircraft Factory for working with Aircraft Models.
 */
var Reflux = require('reflux');
var request = require('superagent');
var _ = require('lodash');
var AircraftModelStore = require('./AircraftModelStore.js');
var AircraftDefaults = require('../aircraft/AircraftDefaults.js');
var AircraftList = require('../aircraft/AircraftList.js');
var AircraftFactoryActions = require('../actions/AircraftFactoryActions.js');


var AircraftFactoryStore = Reflux.createStore({

	listenables: [AircraftFactoryActions],

	crew: {},

	getInitialState: function() {

		this.load(window.loadedAircraft);

		return {
			aircraft: this.currentAircraft,
			crew: {},
			isSaving: false
		};
	},

	onUpdated: function () {

		this.trigger({aircraft:this.currentAircraft});
		
	},

	onSave: function () {
		
		var aircraftClone = _.assign({}, this.currentAircraft);

		//Remove the reflux store bits and bobs
		delete aircraftClone.subscriptions;
		delete aircraftClone.emitter;
		delete aircraftClone.eventLabel;

		this.trigger({aircraft:this.currentAircraft, isSaving: true});


		request
			.post('/cog_save/')
			.send({ aircraftRegistration:  this.currentAircraft.registration,
					aircraftConfiguration: aircraftClone })
			.end(function (err, res) {
				
				if (res.ok) {
					// re-draw table of calculations above the CoG app
					$cog.reload_grid();
				}

				this.trigger({aircraft:this.currentAircraft, isSaving: false});

		}.bind(this));

	},


	loadCrew: function () {

		request

			.get('/cog_users/'+this.currentAircraft.registration)
			.end(function (err, res) {
				if (res.ok) {
					
					if (res.body !== null || res.body !== undefined){

						this.crew = res.body;

					}else{

						throw new Error('Server returned invalid crew list.');

					}

					this.trigger({crew:this.crew});

				} else {

					this.crew = {
						"captain" : [{ "name":"A Hayworth", "userid":234, "weight": 89 }, { "name":"B Hayworth", "userid":234, "weight": 89 }],
						"copilot" : [{ "name":"C Hayworth", "userid":234, "weight": 89 }, { "name":"D Hayworth", "fallback":true, "userid":234, "weight": 90 }],
						"sarnurse" : [{ "name":"E Hayworth", "userid":234, "weight": 89 }, { "name":"F Hayworth", "userid":234, "weight": 89 }],
						"winchoperator" : [{ "name":"G Hayworth", "userid":234, "weight": 89 }, { "name":"H Hayworth", "userid":234, "weight": 89 }],
						"paramedic" : [{ "name":"I Hayworth", "userid":234, "weight": 89 }]
						}
					this.trigger({crew:this.crew});

					//Uncomment below in production
					//throw new Error('Failed load crew.');
				}
		}.bind(this));

	},

	/**
	 * Loads an returns an aircraft model.
	 * 
	 * @param  {[string | object]} aircraftDef [Loads a default aircraft by given registration or previous saved details.]
	 * @return {[type]}             [Aircraft]
	 * @throws {[Error]} If [aircraft != valid]
	 */
	load: function (aircraftDef) {

		var aircraft;

		//Load aircraft from registration id
		if (typeof aircraftDef === 'string') {

			aircraft = this.loadByRegistration(aircraftDef);
			
		//Load aircraft from give data structure
		} else if (typeof aircraftDef === 'object') {

			//Merge the aircraft definition onto the Aircraft Model.
			aircraft = _.assign(AircraftModelStore, aircraftDef);

		}

		//Confirm our loaded aircraft is valid.
		// if (typeof aircraft === 'undefined' || !aircraft.isValid()) {

		// 	throw new Error('Aircraft defition could not be loaded.');

		// }

		//Apply the default fields to all weights and balance items
		aircraft.applyWnBDefaults();
		
		this.currentAircraft = aircraft;

		//Load the possible crew for this aircraft
		this.loadCrew();

	},

	/**
	 * Given an aircraft reistration load it's default aircraft data.
	 * 
	 * @param  {[type]} aircraftReg [aircraft registration (unsantised)]
	 * @return {[type]}             [aircraft structure]
	 */
	loadByRegistration: function (aircraftReg) {

		sanitisedAircraftReg = this.sanitizeAircraftRegistration(aircraftReg);

		//Check we have this aircraft loaded
		if (!AircraftDefaults.hasOwnProperty(sanitisedAircraftReg)) {
			// throw new Error('Aircraft ' + sanitisedAircraftReg + ' (' + aircraftReg + ') not found in Aircraft Defaults.\nPrehapse you need to run `gulp build-aircraft-bundle`');

			$cog.missing_default_config( aircraftReg );
		}

		return _.assign(AircraftModelStore, AircraftDefaults[sanitisedAircraftReg]);

	},

	/**
	 * Returns a list of valid aircraft registrations
	 * 
	 * @param  {int} contractId [Optional contractId which filters aircraft registrations for a given contract.]
	 * @return {[array]}            [Array of aircraft registrations]
	 */
	list: function (contractId) {
			
		var aircraftRegistrations = [];

		//Add just this contracts registrations
		if (typeof contractId !== 'undefined') {

			aircraftRegistrations = AircraftList[contractId];

		//Add all aircraft for all contracts
		} else {

			Object.keys(AircraftList).map(function (contractsRegistrations) {
				aircraftRegistrations.push(contractsRegistrations);
			});

		}

		return aircraftRegistrations;

	},
	
	/**
	 * Aircraft registrations do not conform to JS variable names
	 * as they can start with numbers and use hyphens. There we prefix all
	 * aircraft registrations with an _ and and convert the hypers to _ too.
	 * 
	 * @param  {[type]} aircraftReg [standard aircraft reg]
	 * @return {[type]}             [sanitised version]
	 */
	sanitizeAircraftRegistration: function (aircraftReg) {
		return "_"+aircraftReg.replace("-", "_");
	}

});

module.exports = AircraftFactoryStore;