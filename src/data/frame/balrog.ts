const balrog = [
  { name: "立ち弱P", outbreak: "5", persistence: "2", rigidity: "9", hit: "7", guard: "1", damage: "30", stan: "70", remarks: "しゃがみの相手にヒットしない", command: "" },
  { name: "立ち中P", outbreak: "8", persistence: "2", rigidity: "14", hit: "6", guard: "2", damage: "70", stan: "100", remarks: "S※スイッチングクローでのみキャンセル可能", command: "" },
  { name: "立ち強P", outbreak: "8", persistence: "2", rigidity: "21", hit: "7", guard: "-2", damage: "80", stan: "150", remarks: "", command: "" },
  { name: "立ち弱K", outbreak: "3", persistence: "2", rigidity: "9", hit: "4", guard: "2", damage: "30", stan: "70", remarks: "", command: "" },
  { name: "立ち中K", outbreak: "7", persistence: "3", rigidity: "12", hit: "4", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
  {
    name: "立ち強K",
    outbreak: "11",
    persistence: "3",
    rigidity: "16",
    hit: "4",
    guard: "-1",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応(+18F)\n                                                                しゃがみの相手にヒットしない",
    command: ""
  },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "6", hit: "5", guard: "2", damage: "30", stan: "70", remarks: "", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "2", rigidity: "15", hit: "3", guard: "1", damage: "60", stan: "100", remarks: "S※スイッチングクローでのみキャンセル可能", command: "" },
  {
    name: "しゃがみ強P",
    outbreak: "9",
    persistence: "3",
    rigidity: "18",
    hit: "5",
    guard: "3",
    damage: "80",
    stan: "150",
    remarks: "強制立ち効果\n                                                                                                                S※スイッチングクローでのみキャンセル可能",
    command: ""
  },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "9", hit: "4", guard: "0", damage: "20", stan: "70", remarks: "", command: "" },
  { name: "しゃがみ中K", outbreak: "8", persistence: "2", rigidity: "16", hit: "7", guard: "2", damage: "50", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強K", outbreak: "9", persistence: "9", rigidity: "18", hit: "D", guard: "-13", damage: "80", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "5", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中P", outbreak: "5", persistence: "5", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "ジャンプ強P", outbreak: "7", persistence: "4", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "ジャンプ弱K", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "めくり性能", command: "" },
  { name: "ジャンプ中K", outbreak: "7", persistence: "7", rigidity: "", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "ジャンプ強K", outbreak: "9", persistence: "5", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "ピースオブマーキュリー", outbreak: "22", persistence: "3", rigidity: "15", hit: "0", guard: "-7", damage: "60", stan: "100", remarks: "13F～19F 投げ無敵", command: "→ + 中K" },
  { name: "バスタークロー", outbreak: "13", persistence: "2", rigidity: "24", hit: "-3", guard: "-14", damage: "80", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "→ + 強P" },
  { name: "リバースクロー", outbreak: "10", persistence: "3", rigidity: "22", hit: "D", guard: "-10", damage: "60", stan: "80", remarks: "S※CA※ヒット時のみ可能", command: "強P ▶ 強P" },
  {
    name: "マタドールフラッシュ",
    outbreak: "",
    persistence: "",
    rigidity: "35",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "6F～30F 飛び道具無敵\n                                6F～31F 上半身無敵\n                動作中常に被カウンター判定",
    command: "(VスキルⅠ選択時) 強P ▶ 強P ▶(ヒット時) 中P 中K"
  },
  {
    name: "マタドールフラッシュ(攻撃)",
    outbreak: "22",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "",
    damage: "60",
    stan: "80",
    remarks: "6F～19F 飛び道具無敵\n                                6F～19F 上半身無敵",
    command: "(VスキルⅠ選択時) 強P ▶ 強P ▶(ヒット時) 中P 中K(ボタンホールド)"
  },
  {
    name: "三角跳び",
    outbreak: "",
    persistence: "",
    rigidity: "18",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "19F目からジャンプ攻撃等を出せるようになる",
    command: "(ジャンプ中、壁付近で)"
  },
  { name: "レインボースープレックス", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "170", remarks: "", command: "" },
  { name: "クレセントライン", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
  { name: "スターダストシュート", outbreak: "5", persistence: "2", rigidity: "着地後6", hit: "", guard: "", damage: "140", stan: "200", remarks: "", command: "" },
  {
    name: "[VS1]マタドールターン",
    outbreak: "",
    persistence: "",
    rigidity: "35",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "7F～31F 飛び道具無敵\n                                7F～32F 上半身無敵\n                動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "[VS1]マタドールターン(ボタンホールド)",
    outbreak: "22",
    persistence: "2",
    rigidity: "31",
    hit: "D",
    guard: "-13",
    damage: "90",
    stan: "100",
    remarks: "6F～19F 飛び道具無敵\n                                6F～19F 上半身無敵",
    command: ""
  },
  { name: "[VS2]マタドールフリップ", outbreak: "", persistence: "", rigidity: "48", hit: "", guard: "", damage: "", stan: "", remarks: "1F～18F 打撃&飛び道具無敵", command: "" },
  { name: "[VS2]コズミックスマート", outbreak: "8", persistence: "4", rigidity: "20", hit: "D", guard: "-6", damage: "70", stan: "100", remarks: "", command: "" },
  {
    name: "アレグリアス",
    outbreak: "1",
    persistence: "",
    rigidity: "5",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks:
      "Vゲージタイマー+2000F\n                                                                                                                                                                                発動中、専用の必殺技が追加",
    command: ""
  },
  {
    name: "バックスラッシュ",
    outbreak: "",
    persistence: "",
    rigidity: "全体41",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "1F～40F 完全無敵\n                                                発動時スタン値200回復",
    command: ""
  },
  {
    name: "ショートバックスラッシュ",
    outbreak: "",
    persistence: "",
    rigidity: "全体31",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "1F～30F 完全無敵\n                                                発動時スタン値200回復",
    command: ""
  },
  { name: "フライングバルセロナ", outbreak: "", persistence: "", rigidity: "着地後31", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
  {
    name: "EX フライングバルセロナ",
    outbreak: "9",
    persistence: "壁到達まで",
    rigidity: "着地後31",
    hit: "D",
    guard: "",
    damage: "40",
    stan: "0",
    remarks: "しゃがみの相手にヒットしない",
    command: ""
  },
  {
    name: "フライングバルセロナアタック",
    outbreak: "3",
    persistence: "6",
    rigidity: "着地後31(※着地後9)",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "150",
    remarks: "※ヒットまたはガード時",
    command: ""
  },
  {
    name: "EX フライングバルセロナアタック",
    outbreak: "9",
    persistence: "着地まで",
    rigidity: "着地後31(※着地後9)",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "200",
    remarks: "※ヒットまたはガード時",
    command: ""
  },
  { name: "イズナドロップ", outbreak: "4", persistence: "2", rigidity: "着地後31", hit: "D", guard: "", damage: "150", stan: "200", remarks: "", command: "" },
  { name: "EX イズナドロップ", outbreak: "4", persistence: "2", rigidity: "着地後31", hit: "D", guard: "", damage: "160", stan: "250", remarks: "", command: "" },
  { name: "弱 クリムゾンテラー", outbreak: "8", persistence: "7", rigidity: "12", hit: "2", guard: "-6", damage: "80", stan: "150", remarks: "CA※最終段のみキャンセル不可", command: "" },
  { name: "中 クリムゾンテラー", outbreak: "17", persistence: "9", rigidity: "14", hit: "2", guard: "-7", damage: "100", stan: "150", remarks: "CA※最終段のみキャンセル不可", command: "" },
  { name: "強 クリムゾンテラー", outbreak: "19", persistence: "15", rigidity: "16", hit: "D", guard: "-8", damage: "120", stan: "200", remarks: "CA※最終段のみキャンセル不可", command: "" },
  {
    name: "EX クリムゾンテラー",
    outbreak: "16",
    persistence: "13",
    rigidity: "10",
    hit: "D",
    guard: "-2",
    damage: "80",
    stan: "120",
    remarks: "1F～49F 飛び道具無敵\n                                                3段目以降はヒット時のみ派生",
    command: ""
  },
  { name: "弱 オーロラスピンエッジ", outbreak: "12", persistence: "6", rigidity: "20", hit: "D", guard: "-7", damage: "100", stan: "200", remarks: "", command: "" },
  { name: "中 オーロラスピンエッジ", outbreak: "15", persistence: "6", rigidity: "18", hit: "D", guard: "-6", damage: "100", stan: "200", remarks: "", command: "" },
  { name: "強 オーロラスピンエッジ", outbreak: "12", persistence: "6", rigidity: "16", hit: "D", guard: "-4", damage: "100", stan: "200", remarks: "", command: "" },
  { name: "EX オーロラスピンエッジ", outbreak: "12", persistence: "11", rigidity: "21", hit: "D", guard: "-3", damage: "150", stan: "200", remarks: "動作中投げ無敵", command: "" },
  { name: "スイッチングクロー", outbreak: "", persistence: "", rigidity: "全体23", hit: "", guard: "", damage: "", stan: "", remarks: "", command: "" },
  {
    name: "ブラッディガーデン",
    outbreak: "",
    persistence: "",
    rigidity: "着地後31",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "9F目から完全無敵\nスペインステージでのみ使用可能",
    command: ""
  },
  {
    name: "ブラッディガーデンアタック",
    outbreak: "9",
    persistence: "着地まで",
    rigidity: "着地後31(※着地後9)",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "200",
    remarks: "※ヒットまたはガード時",
    command: ""
  },
  { name: "ブラッディガーデンドロップ", outbreak: "4", persistence: "2", rigidity: "着地後31(※着地後9)", hit: "D", guard: "", damage: "160", stan: "250", remarks: "", command: "" },
  {
    name: "フラッシュアーチ・ロッサ(構え)",
    outbreak: "3",
    persistence: "13",
    rigidity: "36",
    hit: "D",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "フラッシュアーチ・ロッサ(攻撃)",
    outbreak: "1",
    persistence: "4",
    rigidity: "26",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks:
      "Vゲージタイマー全消費\n                                                                                                                                                                                動作中完全無敵",
    command: ""
  },
  { name: "フラッシュアーチ・グラナーテ", outbreak: "17", persistence: "4", rigidity: "27", hit: "D", guard: "-11", damage: "120", stan: "150", remarks: "Vゲージタイマー全消費", command: "" },
  {
    name: "スカイハイクロー",
    outbreak: "18-31",
    persistence: "19-22",
    rigidity: "8-22+着地後1",
    hit: "D",
    guard: "-20",
    damage: "100",
    stan: "120",
    remarks:
      "しゃがみの相手にヒットしない\n                                                                                                キャラの位置によって発生・持続が変化\n攻撃判定発生中は飛び道具無敵",
    command: ""
  },
  {
    name: "EX スカイハイクロー",
    outbreak: "20-30",
    persistence: "14",
    rigidity: "5-19+着地後1",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "150",
    remarks: "攻撃判定発生中は飛び道具無敵",
    command: ""
  },
  { name: "ブラッディレイン", outbreak: "9", persistence: "壁到達まで/8", rigidity: "29", hit: "D", guard: "-14", damage: "330", stan: "0", remarks: "1F～暗転まで投げ&飛び道具無敵", command: "" }
];

export { balrog };
