const dhalsim = [
  {
    name: "Standing LP",
    outbreak: "3",
    persistence: "3",
    rigidity: "8",
    hit: "5",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "1F will not hit grounded opponents",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Standing MP",
    outbreak: "12",
    persistence: "2",
    rigidity: "17",
    hit: "4",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Standing HP",
    outbreak: "16",
    persistence: "5",
    rigidity: "22",
    hit: "-3",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "Will not hit airborne opponents",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Standing LK",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "3",
    guard: "2",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Standing MK",
    outbreak: "10",
    persistence: "2",
    rigidity: "15",
    hit: "2",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Standing HK",
    outbreak: "15",
    persistence: "2",
    rigidity: "21",
    hit: "4",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter (+22F)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LP",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "4",
    guard: "1",
    damage: "30",
    stan: "70",
    remarks: "Can be rapid canceled",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MP",
    outbreak: "8",
    persistence: "4",
    rigidity: "19",
    hit: "-1",
    guard: "-3",
    damage: "70",
    stan: "100",
    remarks: "Will not hit crouching opponents",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HP",
    outbreak: "9",
    persistence: "3",
    rigidity: "13",
    hit: "7",
    guard: "3",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LK",
    outbreak: "4",
    persistence: "6",
    rigidity: "14",
    hit: "-3",
    guard: "-6",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MK",
    outbreak: "7",
    persistence: "11",
    rigidity: "12",
    hit: "-2",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HK",
    outbreak: "12",
    persistence: "16",
    rigidity: "19",
    hit: "D",
    guard: "-20",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Jumping LP",
    outbreak: "5",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping MP",
    outbreak: "6",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks:
      "Will not hit grounded opponents\n                                *Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping HP",
    outbreak: "9",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping LK",
    outbreak: "4",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks:
      "Can cross-up\n                                                                                                *Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping MK",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping HK",
    outbreak: "12",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks:
      "Will not hit crouching opponents\n                                                *Value for V-Skill1 version",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "Yoga Upper",
    outbreak: "8",
    persistence: "4",
    rigidity: "16",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "Forces stand",
    vtrigger: 1,
    type: "unique",
    command: "← + MP"
  },
  {
    name: "Yoga Anvil",
    outbreak: "12",
    persistence: "6",
    rigidity: "24",
    hit: "-3",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (D)",
    vtrigger: 1,
    type: "unique",
    command: "← + HP"
  },
  {
    name: "Divine Kick",
    outbreak: "6",
    persistence: "3",
    rigidity: "15",
    hit: "3",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "← + MK"
  },
  {
    name: "Thrust kick",
    outbreak: "7",
    persistence: "3",
    rigidity: "15",
    hit: "2",
    guard: "-1",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "↙ + MK"
  },
  {
    name: "Drill Kick",
    outbreak: "12",
    persistence: "Until landing",
    rigidity: "7 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "(DURING JUMP) ↓ + K"
  },
  {
    name: "Yoga Rocket",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "120",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(NEAR OPPONENT) → OR + LP LK"
  },
  {
    name: "Yoga Hoop",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(NEAR OPPONENT) ← + LP LK"
  },
  {
    name: "[VS1] Yoga Float",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL I) → OR + MP MK"
  },
  {
    name: "[VS1] Yoga Float (Airborne)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL I) (DURING JUMP) MP MK"
  },
  {
    name: "[VS2] Yoga Deep Breath",
    outbreak: "",
    persistence: "",
    rigidity: "50 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ヨガファイアが強化される(1回)",
    vtrigger: 1,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL II) MP MK"
  },
  {
    name: "[VS2] Yoga Deep Breath(Airborne)",
    outbreak: "",
    persistence: "",
    rigidity: "56 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ヨガファイアが強化される(1回)",
    vtrigger: 1,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL II) (DURING JUMP) MP MK"
  },
  {
    name: "Yoga Burner",
    outbreak: "1+12",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "4",
    damage: "120(*+200)",
    stan: "150",
    remarks: "*Fire damage",
    vtrigger: 1,
    type: "vsystem",
    command: "HP HK"
  },
  {
    name: "Yoga Mala",
    outbreak: "17",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F - 30F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    vtrigger: 1,
    type: "vsystem",
    command: "(DURING GUARD) → + LP"
  },
  {
    name: "Yoga Fire",
    outbreak: "15",
    persistence: "",
    rigidity: "48 total frames",
    hit: "-3",
    guard: "-5",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P"
  },
  {
    name: "EX Yoga Fire",
    outbreak: "14",
    persistence: "",
    rigidity: "42 total frames",
    hit: "5",
    guard: "3",
    damage: "100",
    stan: "100",
    remarks: "Button strength changes projectile speed",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "Yoga Fire (VS2 Ver.)",
    outbreak: "15",
    persistence: "",
    rigidity: "43 total frames",
    hit: "4",
    guard: "2",
    damage: "70",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(DURING V-SKILL II) ↓↘→ + P"
  },
  {
    name: "EX Yoga Fire (VS2 Ver.)",
    outbreak: "14",
    persistence: "",
    rigidity: "39 total frames",
    hit: "15",
    guard: "16",
    damage: "120",
    stan: "120",
    remarks: "Button strength changes projectile speed",
    vtrigger: 1,
    type: "special",
    command: "(DURING V-SKILL II) ↓↘→ + P P"
  },
  {
    name: "L Yoga Flame",
    outbreak: "13",
    persistence: "23",
    rigidity: "21",
    hit: "D",
    guard: "-3",
    damage: "60",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "→↘↓↙← + LP"
  },
  {
    name: "M Yoga Flame",
    outbreak: "18",
    persistence: "27",
    rigidity: "14",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "→↘↓↙← + MP"
  },
  {
    name: "H Yoga Flame",
    outbreak: "25",
    persistence: "32",
    rigidity: "18",
    hit: "D",
    guard: "3",
    damage: "90",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "→↘↓↙← + HP"
  },
  {
    name: "EX Yoga Flame",
    outbreak: "12",
    persistence: "32",
    rigidity: "23",
    hit: "D",
    guard: "-8",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "→↘↓↙← + P P"
  },
  {
    name: "L Yoga Gale",
    outbreak: "13",
    persistence: "14",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*2",
    damage: "80",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 1,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + LP"
  },
  {
    name: "M Yoga Gale",
    outbreak: "15",
    persistence: "16",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*-2",
    damage: "90",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 1,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + MP"
  },
  {
    name: "H Yoga Gale",
    outbreak: "17",
    persistence: "18",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*-4",
    damage: "100",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 1,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + HP"
  },
  {
    name: "EX Yoga Gale",
    outbreak: "10",
    persistence: "18",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + P P"
  },
  {
    name: "Yoga Teleport",
    outbreak: "",
    persistence: "",
    rigidity: "53 total frames (*58 total frames)",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F - 4F  attack & projectile invincibility\n5F - 28F  full invincibility\n                                                *+LMHonly: recovery +5F",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ OR ←↓↙ + LP OR LK"
  },
  {
    name: "Airborne Yoga Teleport",
    outbreak: "",
    persistence: "",
    rigidity: "29 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "9F - 22F  full invincibility",
    vtrigger: 1,
    type: "special",
    command: "(DURING JUMP) →↓↘ OR ←↓↙ + LP OR LK"
  },
  {
    name: "Yoga Sunburst (Lv1)",
    outbreak: "1+9",
    persistence: "",
    rigidity: "50 total frames",
    hit: "D",
    guard: "9",
    damage: "300",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "Yoga Sunburst (Lv2)",
    outbreak: "1+39",
    persistence: "",
    rigidity: "80 total frames",
    hit: "D",
    guard: "21",
    damage: "360",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P (HOLD BUTTONS)"
  },
  {
    name: "Yoga Sunburst (Lv3)",
    outbreak: "1+69",
    persistence: "",
    rigidity: "110 total frames",
    hit: "D",
    guard: "39",
    damage: "400",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P (max hold button)"
  },
  {
    name: "Airborne Yoga Sunburst (Lv1)",
    outbreak: "1+9",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "300",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P"
  },
  {
    name: "Airborne Yoga Sunburst (Lv2)",
    outbreak: "1+39",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "360",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P (HOLD BUTTONS)"
  },
  {
    name: "Airborne Yoga Sunburst (Lv3)",
    outbreak: "1+69",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "400",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 1,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P (max hold button)"
  },
  {
    name: "Airborne Yoga Sunburst (explodes upon ground contact)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "",
    damage: "200",
    stan: "0",
    remarks: "",
    vtrigger: 1,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P"
  },
  {
    name: "Standing LP",
    outbreak: "3",
    persistence: "3",
    rigidity: "8",
    hit: "5",
    guard: "3",
    damage: "30",
    stan: "70",
    remarks: "1F will not hit grounded opponents",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Standing MP",
    outbreak: "12",
    persistence: "2",
    rigidity: "17",
    hit: "4",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Standing HP",
    outbreak: "16",
    persistence: "5",
    rigidity: "22",
    hit: "-3",
    guard: "-6",
    damage: "90",
    stan: "150",
    remarks: "Will not hit airborne opponents",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Standing LK",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "3",
    guard: "2",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Standing MK",
    outbreak: "10",
    persistence: "2",
    rigidity: "15",
    hit: "2",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Standing HK",
    outbreak: "15",
    persistence: "2",
    rigidity: "21",
    hit: "4",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter (+22F)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LP",
    outbreak: "4",
    persistence: "3",
    rigidity: "7",
    hit: "4",
    guard: "1",
    damage: "30",
    stan: "70",
    remarks: "Can be rapid canceled",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MP",
    outbreak: "8",
    persistence: "4",
    rigidity: "19",
    hit: "-1",
    guard: "-3",
    damage: "70",
    stan: "100",
    remarks: "Will not hit crouching opponents",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HP",
    outbreak: "9",
    persistence: "3",
    rigidity: "13",
    hit: "7",
    guard: "3",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching LK",
    outbreak: "4",
    persistence: "6",
    rigidity: "14",
    hit: "-3",
    guard: "-6",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching MK",
    outbreak: "7",
    persistence: "11",
    rigidity: "12",
    hit: "-2",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Crouching HK",
    outbreak: "12",
    persistence: "16",
    rigidity: "19",
    hit: "D",
    guard: "-20",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "Jumping LP",
    outbreak: "5",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping MP",
    outbreak: "6",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks:
      "Will not hit grounded opponents\n                                *Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping HP",
    outbreak: "9",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping LK",
    outbreak: "4",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks:
      "Can cross-up\n                                                                                                *Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping MK",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "*Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Jumping HK",
    outbreak: "12",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks:
      "Will not hit crouching opponents\n                                                *Value for V-Skill1 version",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "Yoga Upper",
    outbreak: "8",
    persistence: "4",
    rigidity: "16",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "Forces stand",
    vtrigger: 2,
    type: "unique",
    command: "← + MP"
  },
  {
    name: "Yoga Anvil",
    outbreak: "12",
    persistence: "6",
    rigidity: "24",
    hit: "-3",
    guard: "-8",
    damage: "90",
    stan: "150",
    remarks: "Triggers Crush Counter  (D)",
    vtrigger: 2,
    type: "unique",
    command: "← + HP"
  },
  {
    name: "Divine Kick",
    outbreak: "6",
    persistence: "3",
    rigidity: "15",
    hit: "3",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "← + MK"
  },
  {
    name: "Thrust kick",
    outbreak: "7",
    persistence: "3",
    rigidity: "15",
    hit: "2",
    guard: "-1",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "↙ + MK"
  },
  {
    name: "Drill Kick",
    outbreak: "12",
    persistence: "Until landing",
    rigidity: "7 frame(s) after landing",
    hit: "",
    guard: "",
    damage: "60",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "(DURING JUMP) ↓ + K"
  },
  {
    name: "Yoga Rocket",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "120",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(NEAR OPPONENT) → OR + LP LK"
  },
  {
    name: "Yoga Hoop",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(NEAR OPPONENT) ← + LP LK"
  },
  {
    name: "[VS1] Yoga Float",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL I) → OR + MP MK"
  },
  {
    name: "[VS1] Yoga Float (Airborne)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL I) (DURING JUMP) MP MK"
  },
  {
    name: "[VS2] Yoga Deep Breath",
    outbreak: "",
    persistence: "",
    rigidity: "50 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ヨガファイアが強化される(1回)",
    vtrigger: 2,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL II) MP MK"
  },
  {
    name: "[VS2] Yoga Deep Breath(Airborne)",
    outbreak: "",
    persistence: "",
    rigidity: "56 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ヨガファイアが強化される(1回)",
    vtrigger: 2,
    type: "vsystem",
    command: "(WHEN SELECTING VSKILL II) (DURING JUMP) MP MK"
  },
  {
    name: "Yoga Sansara",
    outbreak: "1+4",
    persistence: "200",
    rigidity: "41 total frames",
    hit: "D",
    guard: "0",
    damage: "50",
    stan: "100",
    remarks:
      "V-Gauge Timer + 3000F\n                                                                                                                                                                                Can be special move, V-Skill canceled from 19F\nGains Yoga Sansara as a special move while active\nThe stationary flame can be transformed into Strengthened Yoga Sansara by coming into contact with Yoga Flame or Yoga Gale.",
    vtrigger: 2,
    type: "vsystem",
    command: "HP HK"
  },
  {
    name: "Airborne Yoga Sansara",
    outbreak: "1+4",
    persistence: "200",
    rigidity: "3 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "50",
    stan: "100",
    remarks:
      "V-Gauge Timer + 3000F\n                                                                                                                                                                                Can be special move, V-Skill canceled from 19F\nGains Yoga Sansara as a special move while active\nThe stationary flame can be transformed into Strengthened Yoga Sansara by coming into contact with Yoga Flame or Yoga Gale.",
    vtrigger: 2,
    type: "vsystem",
    command: "(DURING JUMP) HP HK"
  },
  {
    name: "Yoga Mala",
    outbreak: "17",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F - 30F  attack & projectile invincibility\n                                                Recover 200 stun upon activation",
    vtrigger: 2,
    type: "vsystem",
    command: "(DURING GUARD) → + LP"
  },
  {
    name: "Yoga Fire",
    outbreak: "15",
    persistence: "",
    rigidity: "48 total frames",
    hit: "-3",
    guard: "-5",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P"
  },
  {
    name: "EX Yoga Fire",
    outbreak: "14",
    persistence: "",
    rigidity: "42 total frames",
    hit: "5",
    guard: "3",
    damage: "100",
    stan: "100",
    remarks: "Button strength changes projectile speed",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "Yoga Fire (VS2 Ver.)",
    outbreak: "15",
    persistence: "",
    rigidity: "43 total frames",
    hit: "4",
    guard: "2",
    damage: "70",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(DURING V-SKILL II) ↓↘→ + P"
  },
  {
    name: "EX Yoga Fire (VS2 Ver.)",
    outbreak: "14",
    persistence: "",
    rigidity: "39 total frames",
    hit: "15",
    guard: "16",
    damage: "120",
    stan: "120",
    remarks: "Button strength changes projectile speed",
    vtrigger: 2,
    type: "special",
    command: "(DURING V-SKILL II) ↓↘→ + P P"
  },
  {
    name: "L Yoga Flame",
    outbreak: "13",
    persistence: "23",
    rigidity: "21",
    hit: "D",
    guard: "-3",
    damage: "60",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "→↘↓↙← + LP"
  },
  {
    name: "M Yoga Flame",
    outbreak: "18",
    persistence: "27",
    rigidity: "14",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "→↘↓↙← + MP"
  },
  {
    name: "H Yoga Flame",
    outbreak: "25",
    persistence: "32",
    rigidity: "18",
    hit: "D",
    guard: "3",
    damage: "90",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "→↘↓↙← + HP"
  },
  {
    name: "EX Yoga Flame",
    outbreak: "12",
    persistence: "32",
    rigidity: "23",
    hit: "D",
    guard: "-8",
    damage: "120",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "→↘↓↙← + P P"
  },
  {
    name: "L Yoga Gale",
    outbreak: "13",
    persistence: "14",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*2",
    damage: "80",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 2,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + LP"
  },
  {
    name: "M Yoga Gale",
    outbreak: "15",
    persistence: "16",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*-2",
    damage: "90",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 2,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + MP"
  },
  {
    name: "H Yoga Gale",
    outbreak: "17",
    persistence: "18",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "*-4",
    damage: "100",
    stan: "200",
    remarks: "*Fastest timing from the jump",
    vtrigger: 2,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + HP"
  },
  {
    name: "EX Yoga Gale",
    outbreak: "10",
    persistence: "18",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(DURING VERTICAL OR FORWARD JUMP) →↘↓↙← + P P"
  },
  {
    name: "Yoga Teleport",
    outbreak: "",
    persistence: "",
    rigidity: "53 total frames (*58 total frames)",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "1F - 4F  attack & projectile invincibility\n5F - 28F  full invincibility\n                                                *+LMHonly: recovery +5F",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ OR ←↓↙ + LP OR LK"
  },
  {
    name: "Airborne Yoga Teleport",
    outbreak: "",
    persistence: "",
    rigidity: "29 total frames",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "9F - 22F  full invincibility",
    vtrigger: 2,
    type: "special",
    command: "(DURING JUMP) →↓↘ OR ←↓↙ + LP OR LK"
  },
  {
    name: "Yoga Sansara",
    outbreak: "30",
    persistence: "200",
    rigidity: "67 total frames",
    hit: "D",
    guard: "-1",
    damage: "50",
    stan: "100",
    remarks:
      "Uses all of the V-Gauge Timer\n                                                                                                                                                                                Can be special move, V-Skill canceled from 44F\nThe stationary flame can be transformed into Strengthened Yoga Sansara by coming into contact with Yoga Flame or Yoga Gale.",
    vtrigger: 2,
    type: "special",
    command: "(DURING V-TRIGGER II) HP HK"
  },
  {
    name: "Airborne Yoga Sansara",
    outbreak: "30",
    persistence: "200",
    rigidity: "3 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "50",
    stan: "100",
    remarks:
      "Uses all of the V-Gauge Timer\n                                                                                                                                                                                Can be special move, V-Skill canceled from 44F\nThe stationary flame can be transformed into Strengthened Yoga Sansara by coming into contact with Yoga Flame or Yoga Gale.",
    vtrigger: 2,
    type: "special",
    command: "(DURING V-TRIGGER II) (DURING JUMP) HP HK"
  },
  {
    name: "Yoga Sansara (Strengthened Version)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "150",
    remarks:
      "Trajectory and projectile speed will change upon contact with Yoga Flame or Yoga Gale.",
    vtrigger: 2,
    type: "special",
    command: ""
  },
  {
    name: "Yoga Sunburst (Lv1)",
    outbreak: "1+9",
    persistence: "",
    rigidity: "50 total frames",
    hit: "D",
    guard: "9",
    damage: "300",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "Yoga Sunburst (Lv2)",
    outbreak: "1+39",
    persistence: "",
    rigidity: "80 total frames",
    hit: "D",
    guard: "21",
    damage: "360",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P (HOLD BUTTONS)"
  },
  {
    name: "Yoga Sunburst (Lv3)",
    outbreak: "1+69",
    persistence: "",
    rigidity: "110 total frames",
    hit: "D",
    guard: "39",
    damage: "400",
    stan: "0",
    remarks: "5F - 9F  attack & projectile invincibility\n1F - 4F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P (max hold button)"
  },
  {
    name: "Airborne Yoga Sunburst (Lv1)",
    outbreak: "1+9",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "300",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P"
  },
  {
    name: "Airborne Yoga Sunburst (Lv2)",
    outbreak: "1+39",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "360",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P (HOLD BUTTONS)"
  },
  {
    name: "Airborne Yoga Sunburst (Lv3)",
    outbreak: "1+69",
    persistence: "",
    rigidity: "4 frame(s) after landing",
    hit: "D",
    guard: "",
    damage: "400",
    stan: "0",
    remarks: "1F - 9F  full invincibility",
    vtrigger: 2,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P (max hold button)"
  },
  {
    name: "Airborne Yoga Sunburst (explodes upon ground contact)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "",
    damage: "200",
    stan: "0",
    remarks: "",
    vtrigger: 2,
    type: "ca",
    command: "(DURING JUMP) ↓↘→ ↓↘→ + P"
  }
];
export { dhalsim };
