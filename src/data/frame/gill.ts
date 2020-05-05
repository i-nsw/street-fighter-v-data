const gill = [
  { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "立ち中P", outbreak: "7", persistence: "3", rigidity: "13", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "立ち強P",
    outbreak: "13",
    persistence: "3",
    rigidity: "17",
    hit: "6(※10)",
    guard: "-2",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n※反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "normal",
    command: ""
  },
  { name: "立ち弱K", outbreak: "4", persistence: "3", rigidity: "8", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "立ち中K", outbreak: "9", persistence: "3", rigidity: "16", hit: "3", guard: "-4", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "立ち強K",
    outbreak: "11",
    persistence: "3",
    rigidity: "23",
    hit: "2(※D)",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n※反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "normal",
    command: ""
  },
  { name: "しゃがみ弱P", outbreak: "3", persistence: "2", rigidity: "9", hit: "3", guard: "1", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "しゃがみ強P",
    outbreak: "7",
    persistence: "5",
    rigidity: "21",
    hit: "D",
    guard: "-9",
    damage: "80(※70)",
    stan: "150",
    remarks: "反属性ダメージ対応技\nCA※S※V※2段目のみ可能\n※2段目のみヒット時",
    type: "normal",
    command: ""
  },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "8", hit: "3", guard: "0", damage: "20", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "しゃがみ中K", outbreak: "8", persistence: "2", rigidity: "17", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "しゃがみ強K",
    outbreak: "12",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-13",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n反属性成立時受身不可",
    type: "normal",
    command: ""
  },
  { name: "ジャンプ弱P", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ中P", outbreak: "6", persistence: "3", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強P", outbreak: "10", persistence: "4", rigidity: "", hit: "", guard: "", damage: "80", stan: "150", remarks: "反属性ダメージ対応技", type: "jump", command: "" },
  { name: "ジャンプ弱K", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", type: "jump", command: "" },
  { name: "ジャンプ中K", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強K", outbreak: "10", persistence: "3", rigidity: "", hit: "", guard: "", damage: "90", stan: "120", remarks: "反属性ダメージ対応技", type: "jump", command: "" },
  {
    name: "クリオドロップエルボー",
    outbreak: "22",
    persistence: "3",
    rigidity: "19",
    hit: "1(※D)",
    guard: "-8",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n反属性成立時受身不可\n※反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "パイロクォーラルキック",
    outbreak: "15",
    persistence: "4",
    rigidity: "21(※127)",
    hit: "4(※2D)",
    guard: "-6",
    damage: "90",
    stan: "120",
    remarks: "反属性ダメージ対応技\n※1空振り時\n※2反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "→ + 強K"
  },
  {
    name: "クリオライズキック",
    outbreak: "9",
    persistence: "4",
    rigidity: "21",
    hit: "3(※13)",
    guard: "-7",
    damage: "80",
    stan: "150",
    remarks: "反属性ダメージ対応技\n※反属性ダメージ中の相手に攻撃をヒットさせた際の数値",
    type: "unique",
    command: "← + 強K"
  },
  { name: "ギルティストレート", outbreak: "7", persistence: "3", rigidity: "20", hit: "-2", guard: "-5", damage: "60", stan: "100", remarks: "", type: "unique", command: "弱P ▶ 中P" },
  { name: "ペナルティブレイク", outbreak: "7", persistence: "3", rigidity: "17", hit: "-3", guard: "-8", damage: "50", stan: "100", remarks: "", type: "unique", command: "↓ + 弱K ▶ ↓ + 中K" },
  { name: "インパクトクロー", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "ギルティボム", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  {
    name: "[VS1]メテオストライク",
    outbreak: "44",
    persistence: "着地まで",
    rigidity: "全体53",
    hit: "",
    guard: "",
    damage: "60",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "vsystem",
    command: ""
  },
  {
    name: "V[VS1]メテオストライク",
    outbreak: "44",
    persistence: "着地まで",
    rigidity: "全体53",
    hit: "",
    guard: "",
    damage: "70",
    stan: "100",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2]ブロッキング(立ち)",
    outbreak: "2",
    persistence: "9",
    rigidity: "30",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ブロッキング成立後に出すキャンセルブロッキングは発生1F\n動作中常に被カウンター判定（キャンセルブロッキングは対象外）",
    type: "vsystem",
    command: ""
  },
  {
    name: "[VS2]ブロッキング(しゃがみ)",
    outbreak: "2",
    persistence: "9",
    rigidity: "30",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "ブロッキング成立後に出すキャンセルブロッキングは発生1F\n動作中常に被カウンター判定（キャンセルブロッキングは対象外）",
    type: "vsystem",
    command: ""
  },
  {
    name: "プライマルファイア",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、パイロキネシスとパイロサイバーラリアットが強化され、専用技「バーンストーム」「フレイムジャベリン」「ヴォルカニックストーム」が使用可能になる",
    type: "vsystem",
    command: ""
  },
  {
    name: "パイロリバースキック",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～31F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    type: "vsystem",
    command: ""
  },
  { name: "弱 パイロキネシス", outbreak: "14", persistence: "", rigidity: "全体49", hit: "-2", guard: "-6", damage: "70", stan: "80", remarks: "反属性ダメージ対応技", type: "special", command: "" },
  { name: "中 パイロキネシス", outbreak: "14", persistence: "", rigidity: "全体49", hit: "-2", guard: "-6", damage: "70", stan: "80", remarks: "反属性ダメージ対応技", type: "special", command: "" },
  {
    name: "強 パイロキネシス",
    outbreak: "14",
    persistence: "",
    rigidity: "全体49",
    hit: "",
    guard: "",
    damage: "70",
    stan: "80",
    remarks: "地上の相手にヒットしない\n                                                                                反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "EX パイロキネシス 弱",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "2",
    guard: "1",
    damage: "90",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX パイロキネシス 中",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "2",
    guard: "1",
    damage: "90",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX パイロキネシス 強",
    outbreak: "14",
    persistence: "",
    rigidity: "全体43",
    hit: "",
    guard: "",
    damage: "90",
    stan: "80",
    remarks: "地上の相手にヒットしない\n                                                                                反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "V弱 パイロキネシス",
    outbreak: "14",
    persistence: "",
    rigidity: "全体49",
    hit: "0",
    guard: "-4",
    damage: "70",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "V中 パイロキネシス",
    outbreak: "14",
    persistence: "",
    rigidity: "全体49",
    hit: "0",
    guard: "-4",
    damage: "70",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "V強 パイロキネシス",
    outbreak: "14",
    persistence: "",
    rigidity: "全体49",
    hit: "",
    guard: "",
    damage: "70",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  { name: "弱 クリオキネシス", outbreak: "22", persistence: "", rigidity: "全体51", hit: "1", guard: "-4", damage: "50", stan: "120", remarks: "反属性ダメージ対応技", type: "special", command: "" },
  { name: "中 クリオキネシス", outbreak: "22", persistence: "", rigidity: "全体51", hit: "1", guard: "-4", damage: "50", stan: "120", remarks: "反属性ダメージ対応技", type: "special", command: "" },
  {
    name: "強 クリオキネシス",
    outbreak: "22",
    persistence: "",
    rigidity: "全体51",
    hit: "",
    guard: "",
    damage: "50",
    stan: "120",
    remarks: "地上の相手にヒットしない\n                                                                                反属性ダメージ対応技",
    type: "special",
    command: ""
  },
  {
    name: "EX クリオキネシス 弱",
    outbreak: "22",
    persistence: "",
    rigidity: "全体51",
    hit: "2",
    guard: "3",
    damage: "50",
    stan: "140",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX クリオキネシス 中",
    outbreak: "22",
    persistence: "",
    rigidity: "全体51",
    hit: "2",
    guard: "3",
    damage: "50",
    stan: "140",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "EX クリオキネシス 強",
    outbreak: "22",
    persistence: "",
    rigidity: "全体51",
    hit: "",
    guard: "",
    damage: "50",
    stan: "140",
    remarks: "地上の相手にヒットしない\n                                                                                反属性ダメージ対応技\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "弱 パイロサイバーラリアット",
    outbreak: "12(※9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "80",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "中 パイロサイバーラリアット",
    outbreak: "22(※15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "100",
    stan: "80",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "強 パイロサイバーラリアット",
    outbreak: "31(※21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "80",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "EX パイロサイバーラリアット",
    outbreak: "22(※12)",
    persistence: "4",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "120",
    stan: "80",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与\n※密着時\n3F～攻撃判定終了までアーマー判定",
    type: "special",
    command: ""
  },
  {
    name: "V弱 パイロサイバーラリアット",
    outbreak: "12(※9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "80",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n※密着時\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "V中 パイロサイバーラリアット",
    outbreak: "22(※15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "100",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n※密着時\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "V強 パイロサイバーラリアット",
    outbreak: "31(※21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "120",
    stan: "80",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n※密着時\nVS※ヒット/ガード時、メテオストライクでキャンセル可能",
    type: "special",
    command: ""
  },
  {
    name: "弱 クリオサイバーラリアット",
    outbreak: "12(※9)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "120",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "中 クリオサイバーラリアット",
    outbreak: "22(※15)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "140",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "強 クリオサイバーラリアット",
    outbreak: "31(※21)",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-6",
    damage: "60",
    stan: "160",
    remarks: "反属性ダメージ対応技\n※密着時",
    type: "special",
    command: ""
  },
  {
    name: "EX クリオサイバーラリアット",
    outbreak: "22(※12)",
    persistence: "4",
    rigidity: "22",
    hit: "D",
    guard: "-12",
    damage: "60",
    stan: "160",
    remarks: "反属性ダメージ対応技\n反属性ダメージ付与\n※密着時\n3F～攻撃判定終了までアーマー判定",
    type: "special",
    command: ""
  },
  {
    name: "弱 ムーンサルトニードロップ",
    outbreak: "33",
    persistence: "5",
    rigidity: "着地後11",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "硬直差はリュウの立ち状態にガードさせた場合のもの",
    type: "special",
    command: ""
  },
  {
    name: "中 ムーンサルトニードロップ",
    outbreak: "35",
    persistence: "5",
    rigidity: "着地後11",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "硬直差はリュウの立ち状態にガードさせた場合のもの",
    type: "special",
    command: ""
  },
  {
    name: "強 ムーンサルトニードロップ",
    outbreak: "37",
    persistence: "3",
    rigidity: "着地後11",
    hit: "D",
    guard: "-2",
    damage: "100",
    stan: "120",
    remarks: "硬直差はリュウの立ち状態にガードさせた場合のもの",
    type: "special",
    command: ""
  },
  {
    name: "EX ムーンサルトニードロップ",
    outbreak: "10",
    persistence: "14",
    rigidity: "着地後10",
    hit: "D",
    guard: "-2",
    damage: "120",
    stan: "160",
    remarks: "レバー入力で前進距離を調整可能\n硬直差はリュウの立ち状態にガードさせた場合のもの",
    type: "special",
    command: ""
  },
  {
    name: "Vバーンストーム",
    outbreak: "12",
    persistence: "14",
    rigidity: "17",
    hit: "D",
    guard: "-9",
    damage: "120",
    stan: "80",
    remarks:
      "Vゲージタイマー800F消費\n                                                                                                                                                                                反属性ダメージ対応技\n通常技/特殊技(クリオドロップエルボー以外)からキャンセル可能\nヴォルカニックストームに派生可能\n反属性ダメージ付与",
    type: "special",
    command: ""
  },
  {
    name: "Vフレイムジャベリン",
    outbreak: "22",
    persistence: "",
    rigidity: "全体62",
    hit: "D",
    guard: "-2",
    damage: "90",
    stan: "100",
    remarks:
      "Vゲージタイマー700F消費\n                                                                                                                                                                                反属性ダメージ対応技\n通常技/特殊技(クリオドロップエルボー以外)からキャンセル可能\n反属性ダメージ付与\n硬直差は1入力版を近距離でガードさせた際のもの",
    type: "special",
    command: ""
  },
  {
    name: "Vヴォルカニックストーム",
    outbreak: "19",
    persistence: "",
    rigidity: "全体62",
    hit: "D",
    guard: "-4",
    damage: "90",
    stan: "100",
    remarks:
      "Vゲージタイマー300F消費\n                                                                                                                                                                                反属性ダメージ対応技\n反属性ダメージ付与\n硬直差は4入力版を近距離でガードさせた際のもの",
    type: "special",
    command: ""
  },
  { name: "セラフィックウイング", outbreak: "5", persistence: "29", rigidity: "39", hit: "D", guard: "-32", damage: "340", stan: "0", remarks: "1F～8F 完全無敵", type: "ca", command: "" }
];

export { gill };
