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