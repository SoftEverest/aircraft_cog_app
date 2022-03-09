/** @jsx React.DOM */
'use strict'; 

var React = require('react');
var classNames = require('classnames');
var DisplayUnitsMixin = require('../mixins/DisplayUnitsMixin.js');

var CoGOverview = React.createClass({

	mixins: [DisplayUnitsMixin],

	render: function() {

		var aircraft = this.props.aircraft;

		var TOW = +(this.props.totals.weight).toFixed(2);
		var RTOW = this.props.aircraft.rtow;
		var payloadAvailable = +(RTOW - TOW).toFixed(2);

		var overWeight = (TOW > RTOW) ? true : false;
		var cx = React.addons.classSet;

		var payloadClasses = classNames({
		    'cog-bubble': true,
		    'cog-warning': overWeight,
		    'cog-correct': !overWeight
		});

		var isLonInEnvelope = aircraft.isLonInEnvelope([
							  	[this.props.totals.sta, this.props.totals.weight],
							  	[this.props.zfwnb.sta, this.props.zfwnb.weight]
							  ]);

		var isLatInEnvelope = aircraft.isLatInEnvelope([
							  	[this.props.totals.bl, this.props.totals.weight],
							  	[this.props.zfwnb.bl, this.props.zfwnb.weight]
							  ]);

		var lonClasses = classNames({
		    'cog-bubble': true,
		    'cog-warning': !isLonInEnvelope,
		    'cog-correct': isLonInEnvelope
		});

		var latClasses = classNames({
		    'cog-bubble': true,
		    'cog-warning': !isLatInEnvelope,
		    'cog-correct': isLatInEnvelope
		});

		var latText,
			lonText;

		if (isLonInEnvelope) {

			lonText = "In Range";

		} else {

			lonText = "Warning";

		}

		if (isLatInEnvelope) {

			latText = "In Range";

		} else {

			latText = "Warning";

		}

		return (

			<div className="cog-overview">
				<div className="cog-bubble"><span>Aircraft</span><span><span>{aircraft.registration}</span></span></div>
				<div className="cog-bubble"><span>MTOW</span><span>{RTOW}{this.displayWeightUnitsString(this.props.displayUnits)}</span></div>
				<div>	
					<div className={payloadClasses}><span>Payload</span><span>{payloadAvailable}{this.displayWeightUnitsString(this.props.displayUnits)}</span></div>
					<div className={lonClasses}><span>Longitudinal</span><span><span>{lonText}</span></span></div>
					<div className={latClasses}><span>Lateral</span><span><span>{latText}</span></span></div>
				</div>
			</div>
		);
	}

});

module.exports = CoGOverview;