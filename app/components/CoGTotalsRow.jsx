/** @jsx React.DOM */
'use strict';

var React = require('react');
var AircraftActions = require('../actions/AircraftActions.js');

var CoGTotalsRow = React.createClass({

	getDefaultProps: function() {
		return {
			class: "cog-subtotals"
		};
	},

	toggleVisibility: function () {

		//Toggle visiblity
        AircraftActions.setGroupVisibility(this.props.groupKey, !this.props.visible);
        
	},

	render: function() {
		var totals = this.props.totals;
		var landing_mass = this.props.landing;

		var totalStaMoment = +(totals.weight * totals.sta).toFixed(2);
		var totalsBlMoment = +(totals.weight * totals.bl).toFixed(2);

		var totalWeight = +(totals.weight).toFixed(2);
		var totalSta = +(totals.sta).toFixed(2);
		var totalBl = +(totals.bl).toFixed(2);

		var visiblilityAction = <a className="cog-action" onClick={this.toggleVisibility}>Close Up</a>;

		if (!this.props.visible) {

			var visiblilityAction = <a className="cog-action cog-item-remove" onClick={this.toggleVisibility}>Open</a>;

		}

		if (this.props.type == 'landing mass') {
			var zfwnb = this.props.zfwnb;
			var landingmassSta = +((zfwnb.sta * zfwnb.weight + this.props.sta) / landing_mass).toFixed(2);
			var landingmassBl = +((zfwnb.bl * zfwnb.weight + this.props.bl) / landing_mass).toFixed(2);
			var landingmassStaMoment = +(landingmassSta * landing_mass).toFixed(2);
			var landingmassBlMoment = +(landingmassBl * landing_mass).toFixed(2);
			return (
				<tr className={"cog-general-totals " + this.props.class}>
					<td>Landing Mass</td>
					<td>{landing_mass}</td>
					<td>{landingmassSta}</td>
					<td>{landingmassStaMoment}</td>
					<td>{landingmassBl}</td>
					<td>{landingmassBlMoment}</td>
					<td></td>
				</tr>
			);
		}
		else {
			return (
				<tr className={"cog-general-totals " + this.props.class}>
					<td>{this.props.groupName} Total</td>
					<td>{totalWeight}</td>
					<td>{totalSta}</td>
					<td>{totalStaMoment}</td>
					<td>{totalBl}</td>
					<td>{totalsBlMoment}</td>
					<td>
						<div className="cog-row-actions noprint">
							{visiblilityAction}
						</div>
					</td>
				</tr>
			);
		}
	}

});

module.exports = CoGTotalsRow;