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
    "Hounderia":"outpost",
    "Illyria": "outpost",
    "La Cueva": "outpost",
    "Krill Lanka": "outpost",
    "Malbork": "new-spawn",
    "Malus": "outpost",
    "Naval Detroit": "old-spawn",
    "Mercy": "old-spawn",
    "Merk Town": "new-spawn",
    "Moderne": "new-spawn",
    "New Spawn": "new-spawn",
    "Old Mann": "old-spawn",
    "Old Spawn": "old-spawn",
    "Outpost": "outpost",
    "Pagasa City": "outpost",
    "Primitown": "old-spawn",
    "Rotherhythe": "outpost",
    "Scintilla": "old-spawn",
    "Seacrestica": "outpost",
    "Siberia": "old-spawn",
    "Sin City": "outpost",
    "Sky Temple": "new-spawn",
    "Solitude": "new-spawn",
    "Southern Hollow": "old-spawn",
    "Spanish Settlements": "new-spawn",
    "Steambolt": "outpost",
    "STEAMEDHAMS": "new-spawn",
    "Stonehelm": "outpost",
    "Tegridy": "outpost",
    "Terni": "old-spawn",
    "Terra": "outpost",
    "The Swamp": "old-spawn",
    "Totemia": "new-spawn",
    "USUV HQ": "new-spawn",
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
    "UV-NS-1":{
        color:["#9fa4d8","black"],
        operator:"UVDOT New Spawn Division"
    },
    "UV-NS-2":{
        color:["#9aa2d0","black"],
        operator:"UVDOT New Spawn Division"
    },
    "UV-NS-202":{
        color:["#b6bff6","black"],
        operator:"UVDOT New Spawn Division"
    },
    "UV-NS-204":{
        color:["#bcc1ff","black"],
        operator:"UVDOT New Spawn Division"
    },
    // Old Spawn Roadways
    "UV-OS-1":{
        color:["#a0a0a0","black"],
        operator:"UVDOT Old Spawn Division"
    },
    // Misc. Roadways
    "UV-VY":{
        altName: "The Voyaway",
        color:["#ffff00","black"],
        operator:"UVDOT"
    },
    "Road to Ekilorea Island":{
        color:["#b76b39","white"],
        operator:"Town of Ekilorea"
    },
    "Unlabeled Roadway":{
        color:["black","white"],
        operator:"Unknown"
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
    // Outpost Iceways
    "OPE Ouest":{
        color:["#cc0000","white"],
        operator:"OPC"
    },
    "OPE Est":{
        color:["#00ccb8","black"],
        operator:"OPC"
    },
    "OPE Sud":{
        color:["#334eff","white"],
        operator:"OPC"
    },
    "OPE Nord":{
        color:["#119c07","white"],
        operator:"OPC"
    },
    // New Spawn Iceways
    "Spawn Red Line":{
        color:["#ff0000","white"],
        operator:"Unknown"
    },
    "Spawn Yellow Line":{
        color:["#f7eb00","white"],
        operator:"Unknown"
    },
    "Spawn Aqua Line":{
        color:["#00feed","black"],
        operator:"Unknown"
    },
    "Spawn Purple Line":{
        color:["#8800f7","white"],
        operator:"Unknown"
    },
    "Spawn Green Line":{
        color:["#059100","white"],
        operator:"Unknown"
    },
    "Spawn Orange Line":{
        color:["#ff9100","white"],
        operator:"Unknown"
    },
    "Spawn Pink Line":{
        color:["#f262ff","white"],
        operator:"Unknown"
    },
    "Spawn Blue Line":{
        color:["#0040fe","white"],
        operator:"Unknown"
    },
    "Spawn Gold Line":{
        color:["#dea000","white"],
        operator:"Unknown"
    },
    "Spawn Silver Line":{
        color:["#c1e8ff","black"],
        operator:"USUV, Unknown"
    },
    // Warps
    "Outpost Warp":{
        color:["#6ed8b8","white"],
        operator:"Server Staff"
    },
    "New Spawn Warp":{
        color:["#feff72","black"],
        operator:"Server Staff"
    },
    "Old Spawn Warp":{
        color:["#8b4f4f","white"],
        operator:"Server Staff"
    },
    "Olympics Warp":{
        color:["#864663","white"],
        operator:"Server Staff"
    },
}

