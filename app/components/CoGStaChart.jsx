/** @jsx React.DOM */
'use strict';

var React = require('react');
var Highcharts = require('react-highcharts');
var DisplayUnitsMixin = require('../mixins/DisplayUnitsMixin.js');

var CoGStaChart = React.createClass({

	mixins: [DisplayUnitsMixin],

	getInitialState: function() {
		return {
			rendered: false 
		};
	},

    displayWeightUnits: function () {
        return this.displayWeightUnitsString(this.props.displayUnits);
    },

    displayArmUnits: function () {
        return this.displayLengthUnitsString(this.props.displayUnits);
    },

	calcIntersectionPoint: function (x1, y1, x2, y2, x3, y3, x4, y4) {
		//@TODO needs to calculate the point of intersection of two lines
		var ua, ub, denom = (y4 - y3)*(x2 - x1) - (x4 - x3)*(y2 - y1);

		if (denom == 0) {
			return null;
		}

		ua = ((x4 - x3)*(y1 - y3) - (y4 - y3)*(x1 - x3))/denom;
		ub = ((x2 - x1)*(y1 - y3) - (y2 - y1)*(x1 - x3))/denom;
		
		return [x1 + ua * (x2 - x1), y1 + ua * (y2 - y1)];
	},

	checkPointonLine: function (x, y, x1, y1, x2, y2) {
		//@TODO needs to check if a point lies on a line between 2 other points
		var dx1 = x - x1;
		var dy1 = y - y1;
		var d1 = Math.sqrt( dx1*dx1 + dy1*dy1 );

		var dx2 = x - x2;
		var dy2 = y - y2;
		var d2 = Math.sqrt( dx2*dx2 + dy2*dy2 );

		var dx = x2 - x1;
		var dy = y2 - y1;
		var d = Math.sqrt( dx*dx + dy*dy );

		if (d === d1 + d2) {
			return true;
		}
		else {
			return false;
		}
	},

	staToDataPoint: function () {
		//@TODO needs extending out to show all points at fuel burn states not just the start and the end
        // return [[this.props.totals.sta, this.props.totals.weight], [this.props.zfwnb.sta, this.props.zfwnb.weight]];
        return [[this.props.zfwnb.sta, this.props.zfwnb.weight]].concat(this.props.details.details);
    },

	staToLegalDataPoint: function () {
		//@TODO needs to show sta legal points with a blue line to the boundary
		var details = this.props.details.details;
		var envelope = this.props.envelope;
		var x1 = details[details.length - 1][0];
		var y1 = details[details.length - 1][1];
		var x2 = this.props.totals.sta;
		var y2 = this.props.totals.weight;
		var count = 0;
		var legaldata = [];

		if (y1 === y2) return null;

		for (let i = 0; i < envelope.length - 1; i++) {
			var result = this.calcIntersectionPoint(x1, y1, x2, y2, envelope[i][0], envelope[i][1], envelope[i+1][0], envelope[i+1][1]);
			if (result == null) {
				count = count + 0;
			}
			else {
				var checkPoL = this.checkPointonLine(result[0], result[1], envelope[i][0], envelope[i][1], envelope[i+1][0], envelope[i+1][1]);
				if (checkPoL == true) {
					if (result[0] < x1 && result[1] < y1) {
						continue;	
					}
					count = count + 1;
					if (result[0] > x2 && result[1] > y2) {
						legaldata = [[x1, y1], [x2, y2]];
					}
					else {
						legaldata = [[x1, y1], [result[0], result[1]]];
					}
				}
			}
		}

		if (count === 0)
			return null;
		else if (count === 1)
			return legaldata;
	},

	staToIllegalDataPoint: function () {
		//@TODO needs to show sta illegal points with a red line from the boundary
		var details = this.props.details.details;
		var envelope = this.props.envelope;
		var x1 = details[details.length - 1][0];
		var y1 = details[details.length - 1][1];
		var x2 = this.props.totals.sta;
		var y2 = this.props.totals.weight;
		var count = 0;
		var legaldata = [];

		for (let i = 0; i < envelope.length - 1; i++) {
			var result = this.calcIntersectionPoint(x1, y1, x2, y2, envelope[i][0], envelope[i][1], envelope[i+1][0], envelope[i+1][1]);
			if (result == null) {
				count = count + 0;
			}
			else {
				var checkPoL = this.checkPointonLine(result[0], result[1], envelope[i][0], envelope[i][1], envelope[i+1][0], envelope[i+1][1]);
				if (checkPoL == true) {
					if (result[0] < x1 && result[1] < y1) {
						continue;	
					}
					if (result[0] < x2 && result[1] < y2) {
						count = count + 1;
						legaldata = [[x2, y2], [result[0], result[1]]];
					}
				}
			}
		}

		if (count === 0)
			return null;
		else if (count === 1)
			return legaldata;
	},

	render: function() {

		var highchartConfig = {
			chart: {
	            type: 'line'
	        },
	        credits: {
			    enabled: false
			},
			legend: {
               enabled: false 
            },
	        title: {
	            text: 'Longitudinal Envelope'
	        },
	        xAxis: {
	            title: {
	            	text: 'Arm ' + this.displayArmUnits()
	            },
                labels: {
                    format: '{value}'
                },
                tickInterval: 100
	        },
	        yAxis: {
	            title: {
	                text: 'Weight ' + this.displayWeightUnits()
	            },
                labels: {
                    format: '{value}'
                },
                tickInterval: 500
	        },
	        plotOptions: {
                series: {
                    animation: false,
                    marker: {
                        enabled: false
                    }
                }
            },
	        series: [{
	            name: 'Station Envelope',
	            data: this.props.envelope,
	            color: '#ff0000',
	        },
			{
                name: 'Sta CoG',
                data: this.staToDataPoint(),
			},
			{
				name: 'Sta Legal CoG',
				data: this.staToLegalDataPoint(),
				color: '#0000ff',
			},
			{
				name: 'Sta Illegal CoG',
				data: this.staToIllegalDataPoint(),
				color: '#ff0000',
			}]
	    };

		return (
			<Highcharts config={highchartConfig} />
		);

		this.state.rendered = true;
	}

});

module.exports = CoGStaChart;