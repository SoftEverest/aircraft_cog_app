var Reflux = require('reflux');

var AircraftActions = Reflux.createActions([ 'updateWeight', 
											 'addItem', 
											 'removeItem', 
											 'editItem', 
											 'stopEditingItem', 
											 'updateField', 
											 'updateLanding',
											 'changeCrewMember', 
											 'setGroupVisibility',
											 'toggleDisableItem' ]);

module.exports = AircraftActions;