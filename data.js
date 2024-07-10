//! Please read the entire README.md file before attempting to edit this.
//! I would prefer you make an issue instead if you want something added.

/**
 * (most) of the major places/towns in the world.
 * Add towns in Alphabetical order, underscores "_" are disallowed, and keep capitalization in mind!
 * This list is copy-pasted from the wiki: https://wiki.ultravanilla.world/wiki/Category:Settlement
*/
let places = {
    "Amanita": "outpost",
    "Aquileia": "outpost",
    "Aurora": "old-spawn",
    "Banal-Witchita": "outpost",
    "Birch Island": "old-spawn",
    "Borealis": "new-spawn",
    "Burzum": "old-spawn",
    "Cara Island": "old-spawn",
    "Cara Nova": "new-spawn",
    "Cloud City": "new-spawn",
    "Colex": "old-spawn",
    "Condor's Nest": "old-spawn",
    "Cyprus": "old-spawn",
    "Darkshire": "new-spawn",
    "Dìxià Chéng": "new-spawn",
    "Eden": "outpost",
    "Ekilorea": "outpost",
    "Enchanted Isles": "old-spawn",
    "Evergreen": "outpost",
    "Freedom City": "new-spawn",
    "Frogtopia": "outpost",
    "Gold Spur": "old-spawn",
    "Hana Reservoir": "old-spawn",
    "HoboNation": "old-spawn",
    "Illyria": "outpost",
    "Krill Lanka": "outpost",
    "Malbork": "new-spawn",
    "Malus": "outpost",
    "Mercy": "old-spawn",
    "Merk Town": "new-spawn",
    "Naval Detroit": "old-spawn",
    "New Spawn": "new-spawn",
    "Old Mann": "old-spawn",
    "Old Spawn": "old-spawn",
    "Outpost": "outpost",
    "Pagasa City": "outpost",
    "Primitown": "old-spawn",
    "Rotherhythe": "outpost",
    "STEAMEDHAMS": "new-spawn",
    "Scintilla": "old-spawn",
    "Seacrestica": "outpost",
    "Siberia": "old-spawn",
    "Sin City": "outpost",
    "Sky Temple": "new-spawn",
    "Solitude": "new-spawn",
    "Southern Hollow": "old-spawn",
    "Spanish Settlements": "new-spawn",
    "Steambolt": "outpost",
    "Stonehelm": "outpost",
    "Tegridy": "outpost",
    "Terni": "old-spawn",
    "Terra": "outpost",
    "The Swamp": "old-spawn",
    "Totemia": "new-spawn",
    "Valhalla": "old-spawn",
    "Vault 11": "new-spawn",
    "Vault 17": "old-spawn",
    "Waterthorn": "old-spawn",
    "WestHaven": "old-spawn",
    "Willichburg": "old-spawn",
    "Wolven": "old-spawn",
}

/**
 * Metadata for all the named methods of transport.
*/
const methodMetadata = {
    // Outpost Roadways
    "UV-OP-1":{
        color:["#008080","white"],
        operator:"UVDOT Outpost Division"
    },
    "UV-OP-2":{
        color:["#009090","white"],
        operator:"UVDOT Outpost Division"
    },
    "UV-OP-201":{
        color:["#0090a0","white"],
        operator:"UVDOT Outpost Division"
    },
    "UV-OP-203":{
        color:["#0090b0","white"],
        operator:"UVDOT Outpost Division"
    },
    // New Spawn Roadways
    // Old Spawn Roadways
    // Misc. Roadways
    "UV-VY":{
        altName: "The Voyaway",
        color:["#ffff00","black"],
        operator:"UVDOT Outpost Division"
    },
    "Road to Ekilorea Island":{
        color:["#b76b39","white"],
        operator:"Town of Ekilorea"
    },

    // Trains
    "UltraStar 1":{
        color:["#ab92bf","white"],
        operator:"Seacrestica Transports Outpost"
    },
    "UltraStar 2":{
        color:["#8c49c4","white"],
        operator:"Seacrestica Transports Outpost"
    },
    "UltraStar 3":{
        color:["#ab92bf","white"],
        operator:"Seacrestica Transports Outpost"
    },
    "UltraStar 4":{
        color:["#8c49c4","white"],
        operator:"Seacrestica Transports Outpost"
    },
    "UltraStar Express 1":{
        color:["#055d52","white"],
        operator:"Seacrestica Transports Outpost"
    },
    "UltraStar Express 2":{
        color:["#089180","white"],
        operator:"Seacrestica Transports Outpost"
    },

    // Iceways
    "OPE Ouest":{
        color:["#000000","white"],
        operator:"OPC"
    },
    "OPE Est":{
        color:["#000000","white"],
        operator:"OPC"
    },
    "OPE Sud":{
        color:["#000000","white"],
        operator:"OPC"
    },
    "OPE Nord":{
        color:["#000000","white"],
        operator:"OPC"
    },

    // Warps
    "Outpost Warp":{
        color:["#000000","white"],
        operator:"Server Staff"
    },
    "New Spawn Warp":{
        color:["#000000","white"],
        operator:"Server Staff"
    },
    "Old Spawn Warp":{
        color:["#000000","white"],
        operator:"Server Staff"
    },
    "Olympics Warp":{
        color:["#000000","white"],
        operator:"Server Staff"
    },
}