/**
 * All possible routes between locations, in a semi-human readable format.
*/
const routes = {
    // Selectable nodes visible in the UI
    "Banal-Witchita": [
        [-1890005,-1898735],
        {
            roadways: {
                "UV-OP-1 Ekilorea Intersection": [["UV-OP-1", "UV-VY"], 1800],
                "UV-OP-1 UV-VY Intersection": [["UV-OP-1", "UV-VY"], 2700],
            },
            iceways: {
                "Rotherhythe": [["OPE Nord"], 8500],
                "Hounderia": [["OPE Nord"], 1000],
            }
        },
    ],
    "Borealis": [
        [-2002925,-1995367],
        {
            roadways: {
                "Southern Polaris": [["UV-NS-2","UV-VY"], 500],
                "Sky Temple": [["UV-NS-2","UV-VY"], 500],
                "Hephasdor Factory": [["UV-NS-202"], 1300],
                "Northern Borealis": [["Unlabeled Roadway"], 300]
            },
            iceways: {
                "Publix": [["Spawn Purple Line"], 100],
                "Northwest Island": [["Spawn Purple Line"], 450],
            },
        },
    ],
    "Northern Borealis": [
        [],
        {
            roadways: {
                "Borealis": [["Unlabeled Roadway"], 300]
            },
        }
    ],
    "Ekilorea": [
        [-1888320,-1899676],
        {
            roadways: {
                "UV-OP-1 Ekilorea Intersection": [["Road to Ekilorea Island"], 200],
            },
        },
    ],
    "Evergreen": [
        [-1890899,-1896049],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-201"], 1500],
                "UV-OP-1 UV-VY Intersection": [["UV-OP-1"], 1000],
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
                "Stonehelm": [["OPE Nord"], 2400],
                "Hounderia": [["OPE Nord"], 1700],
            },
        },
    ],
    "Hounderia": [
        [-1889736,-1898044],
        {
            iceways: {
                "Evergreen": [["OPE Nord"], 1700],
                "Banal-Witchita": [["OPE Nord"], 1000],
            }
        }
    ],
    "Illyria": [
        [-1894664,-1894940],
        {
            roadways: {
                "La Cueva": [["UV-OP-2"], 200],
            },
        },
    ],
    "La Cueva": [
        [-1894664,-1894940],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2"], 1500],

                "Illyria": [["UV-OP-2"], 200],
            },
            railways: {
                "Pagasa City": [["UltraStar 2"], 2000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
            iceways: {
                "Outpost": [["OPE Ouest"], 3800]
            },
        },
    ],
    "Malus":[
        [-1891248,-1890524],
        {
            railways: {
                "Outpost": [["UltraStar 4"], 5000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            }
        }
    ],
    "Mercy": [
        [-526,155],
        {
            roadways: {
                "Old Spawn": [["UV-OS-1"], 1200],
            },
        },
    ],
    "New Spawn": [
        [-2002407,-1995444],
        {
            roadways: {
                "Eastern Polaris": [["UV-NS-204"], 200],
                "Southern Polaris": [["UV-NS-1","UV-NS-2","UV-VY"], 500],
                "Southern Spawn Border": [["UV-NS-1","UV-NS-2","UV-VY"], 320]
            },
            iceways: {
                "Borealis": [["Spawn Purple Line"], 500],
                "Birchgrove": [["Spawn Orange Line"], 500],
            },
        },
    ],
    "Old Spawn": [
        [-1335,-22],
        {
            roadways: {
                "Mercy": [["UV-OS-1"], 1200],
            },
        },
    ],
    "Outpost": [
        [-1890764,-1894658],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2"], 1200],

                "Evergreen": [["UV-OP-1"], 1300],
                "Stonehelm": [["UV-OP-1", "UV-OP-2"], 800],
            },
            railways: {
                "Seacrestica": [["UltraStar 1"], 2000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Evergreen": [["UltraStar 2"], 1600, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Malus": [["UltraStar 3"], 5000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
            iceways: {
                "La Cueva": [["OPE Ouest"], 3800],
                "Stonehelm": [["OPE Nord"], 880],
            },
        },
    ],
    "Pagasa City": [
        [-1893320,-1894596],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-203"], 350],
            },
            railways: {
                "Seacrestica": [["UltraStar 2"], 2100, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "La Cueva": [["UltraStar 1"], 2000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
            },
        },
    ],
    "Rotherhythe": [
        [-1887536,-1905476],
        {
            roadways: {
                "UV-OP-1 Ekilorea Intersection": [["UV-OP-1", "UV-VY"], 6000],

                "Steambolt": [["UV-OP-1", "UV-VY"], 7000],
            },
            iceways: {
                "Banal-Witchita": [["OPE Nord"], 8500],
                "Steambolt": [["OPE Nord"], 8500]
            },
        }
    ],
    "Seacrestica": [
        [-1891664,-1893972],
        {
            railways: {
                "Outpost": [["UltraStar 2"], 2000, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }],
                "Pagasa City": [["UltraStar 1"], 2100, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
        },
    ],
    "Sky Temple": [
        [-2002407,-1995444],
        {
            roadways: {
                "Northern Borealis": [["UV-NS-204"], 550],
                "Borealis": [["UV-NS-2","UV-VY"], 560],
            },
            iceways: {
                "Northwest Island": [["Spawn Purple Line"], 200],
            },
        },
    ],
    "Steambolt": [
        [-1890008,-1911524],
        {
            roadways: {
                "Rotherhythe": [["UV-OP-1", "UV-VY"], 7000],
            },
            iceways: {
                "Rotherhythe": [["OPE Nord"], 8500]
            },
        }
    ],
    "Stonehelm": [
        [-1890016,-1894716],
        {
            roadways: {
                "Outpost": [["UV-OP-1", "UV-OP-2"], 800],
            },
            iceways: {
                "Outpost": [["OPE Nord"], 880],
                "Evergreen": [["OPE Nord"], 2400]
            },
        }
    ],
    // Cannot be selected, but are still valid nodes
    "Central Polaris": [
        [-1894664,-1894940],
        {
            roadways: {
                "Northern Polaris": [["UV-NS-1"], 300],
                "Southern Polaris": [["UV-NS-1"], 150],
                "Eastern Polaris": [["UV-NS-204"], 150],
                "Northern Borealis": [["UV-NS-204"], 150],
            },
        },
    ],
    "Southern Polaris": [
        [-1894664,-1894940],
        {
            roadways: {
                "New Spawn": [["UV-NS-1","UV-NS-2","UV-VY"], 500],
                "Central Borealis": [["UV-NS-2","UV-VY"], 500],
                "Central Polaris": [["UV-NS-1"], 150],
            },
        },
    ],
    "Hephasdor Factory": [
        [-1894664,-1894940],
        {
            roadways: {
                
            },
        },
    ],
    "Northwest Island": [
        [-1894664,-1894940],
        {
            iceways: {
                "Sky Temple": [["Spawn Purple Line"], 200],
                "Borealis": [["Spawn Purple Line"], 450],
            },
        },
    ],
    "UV-OP-1 UV-VY Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "Evergreen": [["UV-OP-1"], 1000],
                "Banal-Witchita": [["UV-OP-1", "UV-VY"], 2700],
            }
        }
    ],
    "UV-OP-1 Ekilorea Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "Banal-Witchita": [["UV-OP-1", "UV-VY"], 1800],
                "Ekilorea": [["Road to Ekilorea Island"], 200],
                "Rotherhythe": [["UV-OP-1", "UV-VY"], 6000],
            }
        }
    ],
    "UV-OP-201 UV-OP-2 Intersection": [
        [-1891962,-1895207],
        {
            roadways: {
                "UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2"], 1300],

                "Evergreen": [["UV-OP-201"], 1500],
                "Outpost": [["UV-OP-2"], 1200],
            },
        },
    ],
    "UV-OP-203 UV-OP-2 Intersection": [
        [-1893230,-1895039],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2"], 1300],

                "La Cueva": [["UV-OP-2"], 1500],
                "Pagasa City": [["UV-OP-203"], 350],
            },
        },
    ],
}
