/** @jsx React.DOM */
'use strict';

var React = require('react');
var CoGTableGroup = require('./CoGTableGroup.jsx');
var CoGTotalsRow = require('./CoGTotalsRow.jsx');
var CoGLandingRow = require('./CoGLandingRow.jsx');
var DisplayUnitsMixin = require('../mixins/DisplayUnitsMixin.js');
var AircraftActions = require('../actions/AircraftActions.js');

var CoGTable = React.createClass({
	
	handleUpdateField: function (newValue) {
		AircraftActions.updateLanding(newValue);
	},

	mixins: [DisplayUnitsMixin],

	render: function() {

		var aircraft = this.props.aircraft;

		var emptyStaMoment = +(aircraft.emptyWeight * aircraft.sta).toFixed(2);
		var emptyBlMoment = +(aircraft.emptyWeight * aircraft.bl).toFixed(2);

		if (aircraft.fuel_at_landing) {
			var fuel_at_landing = +(aircraft.fuel_at_landing).toFixed(2);
		}
		else {
			var fuel_at_landing = 0;
		}
		
		var fuel_sta = +(aircraft.weightsAndBalances.fuel.data[0].sta.value).toFixed(2);
		var fuel_bl = +(aircraft.weightsAndBalances.fuel.data[0].bl.value).toFixed(2);
		var zeroFuelWeightAndBalance = aircraft.getCoGZFWnB();

		var lengthUnits = this.displayLengthUnitsString(this.props.displayUnits);
		var weigthUnits = this.displayWeightUnitsString(this.props.displayUnits);


		return (
			<table className="cog-table">
				<thead>
					<tr className="cog-table-header">
						<th className="cog-header-item">Item</th>
						<th className="cog-header-weight">Weight ({weigthUnits})</th>
						<th className="cog-header-sta">Sta ({lengthUnits})</th>
						<th className="cog-header-sta-moment">Moment</th>
						<th className="cog-header-bl">Bl ({lengthUnits})</th>
						<th className="cog-header-bl-moment">Moment</th>
						<th className="cog-header-actions"></th>
					</tr>
				</thead>
				<tfoot>
					<CoGTotalsRow class="cog-totals" 
								  totals={this.props.totals} 
								  groupName="" />
					<CoGLandingRow class="cog-landing" 
								  sta={fuel_sta}
								  bl={fuel_bl}
								  weight={fuel_at_landing}
								  constraints=""
								  onUpdate={this.handleUpdateField}
								  fieldKey="weight" />
					<CoGTotalsRow class="cog-totals" 
								  sta={fuel_sta}
								  bl={fuel_bl}
								  zfwnb={this.props.zfwnb}
								  totals={this.props.totals} 
								  landing={this.props.landing}
								  type="landing mass"
								  groupName="" />
				</tfoot>
				<tbody>
					<tr className="cog-table-empty-weight">
						<td>
                            <span
                                className="jsar-tipify"
                                title="The Dry Operating Mass plus traffic load but excluding fuel">Empty Weight</span>
                        </td>
						<td>{aircraft.emptyWeight}</td>
						<td>{aircraft.sta}</td>
						<td>{emptyStaMoment}</td>
						<td>{aircraft.bl}</td>
						<td>{emptyBlMoment}</td>
						<td></td>
					</tr>
				</tbody>

					{Object.keys(this.props.aircraft.weightsAndBalances).map(function (group) {
						return <CoGTableGroup key={group}
											  aircraft={this.props.aircraft}
											  groupName={group}
											  possibleCrew={this.props.possibleCrew}
											  totals={this.props.aircraft.getCoGSubtotalsFor(group)} 
											  group={this.props.aircraft.weightsAndBalances[group]} />
					},this)}

					<CoGTotalsRow totals={zeroFuelWeightAndBalance} 
								  groupName="Zero Fuel Weight (ZFW)" />	
			</table>
		);
	}



});

module.exports = CoGTable;