/**
 * All possible routes between locations, in a semi-human readable format.
*/
const routes = {
    "Banal-Witchita": [
        [-1890005,-1898735],
        {
            roadways: {
                "UV-OP-1 Ekilorea Intersection": [["UV-OP-1", "UV-VY"], 2000],
                "UV-OP-1 UV-VY Intersection": [["UV-OP-1", "UV-VY"], 3000],
            },
        },
    ],
    "Ekilorea": [
        [-1888319,-1899481],
        {
            roadways: {
                "UV-OP-1 Ekilorea Intersection": [["Road to Ekilorea Island"], 1200],
            },
        },
    ],
    "Evergreen": [
        [-1890899,-1896049],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-201"], 1500],

                "UV-OP-1 UV-VY Intersection": [["UV-OP-1"], 3000],
            },
            railways: {
                "Outpost": [["UltraStar 1"], 1600, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
            iceways: {
                "Stonehelm": [["OPE Nord"], 1200]
            },
        },
    ],
    "Illyria": [
        [-1894692,-1894826],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2"], 1200],
            },
            railways: {
                "Pagasa City": [["UltraStar 2"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
            iceways: {
                "Outpost": [["OPE Ouest"], 1200]
            },
        },
    ],
    "Outpost": [
        [-1890764,-1894658],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2"], 1200],

                "Evergreen": [["UV-OP-1"], 1200],
                "Stonehelm": [["UV-OP-1", "UV-OP-2"], 1200],
            },
            railways: {
                "Seacrestica": [["UltraStar 1"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Evergreen": [["UltraStar 2"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
            },
            iceways: {
                "Illyria": [["OPE Ouest"], 1200],
                "Stonehelm": [["OPE Nord"], 1200],
            },
        },
    ],
    "Pagasa City": [
        [-1893328,-1894502],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-203"], 1200],
            },
            railways: {
                "Seacrestica": [["UltraStar 2"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Illyria": [["UltraStar 1"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
            },
        },
    ],
    "Seacrestica": [
        [-1891664,-1893972],
        {
            railways: {
                "Outpost": [["UltraStar 2"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Pagasa City": [["UltraStar 1"], 1200, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
        },
    ],
    "Stonehelm": [
        [-1893230,-1895039],
        {
            roadways: {
                "Outpost": [["UV-OP-1", "UV-OP-2"], 1200],
            },
            iceways: {
                "Outpost": [["OPE Nord"], 1200],
                "Evergreen": [["OPE Nord"], 1200]
            },
        }
    ],
    "UV-OP-1 UV-VY Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "Evergreen": [["UV-OP-1"], 2000],
                "Banal-Witchita": [["UV-OP-1", "UV-VY"], 1200],
            }
        }
    ],
    "UV-OP-1 Ekilorea Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "Banal-Witchita": [["UV-OP-1", "UV-VY"], 2000],
                "Ekilorea": [["Road to Ekilorea Island"], 1200],
            }
        }
    ],
    "UV-OP-201 UV-OP-2 Intersection": [
        [-1891962,-1895207],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2"], 1200],

                "Evergreen": [["UV-OP-201"], 1200],
                "Outpost": [["UV-OP-2"], 1200],
            },
        },
    ],
    "UV-OP-203 UV-OP-2 Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2"], 1200],

                "Illyria": [["UV-OP-2"], 1200],
                "Pagasa City": [["UV-OP-203"], 1200],
            },
        },
    ],
}
