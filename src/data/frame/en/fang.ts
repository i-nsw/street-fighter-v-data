const fang = [
  {
    name: "Standing LP",
    outbreak: "4",
    persistence: "3",
    rigidity: "6",
    hit: "5",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Standing MP",
    outbreak: "7",
    persistence: "4",
    rigidity: "15",
    hit: "2",
    guard: "-3",
    damage: "60",
    stan: "100",
    remarks:
      "Second hit will not hit airborne opponents\n                                                                S*CA*V*Only possible during 1st attack\nVS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Standing HP",
    outbreak: "7",
    persistence: "3",
    rigidity: "19",
    hit: "1",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks:
      "Triggers Crush Counter (+16F)\n                                                                                                                                                                VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Standing LK",
    outbreak: "6",
    persistence: "3",
    rigidity: "7",
    hit: "5",
    guard: "3",
    damage: "40",
    stan: "70",
    remarks: "VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Standing MK",
    outbreak: "5",
    persistence: "4",
    rigidity: "14",
    hit: "3",
    guard: "1",
    damage: "60(*60)",
    stan: "100(*100)",
    remarks:
      "Second hit will not hit crouching opponents\n                                First hit will not hit airborne opponents\n                                                                *During 2nd mid-air hit\nVS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Standing HK",
    outbreak: "12",
    persistence: "4",
    rigidity: "16",
    hit: "6",
    guard: "1",
    damage: "80",
    stan: "150",
    remarks: "S*CA*Only possible during 1st attack\nVS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LP",
    outbreak: "4",
    persistence: "3",
    rigidity: "8",
    hit: "3",
    guard: "1",
    damage: "30",
    stan: "70",
    remarks: "VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MP",
    outbreak: "6",
    persistence: "2",
    rigidity: "16",
    hit: "1",
    guard: "-2",
    damage: "50",
    stan: "100",
    remarks: "VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HP",
    outbreak: "9",
    persistence: "5",
    rigidity: "19",
    hit: "D",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "VS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  { name: "Crouching LK", outbreak: "5", persistence: "3", rigidity: "7", hit: "4", guard: "1", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching MK",
    outbreak: "8",
    persistence: "5",
    rigidity: "14",
    hit: "5",
    guard: "3",
    damage: "60",
    stan: "100(*100)",
    remarks:
      "Second hit will not hit airborne opponents\n                                                                S*CA*Only possible during 1st attack\n*During 1st mid-air hit\nVS*Can only be canceled into V-Nishodoku",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HK",
    outbreak: "9",
    persistence: "4",
    rigidity: "24",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "Triggers Crush Counter  (D)\n                                                                                                                                                                V*Only possible during 1st attack",
    type: "normal",
    command: ""
  },
  { name: "Jumping LP", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "50", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  {
    name: "Jumping HP",
    outbreak: "8",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "During neutral jump only - can move forward with directional input",
    type: "jump",
    command: ""
  },
  { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "50", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Forward Jump HK", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Vertical/Back Jump HK", outbreak: "9", persistence: "4", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "", type: "jump", command: "" },
  {
    name: "Nirenko",
    outbreak: "12",
    persistence: "4",
    rigidity: "21",
    hit: "0",
    guard: "-5",
    damage: "100",
    stan: "200",
    remarks: "S*CA*V*Only possible during 1st attack",
    type: "unique",
    command: "↘ + HP"
  },
  {
    name: "Senpukuga (Prone)",
    outbreak: "",
    persistence: "",
    rigidity: "54 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "Can extend the move duration by a max of 86F by continuing to hold down\nS*Can be canceled into Nishikyu from 22F",
    type: "unique",
    command: "↓ + LP"
  },
  { name: "Senpukuga (Attack)", outbreak: "10", persistence: "4", rigidity: "14", hit: "6", guard: "2", damage: "70", stan: "100", remarks: "", type: "unique", command: "↓ + LP ▶" },
  { name: "Shimonshu", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Kyoshitsugeki", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Nishodoku",
    outbreak: "22",
    persistence: "250",
    rigidity: "40 total frames",
    hit: "",
    guard: "",
    damage: "50 poison",
    stan: "",
    remarks: "Will not hit airborne opponents\n                                                                Causes poison effect on hit",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS1] Nishodoku",
    outbreak: "22",
    persistence: "259",
    rigidity: "45 total frames",
    hit: "2",
    guard: "-2",
    damage: "30+50 poison",
    stan: "50",
    remarks:
      "Uses 250F V-Gauge Timer\n                                                                                                                                                                                Causes poison effect on hit\nCan be canceled into from special move-cancelable normal moves",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Sodokubu",
    outbreak: "3",
    persistence: "10",
    rigidity: "54",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks: "打撃属性の攻撃を当身可能\nSubject to counter hit during move duration",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Sodokubu (upon successful parry)",
    outbreak: "3",
    persistence: "8",
    rigidity: "62",
    hit: "D",
    guard: "-42",
    damage: "60+50 poison",
    stan: "120",
    remarks: "",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS2] Sodokubu (upon successful parry)",
    outbreak: "3",
    persistence: "8",
    rigidity: "62",
    hit: "D",
    guard: "-42",
    damage: "80+50 poison",
    stan: "150",
    remarks: "",
    type: "vsystem",
    command: ""
  },
  {
    name: "Dokunomu",
    outbreak: "1",
    persistence: "",
    rigidity: "2",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 900F\n                                                                                                                                                                                While active, coming into contact with F.A.N.G will poison the opponent\nNo charge time required for charge moves used from a special move cancel",
    type: "vsystem",
    command: ""
  },
  {
    name: "Nikaiho",
    outbreak: "",
    persistence: "",
    rigidity: "31 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "1F - 25F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    type: "vsystem",
    command: ""
  },
  {
    name: "Nishikyu",
    outbreak: "13",
    persistence: "",
    rigidity: "60 total frames",
    hit: "-7",
    guard: "-11",
    damage: "40+50 poison",
    stan: "100",
    remarks: "Causes poison effect on hit\nS*Can only cancel into Nikankyaku, EX Nikankyaku",
    type: "special",
    command: ""
  },
  {
    name: "EX Nishikyu",
    outbreak: "13",
    persistence: "",
    rigidity: "49 total frames",
    hit: "3",
    guard: "-1",
    damage: "90+50 poison",
    stan: "100",
    remarks: "Causes poison effect on hit\nS*Can only cancel into Nikankyaku",
    type: "special",
    command: ""
  },
  {
    name: "L Ryobenda",
    outbreak: "14",
    persistence: "3",
    rigidity: "29",
    hit: "D",
    guard: "-9",
    damage: "60+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "M Ryobenda",
    outbreak: "19",
    persistence: "80",
    rigidity: "46 total frames",
    hit: "1",
    guard: "-8",
    damage: "40+50 poison",
    stan: "100",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "H Ryobenda",
    outbreak: "23",
    persistence: "120",
    rigidity: "52 total frames",
    hit: "-1",
    guard: "-10",
    damage: "40+50 poison",
    stan: "100",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Ryobenda",
    outbreak: "15",
    persistence: "2",
    rigidity: "48 total frames",
    hit: "D",
    guard: "2",
    damage: "60+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit\nS*Airborne portion can be canceled into Nikyoushu",
    type: "special",
    command: ""
  },
  {
    name: "EX Ryobenda (Placed Poison)",
    outbreak: "",
    persistence: "220",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40+50 poison",
    stan: "44",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "L Sotoja",
    outbreak: "13",
    persistence: "8",
    rigidity: "23",
    hit: "0",
    guard: "-11",
    damage: "70+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "M Sotoja",
    outbreak: "16",
    persistence: "8",
    rigidity: "23(*22)",
    hit: "D/-1",
    guard: "-9",
    damage: "80+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit\n*1st hit",
    type: "special",
    command: ""
  },
  {
    name: "H Sotoja",
    outbreak: "21",
    persistence: "8",
    rigidity: "24(*23)",
    hit: "D/-2",
    guard: "-10",
    damage: "100+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit\n*1st hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Sotoja",
    outbreak: "14",
    persistence: "8",
    rigidity: "18",
    hit: "D",
    guard: "-2",
    damage: "100+50 poison",
    stan: "200",
    remarks: "Causes poison effect on hit",
    type: "special",
    command: ""
  },
  {
    name: "L Nikankyaku",
    outbreak: "",
    persistence: "",
    rigidity: "29 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "6F - 28F  projectile invincibility",
    type: "special",
    command: ""
  },
  {
    name: "M Nikankyaku",
    outbreak: "",
    persistence: "",
    rigidity: "29 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "6F - 28F  projectile invincibility",
    type: "special",
    command: ""
  },
  {
    name: "H Nikankyaku",
    outbreak: "",
    persistence: "",
    rigidity: "31 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "6F - 28F  projectile invincibility",
    type: "special",
    command: ""
  },
  {
    name: "EX Nikankyaku",
    outbreak: "",
    persistence: "",
    rigidity: "33 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "25F - 30F  projectile invincibility\n1F - 24F  attack & projectile invincibility",
    type: "special",
    command: ""
  },
  { name: "Nikyoushu", outbreak: "", persistence: "", rigidity: "9 frame(s) after landing", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "special", command: "" },
  {
    name: "Shishiruirui",
    outbreak: "10",
    persistence: "9",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "292+60 poison",
    stan: "0",
    remarks: "1F - 25F  full invincibility\n                                                Only the projectile has a projectile-nullifying hitbox",
    type: "ca",
    command: ""
  }
];
export { fang };
