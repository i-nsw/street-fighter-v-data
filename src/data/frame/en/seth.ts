const seth = [
  { name: "Standing LP", outbreak: "4", persistence: "3", rigidity: "6", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  {
    name: "Standing MP",
    outbreak: "5",
    persistence: "3",
    rigidity: "16 (*19)",
    hit: "2",
    guard: "-2",
    damage: "50",
    stan: "100",
    remarks: "*On whiff\nVS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "normal",
    command: ""
  },
  { name: "Standing HP", outbreak: "7", persistence: "3", rigidity: "23 (*20)", hit: "2", guard: "-4", damage: "80", stan: "150", remarks: "*On Block", type: "normal", command: "" },
  { name: "Standing LK", outbreak: "4", persistence: "3", rigidity: "11", hit: "4", guard: "3", damage: "40", stan: "70", remarks: "", type: "normal", command: "" },
  {
    name: "Standing MK",
    outbreak: "7",
    persistence: "3",
    rigidity: "18",
    hit: "1",
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "Foot will not hit a crouching opponent.\nVS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "normal",
    command: ""
  },
  {
    name: "Standing HK",
    outbreak: "10 ",
    persistence: "9",
    rigidity: "22",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "150",
    remarks:
      "Second hit will not hit crouching opponents\n                                                                                                S*V*CA*Only possible during 2nd attack\nForced standing effect on first hit.\nCauses blowback knockdown on airborne hit",
    type: "normal",
    command: ""
  },
  { name: "Crouching LP", outbreak: "3", persistence: "2", rigidity: "8", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "Crouching MP", outbreak: "6", persistence: "3", rigidity: "14", hit: "5", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "Crouching HP",
    outbreak: "12",
    persistence: "4",
    rigidity: "26",
    hit: "D",
    guard: "-10",
    damage: "80",
    stan: "150",
    remarks:
      "Triggers Crush Counter  (D)\n                                                                                                                                                                VS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LK",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "3",
    guard: "2",
    damage: "20",
    stan: "70",
    remarks: "VS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "normal",
    command: ""
  },
  { name: "Crouching MK", outbreak: "7", persistence: "3", rigidity: "13 (*12)", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "*on block/whiff", type: "normal", command: "" },
  {
    name: "Crouching HK",
    outbreak: "11",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "VS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "normal",
    command: ""
  },
  { name: "Jumping LP", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "Jumping MP", outbreak: "7", persistence: "6", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "Causes blowback knockdown on airborne hit", type: "jump", command: "" },
  { name: "Jumping HP", outbreak: "9", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Jumping LK", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "Can cross-up", type: "jump", command: "" },
  { name: "Jumping MK", outbreak: "7", persistence: "7", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "Jumping HK", outbreak: "10", persistence: "5", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "Step Shoot", outbreak: "9", persistence: "3", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "unique", command: "→ + MP" },
  {
    name: "Hazard Blow",
    outbreak: "20",
    persistence: "3",
    rigidity: "23",
    hit: "1",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (crumple)",
    type: "unique",
    command: "→ + HP"
  },
  { name: "Head Hunter", outbreak: "23", persistence: "2", rigidity: "21", hit: "1", guard: "-7", damage: "80", stan: "150", remarks: "", type: "unique", command: "→ + HK" },
  {
    name: "Turning Slicer",
    outbreak: "23",
    persistence: "3",
    rigidity: "15",
    hit: "4",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (+14F)",
    type: "unique",
    command: "↘ + HK"
  },
  {
    name: "Twin Claw",
    outbreak: "10",
    persistence: "4",
    rigidity: "28",
    hit: "-5",
    guard: "-12",
    damage: "60",
    stan: "100",
    remarks: "Forces stand\n                                                                                                                S*VS*Only on hit",
    type: "unique",
    command: "MP ▶ HP"
  },
  {
    name: "Tanden Combination",
    outbreak: "18",
    persistence: "25",
    rigidity: "19",
    hit: "2",
    guard: "-",
    damage: "10",
    stan: "0",
    remarks: "VS*Transferrable to [VS1] Tanden Install On hit or guard.",
    type: "unique",
    command: "(WHEN SELECTING VSKILL I) MP ▶ HP ▶on hit MP MK"
  },
  { name: "Shoot Slicer", outbreak: "11", persistence: "3", rigidity: "21 (*26)", hit: "2", guard: "-5", damage: "60", stan: "80", remarks: "*On whiff", type: "unique", command: "→ + MP ▶ HK" },
  { name: "Fatal Rush", outbreak: "12", persistence: "3", rigidity: "29", hit: "D", guard: "-12", damage: "70", stan: "100", remarks: "", type: "unique", command: "→ + MP ▶ HK ▶ HP" },
  { name: "Death Throw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "Death Throw", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1] Tanden Engine",
    outbreak: "20",
    persistence: "25",
    rigidity: "21",
    hit: "2",
    guard: "-2",
    damage: "10",
    stan: "0",
    remarks: "28 frames of projectile invincibility after hit or guard.",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS1] Tanden Install",
    outbreak: "4",
    persistence: "5",
    rigidity: "25",
    hit: "D",
    guard: "-16",
    damage: "60",
    stan: "0",
    remarks: "1F - 8F  projectile invincibility",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS1] Install Art",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: 'See the "Install Art" section for special moves usable with [VS1] Install Art.',
    type: "vsystem",
    command: ""
  },
  { name: "[VS2] Tanden Booster", outbreak: "", persistence: "", rigidity: "49 total frames", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "vsystem", command: "" },
  { name: "[VS2] Tanden Booster (Stop)", outbreak: "", persistence: "", rigidity: "19 total frames", hit: "", guard: "", damage: "", stan: "", remarks: "", type: "vsystem", command: "" },
  { name: "[VS2] Hecatoncheires Glide", outbreak: "14", persistence: "16", rigidity: "22", hit: "2", guard: "-2", damage: "100", stan: "120", remarks: "", type: "vsystem", command: "" },
  {
    name: "[VS2] Mad Spiral",
    outbreak: "7",
    persistence: "18",
    rigidity: "18+29 frame(s) after landing",
    hit: "D",
    guard: "-39",
    damage: "120",
    stan: "150",
    remarks: "1F - 24F  projectile invincibility",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2] Spin Pendulum",
    outbreak: "5",
    persistence: "13",
    rigidity: "25",
    hit: "D",
    guard: "-9",
    damage: "80",
    stan: "120",
    remarks: "4F - 24F  projectile invincibility",
    type: "vsystem",
    command: ""
  },
  {
    name: "Tanden Ignition",
    outbreak: "1",
    persistence: "",
    rigidity: "10",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "V-Gauge Timer + 4000F\n                                                                                                                                                                                While active, various attacks are added to Hecatoncheires, Mad Cradle, Cruel Disaster, and Annihilate Sword.",
    type: "vsystem",
    command: ""
  },
  {
    name: "Calamity Shutter",
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
    name: "L Hecatoncheires",
    outbreak: "11",
    persistence: "8",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks: "CA*V*Only possible during 4th attack\nVS*Second and fourth attacks can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "M Hecatoncheires",
    outbreak: "17",
    persistence: "12",
    rigidity: "20",
    hit: "2",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "CA*V*Only possible during 6th attack\nVS*Fourth and sixth attacks can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "H Hecatoncheires",
    outbreak: "25",
    persistence: "16",
    rigidity: "20",
    hit: "3",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "CA*V*Only possible during 8th attack\nVS*Sixth and eighth attacks can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "EXHecatoncheires",
    outbreak: "10",
    persistence: "16",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "150",
    remarks: "On guard or miss, the move ends with the eighth attack.\nV*Only possible on eighth/ninth attack\nVS*Can be cancelled with [VS1] Install Art on 9th hit or eighth hit on guard.",
    type: "special",
    command: ""
  },
  {
    name: "L Mad Cradle",
    outbreak: "4",
    persistence: "10",
    rigidity: "22+11 frame(s) after landing",
    hit: "D",
    guard: "-25",
    damage: "90(*60)",
    stan: "150 (*100)",
    remarks: "1F - 3F  throw invincibility\n                                                *From active frame 3F",
    type: "special",
    command: ""
  },
  {
    name: "M Mad Cradle",
    outbreak: "5",
    persistence: "10",
    rigidity: "28+13 frame(s) after landing",
    hit: "D",
    guard: "-33",
    damage: "110 (*60)",
    stan: "150 (*100)",
    remarks: "1F - 6F  invincible to mid-air attacks\n                                *From active frame 3F",
    type: "special",
    command: ""
  },
  {
    name: "H Mad Cradle",
    outbreak: "10",
    persistence: "10",
    rigidity: "34+15 frame(s) after landing",
    hit: "D",
    guard: "-41",
    damage: "120 (*60)",
    stan: "150",
    remarks: "1F - 10F  invincible to mid-air attacks\n                                *From active frame 3F",
    type: "special",
    command: ""
  },
  {
    name: "EX Mad Cradle",
    outbreak: "4",
    persistence: "16",
    rigidity: "30+15 frame(s) after landing",
    hit: "D",
    guard: "-40",
    damage: "150",
    stan: "150",
    remarks: "1F - 9F  full invincibility",
    type: "special",
    command: ""
  },
  {
    name: "L Cruel Distaster",
    outbreak: "14",
    persistence: "3",
    rigidity: "26",
    hit: "D",
    guard: "-8",
    damage: "80",
    stan: "100",
    remarks: "4F - 11F  projectile invincibility\n                                                VS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "M Cruel Distaster",
    outbreak: "21",
    persistence: "3",
    rigidity: "28(*26)",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks: "4F - 18F  projectile invincibility\n                                                *On Block\nVS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "H Cruel Distaster",
    outbreak: "27",
    persistence: "3",
    rigidity: "28(*21)",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks: "4F - 26F  projectile invincibility\n                                                *On Block\nVS*Can be cancelled with [VS1] Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  {
    name: "EX Cruel Distaster",
    outbreak: "15",
    persistence: "3",
    rigidity: "33",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "4F - 12F  projectile invincibility\n                                                On guard or miss, the move ends at the first attack.\nCan be cancelled with jump on hit.\nVS*Can be cancelled with [VS1] or [VS2] Tanden Booster Install Art on hit or guard.",
    type: "special",
    command: ""
  },
  { name: "L Annihilate Sword", outbreak: "14", persistence: "6", rigidity: "9 frame(s) after landing", hit: "", guard: "", damage: "70", stan: "150", remarks: "", type: "special", command: "" },
  { name: "M Annihilate Sword", outbreak: "23", persistence: "6", rigidity: "9 frame(s) after landing", hit: "", guard: "", damage: "80", stan: "150", remarks: "", type: "special", command: "" },
  { name: "H Annihilate Sword", outbreak: "27", persistence: "6", rigidity: "16 frame(s) after landing", hit: "D", guard: "", damage: "90", stan: "150", remarks: "", type: "special", command: "" },
  { name: "EX Annihilate Sword", outbreak: "10", persistence: "12", rigidity: "13 frame(s) after landing", hit: "D", guard: "", damage: "130", stan: "200", remarks: "", type: "special", command: "" },
  {
    name: "VTitanomachy",
    outbreak: "14",
    persistence: "5",
    rigidity: "31",
    hit: "D",
    guard: "2",
    damage: "120",
    stan: "100",
    remarks:
      "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Can be cancelled when Hecatoncheires Install Art hits or is guarded.",
    type: "special",
    command: ""
  },
  {
    name: "VMad Spin",
    outbreak: "7",
    persistence: "Until landing+2",
    rigidity: "21 frame(s) after landing",
    hit: "2",
    guard: "-2",
    damage: "*n×10",
    stan: "*n×10+20",
    remarks:
      "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Can be cancelled when Mad Cradle hits, or certain Install Arts hit, or when guarded.\n*(Hits until landing)",
    type: "special",
    command: ""
  },
  {
    name: "VMad Spin (Special Edition)",
    outbreak: "11",
    persistence: "2",
    rigidity: "75",
    hit: "D",
    guard: "-56",
    damage: "80",
    stan: "100",
    remarks: "Uses 1000F V-Gauge Timer",
    type: "special",
    command: ""
  },
  {
    name: "VCyclone Disaster",
    outbreak: "11",
    persistence: "11",
    rigidity: "21",
    hit: "D",
    guard: "-4",
    damage: "70",
    stan: "100",
    remarks:
      "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Can be cancelled when Cruel Disaster Install Art hits or is guarded.\nEX Cruel Disaster can only be cancelled on hit.",
    type: "special",
    command: ""
  },
  {
    name: "VHell's Gate",
    outbreak: "5",
    persistence: "8",
    rigidity: "17",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "120",
    remarks:
      "Uses 1000F V-Gauge Timer\n                                                                                                                                                                                Can be cancelled when Annihilate Sword Install Art hits or is guarded.",
    type: "special",
    command: ""
  },
  { name: "Tanden Destruction", outbreak: "6", persistence: "10", rigidity: "42", hit: "D", guard: "-30", damage: "330", stan: "0", remarks: "1F - 15F  full invincibility", type: "ca", command: "" },
  { name: "VTanden Extreme", outbreak: "6", persistence: "10", rigidity: "42", hit: "D", guard: "-30", damage: "350", stan: "0", remarks: "1F - 15F  full invincibility", type: "ca", command: "" }
];
export { seth };
