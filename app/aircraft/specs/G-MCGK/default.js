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