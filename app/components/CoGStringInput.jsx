/** @jsx React.DOM */
'use strict'; 

var React = require('react');
var classNames = require('classnames');

var CoGStringInput = React.createClass({

getDefaultProps: function() {
		return {
			isParentEditing: false,
			editing: {
				editable: false,
				editableByDefault: false
			}
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

	handleOnBlur: function () {

		this.stopEditingField();

	},

	handleMakeEditable: function () {

		this.setState({clickedToEdit: true}, function () {

			var inputElement = React.findDOMNode(this.refs.theInput);

			inputElement.focus();

			//Set caret at end of text instead of start
			//Chrome removes support for setSelectionRange on type=number
			//https://www.w3.org/Bugs/Public/show_bug.cgi?id=24796
			//Hacky fix to resolve this.
			inputElement.value = inputElement.value;

		});

	},

	stopEditingOnEnter: function (event) {

		if (event.charCode === 13) {

			this.stopEditingField();

		}

	},

	onKeyPress: function (event) {

		this.stopEditingOnEnter(event);

	},

	stopEditingField: function () {

		if (!this.props.isParentEditing) {

			this.setState({clickedToEdit: false});

		}

	},

	handleOnChange: function (event) {

		this.props.onUpdate(this.props.fieldKey, event.target.value);

	},

	render: function() {

		var cx = React.addons.classSet;

		var classes = classNames({
			'cog-item-editable': this.props.editing.editable,
		}); 

		var inputElement;

		//Display editable item if editable and it is editable by default or we're in an editing mode
		if (this.state.isEditing) {

			inputElement = <input ref="theInput" 
								  type="string" 
								  className="cog-field-name"
								  placeholder="Enter description" 
								  onBlur={this.handleOnBlur} 
								  value={this.props.value}
								  onChange={this.handleOnChange}
								  onKeyPress={this.onKeyPress} />

		} else {

			inputElement = <span onClick={this.handleMakeEditable} 
								 className={classes}>{this.props.value}</span>

		}

		return inputElement;

	}

});

module.exports = CoGStringInput;