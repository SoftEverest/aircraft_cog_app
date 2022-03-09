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