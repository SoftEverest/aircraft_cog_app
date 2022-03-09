/** @jsx React.DOM */
'use strict';
var React = require('react');
var className = require('classnames');

var AircraftFactoryActions = require('../actions/AircraftFactoryActions.js');
var SelectAircraft = require('./SelectAircraft.jsx');

var Controls = React.createClass({

	handleSave: function () {
		AircraftFactoryActions.save();
	},

	render: function() {

		var savingClasses = className(
			'grad_start grad_end grad_reload',
			{
				'grad_spinner': this.props.isSaving
			}
		);

		return (
			<div className="grad_btns" id="cog-controls">
	        	<a onClick={this.handleSave} className={savingClasses}>Save</a>
			</div>
		);
	}

});

module.exports = Controls;