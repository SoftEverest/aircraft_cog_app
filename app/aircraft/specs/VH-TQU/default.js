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