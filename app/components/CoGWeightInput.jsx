/** @jsx React.DOM */
'use strict';

var React = require('react');
var classNames = require('classnames');


var CoGWeightInputCell = React.createClass({

	getDefaultProps: function() {
		return {
			constraints: {}
		};
	},

	getInitialState: function() {
		return {
			weightInvalid: false,
			title: "", 
			weight: this.props.weight.value
		};
	},

	componentWillMount: function() {

		this.validateWeight(this.props.weight.value);

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
		
		this.props.onUpdate(this.props.fieldKey, newWeight);
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

	restrictToFloat: function (event) {
		//Accept only 0 to 9 and . 
		if  (!((event.charCode >= 48 && event.charCode <= 57) || event.charCode === 46)) {

			event.preventDefault();

		}

	},

	handleBlur: function (event) {
		if (event.target.value === "") {
			event.target.value = "0";
			this.validateWeight(event.target.value);
		}
	},

	render: function() {

		var weightItem = this.state.weight;

		var classes = classNames({
		    'cog-field-weight': true,
		    'cog-weight-invalid': this.state.weightInvalid,
		    'cog-weight-warning': this.props.weight > 999
		  });

		var steps = (weightItem.hasOwnProperty("step")) ? weightItem.step : 1;

		var min, max;

		if (weightItem.hasOwnProperty("constraints")) {

			min = (weightItem.constraints.hasOwnProperty("min")) ? weightItem.constraints.min : 0;
			max = (weightItem.constraints.hasOwnProperty("max")) ? weightItem.constraints.max : 1000;
		
		}

		return (
			<input title={this.state.title} 
				   className={classes} 
				   type="number" 
				   step={steps}
				   onKeyPress={this.restrictToFloat} 
				   onChange={this.handleWeightChange} 
				   value={this.state.weight}
				   min={min}
				   max={max}
				   onBlur={this.handleBlur}
				   style={this.state.weightInvalid?{border:'1px solid red'}:{}}
			/>
		);
	}

});

module.exports = CoGWeightInputCell;