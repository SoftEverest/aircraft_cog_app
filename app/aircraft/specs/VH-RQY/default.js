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