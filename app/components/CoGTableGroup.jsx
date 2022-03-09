/** @jsx React.DOM */
'use strict';
var React = require('react');
var _ = require('lodash');
var CoGRow = require('./CoGRow.jsx');
var CoGTotalsRow = require('./CoGTotalsRow.jsx');
var AircraftActions = require('../actions/AircraftActions.js');
var classNames = require('classnames');


var CoGTableGroup = React.createClass({

	getInitialState: function() {
		return {
			lastAddedItem: null,
			removedItems: []
		};
	},

	handleAddItem: function (group) {

		var item = {};

		//Generate new item id
		var newItemId = this.props.aircraft.generateUniqueIdInGroup(this.props.groupName);

		//Get the default item for this group
		if (this.props.group.hasOwnProperty("defaultItem")){

			item = _.merge({}, this.props.group.newItem, item);
			
			//Add it to the items passed
			item['id'] = newItemId;

		}else{
			throw new Error(this.props.group.name + "does not have a defaultItem\
			 declaration which is required for adding a new item.");
		}

		AircraftActions.addItem(this.props.groupName, item);

		this.setState({lastAddedItem: newItemId});

	},

	handleRestoreItem: function (item) {

		return !this.state.removedItems.every(function (removedItem, index) {

			var found = false;
			
			if (item.id === removedItem.id) {

				var removedItemsAfterRestore = this.state.removedItems.slice();

				removedItemsAfterRestore.splice(index,1)
				
				this.setState({removedItems: removedItemsAfterRestore});

				return true;

			}

			return found;

		}, this);

	},	

	isInOptionalItems: function (item) {

		if (!this.props.group.hasOwnProperty('optionalItems')) {

			return false;

		}

		return !this.props.group.optionalItems.every(function (optionalItem, index) {

			return !(item.id === optionalItem.id || item.name.value === optionalItem.name.value);

		}, this);

	},

	handleRemoveItem: function (item) {

		//Add the item only if it is not a junky item and not already in optionals
		if (!this.isInOptionalItems(item) &&
			item.hasOwnProperty("name") && item.name.value !== "" &&
			item.hasOwnProperty("weight") && item.weight.value !== 0) {

			this.setState({removedItems: this.state.removedItems.concat([item])});

		}

		AircraftActions.removeItem(this.props.groupName, item.id);

	},

	isEditingRow: function (itemId) {

		return (this.state.lastAddedItem === itemId);

	},

	render: function() {

		var addItemRow;
		
		if (this.props.group.hasOwnProperty("allowAddingItems") && this.props.group.allowAddingItems) {
			
			var addText = "Add item";

			if (this.props.groupName === "fuel") {

				addText = "Add fuel tank";

			}else if (this.props.groupName === "crew") {

				addText = "Add crew";

			}

			addItemRow = <tr className="noprint cog-add-item-row">
							<td colSpan="7">
								<a className="cog-action" onClick={this.handleAddItem}>{addText}</a>
							</td>
						</tr>
		}

		var optionalItems = [];

		if (this.props.group.hasOwnProperty("optionalItems")) {

			optionalItems = this.props.group.optionalItems;

		}

		var classes = classNames({
			'cog-group-visible': this.props.group.visibility,
			'cog-group-invisible': !this.props.group.visibility,
		});

		if (!this.props.group.hasOwnProperty("visibility") || 
			(this.props.group.hasOwnProperty("visibility") && this.props.group.visibility)) {

			return (
				<tbody className={classes}>
					{this.props.group.data.map(function (item, index) {
						return <CoGRow key={item.id + '' + index} 
									   groupName={this.props.groupName}
									   optionalItems={optionalItems} 
									   item={item}
									   possibleCrew={this.props.possibleCrew}
									   isNewRow={this.isEditingRow(item.id)}
									   handleRemoveItem={this.handleRemoveItem}
									   handleRestoreItem={this.handleRestoreItem}
									   removedItems={this.state.removedItems} />
					}, this)}
					{addItemRow}
					<CoGTotalsRow totals={this.props.totals} groupName={this.props.group.name} groupKey={this.props.groupName} visible={true} />
				</tbody>
			);

		} else {

			return (
				<tbody className={classes}>
					<CoGTotalsRow totals={this.props.totals} groupName={this.props.group.name} groupKey={this.props.groupName} visible={false} />
				</tbody>
			);

		}


	}

});

module.exports = CoGTableGroup;