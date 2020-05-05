const guile = [
  { name: "立ち弱P", outbreak: "4", persistence: "2", rigidity: "8", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "連打キャンセル対応", type: "normal", command: "" },
  { name: "立ち中P", outbreak: "6", persistence: "3", rigidity: "13", hit: "6", guard: "2", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "立ち強P", outbreak: "8", persistence: "3", rigidity: "18", hit: "7", guard: "-4", damage: "80", stan: "150", remarks: "強制立ち効果", type: "normal", command: "" },
  { name: "立ち弱K", outbreak: "4", persistence: "3", rigidity: "9", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", type: "normal", command: "" },
  { name: "立ち中K", outbreak: "7", persistence: "3", rigidity: "15", hit: "3", guard: "-1", damage: "70", stan: "100", remarks: "", type: "normal", command: "" },
  { name: "立ち強K", outbreak: "14", persistence: "3", rigidity: "18", hit: "2", guard: "-3", damage: "80", stan: "150", remarks: "", type: "normal", command: "" },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "7", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", type: "normal", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "2", rigidity: "13", hit: "3", guard: "1", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "しゃがみ強P",
    outbreak: "9",
    persistence: "5",
    rigidity: "16",
    hit: "2",
    guard: "-4",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続3F目以降",
    type: "normal",
    command: ""
  },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "3", rigidity: "8", hit: "2", guard: "0", damage: "20", stan: "70", remarks: "連打キャンセル対応", type: "normal", command: "" },
  { name: "しゃがみ中K", outbreak: "7", persistence: "2", rigidity: "15", hit: "2", guard: "-4", damage: "60", stan: "100", remarks: "", type: "normal", command: "" },
  {
    name: "しゃがみ強K",
    outbreak: "7",
    persistence: "5",
    rigidity: "20",
    hit: "D",
    guard: "-13",
    damage: "90+70",
    stan: "150+100",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                                                                                                                                V※1段目のみ可能",
    type: "normal",
    command: ""
  },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ中P", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強P", outbreak: "8", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ弱K", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", type: "jump", command: "" },
  { name: "ジャンプ中K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "", type: "jump", command: "" },
  { name: "ジャンプ強K", outbreak: "10", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", type: "jump", command: "" },
  { name: "ニーバズーカ", outbreak: "8", persistence: "5", rigidity: "20", hit: "-1", guard: "-3", damage: "50", stan: "100", remarks: "", type: "unique", command: "←OR → + 弱K" },
  { name: "ローリングソバット", outbreak: "12", persistence: "2", rigidity: "17(※20)", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "※空振り時", type: "unique", command: "←OR → + 中K" },
  { name: "リバーススピンキック", outbreak: "16", persistence: "3", rigidity: "18", hit: "4", guard: "-2", damage: "90", stan: "150", remarks: "8F～32F 投げ無敵", type: "unique", command: "→ + 強K" },
  {
    name: "バーンストレート",
    outbreak: "8",
    persistence: "3",
    rigidity: "20",
    hit: "2",
    guard: "-1",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    type: "unique",
    command: "← + 強P"
  },
  {
    name: "スピニングバックナックル",
    outbreak: "11",
    persistence: "3",
    rigidity: "16",
    hit: "4",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応(+26F)\n                                                                しゃがみの相手にヒットしない",
    type: "unique",
    command: "→ + 強P"
  },
  { name: "フルブレットマグナム", outbreak: "21", persistence: "2", rigidity: "19", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "unique", command: "→ + 中P" },
  {
    name: "ガイルハイキック",
    outbreak: "11",
    persistence: "2",
    rigidity: "25",
    hit: "D",
    guard: "-3",
    damage: "80",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない",
    type: "unique",
    command: "↘ + 強K"
  },
  { name: "ドレイクファング", outbreak: "16", persistence: "4", rigidity: "21", hit: "1", guard: "-7", damage: "60", stan: "100", remarks: "", type: "unique", command: "↓ + 中K ▶ → + 中P" },
  { name: "トールエッジ", outbreak: "6", persistence: "3", rigidity: "17", hit: "1", guard: "-8", damage: "60", stan: "100", remarks: "", type: "unique", command: "↓ + 弱K ▶ 中P" },
  {
    name: "ブレットリボルバー",
    outbreak: "10",
    persistence: "3",
    rigidity: "22",
    hit: "D",
    guard: "-8",
    damage: "70",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない\n                                                                                                VS※ヒット時",
    type: "unique",
    command: "↓ + 弱K ▶ 中P ▶ → + 強P"
  },
  {
    name: "スイングアウト",
    outbreak: "10",
    persistence: "3",
    rigidity: "22",
    hit: "D",
    guard: "-8",
    damage: "70",
    stan: "150",
    remarks: "しゃがみの相手にヒットしない\n                                                                                                VS※ヒット時",
    type: "unique",
    command: "中P ▶ → + 強P"
  },
  { name: "トラースコンビネーション", outbreak: "7", persistence: "3", rigidity: "15", hit: "D", guard: "-4", damage: "50", stan: "80", remarks: "VS※ヒット時", type: "unique", command: "弱K ▶ 中K" },
  { name: "ドラゴンスープレックス", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "130", stan: "150", remarks: "", type: "throw", command: "" },
  { name: "ジュードースルー", outbreak: "5", persistence: "3", rigidity: "17", hit: "D", guard: "", damage: "120", stan: "170", remarks: "", type: "throw", command: "" },
  { name: "フライングメイヤー", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "D", guard: "", damage: "130", stan: "170", remarks: "", type: "throw", command: "" },
  { name: "フライングバスタードロップ", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "D", guard: "", damage: "140", stan: "200", remarks: "", type: "throw", command: "" },
  { name: "[VS1]ソニックブレイド", outbreak: "18", persistence: "42", rigidity: "全体49", hit: "-5", guard: "-10", damage: "40", stan: "50", remarks: "", type: "vsystem", command: "" },
  {
    name: "[VS2]ダイブソニック",
    outbreak: "25 (※22)",
    persistence: "",
    rigidity: "全体59 (※54)",
    hit: "4",
    guard: "-7",
    damage: "40",
    stan: "50",
    remarks: "※7Fから空中判定\n※ブレットリボルバー、スイングアウト、トラースコンビネーションから発動した場合の数値",
    type: "vsystem",
    command: ""
  },
  {
    name: "ソリッドパンチャー",
    outbreak: "1",
    persistence: "",
    rigidity: "8",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+2000F\n                                                                                                                                                                                発動中ソニックブレイクが必殺技に追加、CAがソニックテンペストに強化",
    type: "vsystem",
    command: ""
  },
  {
    name: "リバースバックナックル",
    outbreak: "17",
    persistence: "2",
    rigidity: "23",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    type: "vsystem",
    command: ""
  },
  { name: "ソニックブーム", outbreak: "10", persistence: "", rigidity: "全体40", hit: "7", guard: "2", damage: "60", stan: "50", remarks: "", type: "special", command: "" },
  {
    name: "Vソニックブレイク(初段)",
    outbreak: "10",
    persistence: "",
    rigidity: "全体36",
    hit: "5",
    guard: "1",
    damage: "40",
    stan: "40",
    remarks: "Vゲージタイマー350F消費",
    type: "special",
    command: ""
  },
  {
    name: "Vソニックブレイク(派生)",
    outbreak: "10",
    persistence: "",
    rigidity: "全体36",
    hit: "5",
    guard: "1",
    damage: "50",
    stan: "40",
    remarks: "Vゲージタイマー350F消費",
    type: "special",
    command: ""
  },
  { name: "EX ソニックブーム", outbreak: "10", persistence: "", rigidity: "全体36", hit: "D", guard: "4", damage: "100", stan: "100", remarks: "", type: "special", command: "" },
  {
    name: "VEX ソニックブレイク",
    outbreak: "10",
    persistence: "",
    rigidity: "全体36",
    hit: "D",
    guard: "11",
    damage: "70",
    stan: "100",
    remarks: "Vゲージタイマー450F消費",
    type: "special",
    command: ""
  },
  {
    name: "ソニッククロス",
    outbreak: "10(※46)",
    persistence: "",
    rigidity: "全体33",
    hit: "D",
    guard: "",
    damage: "80",
    stan: "100",
    remarks: "※ソニックブレイドから最速で派生した際の通算フレーム",
    type: "special",
    command: ""
  },
  {
    name: "EX ソニッククロス",
    outbreak: "10(※46)",
    persistence: "",
    rigidity: "全体31",
    hit: "D",
    guard: "",
    damage: "140",
    stan: "150",
    remarks: "※ソニックブレイドから最速で派生した際の通算フレーム",
    type: "special",
    command: ""
  },
  {
    name: "弱 サマーソルトキック",
    outbreak: "4",
    persistence: "12",
    rigidity: "23+着地後13",
    hit: "D",
    guard: "-28",
    damage: "130(※100)",
    stan: "200",
    remarks: "1F～7F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続2F目以降",
    type: "special",
    command: ""
  },
  {
    name: "中 サマーソルトキック",
    outbreak: "5",
    persistence: "12",
    rigidity: "23+着地後13",
    hit: "D",
    guard: "-28",
    damage: "130(※100)",
    stan: "200",
    remarks: "1F～8F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続2F目以降",
    type: "special",
    command: ""
  },
  {
    name: "強 サマーソルトキック",
    outbreak: "6",
    persistence: "12",
    rigidity: "25+着地後13",
    hit: "D",
    guard: "-30",
    damage: "130(※100)",
    stan: "200",
    remarks: "3F～9F 飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    type: "special",
    command: ""
  },
  {
    name: "EX サマーソルトキック",
    outbreak: "4",
    persistence: "12",
    rigidity: "27+着地後17",
    hit: "D",
    guard: "-36",
    damage: "150(※120)",
    stan: "200",
    remarks: "1F～9F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※持続2F目以降",
    type: "special",
    command: ""
  },
  {
    name: "ソニックハリケーン",
    outbreak: "1+5",
    persistence: "50",
    rigidity: "全体104",
    hit: "D",
    guard: "-41",
    damage: "320",
    stan: "0",
    remarks: "6F～56F 飛び道具無敵\n1F～5F 完全無敵",
    type: "ca",
    command: ""
  },
  {
    name: "Vソニックテンペスト",
    outbreak: "1+5",
    persistence: "50",
    rigidity: "全体104",
    hit: "D",
    guard: "5",
    damage: "350",
    stan: "0",
    remarks:
      "Vゲージタイマー2000F消費\n                                                                                                                                6F～56F 飛び道具無敵\n1F～5F 完全無敵",
    type: "ca",
    command: ""
  }
];

export { guile };
