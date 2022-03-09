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
var default_G_CIJX_LIGHT = {
	
	registration: 'G-CIJX',

	emptyWeight: 4832.0,
	sta: 5340,
	bl: 25,
	rtow: 6400,

	displayUnits: METRIC,

	/*
		[ [arm in mm, weight in kg], ... ]
	 */
	staEnvelope: [
	    [
	        5536,
	        4400
	    ],
	    [
	        5595,
	        4850
	    ],
	    [
	        5480,
	        6800
	    ],
	    [
	        5238,
	        6800
	    ],
	    [
	        5000,
	        5170
	    ],
	    [
	        5000,
	        4660
	    ],
	    [
	        5071,
	        4400
	    ],
	    [
	        5536,
	        4400
	    ]
	],

	blEnvelope: [
	    [
	        -88,
	        4400
	    ],
	    [
	        120,
	        4400
	    ],
	    [
	        84,
	        6800
	    ],
	    [
	        -66,
	        6800
	    ],
	    [
	        -88,
	        4400
	    ]
	],

	weightsAndBalances: {

		cargo_main: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cargo Main",
			allowAddingItems: true,
			data: [
			{
				"id": 1,
				"name":{
					value:"Jackets",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 16, 
					editing: {
						editable: true
					},
					step: 1
				},
				"sta":{value:8640},
				"bl":{value:0},
				removable:true
			}
			]
		},

		crew: {
			name: "Crew",
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Pilot Seat (Right)"},
				    "role": ["captain", "copilot"],
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: 550}
				  },
				  {
				  	"id": 2,
				  	"role":["captain","copilot"],
				    "name":{value: "Pilot Seat (Left)"},
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: -550}
				  }
				]
		},

		passengers: {
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editiableByDefault: false
					}
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Seat A"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 2,
				  	"role":"all",
				    "name":{value: "Seat B"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 250}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Seat C"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 750}	
				  },
				  {
				  	"id": 4,
				    "name":{value: "Seat D"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 5,
				  	"role":"all",
				    "name":{value: "Seat E"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -250}
				  },
				  {
				  	"id": 6,
				  	"role":"all",
				    "name":{value: "Seat F"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: 740}
				  },
				  {
				  	"id": 7,
				  	"role":"all",
				    "name":{value: "Hoist"},
				    "weight":{value: 90},
				    "sta":{value: 4600},
				    "bl":{value: 1500}
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
			  	"id": 1,
			    "name":{value:"Fuel"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{
			    	lookup: 
			    		/**
						 * Fuel Weight / Lon Arm
						 * @type {Array}
						 */
						[
						  [25,6208  ],
						  [50,6209  ],
						  [75,6210  ],
						  [100,6210  ],
						  [125,6210  ],
						  [150,6210  ],
						  [175,6210  ],
						  [200,6210  ],
						  [225,6210  ],
						  [250,6210  ],
						  [275,6210  ],
						  [300,6210  ],
						  [325,6210  ],
						  [350,6211  ],
						  [375,6211  ],
						  [400,6211  ],
						  [425,6211  ],
						  [450,6211  ],
						  [475,6211  ],
						  [500,6212  ],
						  [525,6212  ],
						  [550,6212  ],
						  [575,6212  ],
						  [600,6213  ],
						  [625,6213  ],
						  [650,6214  ],
						  [675,6214  ],
						  [700,6214  ],
						  [725,6215  ],
						  [750,6215  ],
						  [775,6216  ],
						  [800,6217  ],
						  [825,6219  ],
						  [850,6220  ],
						  [875,6222  ],
						  [900,6221  ],
						  [925,6221  ],
						  [950,6222  ],
						  [975,6223  ],
						  [1000,6223  ],
						  [1025,6224  ],
						  [1050,6225  ],
						  [1075,6225  ],
						  [1100,6226  ],
						  [1125,6227  ],
						  [1150,6227  ],
						  [1175,6227  ],
						  [1200,6228  ],
						  [1225,6228  ],
						  [1250,6229  ],
						  [1270,6229  ],
						  [1275,6229  ],
						  [1300,6229  ],
						  [1325,6230  ],
						  [1350,6231  ],
						  [1400,6231  ],
						  [1425,6231  ],
						  [1450,6232  ],
						  [1475,6232  ],
						  [1500,6232  ],
						  [1525,6232  ],
						  [1550,6233  ],
						  [1575,6233  ],
						  [1600,6234  ],
						  [1625,6234  ],
						  [1650,6234  ],
						  [1670,6234  ]
						]
			    },
			    "bl":{value: 0}
			  }
			]
		}

	} 

};

