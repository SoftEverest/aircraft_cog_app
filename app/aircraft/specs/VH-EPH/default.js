var default_VH_EPH = {

    registration: 'VH-EPH',

    emptyWeight: 3579,
    sta: 3612,
    bl: 29,
    rtow: 5398,
    fuel_at_landing: 200,

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
            3350
        ],
        [
            120,
            3350
        ],
        [
            120,
            3475
        ],
        [
            155,
            3450
        ],
        [
            155,
            3675
        ],
        [
            20,
            3675
        ],
        [
            20,
            3350
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