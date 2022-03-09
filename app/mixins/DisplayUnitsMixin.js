var METRIC = require("../Aircraft/AircraftConstants.js").METRIC;
var IMPERIAL = require("../Aircraft/AircraftConstants.js").IMPERIAL;


module.exports = DisplayUnitsMixin = {

	displayWeightUnitsString: function (displayUnits) {

		if (displayUnits === METRIC) {

			return "kg";

		} else if (displayUnits === IMPERIAL) {

			return "lb";

		}

	},

	displayLengthUnitsString: function (displayUnits) {

		if (displayUnits === METRIC) {

			return "mm";

		} else if (displayUnits === IMPERIAL) {

			return "in";

		}

	}

};