/** @jsx React.DOM */
'use strict';

var React = require('react');
var AircraftActions = require('../actions/AircraftActions.js');

var CoGLandingRow = React.createClass({

	getDefaultProps: function() {
		return {
			class: "cog-landing"
		};
	},

	getInitialState: function() {
		return {
			weightInvalid: false,
			title: "", 
			weight: this.props.weight
		};
	},

	componentWillMount: function() {

		this.validateWeight(this.props.weight);

	},

	handleWeightChange: function (event) {

		var newWeight = event.target.value;

		this.validateWeight(newWeight);

		this.setState({weight: newWeight});

		//If it is a decimal added we dont want to parse this
		//otherwise we loose the inputted decimal.
		if (newWeight.slice(-1) === ".") {

			return;

		}

		newWeight = parseFloat(newWeight);

		//We don't want to update the aircraft with an invalid weight so we set it to 0
		//It is probably better to continue and set to 0 than keep current value as
		//you would not be able to see current value but it would still be affecting results.
		if (isNaN(newWeight)) {

			newWeight = 0;

		}
		
		this.props.onUpdate(newWeight);
	},

	validateWeight: function (weight) {
		
		var weightInvalid = false;
		var titleState = "";
		
		if (isNaN(parseFloat(weight)) || weight < 0) {

			weightInvalid = true;
			titleState = "Enter a valid weight";

		} else {

			if (this.props.constraints.hasOwnProperty("maxWeight")) {
				if (weight > this.props.constraints.maxWeight) {

					weightInvalid = true;

					titleState = "Over Maximum Weight";

				}
			}
			if (this.props.constraints.hasOwnProperty("minWeight")) {
				
				if (weight <= this.props.constraints.minWeight) {

					weightInvalid = true;

					titleState = "Under Minimum Weight";

				}
			}

		}

		if (weightInvalid) {

			this.setState({weightInvalid:true, title: titleState});

		}else{

			//Calling setState when not required calls render so best avoided
			if (this.state.weightInvalid) {

				this.setState({weightInvalid:false, title: titleState});

			}

		}
	},

	handleBlur: function (event) {
		if (event.target.value === "") {
			event.target.value = "0";
			this.validateWeight(event.target.value);
		}
	},

	restrictToFloat: function (event) {
		//Accept only 0 to 9 and . 
		if  (!((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 46)) {

			event.preventDefault();

		}

	},

	render: function() {

		var landingfuelStaMoment = +(this.state.weight * this.props.sta).toFixed(2);
		var landingfuelBlMoment = +(this.state.weight * this.props.bl).toFixed(2);

		var landingfuelSta = +(this.props.sta).toFixed(2);
		var landingfuelBl = +(this.props.bl).toFixed(2);

		return (
			<tr className={this.props.class}>
				<td>Fuel at Landing (indicated)</td>
				<td>
					<input className={this.props.class} 
						type="number" 
						value={this.state.weight} 
						onChange={this.handleWeightChange} 
						onBlur={this.handleBlur} 
						onKeyPress={this.restrictToFloat} 
						step="1" 
						min="0" 
						max="1000"
					/>
				</td>
				<td>{landingfuelSta}</td>
				<td>{landingfuelStaMoment}</td>
				<td>{landingfuelBl}</td>
				<td>{landingfuelBlMoment}</td>
			</tr>
		);
	}

});

module.exports = CoGLandingRow;