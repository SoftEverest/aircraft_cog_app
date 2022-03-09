/** @jsx React.DOM */
'use strict'; 

var React = require('react');
var classNames = require('classnames');

var CoGNumericInput = React.createClass({

	getDefaultProps: function() {
		return {
			isParentEditing: false,
			editing: {
				editable: false,
				editableByDefault: false
			},
			restrictPositive: false
		};
	},

	getInitialState: function() {

		return {
			isEditing: (this.props.editing.editable && 
					   (this.props.editing.editableByDefault || this.props.isParentEditing)),
			clickedToEdit: false

		};

	},

	componentWillUpdate: function(nextProps, nextState) {

		nextState.isEditing = (nextProps.editing.editable && 
					   (nextProps.editing.editableByDefault || 
					   	nextProps.isParentEditing ||
					   	nextState.clickedToEdit));

	},

	handleMakeEditable: function () {

		this.setState({clickedToEdit: true}, function () {

			var inputElement = React.findDOMNode(this.refs.theInput);

			if (inputElement) {

				inputElement.focus();

				//Set caret at end of text instead of start
				//Chrome removes support for setSelectionRange on type=number
				//https://www.w3.org/Bugs/Public/show_bug.cgi?id=24796
				//Hacky fix to resolve this.
				inputElement.value = inputElement.value;

			}

		});

	},

	handleOnBlur: function () {

		this.stopEditingField();

	},

	handleKeyPress: function (event) {

		this.stopEditingOnEnter(event);

		if (this.props.restrictInputToFloat) {
			this.restrictInputToFloat(event)
		}

	},

	stopEditingOnEnter: function (event) {

		if (event.charCode === 13) {

			this.stopEditingField();

		}

	},

	stopEditingField: function () {

		if (!this.props.isParentEditing) {

			this.setState({clickedToEdit: false});

		}

	},

	restrictInputToFloat: function (event) {
		//Accept only 0 to 9 and . 
		if  (!((event.charCode >= 48 && 
				event.charCode <= 57) || 
				event.charCode === 46 ||	
				event.charCode === 45)) {	// - (minus)

			event.preventDefault();

		}

	},

	handleOnChange: function (event) {

		var newValue = parseFloat(event.target.value);

		if (isNaN(newValue)) {
			
			newValue = 0;

		}

		this.props.onUpdate(this.props.fieldKey, newValue);

	},

	getValue: function () {

		if (this.props.hasOwnProperty("lookup")) {

			this.props.lookup.map(function (item) {

				if (item[0] === this.props.weight) {

					return item[1];

				}

			});

		} else {

			return this.props.value;

		}

	},

	render: function() {

		var classes = classNames({
			'cog-item-editable': this.props.editing.editable,
			'cog-field-invalid': this.state.invalidInput,
		});

		var inputElement;

		//Display editable item if editable and it is editable by default or we're in an editing mode
		if (this.state.isEditing) {

			inputElement = <input ref="theInput" 
							  	  type="number" 
							  	  onBlur={this.handleOnBlur} 
							  	  value={this.getValue()}
							  	  onChange={this.handleOnChange}
							  	  onKeyPress={this.handleKeyPress} />

		} else {

			inputElement = <span onClick={this.handleMakeEditable} className={classes}>{this.props.value}</span>

		}

		return inputElement;
	}

});

module.exports = CoGNumericInput;