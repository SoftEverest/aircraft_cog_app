var METRIC = require('./AircraftConstants.js').METRIC;
var IMPERIAL = require('./AircraftConstants.js').IMPERIAL;

var default_5N_BKH = {
	
	registration: '5N-BKH',

	emptyWeight: 6454.6,
	sta: 80.73,
	bl: 0,
	rtow: 11900,

	displayUnits: METRIC,

	/*
		[ [arm in mm, weight in kg], ... ]
	 */
	staEnvelope: [
	    [
	        4400,
	        6500
	    ],
	    [
	        4400,
	        7000
	    ],
	    [
	        4600,
	        11000
	    ],
	    [
	        4870,
	        11000
	    ],
	    [
	        4950,
	        10500
	    ],
	    [
	        4950,
	        6500
	    ],
	    [
	        4400,
	        6500
	    ]
	],

	blEnvelope: [
	    [
	        -50,
	        11000
	    ],
	    [
	        50,
	        11000
	    ],
	    [
	        60,
	        7000
	    ],
	    [
	        60,
	        6000
	    ],
	    [
	        -60,
	        6000
	    ],
	    [
	        -60,
	        7000
	    ],
	    [
	        -50,
	        11000
	    ]
	],

	weightsAndBalances: {

		cabin: {
			name: "Cabin",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: true,
						editableByDefault: false
					}
				},
				weight: {
					value: 0,
					constraints: {
						min: 0,
						max:999
					},
					editing: {
						editable: true,
						editableByDefault: true
					},
					step: 1
				},
				sta: {
					value: 0,
					constraints: {
						min: 0
					},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step: 1
				},
				bl: {					
					value: 0,
					constraints: {},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step:1
				},
				type: "defaultItem",
				removable: true
			},
			newItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: true,
						editableByDefault: false
					}
				},
				weight: {
					value: 0,
					constraints: {
						min: 0,
						max:999
					},
					editing: {
						editable: true,
						editableByDefault: true
					},
					step: 1
				},
				sta: {
					value: 0,
					constraints: {
						min: 0
					},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step: 1
				},
				bl: {					
					value: 0,
					constraints: {},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step:1
				},
				type: "defaultItem",
				removable: true
			},
			optionalItems: [
			  {
			  	"id": 7,
			    "name":{value:"My optional item",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
			    "weight": {value: 2.8, 
			    	editing: {
			    		editable: false
			    	}
				},
			    "sta":{value:1194},
			    "bl":{value:2},
			    removable:true
			  }
			],
			allowAddingItems: true,
			data: [
			  {
			  	"id": 762456273,
			    "name":{value:"Icom radio",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
			    "weight": {value: 2.8, 
			    	editing: {
			    		editable: false
			    	}
				},
			    "sta":{value:1194},
			    "bl":{value:2},
			    removable:false
			  },
			  {
			  	"id": 7627456273,
			    "name":{value:"Blood Fridge"},
			    "weight":{value: 12},
			    "sta":{value: 6560},
			    "bl":{value: -800},
			    type: "weightInput"
			  }
			]
		},
		
		crew: {
			name: "Custom Crew Label",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editable: false
				},
				weight: {
					value: 90,
					constraints: {
						min: 0,
						max:999
					},
					editable: false,
					step: 1
				},
				sta: {
					value: 0,
					constraints: {
						min: 0
					},
					editable: false,
					step: 1
				},
				bl: {					
					value: 0,
					constraints: {},
					editable: false,
					step:1
				},
				type: "crewItem",
			},
			newItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: true,
						editableByDefault: false
					}
				},
				weight: {
					value: 90,
					constraints: {
						min: 0,
						max:999
					},
					editing: {
						editable: true,
						editableByDefault: true
					},
					step: 1
				},
				sta: {
					value: 0,
					constraints: {
						min: 0
					},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step: 1
				},
				bl: {					
					value: 0,
					constraints: {},
					editing: {
						editable: true,
						editableByDefault: false
					},
					step:1
				},
				type: "crewItem",
				removable: true
			},
			allowAddingItems: true,
			data:  [
				  {
				  	"id": 624237273,
				    "name":{value: "Pilot Seat"},
				    "role": ["captain"],
				    "weight":{value: 90},
				    "sta":{value: 2972},
				    "bl":{value: -23}
				  },
				  {
				  	"id": 2456273,
				  	"role":["captain","copilot"],
				    "name":{value: "Co-Pilot Seat"},
				    "crewId":{value: 342},
				    "crewName": "Pippa Middle",
				    "weight":{value: 74},
				    "sta":{value: 234},
				    "bl":{value: 23}
				  },
				  {
				  	"id": 745273,
				  	"role":"sarnurse",
				    "name":{value: "Winch Operator"},
				    "crewId": 342,
				    "crewName": "Lee Kem",
				    "weight":{value: 74},
				    "sta":{value: 234},
				    "bl":{value: 23}
				  },
				  {
				  	"id": 745273,
				  	"role":"all",
				    "name":{value: "Spare seat"},
				    "crewId": 342,
				    "crewName": "Lee Kem",
				    "weight":{value: 74},
				    "sta":{value: 234},
				    "bl":{value: 23}
				  }

				]
		},

		fuel : {
			name: "Fuel",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
				},
				weight: {
					value: 0,
					constraints: {
						min: 0,
						max:999
					},
					editable: true,
					step: 10
				},
				sta: {
					value: 0,
					constraints: {
						min: 0
					},
					step: 1,
					editable: true
				},
				bl: {				
					value: 0,
					constraints: {},
					step: 1,
					editable: true
				},
				type: "fuelItem",
			},
			data:[
			  {
			  	"id": 7625673,
			    "name":{value:"Main tank 1"},
			    "weight":{	
			    			value: 100.8,
						    constraints: {
						    	min: 10,
						    	max: 180
						    },
			    			step: 10
			    },
			    "sta":{value: 9.8},
			    "bl":{value: -620}
			  },
			  {
			  	"id": 762627,
			    "name":{value:"Main tank 2"},
			    "weight":{value: 200},
			    "sta":{value: 31},
			    "bl":{value: -680}
			  },
			  {
			  	"id": 766273,
			    "name":{value:"Sponson tank"},
			    "weight":{value :200},
			    "sta":{value: 800},
			    "bl":{value: 850}
			  }
			]
		}

	} 

};

module.exports._5N_BKH = default_5N_BKH;