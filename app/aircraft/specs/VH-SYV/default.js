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