module.exports._G_CIJX_LIGHT = default_G_CIJX_LIGHT;
var default_G_MCGK = {
	
	registration: 'G-MCGK',

	emptyWeight: 17572.420,
	sta: 355.443,
	bl: 0,
	rtow: 0,

	displayUnits: IMPERIAL,

	/*
		[ [arm in mm, weight in kg], ... ]
	 */
	staEnvelope: [
	    
	],

	blEnvelope: [
	    
	],

	weightsAndBalances: {

		variable_load: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Variable Load",
			allowAddingItems: true,
			data: [
				{ "id": 4, "name":{ "value":"Flight Library (Books Only)", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 31.8, "editing": { "editable": true }, "step": 1 }, "sta":{"value":462}, "bl":{"value":0.384144}, "removable":true },
				{ "id": 5, "name":{ "value":"Floor protection", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 30, "editing": { "editable": true }, "step": 1 }, "sta":{"value":327}, "bl":{"value":-0.0426}, "removable":true },
				{ "id": 6, "name":{ "value":"CPI Emergency Beacon", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 7, "editing": { "editable": true }, "step": 1 }, "sta":{"value":612}, "bl":{"value":0.18956}, "removable":true },
				{ "id": 7, "name":{ "value":"Front Crew Helmets", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.38, "editing": { "editable": true }, "step": 1 }, "sta":{"value":190}, "bl":{"value":-0.0964656}, "removable":true },
				{ "id": 8, "name":{ "value":"Tie downs in Stowage", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 12.7, "editing": { "editable": true }, "step": 1 }, "sta":{"value":487.5}, "bl":{"value":0.185801}, "removable":true }
			]
		},

		sar_variables: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "SAR Variables",
			allowAddingItems: true,
			data: [
				{ "id": 63, "name":{ "value":"Cargo Hook", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 33, "editing": { "editable": true }, "step": 1 }, "sta":{"value":354}, "bl":{"value":0}, "removable":true },
				{ "id": 64, "name":{ "value":"Internal Aux Fuel Tank LH (VIH Fit)", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 290, "editing": { "editable": true }, "step": 1 }, "sta":{"value":345.1}, "bl":{"value":0}, "removable":true },
				{ "id": 65, "name":{ "value":"Side facing Seat - No. 8", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":329.5}, "bl":{"value":0}, "removable":true },
				{ "id": 66, "name":{ "value":"Side facing Seat - No. 10", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":349.5}, "bl":{"value":0}, "removable":true },
				{ "id": 67, "name":{ "value":"Side facing Seat - No. 12", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":369.5}, "bl":{"value":0}, "removable":true },
				{ "id": 68, "name":{ "value":"Side facing Seat - No. 14", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":389.5}, "bl":{"value":0}, "removable":true },
				{ "id": 69, "name":{ "value":"Side facing Seat - No. 15", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":409.5}, "bl":{"value":0}, "removable":true },
				{ "id": 70, "name":{ "value":"Side facing Seat - No. 16", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":409.5}, "bl":{"value":0}, "removable":true },
				{ "id": 71, "name":{ "value":"Side facing Seat - No. 17", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":429.5}, "bl":{"value":0}, "removable":true },
				{ "id": 72, "name":{ "value":"Side facing Seat - No. 18", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":429.5}, "bl":{"value":0}, "removable":true },
				{ "id": 73, "name":{ "value":"Side facing Seat - No. 19", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":449.5}, "bl":{"value":0}, "removable":true },
				{ "id": 74, "name":{ "value":"Side facing Seat - No. 20", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":449.5}, "bl":{"value":0}, "removable":true },
				{ "id": 75, "name":{ "value":"Side facing Seat - No. 22", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 16, "editing": { "editable": true }, "step": 1 }, "sta":{"value":469.9}, "bl":{"value":0}, "removable":true },
				{ "id": 76, "name":{ "value":"Dual Rescue Hoist Installation", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 247, "editing": { "editable": true }, "step": 1 }, "sta":{"value":234}, "bl":{"value":0}, "removable":true },
				{ "id": 77, "name":{ "value":"Trakka A800 searchlight", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 44, "editing": { "editable": true }, "step": 1 }, "sta":{"value":260}, "bl":{"value":0}, "removable":true },
				{ "id": 78, "name":{ "value":"Starsafire 380HD FLIR Turret", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 100, "editing": { "editable": true }, "step": 1 }, "sta":{"value":130}, "bl":{"value":0}, "removable":true },
				{ "id": 79, "name":{ "value":"Operators Seat L/H", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 49.6, "editing": { "editable": true }, "step": 1 }, "sta":{"value":260}, "bl":{"value":0}, "removable":true },
				{ "id": 80, "name":{ "value":"Operators Seat R/H", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 49.6, "editing": { "editable": true }, "step": 1 }, "sta":{"value":290}, "bl":{"value":0}, "removable":true },
				{ "id": 81, "name":{ "value":"Operators Console & Screens", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 115, "editing": { "editable": true }, "step": 1 }, "sta":{"value":233}, "bl":{"value":0}, "removable":true },
				{ "id": 82, "name":{ "value":"Sea Tray (with Aux Fuel Tank installed)", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 117.6, "editing": { "editable": true }, "step": 1 }, "sta":{"value":342.13}, "bl":{"value":0}, "removable":true },
				{ "id": 83, "name":{ "value":"Fwd stretcher shelf/stowage unit", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":0}, "bl":{"value":0}, "removable":true },
				{ "id": 84, "name":{ "value":"Rear stretcher shelf/stowage unit", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":0}, "bl":{"value":0}, "removable":true },
				{ "id": 85, "name":{ "value":"Loudhailer", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 58.6, "editing": { "editable": true }, "step": 1 }, "sta":{"value":631.9}, "bl":{"value":0}, "removable":true },
				{ "id": 86, "name":{ "value":"Ramp Storage Closet", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 57, "editing": { "editable": true }, "step": 1 }, "sta":{"value":462}, "bl":{"value":0}, "removable":true },
				{ "id": 87, "name":{ "value":"Ramp Storage Box", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 20, "editing": { "editable": true }, "step": 1 }, "sta":{"value":487.5}, "bl":{"value":0}, "removable":true }
			]
		},

		seats_seatbelts: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Seats inc seat belts",
			allowAddingItems: true,
			data: [
				{ "id": 15, "name":{ "value":"Row 1 LHD AFT Facing", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 23, "editing": { "editable": true }, "step": 1 }, "sta":{"value":249}, "bl":{"value":0}, "removable":true },
				{ "id": 16, "name":{ "value":"Row 2 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 17, "name":{ "value":"Row 2 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 18, "name":{ "value":"Row 2 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 19, "name":{ "value":"Row 3 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 20, "name":{ "value":"Row 3 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 21, "name":{ "value":"Row 3 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 22, "name":{ "value":"Row 4 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 23, "name":{ "value":"Row 4 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 24, "name":{ "value":"Row 4 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 25, "name":{ "value":"Row 5 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 26, "name":{ "value":"Row 5 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 27, "name":{ "value":"Row 5 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 28, "name":{ "value":"Row 6 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 29, "name":{ "value":"Row 6 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 30, "name":{ "value":"Row 6 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 31, "name":{ "value":"Row 7 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 32, "name":{ "value":"Row 7 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 33, "name":{ "value":"Row 7 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 22, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true }
			]
		},

		lifejackets_and_ear_defenders: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Lifejackets and Ear Defenders",
			allowAddingItems: true,
			data: [
				{ "id": 38, "name":{ "value":"Row 1 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":249}, "bl":{"value":0}, "removable":true },
				{ "id": 39, "name":{ "value":"Row 2 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 40, "name":{ "value":"Row 2 CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 41, "name":{ "value":"Row 2 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 42, "name":{ "value":"Row 3 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 43, "name":{ "value":"Row 3 CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 44, "name":{ "value":"Row 3 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 45, "name":{ "value":"Row 4 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 46, "name":{ "value":"Row 4CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 47, "name":{ "value":"Row 4 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 48, "name":{ "value":"Row 5 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 49, "name":{ "value":"Row 5 CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 50, "name":{ "value":"Row 5 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 51, "name":{ "value":"Row 6 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 52, "name":{ "value":"Row 6 CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 53, "name":{ "value":"Row 6 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 54, "name":{ "value":"Row 7 LHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 55, "name":{ "value":"Row 7 CTR - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 56, "name":{ "value":"Row 7 RHD - Lifejacket and Ear Defender", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 6.83, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true }
			]
		},				

		crew: {
			name: "Crew",
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
			allowAddingItems: false,
			data:  [
				{ "id": 2, "role": ["captain", "copilot"], "name":{ "value":"Pilot", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 197, "editing": { "editable": true }, "step": 1 }, "sta":{"value":190}, "bl":{"value":0}, "removable":true },
				{ "id": 3, "role": ["captain", "copilot"], "name":{ "value":"Co-pilot", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 197, "editing": { "editable": true }, "step": 1 }, "sta":{"value":190}, "bl":{"value":-2.97864}, "removable":true }
				]
		},

		passengers: {
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editiableByDefault: false
					}
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
			allowAddingItems: false,
			data:  [
				{ "id": 15, role: "all", "name":{ "value":"Row 1 LHD AFT Facing", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":249}, "bl":{"value":0}, "removable":true },
				{ "id": 16, role: "all", "name":{ "value":"Row 2 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 17, role: "all", "name":{ "value":"Row 2 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 18, role: "all", "name":{ "value":"Row 2 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":288}, "bl":{"value":0}, "removable":true },
				{ "id": 19, role: "all", "name":{ "value":"Row 3 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 20, role: "all", "name":{ "value":"Row 3 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 21, role: "all", "name":{ "value":"Row 3 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":320}, "bl":{"value":0}, "removable":true },
				{ "id": 22, role: "all", "name":{ "value":"Row 4 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 23, role: "all", "name":{ "value":"Row 4CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 24, role: "all", "name":{ "value":"Row 4 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":352}, "bl":{"value":0}, "removable":true },
				{ "id": 25, role: "all", "name":{ "value":"Row 5 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 26, role: "all", "name":{ "value":"Row 5 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 27, role: "all", "name":{ "value":"Row 5 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":384}, "bl":{"value":0}, "removable":true },
				{ "id": 28, role: "all", "name":{ "value":"Row 6 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 29, role: "all", "name":{ "value":"Row 6 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 30, role: "all", "name":{ "value":"Row 6 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":416}, "bl":{"value":0}, "removable":true },
				{ "id": 31, role: "all", "name":{ "value":"Row 7 LHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 32, role: "all", "name":{ "value":"Row 7 CTR", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true },
				{ "id": 33, role: "all", "name":{ "value":"Row 7 RHD", "editing": { "editable": false, "editableByDefault": false } }, "weight": { "value": 0, "editing": { "editable": true }, "step": 1 }, "sta":{"value":448}, "bl":{"value":0}, "removable":true }
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
			 
			]
		}

	} 

};

module.exports._G_MCGK = default_G_MCGK;
var default_LN_OEC = {
	
	registration: 'LN-OEC',

	emptyWeight: 4553.10,
	sta: 5425.99,
	bl: 9,
	rtow: 6400,

	displayUnits: METRIC,

	/*
		[ [arm in mm, weight in kg], ... ]
	 */
	staEnvelope: [
	    [
	        5536,
	        4400
	    ],
	    [
	        5595,
	        4850
	    ],
	    [
	        5480,
	        6800
	    ],
	    [
	        5238,
	        6800
	    ],
	    [
	        5000,
	        5170
	    ],
	    [
	        5000,
	        4660
	    ],
	    [
	        5071,
	        4400
	    ],
	    [
	        5536,
	        4400
	    ]
	],

	blEnvelope: [
	    [
	        -88,
	        4400
	    ],
	    [
	        120,
	        4400
	    ],
	    [
	        84,
	        6800
	    ],
	    [
	        -66,
	        6800
	    ],
	    [
	        -88,
	        4400
	    ]
	],

	weightsAndBalances: {
		
		general: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "General",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Goodrich External Rescue Hoist"},
			    "weight":{value: 59},
			    "sta":{value: 4374.5},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Nightsun"},
			    "weight":{value: 44.20},
			    "sta":{value: 3620.7},
			    "bl":{value: 0}
			  }
			]
		},

		cockpit: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cockpit",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 3,
			    "name":{value: "Switlik Jackets Pilot"},
			    "weight":{value: 2.3},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Switlik Jacket Aircrewman"},
			    "weight":{value: 1.9},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Pilot Ipad"},
			    "weight":{value: 1},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Aircrewman Ipad"},
			    "weight":{value: 1.0},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Chamois"},
			    "weight":{value: 1.0},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "NVG Pilot"},
			    "weight":{value: 1.7},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "NVG Paramedic"},
			    "weight":{value: 1.7},
			    "sta":{value: 3415},
			    "bl":{value: 0}
			  }
			]
		},

		cabin: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "On Floor & Other",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Cabin Swivel Seat Left"},
			    "weight":{value: 17.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Cabin Swivel Seat Right"},
			    "weight":{value: 17.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 3,
			    "name":{value: "Switlik Paramedic"},
			    "weight":{value: 2.9},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Switlik Doctor"},
			    "weight":{value: 2.3},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Harnesses (2)"},
			    "weight":{value: 2.4},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Thigh pouches (2)"},
			    "weight":{value: 1.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Ersa and map pack"},
			    "weight":{value: 1.9},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "GRN Motorola Radio"},
			    "weight":{value: 0.1},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "HLS Register"},
			    "weight":{value: 1.10},
			    "sta":{value: 3415},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 10,
			    "name":{value: "Black Bag"},
			    "weight":{value: 1.50},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 11,
			    "name":{value: "Paramedic Ipad"},
			    "weight":{value: 1.60},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  }
			]
		},

		medical: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Medical Equipment",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Misc Grab Handles"},
			    "weight":{value: 0.9},
			    "sta":{value: 4000},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Roof Wander Leads (2)"},
			    "weight":{value: 1.8},
			    "sta":{value: 4000},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 3,
			    "name":{value: "Helimod Ferno 12 Stretcher"},
			    "weight":{value: 15.5},
			    "sta":{value: 4624},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Helimod Turn-table and Stretcher deck"},
			    "weight":{value: 36.1},
			    "sta":{value: 4624},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Cabin Simula Sea (Rear Row Left)"},
			    "weight":{value: 15.2},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Cabin Simula Sea (Rear Row Right)"},
			    "weight":{value: 15.20},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Blood box"},
			    "weight":{value: 7.30},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "Ultra sound"},
			    "weight":{value: 0},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "Roof Wander Leads (2)"},
			    "weight":{value: 1.8},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  }

			]
		},

		medical: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Rear Medical Cabinet",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 10,
			    "name":{value: "Medical Pack 1 (Blue)"},
			    "weight":{value: 11.20},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 11,
			    "name":{value: "Medical Pack 2 (Red)"},
			    "weight":{value: 10.90},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 12,
			    "name":{value: "Airway Drop Down Bag"},
			    "weight":{value: 3.0},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 13,
			    "name":{value: "Circuits"},
			    "weight":{value: 0.6},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 14,
			    "name":{value: "Water Rescue Bag (Aircraft - modified)"},
			    "weight":{value: 4.1},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 15,
			    "name":{value: "SAR Winching Stretcher & Equipment"},
			    "weight":{value: 27.20},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 16,
			    "name":{value: "Yellow Winch Box"},
			    "weight":{value: 9.9},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 17,
			    "name":{value: "Strop + Float Ball"},
			    "weight":{value: 2.4},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 18,
			    "name":{value: "H2O Gear and Blue Bag"},
			    "weight":{value: 1.8},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 19,
			    "name":{value: "Equipment Strap (2)"},
			    "weight":{value: 1.6},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 20,
			    "name":{value: "Capewell (2)"},
			    "weight":{value: 2},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 21,
			    "name":{value: "Roll Bag"},
			    "weight":{value: 2.7},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 22,
			    "name":{value: "Doctor's Folder"},
			    "weight":{value: 1.3},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 23,
			    "name":{value: "Patient Hearing Protection"},
			    "weight":{value: 0.3},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 24,
			    "name":{value: "Headsets (2)"},
			    "weight":{value: 1.6},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 25,
			    "name":{value: "Yellow Winch Bag"},
			    "weight":{value: 0.8},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 26,
			    "name":{value: "Oxy Soft Pack (C Cylinder)"},
			    "weight":{value: 6},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 27,
			    "name":{value: "Lifepack15"},
			    "weight":{value: 11.4},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 28,
			    "name":{value: "Oxylog 3000 Plus Ventilator"},
			    "weight":{value: 5.7},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 29,
			    "name":{value: "Oxylog Bracket & Hose"},
			    "weight":{value: 2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 30,
			    "name":{value: "Hi-Line Kit"},
			    "weight":{value: 6.4},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 31,
			    "name":{value: "2 x \"D\" Size Oxygen Cylinders"},
			    "weight":{value: 12.5},
			    "sta":{value: 6250},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 32,
			    "name":{value: "Water Bottles (4 x 350mL)"},
			    "weight":{value: 1.60},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 33,
			    "name":{value: "Hand Held Search lights (2)"},
			    "weight":{value: 1.2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  }
			]
		},

		baggage: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Baggage Compt.",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 34,
			    "name":{value: "Fuel Pump & Hoses"},
			    "weight":{value: 10.7},
			    "sta":{value: 7500.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 35,
			    "name":{value: "Chocks"},
			    "weight":{value: 4.8},
			    "sta":{value: 7500},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 36,
			    "name":{value: "Grey Tie Down Bag"},
			    "weight":{value: 6.1},
			    "sta":{value: 7500.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 37,
			    "name":{value: "Paramedic Wet Rescue Bag (Personal)"},
			    "weight":{value: 10.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 38,
			    "name":{value: "Road Trauma Pack (PPE)"},
			    "weight":{value: 1.7},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 39,
			    "name":{value: "Tool Box"},
			    "weight":{value: 5.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 40,
			    "name":{value: "Inter Hospital Medical Pack"},
			    "weight":{value: 11},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 41,
			    "name":{value: "Bridge Fitted with Equipment"},
			    "weight":{value: 16.9},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 42,
			    "name":{value: "Aircraft Red Book (Techlog/Report 21)"},
			    "weight":{value: 1.2},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 43,
			    "name":{value: "Survival Pack "},
			    "weight":{value: 9.9},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 44,
			    "name":{value: "Crew Wet Weather Gear"},
			    "weight":{value: 3.4},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 45,
			    "name":{value: "Blade Sock Bar"},
			    "weight":{value: 1.9},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 46,
			    "name":{value: "Aircraft Medical Kit"},
			    "weight":{value: 1.8},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 47,
			    "name":{value: "Yellow Bag"},
			    "weight":{value: 6.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 48,
			    "name":{value: "Pax Switlik"},
			    "weight":{value: 1},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 49,
			    "name":{value: "Body Bag"},
			    "weight":{value: 1.0},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 50,
			    "name":{value: "Net"},
			    "weight":{value: 4.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 51,
			    "name":{value: "Megalift Stretcher, Mat and Harness"},
			    "weight":{value: 66.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 52,
			    "name":{value: "Stretcher base"},
			    "weight":{value: 16.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 53,
			    "name":{value: "Bariatric pack"},
			    "weight":{value: 12.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 54,
			    "name":{value: "Neocot"},
			    "weight":{value: 165},
			    "sta":{value: 4732},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 55,
			    "name":{value: "NETS Headsets"},
			    "weight":{value: 2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 56,
			    "name":{value: "Wheeled Thomas Pack"},
			    "weight":{value: 18},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 57,
			    "name":{value: "Cabin Swivel Seat (Moved from front right)"},
			    "weight":{value: 15.0},
			    "sta":{value: 5600.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 58,
			    "name":{value: "Second Helimod Stretcher"},
			    "weight":{value: 16.7},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 59,
			    "name":{value: "Second Stretcher Brackets"},
			    "weight":{value: 4.2},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 60,
			    "name":{value: "Balloon Pump Mounting Frame"},
			    "weight":{value: 18.1},
			    "sta":{value: 5321.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 61,
			    "name":{value: "Ballon Pump"},
			    "weight":{value: 41.5},
			    "sta":{value: 5321.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 62,
			    "name":{value: "ECMO Pump Control Box and carabiners"},
			    "weight":{value: 15.5},
			    "sta":{value: 5542},
			    "bl":{value: 0}
			  }
			]
		},

		crew: {
			name: "Crew",
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
				  	"id": 1,
				    "name":{value: "Pilot Seat (Right)"},
				    "role": ["captain", "copilot"],
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: 550}
				  },
				  {
				  	"id": 2,
				  	"role":["captain","copilot"],
				    "name":{value: "Pilot Seat (Left)"},
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: -550}
				  }
				]
		},

		passengers: {
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editiableByDefault: false
					}
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
				  	"id": 1,
				    "name":{value: "Seat A"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 2,
				  	"role":"all",
				    "name":{value: "Seat B"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 250}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Seat C"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 750}	
				  },
				  {
				  	"id": 4,
				    "name":{value: "Seat D"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 5,
				  	"role":"all",
				    "name":{value: "Seat E"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -250}
				  },
				  {
				  	"id": 6,
				  	"role":"all",
				    "name":{value: "Seat F"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: 740}
				  },
				  {
				  	"id": 7,
				  	"role":"all",
				    "name":{value: "Hoist"},
				    "weight":{value: 90},
				    "sta":{value: 4600},
				    "bl":{value: 1500}
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
			  	"id": 1,
			    "name":{value:"Fuel"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 6233},
			    "bl":{value: 0}
			  }
			]
		}

	} 

};

module.exports._LN_OEC = default_LN_OEC;
var default_S_AMPLE = {
	
	registration: 'S-AMPLE',

	emptyWeight: 6812.3,
	sta: 4770.2,
	bl: 5.2,
	rtow: 11000,

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
			  	"id": 1,
			    "name":{value:"Fuel Group LH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 5871},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 1,
			    "name":{value:"Fuel Group RH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 3525},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value:"Fuel Sponson LH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 6856},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value:"Fuel Sponson RH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 6856},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value:"Fuel EFT RH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 2890},
			    "bl":{value: 0}
			 },
			 {
			  	"id": 8,
			    "name":{value:"Fuel EFT LH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 2610},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value:"Fuel Initial LH Group"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 5871},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 10,
			    "name":{value:"Fuel Initial RH Group"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 3525},
			    "bl":{value: 0}
			  },
			]
		},
		crew: {

			name: "Crew",
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Pilot Seat (Right)"},
				    "role": ["captain", "copilot"],
				    "weight":{value: 90},
				    "sta":{value: 1280},
				    "bl":{value: 525}
				  },
				  {
				  	"id": 2,
				  	"role":["captain","copilot"],
				    "name":{value: "Pilot Seat (Left)"},
				    "weight":{value: 90},
				    "sta":{value: 1280},
				    "bl":{value: -525}
				  },
				  {
				  	"id": 3,
				  	"role":"paramedic",
				    "name":{value: "Paramedic"},
				    "weight":{value: 90},
				    "sta":{value: 1924},
				    "bl":{value: 591}
				  }
				]
		},

		passengers: {
			visibility: false,
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editiableByDefault: false
					}
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Seat A"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 2393},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 2,
				  	"role":"all",
				    "name":{value: "Seat B"},
				    "weight":{value: 90},
				    "sta":{value: 2469},
				    "bl":{value: -184}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Seat C"},
				    "weight":{value: 90},
				    "sta":{value: 3777},
				    "bl":{value: 0}	//Not known
				  },
				  {
				  	"id": 4,
				    "name":{value: "Seat D"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 3625},
				    "bl":{value: 0}//Not known
				  },
				  {
				  	"id": 5,
				  	"role":"all",
				    "name":{value: "Seat E"},
				    "weight":{value: 90},
				    "sta":{value: 4145},
				    "bl":{value: 0}//Not known
				  },
				  {
				  	"id": 6,
				  	"role":"all",
				    "name":{value: "Seat F"},
				    "weight":{value: 90},
				    "sta":{value: 3993},
				    "bl":{value: 0}//Not known
				  },
				  {
				  	"id": 7,
				    "name":{value: "Seat G"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 5581},
				    "bl":{value: 0}//Not known
				  },
				  {
				  	"id": 8,
				  	"role":"all",
				    "name":{value: "Seat H"},
				    "weight":{value: 90},
				    "sta":{value: 5428},
				    "bl":{value: 0}//Not known
				  },
				  {
				  	"id": 9,
				  	"role":"all",
				    "name":{value: "Seat I"},
				    "weight":{value: 90},
				    "sta":{value: 6394},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 10,
				    "name":{value: "Seat J"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 6241},
				    "bl":{value: 184}
				  },
				  {
				  	"id": 11,
				  	"role":"all",
				    "name":{value: "Seat K"},
				    "weight":{value: 90},
				    "sta":{value: 6609},
				    "bl":{value: 545}
				  },
				  {
				  	"id": 12,
				  	"role":"all",
				    "name":{value: "Seat L"},
				    "weight":{value: 90},
				    "sta":{value: 6792},
				    "bl":{value: 130}
				  },
				  {
				  	"id": 13,
				  	"role":"all",
				    "name":{value: "Seat M"},
				    "weight":{value: 90},
				    "sta":{value: 7969},
				    "bl":{value: 212}
				  },
				  {
				  	"id": 14,
				    "name":{value: "Seat N"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 7969},
				    "bl":{value: -212}
				  },
				  {
				  	"id": 15,
				  	"role":"all",
				    "name":{value: "Seat O"},
				    "weight":{value: 90},
				    "sta":{value: 6597},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 16,
				  	"role":"all",
				    "name":{value: "Seat P"},
				    "weight":{value: 90},
				    "sta":{value: 5784},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 17,
				    "name":{value: "Seat Q"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 4222},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 18,
				  	"role":"all",
				    "name":{value: "Seat R"},
				    "weight":{value: 90},
				    "sta":{value: 3854},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 19,
				  	"role":"all",
				    "name":{value: "Seat S"},
				    "weight":{value: 90},
				    "sta":{value: 2469},
				    "bl":{value: -591}
				  }
				]
		},

		cockpit: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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

			name: "Cockpit Kit",
			data: [
				{
					"id": 1,
					"name":{
						value:"Generals",
						editing: {
							editable: false,
							editableByDefault: false
						},
					},
					"weight": {
						value: 5, 
						editing: {
							editable: false
						},
						step: 1
					},
					"sta":{value:1928},
					"bl":{value:0},
					removable:true
				}
			],
			allowAddingItems: true,

		},

		cargo_cone: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cargo Cone",
			allowAddingItems: true,
			data: [
			{
				"id": 1,
				"name":{
					value:"Headsets (2kg each)",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 2, 
					editing: {
						editable: false
					},
					step: 2
				},
				"sta":{value:10250},
				"bl":{value:0},
				removable:true
			}]
		},

		cargo_main: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cargo Main",
			allowAddingItems: true,
			data: [
			{
				"id": 1,
				"name":{
					value:"Jackets",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 16, 
					editing: {
						editable: true
					},
					step: 1
				},
				"sta":{value:8640},
				"bl":{value:0},
				removable:true
			},
			{
				"id": 2,
				"name":{
					value:"Tiedowns",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 3, 
					editing: {
						editable: true
					},
					step: 1
				},
				"sta":{value:8640},
				"bl":{value:0},
				removable:true
			}
			]
		},

	} 

};

module.exports._S_AMPLE = default_S_AMPLE;
var default_VH_EPH = {

    registration: 'VH-EPH',

    emptyWeight: 3579,
    sta: 3612,
    bl: 29,
    rtow: 5398,
    fuel_at_landing: 200,
	use_mm_blenvelope: true,

    displayUnits: METRIC,

    /*
        [ [arm in mm, weight in kg], ... ]
     */
    staEnvelope: [
        [
            3440,
            5350
        ],
        [
            3580,
            5350
        ],
        [
            3660,
            4000
        ],
        [
            3660,
            2900
        ],
        [
            3320,
            2900
        ],
        [
            3320,
            4000
        ],
        [
            3440,
            5350
        ]
    ],

    /*
        [ [arm in mm, weight in kg], ... ]
     */
    blEnvelope: [
        [
            20,
            3440
        ],
        [
            120,
            3580
        ],
        [
            120,
            3660
        ],
        [
            155,
            3660
        ],
        [
            155,
            3320
        ],
        [
            20,
            3320
        ],
        [
            20,
            3440
        ]
    ],

    weightsAndBalances: {

        maincabin: {
            defaultItem: {
                name: {
                    value: "",
                    constraints: {
                        minLength: 1,
                        maxLength: 30
                    },
                    editing: {
                        editable: false,
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
                    value: 1928,
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
                    value: 1928,
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

            name: "Main Cabin",
            allowAddingItems: true,
            visibility: false,
            data: [
                {
                    "id": 1,
                    "name":{
                        value:"Pilot Seat",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:1193.8},
                    "bl":{value:762},
                    removable:true
                },
                {
                    "id": 2,
                    "name":{
                        value:"Co-Pilot Seat",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 5,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:1193.8},
                    "bl":{value:-500},
                    removable:true
                },
                {
                    "id": 3,
                    "name":{
                        value:"Pilot LJ",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 3.6,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:1193.8},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 4,
                    "name":{
                        value:"Para Seat Equip",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 2,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210.0},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 5,
                    "name":{
                        value:"Manuals",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 3.5,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210},
                    "bl":{value:-600},
                    removable:true
                },
                {
                    "id": 6,
                    "name":{
                        value:"High Line/Shot Bag",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 8,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210},
                    "bl":{value:762},
                    removable:true
                },
                {
                    "id": 7,
                    "name":{
                        value:"O2 Cyl",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 4.5,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210},
                    "bl":{value:-700},
                    removable:true
                },
                {
                    "id": 8,
                    "name":{
                        value:"Pilot Seat Back Equip",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210},
                    "bl":{value:-500},
                    removable:true
                },
                {
                    "id": 9,
                    "name":{
                        value:"Co-Pilot Seat Bag Equip",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2210},
                    "bl":{value:500},
                    removable:true
                },
                {
                    "id": 10,
                    "name":{
                        value:"1/4/ Droo Pilot",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 1,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2209.8},
                    "bl":{value:800},
                    removable:true
                },
                {
                    "id": 11,
                    "name":{
                        value:"1/4 Co-Pilot",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 1,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2209.8},
                    "bl":{value:-800},
                    removable:true
                },
                {
                    "id": 12,
                    "name":{
                        value:"Rear Headset",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 2,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4064},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 13,
                    "name":{
                        value:"Stretcher Top",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 14.5,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2944.1},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 14,
                    "name":{
                        value:"Suction System",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 2,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2209.8},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 15,
                    "name":{
                        value:"Hoist",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 0,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3083},
                    "bl":{value:1340},
                    removable:true
                },
                {
                    "id": 16,
                    "name":{
                        value:"Stretcher Base",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 30.8,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:2944.1},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 17,
                    "name":{
                        value:"Survival Pack",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 10,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3962.4},
                    "bl":{value:-660},
                    removable:true
                },
                {
                    "id": 18,
                    "name":{
                        value:"Hypo Strops",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 7.2,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3962.4},
                    "bl":{value:-680},
                    removable:true
                },
                {
                    "id": 19,
                    "name":{
                        value:"Cabon Fibre Kit",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 3,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4064},
                    "bl":{value:-680},
                    removable:true
                },
                {
                    "id": 20,
                    "name":{
                        value:"XSM RHS (1st Femo)",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3530.6},
                    "bl":{value:660},
                    removable:true
                },
                {
                    "id": 20,
                    "name":{
                        value:"XSM RHS (2nd Femo)",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3530.6},
                    "bl":{value:660},
                    removable:true
                },
                {
                    "id": 21,
                    "name":{
                        value:"R400 First Aid",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 6.7,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3962.4},
                    "bl":{value:850},
                    removable:true
                },
                {
                    "id": 22,
                    "name":{
                        value:"Winslow 7 man life raft",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 22,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3683},
                    "bl":{value:850},
                    removable:true
                },
                {
                    "id": 23,
                    "name":{
                        value:"KED Winch Bag",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 10,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4064},
                    "bl":{value:-700},
                    removable:true
                },
                {
                    "id": 24,
                    "name":{
                        value:"Harness & Kit",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 3,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4064},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 25,
                    "name":{
                        value:"O2 Bottle",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 25,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4595},
                    "bl":{value:600},
                    removable:true
                }
            ]
        },

        crew: {
            name: "Crew",
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
            allowAddingItems: false,
            data:  [
                {
                    "id": 1,
                    "name":{value: "Pilot RHS"},
                    "role": ["captain", "copilot"],
                    "weight":{value: 90},
                    "sta":{value: 1193.8},
                    "bl":{value: 558.8550}
                },
                {
                    "id": 2,
                    "role":["captain","copilot"],
                    "name":{value: "Pilot LHS"},
                    "weight":{value: 90},
                    "sta":{value: 1193.8},
                    "bl":{value: -558.8}
                },
                {
                    "id": 3,
                    "role":["captain","copilot"],
                    "name":{value: "ACM RHS"},
                    "weight":{value: 90},
                    "sta":{value: 2540},
                    "bl":{value: 1100}
                },
                {
                    "id": 4,
                    "role":["captain","copilot"],
                    "name":{value: "RCM LHS"},
                    "weight":{value: 90},
                    "sta":{value: 2210},
                    "bl":{value: -584.2}
                }
            ]
        },

        boot: {
            name: "Boot",
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
                type: "defaultItem",
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
                type: "defaultItem",
                removable: true
            },
            allowAddingItems: true,
            data:  [
                {
                    "id": 1,
                    "name":{value: "Tie Down & Fish Bin"},
                    "weight":{value: 8},
                    "sta":{value: 7190},
                    "bl":{value: 0}
                },
                {
                    "id": 2,
                    "name":{value: "Spare Tag Line"},
                    "weight":{value: 1.5},
                    "sta":{value: 7190},
                    "bl":{value: 0}
                },
                {
                    "id": 3,
                    "name":{value: "Wet Weather Gear"},
                    "weight":{value: 7.2},
                    "sta":{value: 7190},
                    "bl":{value: 0}
                },
                {
                    "id": 4,
                    "name":{value: "Aircraft Folder ATL"},
                    "weight":{value: 3.5},
                    "sta":{value: 7190},
                    "bl":{value: 0}
                },
                {
                    "id": 5,
                    "name":{value: "Fuel Pump and Hose"},
                    "weight":{value: 13},
                    "sta":{value: 6604},
                    "bl":{value: 0}
                },
                {
                    "id": 6,
                    "name":{value: "Wooden Spreader Board"},
                    "weight":{value: 5},
                    "sta":{value: 6604},
                    "bl":{value: 0}
                },
                {
                    "id": 7,
                    "name":{value: "RCM Dive Bag"},
                    "weight":{value: 11},
                    "sta":{value: 6604},
                    "bl":{value: 0}
                },
                {
                    "id": 8,
                    "name":{value: "SMML Raft"},
                    "weight":{value: 3.2},
                    "sta":{value: 6604},
                    "bl":{value: 0}
                },
                {
                    "id": 9,
                    "name":{value: "Pax LJ"},
                    "weight":{value: 5.5},
                    "sta":{value: 6280},
                    "bl":{value: 0}
                },
                {
                    "id": 10,
                    "name":{value: "Shark Shield"},
                    "weight":{value: 3},
                    "sta":{value: 6280},
                    "bl":{value: 0}
                },
                {
                    "id": 11,
                    "name":{value: "Earthing Lead"},
                    "weight":{value: 1.2},
                    "sta":{value: 6280},
                    "bl":{value: 0}
                },
                {
                    "id": 12,
                    "name":{value: "Fuel Test Box"},
                    "weight":{value: 5.5},
                    "sta":{value: 6280},
                    "bl":{value: 0}
                }
            ]
        },

        seats: {
            name: "Seat Config",
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
                type: "defaultItem",
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
                type: "defaultItem",
                removable: true
            },
            allowAddingItems: true,
            data:  [
                {
                    "id": 1,
                    "name":{value: "LHS"},
                    "weight":{value: 0},
                    "sta":{value: 3746.5},
                    "bl":{value: -660.4}
                },
                {
                    "id": 2,
                    "name":{value: "RHS"},
                    "weight":{value: 5},
                    "sta":{value: 3746.5},
                    "bl":{value: 660.4}
                },
                {
                    "id": 3,
                    "name":{value: "Extra Cab Attend Seat L"},
                    "weight":{value: 0},
                    "sta":{value: 2210},
                    "bl":{value: -203.2}
                },
                {
                    "id": 4,
                    "name":{value: "Extra Cab Attend Seat R"},
                    "weight":{value: 0},
                    "sta":{value: 2210},
                    "bl":{value: 203.2}
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
                    "id": 1,
                    "name":{value:"Fuel (kg)"},
                    "weight":{
                        value: 861,
                        constraints: {
                            min: 0,
                            max: 2000
                        },
                        step: 5
                    },
                    "sta":{
                        value: 3820,
                        lookup:
                        /**
                         * Fuel Weight / Lon Arm
                         * @type {Array}
                         */
                            [
                                [158.8,3552 ],
                                [181.4,3552 ],
                                [226.8,3754 ],
                                [272.2,3870 ],
                                [317.5,3930 ],
                                [362.9,4015 ],
                                [408.2,4065 ],
                                [453.6,3999 ],
                                [499,3850 ],
                                [544.3,3770 ],
                                [589.7,3822 ],
                                [635,3860 ],
                                [680.4,3910 ],
                                [725.8,3941],
                                [771.1,3925],
                                [816.5,3901],
                                [861.8,3820],
                                [907.2,3774],
                                [929.9,3790],
                                [952.6,3802],
                                [975.2,3822]
                            ],
                        editable: true
                    },
                    "bl":{
                        value: 0,
                        editable: true
                    }
                }
            ]
        }

    }

};

module.exports._VH_EPH = default_VH_EPH;
/*long nose*/
var default_VH_RQY = {

    registration: 'VH-RQY',

    emptyWeight: 4463.30,
    sta: 5368.96,
    bl: -15,
    rtow: 6800,

    displayUnits: METRIC,


    staEnvelope: [
        [
            5071,
            4400
        ],
        [
            5000,
            4660
        ],
        [
            5000,
            5170
        ],
        [
            5238,
            6800
        ],
        [
            5480,
            6800
        ],
        [
            5595,
            4850
        ],
        [
            5536,
            4400
        ],
        [
            5071,
            4400
        ]
    ],
    blEnvelope: [
        [
            -66,
            6800
        ],
        [
            84,
            6800
        ],
        [
            134,
            6800
        ],
        [
            185,
            4900
        ],
        [
            120,
            4400
        ],
        [
            -88,
            4400
        ],
        [
            -66,
            6800
        ]
    ],

    weightsAndBalances: {

        crew: {
            name: "Crew",
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
            allowAddingItems: false,
            data:  [
                {
                    "id": 1,
                    "name":{value: "Pilot (+1.7kg for NVG)"},
                    "role": ["captain", "copilot"],
                    "weight":{value: 86},
                    "sta":{value: 2820},
                    "bl":{value: 550}
                },
                {
                    "id": 2,
                    "name":{value: "Co-Pilot (+1.7kg for NVG)"},
                    "role":["captain","copilot"],
                    "weight":{value: 86},
                    "sta":{value: 2820},
                    "bl":{value: -550}
                },
                {
                    "id": 3,
                    "name":{value: "Passenger A (ACM Front Right +1.7kg for NVG)"},
                    "role": ["winchop", "winchman"],
                    "weight":{value: 86},
                    "sta":{value: 3415},
                    "bl":{value: 737}
                },
                {
                    "id": 4,
                    "name":{value: "Passenger D (RCM Front Left +1.7kg for NVG)"},
                    "role": ["winchop", "winchman"],
                    "weight":{value: 86},
                    "sta":{value: 3415},
                    "bl":{value: -737}
                },
                {
                    "id": 9,
                    "name":{value: "Medic/ERP I (Pax Rear Right)"},
                    "weight":{value: 86},
                    "sta":{value: 5600},
                    "bl":{value: 737}
                },
                {
                    "id": 12,
                    "name":{value: "Medic/ERP N (Pax Rear Left)"},
                    "weight":{value: 86},
                    "sta":{value: 5600},
                    "bl":{value: -737}
                }
            ]
        },
        
        passengers: {
            defaultItem: {
                name: {
                    value: "",
                    constraints: {
                        minLength: 1,
                        maxLength: 30
                    },
                    editing: {
                        editable: false,
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
                    value: 1928,
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
                    value: 1928,
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

            name: "Passengers",
            allowAddingItems: false,
            visibility: false,
            data: [

                {
                    "id": 2,
                    "name":{value: "Passenger B"},
                    "weight":{value: 0},
                    "sta":{value: 3415},
                    "bl":{value: 254}
                },
                {
                    "id": 3,
                    "name":{value: "Passenger C"},
                    "weight":{value: 0},
                    "sta":{value: 3415},
                    "bl":{value: -254}
                },
                {
                    "id": 5,
                    "name":{value: "Passenger E"},
                    "weight":{value: 0},
                    "sta":{value: 4789},
                    "bl":{value: 737}
                },
                {
                    "id": 6,
                    "name":{value: "Passenger F (#1 Stretcher)"},
                    "weight":{value: 0},
                    "sta":{value: 4789},
                    "bl":{value: 254}
                },
                {
                    "id": 7,
                    "name":{value: "Passenger G"},
                    "weight":{value: 0},
                    "sta":{value: 4789},
                    "bl":{value: -254}
                },
                {
                    "id": 8,
                    "name":{value: "Passenger H"},
                    "weight":{value: 0},
                    "sta":{value: 4789},
                    "bl":{value: -737}
                },
                {
                    "id": 10,
                    "name":{value: "Passenger L"},
                    "weight":{value: 0},
                    "sta":{value: 5600},
                    "bl":{value: 254}
                },
                {
                    "id": 11,
                    "name":{value: "Passenger M (#2 Stretcher)"},
                    "weight":{value: 0},
                    "sta":{value: 5600},
                    "bl":{value: -254}
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
                    "id": 1,
                    "name":{value:"Fuel (kg)"},
                    "weight":{
                        value: 1050,
                        constraints: {
                            min: 0,
                            max: 1200
                        },
                        step: 5
                    },
                    "sta":{
                        value: 6239,
                        lookup:
                        /**
                         * Fuel Weight / Lon Arm
                         * @type {Array}
                         */
                            [
                                [25,6208  ],
                                [50,6209  ],
                                [75,6210  ],
                                [100,6210  ],
                                [125,6210  ],
                                [150,6210  ],
                                [175,6210  ],
                                [200,6210  ],
                                [225,6210  ],
                                [250,6210  ],
                                [275,6210  ],
                                [300,6210  ],
                                [325,6210  ],
                                [350,6211  ],
                                [375,6211  ],
                                [400,6211  ],
                                [425,6211  ],
                                [450,6211  ],
                                [475,6211  ],
                                [500,6212  ],
                                [525,6212  ],
                                [550,6212  ],
                                [575,6212  ],
                                [600,6213  ],
                                [625,6213  ],
                                [650,6214  ],
                                [675,6214  ],
                                [700,6214  ],
                                [725,6215  ],
                                [750,6215  ],
                                [775,6216  ],
                                [800,6217  ],
                                [825,6217  ],
                                [850,6219  ],
                                [875,6221  ],
                                [900,6223  ],
                                [925,6224  ],
                                [950,6226  ],
                                [975,6229  ],
                                [1000,6233  ],
                                [1025,6235  ],
                                [1050,6239  ],
                                [1075,6242  ],
                                [1100,6244  ],
                                [1125,6247  ],
                                [1150,6250  ],
                                [1175,6253  ],
                                [1200,6255  ],
                                [1225,6258  ],
                                [1250,6260  ],
                                [1275,6262  ],
                                [1300,6264  ],
                                [1325,6266  ],
                                [1350,6268  ],
                                [1375,6270  ],
                                [1400,6272  ],
                                [1425,6274  ],
                                [1450,6275  ],
                                [1475,6277  ],
                                [1500,6278  ],
                                [1525,6280  ],
                                [1550,6281  ],
                                [1575,6282  ],
                                [1600,6284  ],
                                [1625,6286  ],
                                [1650,6287  ],
                                [1675,6289  ],
                                [1700,6290  ]
                            ],
                        editable: true
                    },
                    "bl":{
                        value: 0,
                        editable: true
                    }
                }
            ]
        },

        equipment : {
            name: "SAR Equipment",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Dual External Rescue Hoist"},
                    "weight":{
                        value: 144.50
                    },
                    "sta":{
                        value: 4510
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"Nightsun XP"},
                    "weight":{
                        value: 32
                    },
                    "sta":{
                        value: 3620.7
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Wescam MX-15i"},
                    "weight":{
                        value: 40
                    },
                    "sta":{
                        value: 1100
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        pilot_station : {
            name: "Pilot Station",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Switlik Jackets PLT's (2)"},
                    "weight":{
                        value: 6
                    },
                    "sta":{
                        value: 2820
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"EFB"},
                    "weight":{
                        value: 2
                    },
                    "sta":{
                        value: 2820
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        main_cabin_fwd : {
            name: "Main Cabin Fwd",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Manual Cable Cutter"},
                    "weight":{
                        value: 1.10
                    },
                    "sta":{
                        value: 4000
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"FLIR Console"},
                    "weight":{
                        value: 15.00
                    },
                    "sta":{
                        value: 3300
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Cabin FLIR Console Crew Seat Left"},
                    "weight":{
                        value: 17.40
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Winch Crew Seat Right"},
                    "weight":{
                        value: 8.90
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 4,
                    "name":{value:"Switlik Jackets RCM/ACM"},
                    "weight":{
                        value: 7
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 5,
                    "name":{value:"Black Winch Stn Bag"},
                    "weight":{
                        value: 9.60
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 6,
                    "name":{value:"Hand Held Search Lights"},
                    "weight":{
                        value: 2
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 6,
                    "name":{value:"Drop Down Leads"},
                    "weight":{
                        value: 0.42
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 6,
                    "name":{value:"Ferno 5120 Oxygen Carry Kit"},
                    "weight":{
                        value: 6.60
                    },
                    "sta":{
                        value: 3415
                    },
                    "bl":{
                        value: 0
                    }
                }

            ]
        },

        main_cabin : {
            name: "Main Cabin",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Removable Handles"},
                    "weight":{
                        value: 0
                    },
                    "sta":{
                        value: 4000
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"Roof Wander Leads"},
                    "weight":{
                        value: 2
                    },
                    "sta":{
                        value: 4000
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        main_cabin_aft : {
            name: "Main Cabin Aft",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Cabin Folding Crew Seat Rear Right"},
                    "weight":{
                        value: 8.90
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"Cabin Folding Crew Seat Rear Left"},
                    "weight":{
                        value: 8.90
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Yellow Gear Bag"},
                    "weight":{
                        value: 17.45
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 4,
                    "name":{value:"Roof Wander Leads"},
                    "weight":{
                        value: 2.80
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 5,
                    "name":{value:"Drop Down Leads"},
                    "weight":{
                        value: 0.42
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 6,
                    "name":{value:"Static Discharge Lead"},
                    "weight":{
                        value: 0.6
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 7,
                    "name":{value:"Combination Rescue Strop"},
                    "weight":{
                        value: 1.75
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 8,
                    "name":{value:"Twin Rescue Sling"},
                    "weight":{
                        value: 0.40
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 9,
                    "name":{value:"Cabin Hand Holds"},
                    "weight":{
                        value: 0.10
                    },
                    "sta":{
                        value: 5600
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        baggage : {
            name: "Baggage Storage",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Stretcher Tiedown"},
                    "weight":{
                        value: 2.10
                    },
                    "sta":{
                        value: 6600
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"Stretcher Stowage Restraint"},
                    "weight":{
                        value: 1.2
                    },
                    "sta":{
                        value: 6400
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Primary Stretcher & SWAP"},
                    "weight":{
                        value: 33.25
                    },
                    "sta":{
                        value: 6500
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        boot : {
            name: "Boot",
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
                type: "defaultItem",
            },
            allowAddingItems: false,
            visibility: false,
            data:[
                {
                    "id": 1,
                    "name":{value:"Chocks"},
                    "weight":{
                        value: 4.20
                    },
                    "sta":{
                        value: 7500
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 2,
                    "name":{value:"baggage Compartment Floor Panel Protectors"},
                    "weight":{
                        value: 6.40
                    },
                    "sta":{
                        value: 7650
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 3,
                    "name":{value:"Aircraft Red Bag"},
                    "weight":{
                        value: 3
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 4,
                    "name":{value:"Secondary Stretcher & SWAP"},
                    "weight":{
                        value: 33.25
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 5,
                    "name":{value:"R400 First Aid Bag"},
                    "weight":{
                        value: 6.40
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 6,
                    "name":{value:"Survival Pack"},
                    "weight":{
                        value: 10.30
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 7,
                    "name":{value:"Black Headset Bag"},
                    "weight":{
                        value: 4
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 8,
                    "name":{value:"Earthing Lead"},
                    "weight":{
                        value: 1.5
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 9,
                    "name":{value:"Blade Sock Bar"},
                    "weight":{
                        value: 1.80
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 10,
                    "name":{value:"Grey Tiedown Bag"},
                    "weight":{
                        value: 5.60
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 11,
                    "name":{value:"RCM Dive Bag"},
                    "weight":{
                        value: 7.50
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 12,
                    "name":{value:"Pyro Box"},
                    "weight":{
                        value: 0
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 13,
                    "name":{value:"Satellite Phone"},
                    "weight":{
                        value: 2.20
                    },
                    "sta":{
                        value: 8000
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 14,
                    "name":{value:"Gath Helmet"},
                    "weight":{
                        value: 0.50
                    },
                    "sta":{
                        value: 8000
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 15,
                    "name":{value:"Fuel Test Kit"},
                    "weight":{
                        value: 1
                    },
                    "sta":{
                        value: 8000
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 16,
                    "name":{value:"Aircraft First Aid"},
                    "weight":{
                        value: 1.80
                    },
                    "sta":{
                        value: 8200
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 17,
                    "name":{value:"Pax Jacket"},
                    "weight":{
                        value: 5.30
                    },
                    "sta":{
                        value: 8200
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 18,
                    "name":{value:"Decontamination PPE"},
                    "weight":{
                        value: 2
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                },
                {
                    "id": 19,
                    "name":{value:"Net"},
                    "weight":{
                        value: 4.40
                    },
                    "sta":{
                        value: 7700
                    },
                    "bl":{
                        value: 0
                    }
                }
            ]
        },

        cargo: {
            name: "Load",
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
            allowAddingItems: false,
            data:  [
                {
                    "id": 1,
                    "name":{value: "Baggage Compartment Load"},
                    "weight":{value: 0},
                    "sta":{value: 7700},
                    "bl":{value: 0}
                },
                {
                    "id": 2,
                    "name":{value: "Tunnel Load"},
                    "weight":{value: 0},
                    "sta":{value: 6220},
                    "bl":{value: 0}
                },
                {
                    "id": 3,
                    "name":{value: "Ballast (Fwd on top Aux Batt)"},
                    "weight":{value: 0},
                    "sta":{value: 1262},
                    "bl":{value: 0}
                }
            ]
        },



    }

};

module.exports._VH_RQY = default_VH_RQY;
var default_VH_SYV = {
	
	registration: 'VH-SYV',

	emptyWeight: 4553.10,
	sta: 5425.99,
	bl: 9,
	rtow: 6800,

	displayUnits: METRIC,

	/*
		[ [arm in mm, weight in kg], ... ]
	 */
	staEnvelope: [
		[
		5238,
		6800
		],
		[
		5480,
		6800
		],
		[
		5595,
		4850
		],
		[
		5536,
		4400
		],
		[
		5071,
		4400
		],
		[
		5000,
		4660
		],
		[
		5000,
		5170
		],
		[
		5238,
		6800
		]
	],

	blEnvelope: [
		[
		-66,
		6800
		],
		[
		84,
		6800
		],
		[
		124,
		4400
		],
		[
		-88,
		4400
		],
		[
		-66,
		6800
		]
	],

	weightsAndBalances: {



		crew: {

			name: "Crew",
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
				  	"id": 1,
				  	"role": ["captain", "copilot"],
				    "name":{value: "Pilot"},
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: 550}
				  },
				  {
				  	"id": 2,
				  	"role":["winchoperator","winchman"],
				    "name":{value: "ACM/RM"},
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: -550}
				  },
				  {
				  	"id": 3,
				  	"role":["paramedic"],
				    "name":{value: "Paramedic"},
				    "weight":{value: 90},
				    "sta":{value: 2820},
				    "bl":{value: -550}
				  }
				]
		}, 

		passengers: {
			visibility: false,
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editiableByDefault: false
					}
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
				  	"id": 1,
				    "name":{value: "Seat A"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 2,
				  	"role":"all",
				    "name":{value: "Seat B"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 250}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Seat C"},
				    "weight":{value: 90},
				    "sta":{value: 3420},
				    "bl":{value: 750}	
				  },
				  {
				  	"id": 4,
				    "name":{value: "Seat D"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -740}
				  },
				  {
				  	"id": 5,
				  	"role":"all",
				    "name":{value: "Seat E"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: -250}
				  },
				  {
				  	"id": 6,
				  	"role":"all",
				    "name":{value: "Seat F"},
				    "weight":{value: 90},
				    "sta":{value: 5600},
				    "bl":{value: 740}
				  },
				  {
				  	"id": 7,
				  	"role":"all",
				    "name":{value: "Hoist"},
				    "weight":{value: 90},
				    "sta":{value: 4600},
				    "bl":{value: 1500}
				  }
				]
		},

		general: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "General",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Goodrich External Rescue Hoist"},
			    "weight":{value: 59},
			    "sta":{value: 4374.5},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Nightsun"},
			    "weight":{value: 44.20},
			    "sta":{value: 3620.7},
			    "bl":{value: 0}
			  }
			]
		},

		cockpit: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cockpit",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 3,
			    "name":{value: "Switlik Jackets Pilot"},
			    "weight":{value: 2.3},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Switlik Jacket Aircrewman"},
			    "weight":{value: 1.9},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Pilot Ipad"},
			    "weight":{value: 1},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Aircrewman Ipad"},
			    "weight":{value: 1.0},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Chamois"},
			    "weight":{value: 1.0},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "NVG Pilot"},
			    "weight":{value: 1.7},
			    "sta":{value: 2820},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "NVG Paramedic"},
			    "weight":{value: 1.7},
			    "sta":{value: 3415},
			    "bl":{value: 0}
			  }
			]
		},

		cabin: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "On Floor & Other",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Cabin Swivel Seat Left"},
			    "weight":{value: 17.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Cabin Swivel Seat Right"},
			    "weight":{value: 17.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 3,
			    "name":{value: "Switlik Paramedic"},
			    "weight":{value: 2.9},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Switlik Doctor"},
			    "weight":{value: 2.3},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Harnesses (2)"},
			    "weight":{value: 2.4},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Thigh pouches (2)"},
			    "weight":{value: 1.0},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Ersa and map pack"},
			    "weight":{value: 1.9},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "GRN Motorola Radio"},
			    "weight":{value: 0.1},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "HLS Register"},
			    "weight":{value: 1.10},
			    "sta":{value: 3415},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 10,
			    "name":{value: "Black Bag"},
			    "weight":{value: 1.50},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 11,
			    "name":{value: "Paramedic Ipad"},
			    "weight":{value: 1.60},
			    "sta":{value: 3415.0},
			    "bl":{value: 0}
			  }
			]
		},

		medical: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Medical Equipment",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 1,
			    "name":{value: "Misc Grab Handles"},
			    "weight":{value: 0.9},
			    "sta":{value: 4000},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value: "Roof Wander Leads (2)"},
			    "weight":{value: 1.8},
			    "sta":{value: 4000},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 3,
			    "name":{value: "Helimod Ferno 12 Stretcher"},
			    "weight":{value: 15.5},
			    "sta":{value: 4624},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value: "Helimod Turn-table and Stretcher deck"},
			    "weight":{value: 36.1},
			    "sta":{value: 4624},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value: "Cabin Simula Sea (Rear Row Left)"},
			    "weight":{value: 15.2},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 6,
			    "name":{value: "Cabin Simula Sea (Rear Row Right)"},
			    "weight":{value: 15.20},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value: "Blood box"},
			    "weight":{value: 7.30},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 8,
			    "name":{value: "Ultra sound"},
			    "weight":{value: 0},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 9,
			    "name":{value: "Roof Wander Leads (2)"},
			    "weight":{value: 1.8},
			    "sta":{value: 5600},
			    "bl":{value: 0}
			  }

			]
		},

		medical: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Rear Medical Cabinet",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 10,
			    "name":{value: "Medical Pack 1 (Blue)"},
			    "weight":{value: 11.20},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 11,
			    "name":{value: "Medical Pack 2 (Red)"},
			    "weight":{value: 10.90},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 12,
			    "name":{value: "Airway Drop Down Bag"},
			    "weight":{value: 3.0},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 13,
			    "name":{value: "Circuits"},
			    "weight":{value: 0.6},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 14,
			    "name":{value: "Water Rescue Bag (Aircraft - modified)"},
			    "weight":{value: 4.1},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 15,
			    "name":{value: "SAR Winching Stretcher & Equipment"},
			    "weight":{value: 27.20},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 16,
			    "name":{value: "Yellow Winch Box"},
			    "weight":{value: 9.9},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 17,
			    "name":{value: "Strop + Float Ball"},
			    "weight":{value: 2.4},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 18,
			    "name":{value: "H2O Gear and Blue Bag"},
			    "weight":{value: 1.8},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 19,
			    "name":{value: "Equipment Strap (2)"},
			    "weight":{value: 1.6},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 20,
			    "name":{value: "Capewell (2)"},
			    "weight":{value: 2},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 21,
			    "name":{value: "Roll Bag"},
			    "weight":{value: 2.7},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 22,
			    "name":{value: "Doctor's Folder"},
			    "weight":{value: 1.3},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 23,
			    "name":{value: "Patient Hearing Protection"},
			    "weight":{value: 0.3},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 24,
			    "name":{value: "Headsets (2)"},
			    "weight":{value: 1.6},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 25,
			    "name":{value: "Yellow Winch Bag"},
			    "weight":{value: 0.8},
			    "sta":{value: 6200},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 26,
			    "name":{value: "Oxy Soft Pack (C Cylinder)"},
			    "weight":{value: 6},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 27,
			    "name":{value: "Lifepack15"},
			    "weight":{value: 11.4},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 28,
			    "name":{value: "Oxylog 3000 Plus Ventilator"},
			    "weight":{value: 5.7},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 29,
			    "name":{value: "Oxylog Bracket & Hose"},
			    "weight":{value: 2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 30,
			    "name":{value: "Hi-Line Kit"},
			    "weight":{value: 6.4},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 31,
			    "name":{value: "2 x \"D\" Size Oxygen Cylinders"},
			    "weight":{value: 12.5},
			    "sta":{value: 6250},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 32,
			    "name":{value: "Water Bottles (4 x 350mL)"},
			    "weight":{value: 1.60},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 33,
			    "name":{value: "Hand Held Search lights (2)"},
			    "weight":{value: 1.2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  }
			]
		},

		baggage: {
			visibility: false,
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Baggage Compt.",
			allowAddingItems: true,
			data: [
			  {
			  	"id": 34,
			    "name":{value: "Fuel Pump & Hoses"},
			    "weight":{value: 10.7},
			    "sta":{value: 7500.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 35,
			    "name":{value: "Chocks"},
			    "weight":{value: 4.8},
			    "sta":{value: 7500},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 36,
			    "name":{value: "Grey Tie Down Bag"},
			    "weight":{value: 6.1},
			    "sta":{value: 7500.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 37,
			    "name":{value: "Paramedic Wet Rescue Bag (Personal)"},
			    "weight":{value: 10.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 38,
			    "name":{value: "Road Trauma Pack (PPE)"},
			    "weight":{value: 1.7},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 39,
			    "name":{value: "Tool Box"},
			    "weight":{value: 5.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 40,
			    "name":{value: "Inter Hospital Medical Pack"},
			    "weight":{value: 11},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 41,
			    "name":{value: "Bridge Fitted with Equipment"},
			    "weight":{value: 16.9},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 42,
			    "name":{value: "Aircraft Red Book (Techlog/Report 21)"},
			    "weight":{value: 1.2},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 43,
			    "name":{value: "Survival Pack "},
			    "weight":{value: 9.9},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 44,
			    "name":{value: "Crew Wet Weather Gear"},
			    "weight":{value: 3.4},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 45,
			    "name":{value: "Blade Sock Bar"},
			    "weight":{value: 1.9},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 46,
			    "name":{value: "Aircraft Medical Kit"},
			    "weight":{value: 1.8},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 47,
			    "name":{value: "Yellow Bag"},
			    "weight":{value: 6.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 48,
			    "name":{value: "Pax Switlik"},
			    "weight":{value: 1},
			    "sta":{value: 7700},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 49,
			    "name":{value: "Body Bag"},
			    "weight":{value: 1.0},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 50,
			    "name":{value: "Net"},
			    "weight":{value: 4.5},
			    "sta":{value: 7700.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 51,
			    "name":{value: "Megalift Stretcher, Mat and Harness"},
			    "weight":{value: 66.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 52,
			    "name":{value: "Stretcher base"},
			    "weight":{value: 16.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 53,
			    "name":{value: "Bariatric pack"},
			    "weight":{value: 12.20},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 54,
			    "name":{value: "Neocot"},
			    "weight":{value: 165},
			    "sta":{value: 4732},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 55,
			    "name":{value: "NETS Headsets"},
			    "weight":{value: 2},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 56,
			    "name":{value: "Wheeled Thomas Pack"},
			    "weight":{value: 18},
			    "sta":{value: 6200.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 57,
			    "name":{value: "Cabin Swivel Seat (Moved from front right)"},
			    "weight":{value: 15.0},
			    "sta":{value: 5600.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 58,
			    "name":{value: "Second Helimod Stretcher"},
			    "weight":{value: 16.7},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 59,
			    "name":{value: "Second Stretcher Brackets"},
			    "weight":{value: 4.2},
			    "sta":{value: 4624.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 60,
			    "name":{value: "Balloon Pump Mounting Frame"},
			    "weight":{value: 18.1},
			    "sta":{value: 5321.0},
			    "bl":{value: 0}
			  },			  			  			  			  
			  {
			  	"id": 61,
			    "name":{value: "Ballon Pump"},
			    "weight":{value: 41.5},
			    "sta":{value: 5321.0},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 62,
			    "name":{value: "ECMO Pump Control Box and carabiners"},
			    "weight":{value: 15.5},
			    "sta":{value: 5542},
			    "bl":{value: 0}
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
			  	"id": 1,
			    "name":{value:"Fuel"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 6233},
			    "bl":{value: 0}
			  }
			]
		},




	} 

};

module.exports._VH_SYV = default_VH_SYV;
var default_VH_TQU = {
	
	registration: 'VH-TQU',

	emptyWeight: 6812.3,
	sta: 4770.2,
	bl: 5.2,
	rtow: 11000,

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

		cockpit: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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

			name: "Cockpit Equipment",
			data: [
			{
				"id": 1,
				"name":{
					value:"General",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 5, 
					editing: {
						editable: false
					},
					step: 1
				},
				"sta":{value:1928},
				"bl":{value:0},
				removable:true
			}
			],
			allowAddingItems: true,
		},

		cargo_cone: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cargo Cone",
			allowAddingItems: true,
			data: [
			{
				"id": 1,
				"name":{
					value:"Headsets (2kg each)",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 2, 
					editing: {
						editable: false
					},
					step: 2
				},
				"sta":{value:10250},
				"bl":{value:0},
				removable:true
			}]
		},

		cargo_main: {
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable: false,
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
					value: 1928,
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
					value: 1928,
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
			name: "Cargo Main",
			allowAddingItems: true,
			data: [
			{
				"id": 1,
				"name":{
					value:"Jackets",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 16, 
					editing: {
						editable: true
					},
					step: 1
				},
				"sta":{value:8640},
				"bl":{value:0},
				removable:true
			},
			{
				"id": 2,
				"name":{
					value:"Tiedowns",
					editing: {
						editable: false,
						editableByDefault: false
					},
				},
				"weight": {
					value: 3, 
					editing: {
						editable: true
					},
					step: 1
				},
				"sta":{value:8640},
				"bl":{value:0},
				removable:true
			}
			]
		},

		crew: {
			name: "Crew",
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Pilot Seat (Right)"},
				    "role": ["captain", "copilot"],
				    "weight":{value: 90},
				    "sta":{value: 1280},
				    "bl":{value: 525}
				  },
				  {
				  	"id": 2,
				  	"role":["captain","copilot"],
				    "name":{value: "Pilot Seat (Left)"},
				    "weight":{value: 90},
				    "sta":{value: 1280},
				    "bl":{value: -525}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Jump Seat"},
				    "weight":{value: 90},
				    "sta":{value: 1924},
				    "bl":{value: 591}
				  }
				]
		},

		passengers: {
			name: "Passengers",
			defaultItem: {
				name: {
					value: "",
					constraints: {
						minLength: 1,
						maxLength: 30
					},
					editing: {
						editable:true,
						editableByDefault: false
					}
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
			allowAddingItems: false,
			data:  [
				  {
				  	"id": 1,
				    "name":{value: "Seat A"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 2393},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 2,
				  	"role":"all",
				    "name":{value: "Seat B"},
				    "weight":{value: 90},
				    "sta":{value: 2469},
				    "bl":{value: -184}
				  },
				  {
				  	"id": 3,
				  	"role":"all",
				    "name":{value: "Seat C"},
				    "weight":{value: 90},
				    "sta":{value: 3777},
				    "bl":{value: 591}	
				  },
				  {
				  	"id": 4,
				    "name":{value: "Seat D"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 3625},
				    "bl":{value: 184}
				  },
				  {
				  	"id": 5,
				  	"role":"all",
				    "name":{value: "Seat E"},
				    "weight":{value: 90},
				    "sta":{value: 4145},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 6,
				  	"role":"all",
				    "name":{value: "Seat F"},
				    "weight":{value: 90},
				    "sta":{value: 3993},
				    "bl":{value: 184}
				  },
				  {
				  	"id": 7,
				    "name":{value: "Seat G"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 5581},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 8,
				  	"role":"all",
				    "name":{value: "Seat H"},
				    "weight":{value: 90},
				    "sta":{value: 5428},
				    "bl":{value: 184}
				  },
				  {
				  	"id": 9,
				  	"role":"all",
				    "name":{value: "Seat I"},
				    "weight":{value: 90},
				    "sta":{value: 6394},
				    "bl":{value: 591}
				  },
				  {
				  	"id": 10,
				    "name":{value: "Seat J"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 6241},
				    "bl":{value: 184}
				  },
				  {
				  	"id": 11,
				  	"role":"all",
				    "name":{value: "Seat K"},
				    "weight":{value: 90},
				    "sta":{value: 6609},
				    "bl":{value: 545}
				  },
				  {
				  	"id": 12,
				  	"role":"all",
				    "name":{value: "Seat L"},
				    "weight":{value: 90},
				    "sta":{value: 6792},
				    "bl":{value: 130}
				  },
				  {
				  	"id": 13,
				  	"role":"all",
				    "name":{value: "Seat M"},
				    "weight":{value: 90},
				    "sta":{value: 7969},
				    "bl":{value: 212}
				  },
				  {
				  	"id": 14,
				    "name":{value: "Seat N"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 7969},
				    "bl":{value: -212}
				  },
				  {
				  	"id": 15,
				  	"role":"all",
				    "name":{value: "Seat O"},
				    "weight":{value: 90},
				    "sta":{value: 6597},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 16,
				  	"role":"all",
				    "name":{value: "Seat P"},
				    "weight":{value: 90},
				    "sta":{value: 5784},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 17,
				    "name":{value: "Seat Q"},
				    "role": "all",
				    "weight":{value: 90},
				    "sta":{value: 4222},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 18,
				  	"role":"all",
				    "name":{value: "Seat R"},
				    "weight":{value: 90},
				    "sta":{value: 3854},
				    "bl":{value: -591}
				  },
				  {
				  	"id": 19,
				  	"role":"all",
				    "name":{value: "Seat S"},
				    "weight":{value: 90},
				    "sta":{value: 2469},
				    "bl":{value: -591}
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
			  	"id": 1,
			    "name":{value:"Fuel Group LH"},
			    "weight":{	
	    			value: 521,
				    constraints: {
				    	min: 0,
				    	max: 521
				    },
	    			step: 10
			    },
			    "sta":{value: 5871},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 2,
			    "name":{value:"Fuel Group RH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 950
				    },
	    			step: 10
			    },
			    "sta":{value: 3525},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 3,
			    "name":{value:"Fuel Sponson LH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 237
				    },
	    			step: 10
			    },
			    "sta":{value: 6856},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 4,
			    "name":{value:"Fuel Sponson RH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 237
				    },
	    			step: 10
			    },
			    "sta":{value: 6856},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 5,
			    "name":{value:"Fuel EFT RH"},
			    "weight":{	
	    			value: 237,
				    constraints: {
				    	min: 0,
				    	max: 237
				    },
	    			step: 10
			    },
			    "sta":{value: 2890},
			    "bl":{value: 0}
			 },
			 {
			  	"id": 6,
			    "name":{value:"Fuel EFT LH"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 2610},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 7,
			    "name":{value:"Fuel Initial LH Group"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 5871},
			    "bl":{value: 0}
			  },
			  {
			  	"id": 8,
			    "name":{value:"Fuel Initial RH Group"},
			    "weight":{	
	    			value: 100,
				    constraints: {
				    	min: 0,
				    	max: 600
				    },
	    			step: 10
			    },
			    "sta":{value: 3525},
			    "bl":{value: 0}
			  },
			]
		}

	} 

};

module.exports._VH_TQU = default_VH_TQU;
var default_VH_WEK = {

    registration: 'VH-WEK',

    emptyWeight: 4364.95,
    sta: 5348,
    bl: 25,
    rtow: 6800,

    displayUnits: METRIC,

    /*
        [ [arm in mm, weight in kg], ... ]
     */
    staEnvelope: [
        [
            5071,
            4400
        ],
        [
            5000,
            4660
        ],
        [
            5000,
            5170
        ],
        [
            5238,
            6800
        ],
        [
            5480,
            6800
        ],
        [
            5595,
            4850
        ],
        [
            5536,
            4400
        ],
        [
            5071,
            4400
        ]
    ],

    /*
        [ [arm in mm, weight in kg], ... ]
     */
    blEnvelope: [
        [
            -66,
            6800
        ],
        [
            84,
            6800
        ],
        [
            134,
            6800
        ],
        [
            185,
            4900
        ],
        [
            120,
            4400
        ],
        [
            -88,
            4400
        ],
        [
            -66,
            6800
        ]
    ],

    weightsAndBalances: {


        equipment: {
            defaultItem: {
                name: {
                    value: "",
                    constraints: {
                        minLength: 1,
                        maxLength: 30
                    },
                    editing: {
                        editable: false,
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
                    value: 1928,
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
                    value: 1928,
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

            name: "Equipment",
            allowAddingItems: true,
            visibility: false,
            data: [
                {
                    "id": 1,
                    "name":{
                        value:"Hoist",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 59,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4375},
                    "bl":{value:1585},
                    removable:true
                },
                {
                    "id": 2,
                    "name":{
                        value:"Nightsun SX-16",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 44.2,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3621},
                    "bl":{value:-1460},
                    removable:true
                },
                {
                    "id": 3,
                    "name":{
                        value:"FLIR U8500",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 13.15,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:1164},
                    "bl":{value:-520},
                    removable:true
                },
                {
                    "id": 4,
                    "name":{
                        value:"Mission Console",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 15,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3297},
                    "bl":{value:-506},
                    removable:true
                },
                {
                    "id": 5,
                    "name":{
                        value:"Medical Seat A",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3407},
                    "bl":{value:711},
                    removable:true
                },
                {
                    "id": 6,
                    "name":{
                        value:"Pax Seat B",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 14.1,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:3407},
                    "bl":{value:229},
                    removable:true
                },
                {
                    "id": 7,
                    "name":{
                        value:"Medical Seat D",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4205},
                    "bl":{value:-645},
                    removable:true
                },
                {
                    "id": 8,
                    "name":{
                        value:"Stretcher 1",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 27,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4789},
                    "bl":{value:0},
                    removable:true
                },
                {
                    "id": 9,
                    "name":{
                        value:"Medical Seat E",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4724},
                    "bl":{value:660},
                    removable:true
                },
                {
                    "id": 10,
                    "name":{
                        value:"Medical Seat F",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4724},
                    "bl":{value:216},
                    removable:true
                },
                {
                    "id": 11,
                    "name":{
                        value:"Medical Seat G",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4724},
                    "bl":{value:-216},
                    removable:true
                },
                {
                    "id": 12,
                    "name":{
                        value:"Medical Seat H",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 17.4,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:4724},
                    "bl":{value:-660},
                    removable:true
                },
                {
                    "id": 13,
                    "name":{
                        value:"Simula Seat I",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 15,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:5542},
                    "bl":{value:711},
                    removable:true
                },
                {
                    "id": 14,
                    "name":{
                        value:"Pax Seat I",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 14.1,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:5608},
                    "bl":{value:228},
                    removable:true
                },
                {
                    "id": 15,
                    "name":{
                        value:"Seat Seat M",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 14.1,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:5608},
                    "bl":{value:-228},
                    removable:true
                },
                {
                    "id": 16,
                    "name":{
                        value:"Simula Seat N",
                        editing: {
                            editable: false,
                            editableByDefault: false
                        },
                    },
                    "weight": {
                        value: 15,
                        editing: {
                            editable: false
                        },
                        step: 1
                    },
                    "sta":{value:5542},
                    "bl":{value:711},
                    removable:true
                }
            ]
        },

        
        crew: {
            name: "Pilots",
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
            allowAddingItems: false,
            data:  [
                {
                    "id": 1,
                    "name":{value: "Pilot"},
                    "role": ["captain", "copilot"],
                    "weight":{value: 80},
                    "sta":{value: 2820},
                    "bl":{value: 550}
                },
                {
                    "id": 2,
                    "role":["captain","copilot"],
                    "name":{value: "Co-Pilot"},
                    "weight":{value: 80},
                    "sta":{value: 2820},
                    "bl":{value: -550}
                }
            ]
        },

        cabin: {
            name: "Cabin",
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
                    "id": 1,
                    "name":{value: "Row 1"},
                    "weight":{value: 0},
                    "sta":{value: 2820},
                    "bl":{value: 0}
                },
                {
                    "id": 2,
                    "name":{value: "Row 2"},
                    "weight":{value: 0},
                    "sta":{value: 3622},
                    "bl":{value: 0}
                },
                {
                    "id": 3,
                    "name":{value: "Row 3"},
                    "weight":{value: 0},
                    "sta":{value: 3622},
                    "bl":{value: 0}
                },
                {
                    "id": 4,
                    "name":{value: "Hoist Pax"},
                    "weight":{value: 0},
                    "sta":{value: 4601},
                    "bl":{value: 0}
                },
                {
                    "id": 5,
                    "name":{value: "Aircrewman"},
                    "weight":{value: 0},
                    "sta":{value: 4500},
                    "bl":{value: 0}
                },
                {
                    "id": 6,
                    "name":{value: "Baggage"},
                    "weight":{value: 0},
                    "sta":{value: 7700},
                    "bl":{value: 0}
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
                    "id": 1,
                    "name":{value:"Fuel (kg)"},
                    "weight":{
                        value: 1670,
                        constraints: {
                            min: 0,
                            max: 1200
                        },
                        step: 5
                    },
                    "sta":{
                        value: 6234,
                        lookup:
                        /**
                         * Fuel Weight / Lon Arm
                         * @type {Array}
                         */
                            [
                                [25,6208  ],
                                [50,6209  ],
                                [75,6210  ],
                                [100,6210  ],
                                [125,6210  ],
                                [150,6210  ],
                                [175,6210  ],
                                [200,6210  ],
                                [225,6210  ],
                                [250,6210  ],
                                [275,6210  ],
                                [300,6210  ],
                                [325,6210  ],
                                [350,6211  ],
                                [375,6211  ],
                                [400,6211  ],
                                [425,6211  ],
                                [450,6211  ],
                                [475,6211  ],
                                [500,6212  ],
                                [525,6212  ],
                                [550,6212  ],
                                [575,6212  ],
                                [600,6213  ],
                                [625,6213  ],
                                [650,6214  ],
                                [675,6214  ],
                                [700,6214  ],
                                [725,6215  ],
                                [750,6215  ],
                                [775,6216  ],
                                [800,6217  ],
                                [825,6219  ],
                                [850,6220  ],
                                [875,6222  ],
                                [900,6221  ],
                                [925,6221  ],
                                [950,6222  ],
                                [975,6223  ],
                                [1000,6223  ],
                                [1025,6224  ],
                                [1050,6225  ],
                                [1075,6225  ],
                                [1100,6226  ],
                                [1125,6227  ],
                                [1150,6227  ],
                                [1175,6227  ],
                                [1200,6228  ],
                                [1225,6228  ],
                                [1250,6229  ],
                                [1270,6229  ],
                                [1275,6229  ],
                                [1300,6229  ],
                                [1325,6230  ],
                                [1350,6231  ],
                                [1400,6231  ],
                                [1425,6231  ],
                                [1450,6232  ],
                                [1475,6232  ],
                                [1500,6232  ],
                                [1525,6232  ],
                                [1550,6233  ],
                                [1575,6233  ],
                                [1600,6234  ],
                                [1625,6234  ],
                                [1650,6234  ],
                                [1670,6234  ]
                            ],
                        editable: true
                    },
                    "bl":{
                        value: 0,
                        editable: true
                    }
                }
            ]
        }

    }

};

module.exports._VH_WEK = default_VH_WEK;