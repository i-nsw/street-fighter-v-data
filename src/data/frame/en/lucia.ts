const lucia = [
  { name: "Standing LP", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MP", outbreak: "5", persistence: "3", rigidity: "10", hit: "7", guard: "3", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Standing HP", outbreak: "8", persistence: "2", rigidity: "22", hit: "2", guard: "-2", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
  { name: "Standing LK", outbreak: "5", persistence: "3", rigidity: "9", hit: "3", guard: "1", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Standing MK", outbreak: "7", persistence: "3", rigidity: "16", hit: "3", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Standing HK", outbreak: "13 ", persistence: "2", rigidity: "23", hit: "2", guard: "-4", damage: "90", stan: "150", remarks: "Triggers Crush Counter (+20F)", type: "normal", command: "" },
  { name: "Crouching LP", outbreak: "3", persistence: "2", rigidity: "7", hit: "3", guard: "2", damage: "30", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "5", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Crouching HP", outbreak: "7", persistence: "3", rigidity: "26", hit: "-3", guard: "-6", damage: "70", stan: "150", remarks: "", type: "normal", command: "" },
  { name: "Crouching LK", outbreak: "4", persistence: "2", rigidity: "8", hit: "2", guard: "0", damage: "20", stan: "70", remarks: "Can be rapid canceled", type: "normal", command: "" },
  { name: "Crouching MK", outbreak: "6", persistence: "2", rigidity: "14", hit: "2", guard: "-1", damage: "50", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "Crouching HK", outbreak: "9", persistence: "2", rigidity: "22", hit: "D", guard: "-10", damage: "90", stan: "150", remarks: "Triggers Crush Counter (D)", type: "normal", command: "" },
  { name: "Jumping LP", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  { name: "Jumping HP", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "4", persistence: "4", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "8", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Elbow Crush", outbreak: "22", persistence: "2", rigidity: "23", hit: "0", guard: "-7", damage: "80", stan: "150", remarks: "", type: "unique", command: "→ + HP" },
  { name: "Knee Slide", outbreak: "8", persistence: "8", rigidity: "16", hit: "-4", guard: "-7", damage: "30", stan: "70", remarks: "", type: "unique", command: "↘ + LK" },
  { name: "Quick Side-Kick", outbreak: "8", persistence: "2", rigidity: "20", hit: "-2", guard: "-6", damage: "30", stan: "50", remarks: "", type: "unique", command: "LP ▶ LK" },
  { name: "Spin Drive", outbreak: "11", persistence: "5", rigidity: "25", hit: "-3", guard: "-8", damage: "50", stan: "80", remarks: "", type: "unique", command: "LP ▶ LK ▶ MK" },
  { name: "Street-Style Set", outbreak: "13", persistence: "2", rigidity: "35", hit: "D", guard: "-15", damage: "60", stan: "120", remarks: "", type: "unique", command: "LP ▶ LK ▶ MK ▶ HK" },
  { name: "Carry Bonus", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "100", stan: "150", remarks: "", type: "unique", command: "LP ▶ LK ▶ MK ▶ ↓ + HP" },
  { name: "Drop Target", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "unique", command: "(DURING JUMP) MP ▶ HP" },
  { name: "German Suplex", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Back-Carry Throw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "150", stan: "200", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Tap-Kick",
    outbreak: "9",
    persistence: "6",
    rigidity: "20",
    hit: "2",
    guard: "-8",
    damage: "60",
    stan: "100",
    remarks: "V*CA*Only possible during 3rd attack\nFinal attack only performed on hit",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS1] Tap-Kick",
    outbreak: "9",
    persistence: "6",
    rigidity: "20",
    hit: "D",
    guard: "-8",
    damage: "70",
    stan: "100",
    remarks: "CA*Only possible during 3rd attack\nFinal attack only performed on hit",
    type: "vsystem",
    command: ""
  },
  { name: "[VS2] Arrest Heel", outbreak: "28", persistence: "2", rigidity: "2+16 frame(s) after landing", hit: "D", guard: "-4", damage: "90", stan: "120", remarks: "", type: "vsystem", command: "" },
  {
    name: "V[VS2] Arrest Heel",
    outbreak: "28",
    persistence: "2",
    rigidity: "2+16 frame(s) after landing",
    hit: "D",
    guard: "-4",
    damage: "100",
    stan: "120",
    remarks: "",
    type: "vsystem",
    command: ""
  },
  {
    name: "Burning Fight",
    outbreak: "1",
    persistence: "",
    rigidity: "8",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 3000F\n                                                                                                                                                                                Tornado Spinner, Cyclone Spinner, Flipper Shot, Hurricane Spinner,Fire Spinner and Nubbing Needle become enhanced moves that use V-Timer\nV-Skill will be enhanced",
    type: "vsystem",
    command: ""
  },
  {
    name: "Hammer Knuckle",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F - 31F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    type: "vsystem",
    command: ""
  },
  {
    name: "Gun Smoke",
    outbreak: "",
    persistence: "",
    rigidity: "40 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "Lucia will perform Braking after the move ends\nCan perform Braking, Rough Chase, Tornado Spinner, and Cyclone Spinner from 14F",
    type: "special",
    command: ""
  },
  { name: "Braking", outbreak: "", persistence: "", rigidity: "12 total frames", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "special", command: "" },
  { name: "Rough Chase", outbreak: "7", persistence: "6", rigidity: "18", hit: "3", guard: "-6", damage: "70", stan: "80", remarks: "", type: "special", command: "" },
  { name: "Tornado Spinner", outbreak: "4", persistence: "4", rigidity: "23+14 frame(s) after landing", hit: "D", guard: "-35", damage: "140", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "VTornado Spinner",
    outbreak: "4",
    persistence: "5",
    rigidity: "17+14 frame(s) after landing",
    hit: "D",
    guard: "-30",
    damage: "170",
    stan: "200",
    remarks:
      "Uses 700F V-Gauge Timer\n                                                                                                                                                                                Final hit only performed on hit",
    type: "special",
    command: ""
  },
  { name: "Cyclone Spinner", outbreak: "5", persistence: "5", rigidity: "23", hit: "D", guard: "-8", damage: "120", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "VCyclone Spinner",
    outbreak: "5",
    persistence: "5",
    rigidity: "19",
    hit: "D",
    guard: "-6",
    damage: "160",
    stan: "180",
    remarks:
      "Uses 700F V-Gauge Timer\n                                                                                                                                                                                Final attack only performed on hit",
    type: "special",
    command: ""
  },
  { name: "Nubbing Needle", outbreak: "11", persistence: "5", rigidity: "8+12 frame(s) after landing", hit: "2", guard: "-2", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
  {
    name: "VNubbing Needle",
    outbreak: "11",
    persistence: "5",
    rigidity: "8+12 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "130",
    stan: "150",
    remarks:
      "Uses 700F V-Gauge Timer\n                                                                                                                                                                                Final attack only performed on hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Gun Smoke",
    outbreak: "",
    persistence: "",
    rigidity: "33 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "Lucia will perform Braking after the move ends\nCan perform Braking, Rough Chase, Tornado Spinner, and Cyclone Spinner from 12F",
    type: "special",
    command: ""
  },
  { name: "EX Braking", outbreak: "", persistence: "", rigidity: "12 total frames", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "special", command: "" },
  { name: "EX Rough Chase", outbreak: "7", persistence: "3", rigidity: "27", hit: "D", guard: "-8", damage: "80", stan: "120", remarks: "", type: "special", command: "" },
  {
    name: "EX Tornado Spinner",
    outbreak: "4",
    persistence: "5",
    rigidity: "17+14 frame(s) after landing",
    hit: "D",
    guard: "-30",
    damage: "160(*100)",
    stan: "200(*100)",
    remarks: "Final hit only performed on hit\n*For the 2nd hit",
    type: "special",
    command: ""
  },
  {
    name: "VEX Tornado Spinner",
    outbreak: "4",
    persistence: "6",
    rigidity: "16+14 frame(s) after landing",
    hit: "D",
    guard: "-29",
    damage: "180(*110)",
    stan: "220(*120)",
    remarks:
      "Uses 400F V-Gauge Timer\n                                                                                                                                                                                Final hit only performed on hit\n*Only for the 3rd or 4th hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Cyclone Spinner",
    outbreak: "5",
    persistence: "5",
    rigidity: "19",
    hit: "D",
    guard: "-6",
    damage: "150",
    stan: "180",
    remarks: "Final attack only performed on hit\nV*Only possible during 1st attack",
    type: "special",
    command: ""
  },
  {
    name: "VEX Cyclone Spinner",
    outbreak: "5",
    persistence: "5",
    rigidity: "19",
    hit: "D",
    guard: "-4",
    damage: "170",
    stan: "200",
    remarks:
      "Uses 400F V-Gauge Timer\n                                                                                                                                                                                Final attack only performed on hit",
    type: "special",
    command: ""
  },
  {
    name: "EX Nubbing Needle",
    outbreak: "11",
    persistence: "5",
    rigidity: "8+12 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks: "Final attack only performed on hit",
    type: "special",
    command: ""
  },
  {
    name: "VEX Nubbing Needle",
    outbreak: "11",
    persistence: "5",
    rigidity: "8+12 frame(s) after landing",
    hit: "D",
    guard: "2",
    damage: "150",
    stan: "200",
    remarks:
      "Uses 700F V-Gauge Timer\n                                                                                                                                                                                Final attack only performed on hit",
    type: "special",
    command: ""
  },
  { name: "Firecracker", outbreak: "12", persistence: "7", rigidity: "19", hit: "0", guard: "-4", damage: "30", stan: "30", remarks: "Can perform Flipper Shot on 20F", type: "special", command: "" },
  {
    name: "L Flipper Shot",
    outbreak: "9",
    persistence: "",
    rigidity: "38 total frames",
    hit: "1",
    guard: "-5",
    damage: "60",
    stan: "100",
    remarks: "Properties change if hit by Fire Spinner",
    type: "special",
    command: ""
  },
  { name: "M Flipper Shot", outbreak: "12", persistence: "", rigidity: "40 total frames", hit: "2", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  { name: "H Flipper Shot", outbreak: "12", persistence: "", rigidity: "40 total frames", hit: "2", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  {
    name: "EX Firecracker",
    outbreak: "12",
    persistence: "7",
    rigidity: "19",
    hit: "0",
    guard: "-4",
    damage: "30",
    stan: "30",
    remarks: "Can perform EX Flipper Shot on 20F",
    type: "special",
    command: ""
  },
  {
    name: "EX Flipper Shot L",
    outbreak: "9",
    persistence: "",
    rigidity: "38 total frames",
    hit: "7",
    guard: "2",
    damage: "80",
    stan: "120",
    remarks: "Properties change if hit by Fire Spinner",
    type: "special",
    command: ""
  },
  { name: "EX Flipper Shot M", outbreak: "12", persistence: "", rigidity: "40 total frames", hit: "4", guard: "3", damage: "80", stan: "120", remarks: "", type: "special", command: "" },
  { name: "EX Flipper Shot H", outbreak: "12", persistence: "", rigidity: "40 total frames", hit: "4", guard: "3", damage: "80", stan: "120", remarks: "", type: "special", command: "" },
  {
    name: "VFirecracker",
    outbreak: "12",
    persistence: "7",
    rigidity: "19",
    hit: "0",
    guard: "-4",
    damage: "30",
    stan: "30",
    remarks: "Can perform V-Flipper Shot on 20F",
    type: "special",
    command: ""
  },
  {
    name: "VFlipper Shot",
    outbreak: "9",
    persistence: "",
    rigidity: "38 total frames",
    hit: "7",
    guard: "2",
    damage: "90",
    stan: "120",
    remarks:
      "Uses 400F V-Gauge Timer\n                                                                                                                                                                                Properties change if hit by Fire Spinner",
    type: "special",
    command: ""
  },
  {
    name: "VFlipper Shot",
    outbreak: "12",
    persistence: "",
    rigidity: "40 total frames",
    hit: "4",
    guard: "3",
    damage: "90",
    stan: "120",
    remarks: "Uses 400F V-Gauge Timer",
    type: "special",
    command: ""
  },
  {
    name: "VFlipper Shot",
    outbreak: "12",
    persistence: "",
    rigidity: "40 total frames",
    hit: "4",
    guard: "3",
    damage: "90",
    stan: "120",
    remarks: "Uses 400F V-Gauge Timer",
    type: "special",
    command: ""
  },
  {
    name: "L Hurricane Spinner",
    outbreak: "7",
    persistence: "9",
    rigidity: "20+15 frame(s) after landing",
    hit: "D",
    guard: "-38",
    damage: "100(*60)",
    stan: "150(*100)",
    remarks: "1F - 9F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\n*For the hitbox in the back",
    type: "special",
    command: ""
  },
  {
    name: "M Hurricane Spinner",
    outbreak: "9",
    persistence: "9",
    rigidity: "23+15 frame(s) after landing",
    hit: "D",
    guard: "-41",
    damage: "110(*60)",
    stan: "150(*100)",
    remarks:
      "7F - 12F  projectile invincibility\n                1F - 12F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\n*For the hitbox in the back",
    type: "special",
    command: ""
  },
  {
    name: "H Hurricane Spinner",
    outbreak: "13",
    persistence: "9",
    rigidity: "30+15 frame(s) after landing",
    hit: "D",
    guard: "-48",
    damage: "120(*60)",
    stan: "150(*100)",
    remarks:
      "11F - 16F  projectile invincibility\n                1F - 16F  invincible to mid-air attacks\n                                Subject to counter hit during move duration\n*For the hitbox in the back",
    type: "special",
    command: ""
  },
  {
    name: "EX Hurricane Spinner",
    outbreak: "7",
    persistence: "13",
    rigidity: "33+15 frame(s) after landing",
    hit: "D",
    guard: "-46",
    damage: "150",
    stan: "200",
    remarks: "1F - 10F  full invincibility\n                                                Final attack only performed on hit\nSubject to counter hit during move duration (1.2x damage)",
    type: "special",
    command: ""
  },
  {
    name: "VHurricane Spinner",
    outbreak: "7",
    persistence: "13",
    rigidity: "33+15 frame(s) after landing",
    hit: "D",
    guard: "-46",
    damage: "160",
    stan: "200",
    remarks:
      "Uses 1000F V-Gauge Timer\n                                                                                                                                1F - 10F  full invincibility\n                                                Final attack only performed on hit\nSubject to counter hit during move duration (1.2x damage)",
    type: "special",
    command: ""
  },
  { name: "L Fire Spinner", outbreak: "15", persistence: "3", rigidity: "9+20 frame(s) after landing", hit: "0", guard: "-4", damage: "60", stan: "100", remarks: "", type: "special", command: "" },
  { name: "M Fire Spinner", outbreak: "18", persistence: "3", rigidity: "10+21 frame(s) after landing", hit: "2", guard: "-4", damage: "70", stan: "100", remarks: "", type: "special", command: "" },
  { name: "H Fire Spinner", outbreak: "21", persistence: "3", rigidity: "8+20 frame(s) after landing", hit: "D", guard: "-4", damage: "80", stan: "100", remarks: "", type: "special", command: "" },
  { name: "EX Fire Spinner", outbreak: "17", persistence: "3", rigidity: "6+13 frame(s) after landing", hit: "D", guard: "-2", damage: "70", stan: "120", remarks: "", type: "special", command: "" },
  {
    name: "VFire Spinner",
    outbreak: "17",
    persistence: "3",
    rigidity: "6+13 frame(s) after landing",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "120",
    remarks: "Uses 700F V-Gauge Timer",
    type: "special",
    command: ""
  },
  {
    name: "Hard Hit Knee",
    outbreak: "1+7",
    persistence: "16",
    rigidity: "54",
    hit: "D",
    guard: "-32",
    damage: "340",
    stan: "0",
    remarks: "1F - 14F  full invincibility\n                                                Complete invincibility until the end of attack active frames on hit",
    type: "ca",
    command: ""
  }
];
export { lucia };
