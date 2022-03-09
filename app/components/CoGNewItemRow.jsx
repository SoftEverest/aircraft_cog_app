/** @jsx React.DOM */
'use strict';

var React = require('react');
var AircraftActions = require('../actions/AircraftActions.js');
var CoGWeightInput = require('./CoGWeightInput.jsx');
var CoGNewItemRow = React.createClass({

	getInitialState: function() {
		return {
			isAddingItem: false 
		};
	},

	handleAddItem: function () {

		this.setState({isAddingItem:true});

	},

	render: function() {

		var row = "";

		if (!this.state.isAddingItem) {

			row = 

		} else {

			row = 	<tr>
						<td><input type="text" /></td>
						<td><input type="number" /></td>
						<td><input type="number" /></td>
						<td>0</td>
						<td><input type="number" /></td>
						<td>0</td>
						<td><a href="">Add</a></td>
					</tr>

		}

		return row;
	}

});

module.exports = CoGNewItemRow;