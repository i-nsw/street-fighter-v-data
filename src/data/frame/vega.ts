const vega = [
  { name: "立ち弱P", outbreak: "4", persistence: "3", rigidity: "7", hit: "5", guard: "3", damage: "30", stan: "70", remarks: "", command: "" },
  { name: "立ち中P", outbreak: "7", persistence: "3", rigidity: "14", hit: "6", guard: "2", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "立ち強P", outbreak: "11", persistence: "3", rigidity: "20", hit: "-1", guard: "-6", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "立ち弱K", outbreak: "3", persistence: "2", rigidity: "10", hit: "0", guard: "-2", damage: "30", stan: "70", remarks: "", command: "" },
  { name: "立ち中K", outbreak: "7", persistence: "3", rigidity: "13", hit: "2", guard: "-2", damage: "60", stan: "100", remarks: "", command: "" },
  {
    name: "立ち強K",
    outbreak: "9",
    persistence: "3",
    rigidity: "13",
    hit: "6",
    guard: "3",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応 (膝)\n                                                強制立ち効果",
    command: ""
  },
  { name: "しゃがみ弱P", outbreak: "4", persistence: "3", rigidity: "5", hit: "4", guard: "3", damage: "30", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "しゃがみ中P", outbreak: "6", persistence: "3", rigidity: "12", hit: "3", guard: "1", damage: "60", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強P", outbreak: "10", persistence: "5", rigidity: "23", hit: "-5", guard: "-11", damage: "100", stan: "150", remarks: "強制立ち効果", command: "" },
  { name: "しゃがみ弱K", outbreak: "4", persistence: "2", rigidity: "7", hit: "3", guard: "2", damage: "20", stan: "70", remarks: "連打キャンセル対応", command: "" },
  { name: "しゃがみ中K", outbreak: "7", persistence: "2", rigidity: "15", hit: "-1", guard: "-2", damage: "50", stan: "100", remarks: "", command: "" },
  { name: "しゃがみ強K", outbreak: "15", persistence: "10", rigidity: "18", hit: "D", guard: "-12", damage: "90", stan: "150", remarks: "クラッシュカウンター対応 (D)", command: "" },
  { name: "ジャンプ弱P", outbreak: "4", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中P", outbreak: "7", persistence: "3", rigidity: "", hit: "", guard: "", damage: "50", stan: "100", remarks: "空中ヒット時吹き飛びやられ", command: "" },
  { name: "ジャンプ強P", outbreak: "8", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "ジャンプ弱K", outbreak: "3", persistence: "6", rigidity: "", hit: "", guard: "", damage: "40", stan: "70", remarks: "", command: "" },
  { name: "ジャンプ中K", outbreak: "6", persistence: "6", rigidity: "", hit: "", guard: "", damage: "60", stan: "100", remarks: "めくり性能", command: "" },
  { name: "ジャンプ強K", outbreak: "8", persistence: "6", rigidity: "", hit: "", guard: "", damage: "90", stan: "150", remarks: "", command: "" },
  { name: "ヘルアタック", outbreak: "5", persistence: "4", rigidity: "", hit: "", guard: "", damage: "70", stan: "50", remarks: "", command: "(ジャンプ中に) 中P ▶ 中P" },
  {
    name: "サイコアックス",
    outbreak: "18",
    persistence: "3",
    rigidity: "20(※25)",
    hit: "6",
    guard: "1",
    damage: "80",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+15F)\n                                                                                                                                                                ※空振り時",
    command: "↘ + 強P"
  },
  { name: "シャドウアックス", outbreak: "14", persistence: "3", rigidity: "20", hit: "2", guard: "-8", damage: "50", stan: "120", remarks: "クラッシュカウンター対応(+15F)", command: "中P ▶ ↘ + 強P" },
  { name: "サイコインパクト", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "140", stan: "170", remarks: "", command: "" },
  { name: "サイコフォール", outbreak: "5", persistence: "3", rigidity: "17", hit: "", guard: "", damage: "130", stan: "150", remarks: "", command: "" },
  {
    name: "[VS1]サイコリジェクト",
    outbreak: "6",
    persistence: "9(※7)",
    rigidity: "28",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "※飛び道具吸収判定の値\n動作中常に被カウンター判定",
    command: ""
  },
  {
    name: "[VS1]サイコリジェクト(射出)",
    outbreak: "16",
    persistence: "",
    rigidity: "全体36",
    hit: "D",
    guard: "13",
    damage: "80",
    stan: "100",
    remarks: "※「サイコリジェクト（吸収）」の当て身判定成立時に自動派生",
    command: ""
  },
  {
    name: "[VS1]サイコリジェクト(打撃)",
    outbreak: "13",
    persistence: "5",
    rigidity: "25",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks: "※「サイコリジェクト（吸収）」の当身判定に打撃攻撃や本体に付随する飛び道具を受け止めた際に自動派生",
    command: ""
  },
  {
    name: "サイコサイコパニッシュメント",
    outbreak: "16",
    persistence: "",
    rigidity: "全体36",
    hit: "D",
    guard: "13",
    damage: "80",
    stan: "100",
    remarks:
      "必殺技キャンセル可能な通常技からキャンセル発動可能\n※「サイコリジェクト（吸収）」の当て身判定成立時、ボタンホールドを行っていなかった場合、再度「中P+中K」コマンド入力を行う事で射出動作を発動可能",
    command: ""
  },
  {
    name: "[VS2]ヘルズワープ",
    outbreak: "43",
    persistence: "4",
    rigidity: "18(※20)",
    hit: "D",
    guard: "1",
    damage: "70",
    stan: "100",
    remarks: "21F～31F 完全無敵\n                                                ※空振り時",
    command: ""
  },
  {
    name: "サイコナイトメア",
    outbreak: "1",
    persistence: "",
    rigidity: "10",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+4000F\n                                                                                                                                                                                発動中、専用の必殺技が追加\n必殺技からキャンセル不可",
    command: ""
  },
  {
    name: "サイコバースト",
    outbreak: "17",
    persistence: "2",
    rigidity: "20(※23)",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks: "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復\n※ガード/空振り時",
    command: ""
  },
  { name: "弱 サイコブラスト", outbreak: "10", persistence: "10", rigidity: "全体40", hit: "D", guard: "-2", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "中 サイコブラスト", outbreak: "15", persistence: "10", rigidity: "全体42", hit: "D", guard: "-1", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "強 サイコブラスト", outbreak: "19", persistence: "10", rigidity: "全体42", hit: "D", guard: "2", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "EX サイコブラスト", outbreak: "15", persistence: "", rigidity: "全体38", hit: "D", guard: "6", damage: "100", stan: "150", remarks: "", command: "" },
  { name: "弱 サイコインフェルノ", outbreak: "14", persistence: "12", rigidity: "全体56", hit: "D", guard: "-12", damage: "80", stan: "150", remarks: "CA※3段目のみ可能", command: "" },
  { name: "中 サイコインフェルノ", outbreak: "16", persistence: "14", rigidity: "全体58", hit: "D", guard: "-11", damage: "90", stan: "150", remarks: "CA※3段目のみ可能", command: "" },
  { name: "強 サイコインフェルノ", outbreak: "18", persistence: "16", rigidity: "全体63", hit: "D", guard: "-10", damage: "100", stan: "150", remarks: "CA※3段目のみ可能", command: "" },
  { name: "EX サイコインフェルノ", outbreak: "15", persistence: "18", rigidity: "全体54", hit: "D", guard: "-1", damage: "140", stan: "150", remarks: "", command: "" },
  { name: "弱 ダブルニープレス", outbreak: "11", persistence: "5", rigidity: "19", hit: "2", guard: "-4", damage: "80", stan: "150", remarks: "CA※1段目のみ可能", command: "" },
  { name: "中 ダブルニープレス", outbreak: "14", persistence: "5", rigidity: "20", hit: "2", guard: "-3", damage: "90", stan: "150", remarks: "CA※1段目のみ可能", command: "" },
  { name: "強 ダブルニープレス", outbreak: "19", persistence: "5", rigidity: "21", hit: "2", guard: "-2", damage: "100", stan: "150", remarks: "CA※1段目のみ可能", command: "" },
  {
    name: "EX ダブルニープレス",
    outbreak: "12",
    persistence: "6",
    rigidity: "17",
    hit: "D",
    guard: "1",
    damage: "150(※160)(※270)",
    stan: "200(※1※2100)",
    remarks: "S※二段目(非ロック時)がヒットした際に、サイコクラッシャーアタック サイコジャッジメントでキャンセル可能\n※1空中ヒット時\n※2持続2F目以降",
    command: ""
  },
  { name: "ヘッドプレス", outbreak: "23", persistence: "着地まで", rigidity: "着地後7", hit: "", guard: "", damage: "100", stan: "200", remarks: "密着で発動した際の発生フレーム", command: "" },
  {
    name: "EX ヘッドプレス",
    outbreak: "18",
    persistence: "着地まで",
    rigidity: "着地後16",
    hit: "D",
    guard: "",
    damage: "160(※100)",
    stan: "200(※100)",
    remarks:
      "めくり性能\n                                                                                                1F～6F 打撃&飛び道具無敵\n                                                ※空中ヒット時",
    command: ""
  },
  { name: "サマーソルトスカルダイバー", outbreak: "5", persistence: "10", rigidity: "着地後4", hit: "", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "デビルリバース", outbreak: "15", persistence: "22", rigidity: "着地後7", hit: "D", guard: "", damage: "70", stan: "100", remarks: "", command: "" },
  { name: "EX デビルリバース", outbreak: "27", persistence: "", rigidity: "着地後4", hit: "D", guard: "9", damage: "140", stan: "200", remarks: "1F～16F 完全無敵", command: "" },
  {
    name: "サイコクラッシャーアタック",
    outbreak: "14",
    persistence: "17",
    rigidity: "26",
    hit: "D",
    guard: "-8",
    damage: "100",
    stan: "100",
    remarks:
      "Vゲージタイマー2000F消費\n                                めくり性能\n                                                                                                14F～29F 飛び道具無敵\n                                                30F～34F 上半身飛び道具無敵\nVトリガーⅠでVトリガーキャンセル可能な技からキャンセル発動可能",
    command: ""
  },
  {
    name: "サイコチャージ",
    outbreak: "6",
    persistence: "2",
    rigidity: "60",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "100",
    remarks:
      "Vゲージタイマー1000F消費\n                                                                                                                                                                                ヒット後、一定時間経過で相手に追加の攻撃が発生する\n相手からの攻撃が自身にヒットするとサイコチャージ状態が解除される\n必殺技キャンセルで出した場合のみ連続でヒットする",
    command: ""
  },
  {
    name: "サイコジャッジメント",
    outbreak: "15",
    persistence: "12",
    rigidity: "全体37",
    hit: "D",
    guard: "14",
    damage: "70",
    stan: "90",
    remarks: "VトリガーⅠでVトリガーキャンセル可能な技からキャンセル発動可能",
    command: ""
  },
  { name: "アルティメット サイコクラッシャー", outbreak: "1+5", persistence: "15", rigidity: "63", hit: "D", guard: "-40", damage: "340", stan: "0", remarks: "1F～20F 完全無敵", command: "" },
  { name: "アルティメット サイコクラッシャー(空中)", outbreak: "1+5", persistence: "15", rigidity: "着地後14", hit: "D", guard: "", damage: "340", stan: "0", remarks: "1F～20F 完全無敵", command: "" }
];

export { vega };
