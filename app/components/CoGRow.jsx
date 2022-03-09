/** @jsx React.DOM */
'use strict'; 

var React = require('react');
var classNames = require('classnames');
var CoGWeightInput = require('./CoGWeightInput.jsx');
var CoGNumericInput = require('./CogNumericInput.jsx');
var CoGStringInput = require('./CogStringInput.jsx');
var AircraftActions = require('../actions/AircraftActions.js');
var DisplayUnitsMixin = require('../mixins/DisplayUnitsMixin.js');
var AircraftDefault = require('../aircraft/AircraftDefaults.js');
var defaultweight = AircraftDefault._VH_WEK.weightsAndBalances.fuel.data[0].weight.value;
var CoGRow = React.createClass({

	getInitialState: function() {
		return {
			//This might be caused by either it being a newerly added row or 
			//someone selecting edit row with action tools.
			isEditingRow: this.props.isNewRow

		};
	},

	handleRemove: function () {

		//Pass back to parent function to handle.
		if( confirm( 'Remove this row from the calculation?' ) ){
            this.props.handleRemoveItem(this.props.item);
        }

	},

	handleEdit: function () {
		
		//Toggle the editing state
		this.setState({'isEditingRow':!this.state.isEditingRow});

	},

	handleUpdateField: function (fieldKey, newValue) {

		var groupKey = this.props.groupName;
		var itemId   = this.props.item.id;	 

		AircraftActions.updateField(groupKey, itemId, fieldKey, newValue);

	},

	handleRemoveCrewMemeber: function () {
		
		var groupKey = this.props.groupName;
		var itemId   = this.props.item.id;	 

		//Passing a null crew memeber to changeCrewMemeber removes a crew memeber
		AircraftActions.changeCrewMember(groupKey, itemId, null);

	},

	handleSelectOptionalItem: function (item) {

		this.handleSelectDropdownItem(item);

	},

	handleSelectRemovedItem: function (item) {

		this.props.handleRestoreItem(item);

		this.handleSelectDropdownItem(item);

	},

	handleSelectDropdownItem: function (item) {
		
		var groupKey = this.props.groupName;
		var itemId   = this.props.item.id;

		//TODO Performance bottle neck here - causes React to rerender 4 times. Improve.
		AircraftActions.updateField(groupKey, itemId, "name", item.name.value);
		AircraftActions.updateField(groupKey, itemId, "weight", item.weight.value);
		AircraftActions.updateField(groupKey, itemId, "sta", item.sta.value);
		AircraftActions.updateField(groupKey, itemId, "bl", item.bl.value);

	},

	handleChangeCrew: function (newCrew) {

		var groupKey = this.props.groupName;
		var itemId   = this.props.item.id;	 

		AircraftActions.changeCrewMember(groupKey, itemId, newCrew);

	},

	handleDisableItem: function () {

		var groupKey = this.props.groupName;
		var itemId   = this.props.item.id;

		AircraftActions.toggleDisableItem(groupKey, itemId);

	},

	/**
	 * Returns true if any fieds in this item are editable and not editable by default
	 * @return {Boolean} [Is editable fields in item.]
	 */
	isItemEditable: function () {

		var editable = false;
		//See if any fields are editable to decide whether to display edit link
		editable = !Object.keys(this.props.item).every(function (fieldKey) {
			
			var field = this.props.item[fieldKey];

			//Check this field has editing settings
			if (!(field.hasOwnProperty('editing') && field.editing.hasOwnProperty('editable')
												&& field.editing.hasOwnProperty('editableByDefault'))) {
				return true;
			}

			return !(field.editing.editable && !field.editing.editableByDefault);

		}, this);

		return editable;

	},

	/**
	 * See if any fields are removable to decide whether to display edit link
	 * @return {Boolean} [description]
	 */
	isItemRemovable: function () {

		var removable = false;
		removable = !Object.keys(this.props.item).every(function (field) {
			
			if (!this.props.item.hasOwnProperty("removable")) {
				//Return true to state we have not found one and continue
				return true;
			}else{
				//If the field is removable we want to return false to every to stop looking
				return !this.props.item.removable;
			}

		}, this);

		return removable;

	},

	/**
	 * Creates a drop down based on a crew item.
	 *
	 * The dropdown requires a the containing class to provide a handleChangeCrew
	 * when the eleemnt is clicked. It provides the crew memeber as the object.
	 * 
	 * @return {ReactJS dropdown DOM} [description]
	 */
	getCrewDropDownElement: function () {

			var dropdown;

			//Curreently the only hardded mappings for crew members.
			var crewNameMappings = {
				captain: "Captains",
				copilot: "Co-Pilots",
				sarnurse: "SAR Nurses",
				winchoperator: "Winch Operator",
				paramedic: "Paramedic"
			}


			if (this.props.item.type === 'crewItem') {

				//Check we have this roles in the aircrafts crew
				if (this.props.possibleCrew !== undefined) {

					var matchedCrew = {};

					//See if the crew item enforces a role.
					//Role can be a single string 'all' or an array of possible
					//keys ['captain', 'copilot']
					//
					// If we don't find a role we return all crew grouped.
					if (this.props.item.hasOwnProperty("role") &&
						typeof this.props.item.role !== 'string' && 
						this.props.item.role !== 'all') {


						this.props.item.role.map(function (role) {

							if (this.props.possibleCrew.hasOwnProperty(role)) {

								matchedCrew[role] = this.props.possibleCrew[role]

							}

						}, this);

					}else{

						matchedCrew = this.props.possibleCrew;

					}

					var otherCrewElements;

					if (this.props.item.hasOwnProperty('crewId') && this.props.item.crewId !== null) {

						otherCrewElements = <div className="cog-dropdown-item" onClick={this.handleRemoveCrewMemeber}>Other, not listed.</div>

					}

					dropdown = 	<div className="cog-dropdown noprint">
									{otherCrewElements}
									{Object.keys(matchedCrew).map(function (crewTypes, index) {
										
										//Group header
										var headerElements = <div className="cog-dropdown-group">{crewNameMappings[crewTypes]}</div>

										var crewElements = matchedCrew[crewTypes].map(function (crew, crewIndex) {
											
											var crewWeight = crew.weight;

											//Handle the fallback weight for crew memeber.
											if (crew.hasOwnProperty("fallback") && crew.fallback) {

												crewWeight = 'default weight ' + crewWeight;
											
											}

											var itemClasses = classNames(
												'cog-dropdown-item', 	//Default class on all crew items
												{
													'cog-default-weight': crew.hasOwnProperty("fallback") && crew.fallback //Class added if server could not find a weight for crew member
												}
											);

											return 	<div className={itemClasses}
													 key={crewIndex + '' + this.props.item.id} 
													 onClick={this.handleChangeCrew.bind(this, crew)}>{crew.name} ({crewWeight}kg)</div>			

										}, this);

										return [headerElements, crewElements];

									}, this)}
								</div>

				}

			}

			return dropdown;
	},

	getCrewName: function () {

		if (this.props.item.hasOwnProperty('crewName')) {
		
			return <span><span className="cog-crew-name">({this.props.item.crewName})</span> <a className="cog-action-link" onClick={this.handleRemoveCrewMemeber}>remove</a></span>
		
		}

		return null;

	},

	createOptionsDropdown: function () {

		var dropdown,
			optionalItemsGroupElement,
			removedItemsGroupElement;

		if (this.props.optionalItems.length === 0 && this.props.removedItems.length === 0) {
			return dropdown;
		}

		if (this.props.optionalItems.length > 0) {

			optionalItemsGroupElement = <div className="cog-dropdown-group">Optionals</div>

		}

		if (this.props.removedItems.length > 0) {

			removedItemsGroupElement = <div className="cog-dropdown-group">Removed</div>

		}

		dropdown = <div className="cog-dropdown noprint">
						{optionalItemsGroupElement}
						{this.props.optionalItems.map(function (optionalItem, index) {
							return <div className="cog-dropdown-item"
								 key={index + '' + this.props.item.id} 
								 onClick={this.handleSelectOptionalItem.bind(this, optionalItem)}>{optionalItem.name}</div>
						}, this)}
						{removedItemsGroupElement}
						{this.props.removedItems.map(function (removedItem, index) {
							return <div className="cog-dropdown-item"
								 key={index + '' + this.props.item.id} 
								 onClick={this.handleSelectRemovedItem.bind(this, removedItem)}>{removedItem.name.value}</div>
						}, this)}
					</div>

		return dropdown;

	},

	render: function() {

		var item = this.props.item;
		
		var lonMoment = +(item.weight.value * item.sta.value).toFixed(2);
		var latMoment = +(item.weight.value * item.bl.value).toFixed(2);

		//DOM Elements for actions
		var editableActionElement;
		var removeActionElement;

		if (this.isItemEditable()) {

			var editActionClasses = classNames({
				'cog-action cog-item-editable noprint': true,
				'cog-item-editing-enabled': this.state.isEditingRow,
				'cog-item-editing-disabled': !this.state.isEditingRow
			}); 

			//TODO: Mark to replace with images
			var editingText = "Edit";
			
			if (this.state.isEditingRow) {

				editingText = "Save";

			}

			editableActionElement = <a className={editActionClasses} onClick={this.handleEdit}>{editingText}</a>

		}

		if (this.isItemRemovable()) {

			removeActionElement = <a className="cog-action cog-item-remove" onClick={this.handleRemove}>Hide</a>

		}

		var itemDisabled = false;

		if (item.hasOwnProperty('disabled') && item.disabled) {

			itemDisabled = true;

		}

		var classes = classNames({
		    'cog-item-row': true,
		    'cog-item-row-disabled': itemDisabled
		});

		return (
			<tr className={classes}>
				<td>
					<CoGStringInput isParentEditing={this.state.isEditingRow} 
								    fieldKey="name"
								    onUpdate={this.handleUpdateField}
								    {...item.name} />
					{this.createOptionsDropdown()}
					{this.getCrewName()}
				</td>
				<td>
					<CoGWeightInput isParentEditing={this.state.isEditingRow} 
									constraints={item.name.value == "Fuel (kg)" ? {maxWeight: defaultweight} : {}}
									group={this.props.groupName} 
									fieldKey="weight"
									onUpdate={this.handleUpdateField}
									weight={item.weight} />
					&nbsp;<input onChange={this.handleDisableItem} 
						   checked={itemDisabled} 
						   type="checkbox" />
					{this.getCrewDropDownElement()}
				</td>
				<td>
					<CoGNumericInput isParentEditing={this.state.isEditingRow} 
									 fieldKey="sta"
									 onUpdate={this.handleUpdateField}
									 weight={item.weight}
									 {...item.sta}
									 restrictInputToFloat={true} />
				</td>
				<td>
					{lonMoment}
				</td>
				<td>
					<CoGNumericInput isParentEditing={this.state.isEditingRow} 
									 group={this.props.groupName} 
									 fieldKey="bl" 
									 onUpdate={this.handleUpdateField}
									 {...item.bl}
									 restrictInputToFloat={true} />
				</td>
				<td>
					{latMoment}
				</td>
				<td>
					<div className="cog-row-actions noprint">
					{editableActionElement} 
					{removeActionElement}
					</div>
				</td>
			</tr>
		);
	}

});

module.exports = CoGRow;