var AircraftFactoryStore = require('./stores/AircraftFactoryStore.js');
var AircraftFactoryActions = require('./actions/AircraftFactoryActions.js');

var React = require('react');
var App = require('./components/App.jsx');

window.CoG = function CoG(domElement, aircraftDef) {

	//TODO: Might be nice to remove the use of a global here.
	window.loadedAircraft = aircraftDef;

	React.render(<App />, document.getElementById(domElement));

}