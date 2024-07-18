import $ from 'jquery'

/**
 * Gets the speeds of all the methods of transit.
*/
export function getSpeeds() {
	return {
		iceways: 70, // Boat go zoom
		pistonbolts: 50, // Estimated speed of a well built pistonbolt. May need adjusting
		railways: 8, // Maximum speed of a minecart
		boatways: 8, // Maximum speed of a boat
		//@ts-expect-error .val() outputs a weird type, ignore it
		roadways: ($("#roads-as").val() === "") ? 5 : parseFloat($("#roads-as").val()),
		walkways: 5, // Speed of walking, also the speed used by Tolls
	}
}

//! Please read the entire technical.md file before attempting to edit this the vars below
//! I would prefer you make an issue instead if you want something added
//! If you have the technical know-how, go here https://github.com/Niklas20114552/uvdot-editor

/**
* Metadata for all the named methods of transport.
*/
export const lines: metadataContainer = {
	// Outpost Roadways
	"UV-OP-1": {
		color: ["#008080", "white"],
		operator: "UVDOT Outpost Division"
	},
	"UV-OP-2": {
		color: ["#009090", "white"],
		operator: "UVDOT Outpost Division"
	},
	"UV-OP-201": {
		color: ["#0090a0", "white"],
		operator: "UVDOT Outpost Division, Towns of Rivendell and Evergreen"
	},
	"UV-OP-203": {
		color: ["#0090b0", "white"],
		operator: "UVDOT Outpost Division"
	},
	// New Spawn Roadways
	"UV-NS-1": {
		color: ["#9fa4d8", "black"],
		operator: "UVDOT New Spawn Division"
	},
	"UV-NS-2": {
		color: ["#9aa2d0", "black"],
		operator: "UVDOT New Spawn Division"
	},
	"UV-NS-202": {
		color: ["#b6bff6", "black"],
		operator: "UVDOT New Spawn Division"
	},
	"UV-NS-204": {
		color: ["#bcc1ff", "black"],
		operator: "UVDOT New Spawn Division"
	},
	// Old Spawn Roadways
	"UV-OS-1": {
		color: ["#a0a0a0", "black"],
		operator: "UVDOT Old Spawn Division"
	},
	// Misc. Roadways
	"The Road to Roth": {
		color: ["#ca5000", "white"],
		operator: "OPC",
		altName: "The Road to Roth"
	},
	"UV-VY": {
		altName: "The Voyaway",
		color: ["#ffff00", "black"],
		operator: "UVDOT"
	},
	"Road to Ekilorea Island": {
		color: ["#b76b39", "white"],
		operator: "Town of Ekilorea"
	},
	"Unlabeled Roadway": {
		color: ["black", "white"],
		operator: "Unknown"
	},
	// Trains
	"UltraStar 1": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	"UltraStar 2": {
		color: ["#8c49c4", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	"UltraStar 3": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	"UltraStar 4": {
		color: ["#8c49c4", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	"UltraStar Express 1": {
		color: ["#055d52", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	"UltraStar Express 2": {
		color: ["#089180", "white"],
		operator: "Seacrestica Transports Outpost"
	},
	// Outpost Iceways
	"OPE Ouest": {
		color: ["#cc0000", "white"],
		operator: "OPC"
	},
	"OPE Est": {
		color: ["#00ccb8", "black"],
		operator: "OPC"
	},
	"OPE Sud": {
		color: ["#334eff", "white"],
		operator: "OPC"
	},
	"OPE Nord": {
		color: ["#119c07", "white"],
		operator: "OPC"
	},
	// New Spawn Iceways
	"Spawn Red Line": {
		color: ["#ff0000", "white"],
		operator: "Unknown"
	},
	"Spawn Yellow Line": {
		color: ["#f7eb00", "white"],
		operator: "Unknown"
	},
	"Spawn Aqua Line": {
		color: ["#00feed", "black"],
		operator: "Unknown"
	},
	"Spawn Purple Line": {
		color: ["#8800f7", "white"],
		operator: "Unknown"
	},
	"Spawn Green Line": {
		color: ["#059100", "white"],
		operator: "Unknown"
	},
	"Spawn Orange Line": {
		color: ["#ff9100", "white"],
		operator: "Unknown"
	},
	"Spawn Pink Line": {
		color: ["#f262ff", "white"],
		operator: "Unknown"
	},
	"Spawn Blue Line": {
		color: ["#0040fe", "white"],
		operator: "Unknown"
	},
	"Spawn Gold Line": {
		color: ["#dea000", "white"],
		operator: "Unknown"
	},
	"Spawn Silver Line": {
		color: ["#c1e8ff", "black"],
		operator: "USUV, Unknown"
	},
	// Warps
	"Outpost Warp": {
		color: ["#6ed8b8", "white"],
		operator: "Server Staff"
	},
	"New Spawn Warp": {
		color: ["#feff72", "black"],
		operator: "Server Staff"
	},
	"Old Spawn Warp": {
		color: ["#8b4f4f", "white"],
		operator: "Server Staff"
	},
	"Olympics Warp": {
		color: ["#864663", "white"],
		operator: "Server Staff"
	},
	// Transfers
	"Outpost UltraStar Station Main Entrance": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost",
		altName: "Main Entrance",
		transfer: true
	},
	"Evergreen UltraStar Station Main Entrance": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost",
		altName: "Main Entrance",
		transfer: true
	},
	"Banal-Witchita UltraStar Station Main Entrance": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost",
		altName: "Main Entrance",
		transfer: true
	},
	"Ekilorea UltraStar Station Main Entrance": {
		color: ["#ab92bf", "white"],
		operator: "Seacrestica Transports Outpost",
		altName: "Main Entrance",
		transfer: true
	},
};

/**
* All possible routes between locations, in a semi-human readable format.
*/
export const routes: routeType = {
	// Selectable nodes visible in the UI
	"Banal-Witchita": [
		[-1890005, -1898735],
		{
			roadways: {
				"UV-OP-1 Ekilorea Intersection": [["UV-OP-1", "UV-VY", "The Road to Roth"], 1800],
				"UV-OP-1 UV-VY Intersection": [["UV-OP-1", "UV-VY", "The Road to Roth"], 2700],
			},
			iceways: {
				"Rotherhythe": [["OPE Nord"], 8500],
				"Hounderia": [["OPE Nord"], 1000],
			},
			walkways: {
				"Banal-Witchita UltraStar Station": [["Banal-Witchita UltraStar Station Main Entrance"], 150],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Borealis": [
		[-2002925, -1995367],
		{
			roadways: {
				"Southern Polaris": [["UV-NS-2", "UV-VY"], 500],
				"Sky Temple": [["UV-NS-2", "UV-VY"], 500],
				"Hephasdor Factory": [["UV-NS-202"], 1300],
				"Northern Borealis": [["Unlabeled Roadway"], 300]
			},
			iceways: {
				"Publix": [["Spawn Purple Line"], 100],
				"Northwest Island": [["Spawn Purple Line"], 450],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Northern Borealis": [
		[-2002925, -1995367],
		{
			roadways: {
				"Borealis": [["Unlabeled Roadway"], 300]
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Ekilorea": [
		[-1888320, -1899676],
		{
			roadways: {
				"UV-OP-1 Ekilorea Intersection": [["Road to Ekilorea Island"], 200],
			},
			walkways: {
				"Ekilorea UltraStar Station": [["Ekilorea UltraStar Station Main Entrance"], 200],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Evergreen": [
		[-1890899, -1896049],
		{
			roadways: {
				"UV-OP-201 UV-OP-2 Intersection": [["UV-OP-201"], 1500],
				"UV-OP-1 UV-VY Intersection": [["UV-OP-1", "The Road to Roth"], 1000],

				"Outpost": [["UV-OP-1"], 1300],
			},
			iceways: {
				"Stonehelm": [["OPE Nord"], 2400],
				"Hounderia": [["OPE Nord"], 1700],
			},
			walkways: {
				"Evergreen UltraStar Station": [["Evergreen UltraStar Station Main Entrance"], 150],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Hounderia": [
		[-1889736, -1898044],
		{
			iceways: {
				"Evergreen": [["OPE Nord"], 1700],
				"Banal-Witchita": [["OPE Nord"], 1000],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Illyria": [
		[-1894664, -1894940],
		{
			roadways: {
				"La Cueva": [["UV-OP-2", "The Road to Roth"], 200],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"La Cueva": [
		[-1894664, -1894940],
		{
			roadways: {
				"UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2", "The Road to Roth"], 1500],

				"Illyria": [["UV-OP-2", "The Road to Roth"], 200],
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
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Malus": [
		[-1891248, -1890524],
		{
			railways: {
				"Outpost": [["UltraStar 4"], 5000, {
					currency: "Emerald",
					price: 4,
					pass: "SeaCard",
					passPrice: 2
				}]
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Mercy": [
		[-526, 155],
		{
			roadways: {
				"Old Spawn": [["UV-OS-1"], 1200],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"New Spawn": [
		[-2002407, -1995444],
		{
			roadways: {
				"Eastern Polaris": [["UV-NS-204"], 200],
				"Southern Polaris": [["UV-NS-1", "UV-NS-2", "UV-VY"], 500],
				"Southern Spawn Border": [["UV-NS-1", "UV-NS-2", "UV-VY"], 320]
			},
			iceways: {
				"Borealis": [["Spawn Purple Line"], 500],
				"Birchgrove": [["Spawn Orange Line"], 500],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Old Spawn": [
		[-1335, -22],
		{
			roadways: {
				"Mercy": [["UV-OS-1"], 1200],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Outpost": [
		[-1890764, -1894658],
		{
			roadways: {
				"UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2", "The Road to Roth"], 1200],

				"Evergreen": [["UV-OP-1", "The Road to Roth"], 1300],
				"Stonehelm": [["UV-OP-1", "UV-OP-2"], 800],
			},
			iceways: {
				"La Cueva": [["OPE Ouest"], 3800],
				"Stonehelm": [["OPE Nord"], 880],
			},
			walkways: {
				"Outpost UltraStar Station": [["Outpost UltraStar Station Main Entrance"], 150, {
					currency: "Emerald",
					price: 4,
					pass: "SeaCard",
					passPrice: 2
				},
				"Take the copper spiral staircase near the warp spot down to around Y -30, the station should be in front of you."
				],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Pagasa City": [
		[-1893320, -1894596],
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
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Rotherhythe": [
		[-1887536, -1905476],
		{
			roadways: {
				"UV-OP-1 Ekilorea Intersection": [["UV-OP-1", "UV-VY", "The Road to Roth"], 6000],

				"Steambolt": [["UV-OP-1", "UV-VY", "The Road to Roth"], 7000],
			},
			iceways: {
				"Banal-Witchita": [["OPE Nord"], 8500],
				"Steambolt": [["OPE Nord"], 8500]
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Seacrestica": [
		[-1891664, -1893972],
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
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Sky Temple": [
		[-2002407, -1995444],
		{
			roadways: {
				"Northern Borealis": [["UV-NS-204"], 550],
				"Borealis": [["UV-NS-2", "UV-VY"], 560],
			},
			iceways: {
				"Northwest Island": [["Spawn Purple Line"], 200],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Steambolt": [
		[-1890008, -1911524],
		{
			roadways: {
				"Rotherhythe": [["UV-OP-1", "UV-VY", "The Road to Roth"], 7000],
			},
			iceways: {
				"Rotherhythe": [["OPE Nord"], 8500]
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Stonehelm": [
		[-1890016, -1894716],
		{
			roadways: {
				"Outpost": [["UV-OP-1", "UV-OP-2"], 800],
			},
			iceways: {
				"Outpost": [["OPE Nord"], 880],
				"Evergreen": [["OPE Nord"], 2400]
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	// Cannot be selected, but are still valid nodes
	"Banal-Witchita UltraStar Station": [
		[-1890899, -1896049],
		{
			railways: {
				"Evergreen UltraStar Station": [["UltraStar Express 2"], 2800],
				"Ekilorea UltraStar Station": [["UltraStar Express 1"], 1800]
			},
			walkways: {
				"Banal-Witchita": [["Banal-Witchita UltraStar Station Main Entrance"], 150],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Central Polaris": [
		[-1894664, -1894940],
		{
			roadways: {
				"Northern Polaris": [["UV-NS-1"], 300],
				"Southern Polaris": [["UV-NS-1"], 150],
				"Eastern Polaris": [["UV-NS-204"], 150],
				"Northern Borealis": [["UV-NS-204"], 150],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Ekilorea UltraStar Station": [
		[-1888320, -1899676],
		{

			railways: {
				"Banal-Witchita UltraStar Station": [["UltraStar Express 1"], 1800]
			},
			walkways: {
				"Ekilorea": [["Ekilorea UltraStar Station Main Entrance"], 150],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Evergreen UltraStar Station": [
		[-1890899, -1896049],
		{
			railways: {
				"Outpost UltraStar Station": [["UltraStar 1"], 1600],
				"Banal-Witchita UltraStar Station": [["UltraStar Express 1"], 2800]
			},
			walkways: {
				"Evergreen": [["Evergreen UltraStar Station Main Entrance"], 150],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Southern Polaris": [
		[-1894664, -1894940],
		{
			roadways: {
				"New Spawn": [["UV-NS-1", "UV-NS-2", "UV-VY"], 500],
				"Central Borealis": [["UV-NS-2", "UV-VY"], 500],
				"Central Polaris": [["UV-NS-1"], 150],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Hephasdor Factory": [
		[-1894664, -1894940],
		{
			roadways: {

			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Northwest Island": [
		[-1894664, -1894940],
		{
			iceways: {
				"Sky Temple": [["Spawn Purple Line"], 200],
				"Borealis": [["Spawn Purple Line"], 450],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"Outpost UltraStar Station": [
		[-1890764, -1894658],
		{
			railways: {
				"Seacrestica UltraStar Station": [["UltraStar 1"], 2000],
				"Evergreen UltraStar Station": [["UltraStar 2"], 1600],
				"Malus UltraStar Station": [["UltraStar 3"], 5000]
			},
			walkways: {
				"Outpost": [
					["Outpost UltraStar Station Main Entrance"], 150,
					undefined,
					"Go up the copper staircase at the exit to around Y 60, and look to your left."
				],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}

	],
	"UV-OP-1 UV-VY Intersection": [
		[-1893230, -1895039],
		{
			roadways: {
				"Evergreen": [["UV-OP-1", "The Road to Roth"], 1000],
				"Banal-Witchita": [["UV-OP-1", "UV-VY", "The Road to Roth"], 2700],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"UV-OP-1 Ekilorea Intersection": [
		[-1893230, -1895039],
		{
			roadways: {
				"Banal-Witchita": [["UV-OP-1", "UV-VY", "The Road to Roth"], 1800],
				"Ekilorea": [["Road to Ekilorea Island"], 200],
				"Rotherhythe": [["UV-OP-1", "UV-VY", "The Road to Roth"], 6000],
			}
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"UV-OP-201 UV-OP-2 Intersection": [
		[-1891962, -1895207],
		{
			roadways: {
				"UV-OP-203 UV-OP-2 Intersection": [["UV-OP-2", "The Road to Roth"], 1300],

				"Evergreen": [["UV-OP-201"], 1500],
				"Outpost": [["UV-OP-2", "The Road to Roth"], 1200],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
	"UV-OP-203 UV-OP-2 Intersection": [
		[-1893230, -1895039],
		{
			roadways: {
				"UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2", "The Road to Roth"], 1300],

				"La Cueva": [["UV-OP-2", "The Road to Roth"], 1500],
				"Pagasa City": [["UV-OP-203"], 350],
			},
		},
		{
			layer: "overworld",
			region: "outpost"
		}
	],
};
