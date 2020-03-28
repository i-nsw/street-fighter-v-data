const chunli = [
  { name: "立ち弱P", outbreak: "4", persistence: "2", rigidity: "8", hit: "5", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "立ち中P", outbreak: "5", persistence: "3", rigidity: "9", hit: "6", guard: "3", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "立ち強P", outbreak: "11", persistence: "2", rigidity: "18", hit: "0", guard: "-4", damage: "80", stan: "150", remarks: "", command: "" },
  { name: "立ち弱K", outbreak: "5", persistence: "3", rigidity: "7", hit: "1", guard: "-3", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "立ち中K", outbreak: "8", persistence: "3", rigidity: "15", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", command: "" },
  {
    name: "立ち強K",
    outbreak: "12",
    persistence: "3",
    rigidity: "16",
    hit: "1",
    guard: "-2",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応(+21F)\n                                                                しゃがみの相手にヒットしない",
    command: ""
  },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "5", hit: "5", guard: "2", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "しゃがみ中P", outbreak: "10", persistence: "9", rigidity: "18", hit: "-3", guard: "-8", damage: "60", stan: "100", remarks: "6F～18F 飛び道具無敵", command: "" },
  { name: "しゃがみ強P", outbreak: "7", persistence: "4", rigidity: "17", hit: "2", guard: "-5", damage: "100", stan: "150", remarks: "S※CA※V※VS※1段目のみ可能", command: "" },
  {
    name: "しゃがみ弱K",
    outbreak: "3",
    persistence: "2",
    rigidity: "8",
    hit: "2",
    guard: "-1",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応\n                                                                                                                                S※百裂脚でのみキャンセル可能",
    command: ""
  },
  { name: "しゃがみ中K", outbreak: "6", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "50", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強K", outbreak: "8", persistence: "3", rigidity: "24", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
  { name: "ジャンプ弱P", outbreak: "3", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中P", outbreak: "6", persistence: "4", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  { name: "ジャンプ強P", outbreak: "6", persistence: "8", rigidity: "", hit: "", guard: "", damage: "100", stan: "150", remarks: "", command: "" },
  { name: "ジャンプ弱K", outbreak: "4", persistence: "7", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中K", outbreak: "6", persistence: "5", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
  { name: "斜めジャンプ強K", outbreak: "9", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "垂直ジャンプ強K", outbreak: "7", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "旋円蹴", outbreak: "26", persistence: "2", rigidity: "16", hit: "2", guard: "-2", damage: "70", stan: "100", remarks: "", command: "↘ + 中K" },
  { name: "追突拳", outbreak: "7", persistence: "2", rigidity: "12", hit: "3", guard: "0", damage: "65", stan: "100", remarks: "", command: "←OR → + 中P" },
  { name: "発勁", outbreak: "7", persistence: "5", rigidity: "13", hit: "3", guard: "2", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "← + 強P" },
  {
    name: "鶴落脚",
    outbreak: "34",
    persistence: "7",
    rigidity: "3+着地後7",
    hit: "8",
    guard: "4",
    damage: "80",
    stan: "150",
    remarks:
      "めくり性能\n                                                                                                                                                硬直差は同キャラで持続の5F目が当たった場合",
    command: "↘ + 強K"
  },
  { name: "天空脚", outbreak: "8", persistence: "5", rigidity: "13", hit: "2", guard: "0", damage: "80", stan: "150", remarks: "強制立ち効果", command: "← + 強K" },
  {
    name: "翼旋脚",
    outbreak: "18",
    persistence: "5",
    rigidity: "13(※18)",
    hit: "2",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+18F)\n                                                                                                                                                                ※空振り時",
    command: "→ + 強K"
  },
  { name: "鷹爪脚", outbreak: "5", persistence: "4", rigidity: "着地後4", hit: "D", guard: "", damage: "40", stan: "60", remarks: "めくり性能", command: "(ジャンプ中に) ↓ + 中K" },
  { name: "鷹爪脚(2段目)", outbreak: "", persistence: "", rigidity: "着地後4", hit: "D", guard: "", damage: "50", stan: "60", remarks: "めくり性能", command: "(ジャンプ中に) ↓ + 中K ▶ ↓ + 中K" },
  {
    name: "鷹爪脚(3段目)",
    outbreak: "",
    persistence: "",
    rigidity: "着地後4",
    hit: "D",
    guard: "",
    damage: "60",
    stan: "60",
    remarks: "めくり性能",
    command: "(ジャンプ中に) ↓ + 中K ▶ ↓ + 中K ▶ ↓ + 中K"
  },
  { name: "三角跳び", outbreak: "", persistence: "", rigidity: "", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "(ジャンプ中、壁付近で) ↗" },
  { name: "虎襲倒", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "120", stan: "150", remarks: "", command: "" },
  { name: "転身鷲蹴", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
  { name: "龍星落", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "", guard: "", damage: "130", stan: "200", remarks: "", command: "" },
  {
    name: "[VS1]鸞脚",
    outbreak: "11",
    persistence: "6",
    rigidity: "36+着地後6",
    hit: "D",
    guard: "-24",
    damage: "40",
    stan: "50",
    remarks: "動作中のジャンプ攻撃をヒット、ガードさせた場合にVゲージが増加",
    command: ""
  },
  { name: "[VS1]双睛脚", outbreak: "12", persistence: "6", rigidity: "着地後4", hit: "", guard: "", damage: "100", stan: "120", remarks: "", command: "" },
  {
    name: "[VS2]覇山蹴",
    outbreak: "27",
    persistence: "3",
    rigidity: "20",
    hit: "D",
    guard: "-4",
    damage: "80",
    stan: "120",
    remarks: "後ろ入力時は移動距離が短くなる\nダウン追い打ち可能",
    command: ""
  },
  {
    name: "気功掌",
    outbreak: "7",
    persistence: "20",
    rigidity: "11",
    hit: "D",
    guard: "2",
    damage: "120",
    stan: "150",
    remarks:
      "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、専用の必殺技が追加",
    command: ""
  },
  {
    name: "双発勁",
    outbreak: "12",
    persistence: "2",
    rigidity: "24",
    hit: "2",
    guard: "-2",
    damage: "40",
    stan: "0",
    remarks: "1F～25F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    command: ""
  },
  { name: "弱 気功拳", outbreak: "13", persistence: "70", rigidity: "全体46", hit: "0", guard: "-6", damage: "60", stan: "100", remarks: "Vトリガーは空振りキャンセルも可能", command: "" },
  { name: "中 気功拳", outbreak: "11", persistence: "50", rigidity: "全体45", hit: "-1", guard: "-5", damage: "60", stan: "100", remarks: "Vトリガーは空振りキャンセルも可能", command: "" },
  { name: "強 気功拳", outbreak: "9", persistence: "30", rigidity: "全体44", hit: "-1", guard: "-4", damage: "60", stan: "100", remarks: "Vトリガーは空振りキャンセルも可能", command: "" },
  { name: "EX 気功拳", outbreak: "11", persistence: "", rigidity: "全体38", hit: "4", guard: "1", damage: "100", stan: "100", remarks: "Vトリガーは空振りキャンセルも可能", command: "" },
  { name: "弱 百裂脚", outbreak: "5", persistence: "8", rigidity: "20", hit: "4", guard: "-8", damage: "60", stan: "80", remarks: "CA※V※3段目のみ可能", command: "" },
  { name: "中 百裂脚", outbreak: "11", persistence: "10", rigidity: "20", hit: "3", guard: "-9", damage: "80", stan: "120", remarks: "CA※V※4段目のみ可能", command: "" },
  { name: "強 百裂脚", outbreak: "14", persistence: "12", rigidity: "20", hit: "D", guard: "-10", damage: "100", stan: "120", remarks: "CA※V※5段目のみ可能", command: "" },
  { name: "EX 百裂脚", outbreak: "5", persistence: "20", rigidity: "19", hit: "D", guard: "-2", damage: "140", stan: "200", remarks: "V※最終段のみ可能", command: "" },
  { name: "弱 空中百裂脚", outbreak: "8", persistence: "8", rigidity: "着地後12", hit: "4", guard: "-2", damage: "70", stan: "80", remarks: "", command: "" },
  { name: "中 空中百裂脚", outbreak: "10", persistence: "10", rigidity: "着地後12", hit: "4", guard: "-2", damage: "80", stan: "100", remarks: "", command: "" },
  { name: "強 空中百裂脚", outbreak: "12", persistence: "12", rigidity: "着地後12", hit: "0", guard: "-3", damage: "100", stan: "120", remarks: "", command: "" },
  { name: "EX 空中百裂脚", outbreak: "6", persistence: "14", rigidity: "着地後12", hit: "-7", guard: "-10", damage: "160", stan: "210", remarks: "", command: "" },
  { name: "弱 スピニングバードキック", outbreak: "9", persistence: "10", rigidity: "24", hit: "D", guard: "-6", damage: "110", stan: "200", remarks: "初段ヒット時のみ強制立ち効果", command: "" },
  { name: "中 スピニングバードキック", outbreak: "15", persistence: "14", rigidity: "24", hit: "D", guard: "-8", damage: "130", stan: "200", remarks: "初段ヒット時のみ強制立ち効果", command: "" },
  { name: "強 スピニングバードキック", outbreak: "19", persistence: "18", rigidity: "24", hit: "D", guard: "-8", damage: "150", stan: "200", remarks: "初段ヒット時のみ強制立ち効果", command: "" },
  {
    name: "EX スピニングバードキック",
    outbreak: "5",
    persistence: "17",
    rigidity: "31",
    hit: "D",
    guard: "-16",
    damage: "150",
    stan: "200",
    remarks: "9F～33F 飛び道具無敵\n1F～8F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
    command: ""
  },
  {
    name: "気功掌",
    outbreak: "16",
    persistence: "10",
    rigidity: "18",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "100",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                Vトリガーキャンセル可能な技からキャンセル発動可能",
    command: ""
  },
  {
    name: "気功掌(溜め)",
    outbreak: "49",
    persistence: "20",
    rigidity: "11",
    hit: "D",
    guard: "GB",
    damage: "120",
    stan: "150",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                ガードブレイク時 +18F",
    command: ""
  },
  { name: "鳳翼扇", outbreak: "1+4", persistence: "2", rigidity: "35", hit: "D", guard: "-20", damage: "330", stan: "0", remarks: "1F～6F 完全無敵", command: "" }
];
export { chunli };
