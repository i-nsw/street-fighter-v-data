const karin = [
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "7",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-5",
    damage: "80",
    stan: "150",
    remarks: "1F目は地上の相手にヒットしない",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "8",
    hit: "4",
    guard: "2",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "2",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "12",
    persistence: "2",
    rigidity: "23",
    hit: "0",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応(+15F)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "8",
    hit: "3",
    guard: "2",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "5",
    persistence: "4",
    rigidity: "10",
    hit: "6",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "7",
    persistence: "4",
    rigidity: "22",
    hit: "-3",
    guard: "-7",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "8",
    hit: "2",
    guard: "0",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "6",
    persistence: "2",
    rigidity: "14",
    hit: "-1",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "9",
    persistence: "3",
    rigidity: "23",
    hit: "D",
    guard: "-14",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
    outbreak: "3",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "空中ヒット時吹き飛びやられ",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ弱K",
    outbreak: "4",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "めくり性能",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "めくり性能",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強K",
    outbreak: "9",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "旋風刈り",
    outbreak: "22",
    persistence: "2",
    rigidity: "21",
    hit: "0",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "11F～18F 投げ無敵",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "空蓮華",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "(ジャンプ中に) 中P ▶ 強P"
  },
  {
    name: "破城槌",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "荒熊いなし",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]明王拳",
    outbreak: "14",
    persistence: "5",
    rigidity: "17",
    hit: "D",
    guard: "-5",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]明王拳(ボタンホールド)",
    outbreak: "21",
    persistence: "5",
    rigidity: "18",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K (ボタンホールド)"
  },
  {
    name: "[VS2]不動双掌",
    outbreak: "11",
    persistence: "5",
    rigidity: "21",
    hit: "3",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "クラッシュカウンター対応(D)",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]不動双掌(ボタンホールド)",
    outbreak: "30",
    persistence: "5",
    rigidity: "17",
    hit: "4",
    guard: "3",
    damage: "80",
    stan: "120",
    remarks: "クラッシュカウンター対応(膝)",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K (ボタンホールド)"
  },
  {
    name: "神月流　紅蓮の型",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+1800F\n                                                                                                                                                                                発動中紅蓮拳が必殺技に追加",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "烈尖頂",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    vtrigger: 1,
    type: "vsystem",
    command: "(ガード中に) → + 弱P"
  },
  {
    name: "弱 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体24",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱K"
  },
  {
    name: "中 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体25",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中K"
  },
  {
    name: "強 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体26",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強K"
  },
  {
    name: "EX 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体21",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "4F～17F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + K K"
  },
  {
    name: "天孤",
    outbreak: "9",
    persistence: "3",
    rigidity: "21",
    hit: "D",
    guard: "-10",
    damage: "60",
    stan: "80",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(刹歩中に) P"
  },
  {
    name: "天孤(最速)",
    outbreak: "6",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-10",
    damage: "70",
    stan: "80",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(刹歩中に) P"
  },
  {
    name: "EX 天孤",
    outbreak: "6",
    persistence: "4",
    rigidity: "18",
    hit: "D",
    guard: "-7",
    damage: "100",
    stan: "120",
    remarks: "1F～2F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "(EX 刹歩中に) P"
  },
  {
    name: "大蛇",
    outbreak: "11",
    persistence: "4",
    rigidity: "20",
    hit: "2",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "3F～14F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "(刹歩中に) ↓ + P"
  },
  {
    name: "EX 大蛇",
    outbreak: "12",
    persistence: "4",
    rigidity: "27",
    hit: "膝",
    guard: "-7",
    damage: "140",
    stan: "150",
    remarks: "1F～2F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "(EX 刹歩中に) ↓ + P"
  },
  {
    name: "弱 無尽脚",
    outbreak: "11",
    persistence: "6",
    rigidity: "19",
    hit: "2",
    guard: "-7",
    damage: "70",
    stan: "100",
    remarks: "CA※2段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 無尽脚",
    outbreak: "11",
    persistence: "8",
    rigidity: "23",
    hit: "2",
    guard: "-6",
    damage: "70+90",
    stan: "90+150",
    remarks: "CA※2段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 無尽脚",
    outbreak: "13",
    persistence: "12",
    rigidity: "31",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "180",
    remarks: "CA※2段目のみ可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX 無尽脚",
    outbreak: "8",
    persistence: "12",
    rigidity: "17",
    hit: "D",
    guard: "-2",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 烈殲破",
    outbreak: "16",
    persistence: "5",
    rigidity: "19",
    hit: "2",
    guard: "-6",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱P"
  },
  {
    name: "中 烈殲破",
    outbreak: "21",
    persistence: "6",
    rigidity: "18",
    hit: "2",
    guard: "-5",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中P"
  },
  {
    name: "強 烈殲破",
    outbreak: "26",
    persistence: "5",
    rigidity: "17",
    hit: "1",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "14F～31F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強P"
  },
  {
    name: "EX 烈殲破",
    outbreak: "5",
    persistence: "6",
    rigidity: "23+着地後12",
    hit: "D",
    guard: "-41",
    damage: "140",
    stan: "150",
    remarks:
      "1F～7F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + P P"
  },
  {
    name: "殲破烈蹴",
    outbreak: "23",
    persistence: "2",
    rigidity: "8+着地後14",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "しゃがみの相手にヒットしない",
    vtrigger: 1,
    type: "special",
    command: "(烈殲破中に) ↑ + K"
  },
  {
    name: "殲破楔",
    outbreak: "15",
    persistence: "8",
    rigidity: "20",
    hit: "D",
    guard: "-9",
    damage: "80",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(烈殲破中に) ↓ + K"
  },
  {
    name: "V紅蓮拳",
    outbreak: "12",
    persistence: "8",
    rigidity: "19",
    hit: "-2",
    guard: "-6",
    damage: "60",
    stan: "60",
    remarks: "Vゲージタイマー500F消費",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P"
  },
  {
    name: "V紅蓮崩掌",
    outbreak: "13",
    persistence: "4",
    rigidity: "32",
    hit: "D",
    guard: "-9",
    damage: "110",
    stan: "120",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) P"
  },
  {
    name: "V紅蓮殲破",
    outbreak: "16",
    persistence: "5",
    rigidity: "19",
    hit: "4",
    guard: "-2",
    damage: "100",
    stan: "150",
    remarks: "1段目はしゃがみの相手にヒットしない",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) ↑ + P"
  },
  {
    name: "V紅蓮頂肘",
    outbreak: "16",
    persistence: "5",
    rigidity: "17",
    hit: "2",
    guard: "1",
    damage: "60",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) ↓ + P"
  },
  {
    name: "V紅蓮崩肘",
    outbreak: "24",
    persistence: "3",
    rigidity: "24",
    hit: "D",
    guard: "-11",
    damage: "70",
    stan: "100",
    remarks: "1F～19F 完全無敵",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) ↓ + P ▶ ↓ + P"
  },
  {
    name: "V紅蓮烈蹴",
    outbreak: "22",
    persistence: "6",
    rigidity: "5+着地後14",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "しゃがみの相手にヒットしない",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) ↑ + K"
  },
  {
    name: "V紅蓮楔",
    outbreak: "13",
    persistence: "11",
    rigidity: "18",
    hit: "D",
    guard: "-10",
    damage: "70",
    stan: "100",
    remarks: "1F～25F 飛び道具無敵",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) ↓ + K"
  },
  {
    name: "V紅蓮虚歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体13",
    hit: "-4",
    guard: "-8",
    damage: "",
    stan: "",
    remarks: "Vゲージタイマー500F消費",
    vtrigger: 1,
    type: "special",
    command: "(紅蓮拳中に) K"
  },
  {
    name: "神月流覇道六式 覇者の型",
    outbreak: "1+4",
    persistence: "13",
    rigidity: "14+着地後24",
    hit: "D",
    guard: "-18",
    damage: "340",
    stan: "0",
    remarks: "1F～6F, 43F～44F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "立ち弱P",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "7",
    persistence: "4",
    rigidity: "22",
    hit: "2",
    guard: "-5",
    damage: "80",
    stan: "150",
    remarks: "1F目は地上の相手にヒットしない",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "8",
    hit: "4",
    guard: "2",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中K",
    outbreak: "8",
    persistence: "3",
    rigidity: "16",
    hit: "2",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "12",
    persistence: "2",
    rigidity: "23",
    hit: "0",
    guard: "-4",
    damage: "80",
    stan: "150",
    remarks: "クラッシュカウンター対応(+15F)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "8",
    hit: "3",
    guard: "2",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "5",
    persistence: "4",
    rigidity: "10",
    hit: "6",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "7",
    persistence: "4",
    rigidity: "22",
    hit: "-3",
    guard: "-7",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "クラッシュカウンター対応 (D)\n                                                強制立ち効果\n                                                                                                                ※持続2F目以降",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "8",
    hit: "2",
    guard: "0",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "6",
    persistence: "2",
    rigidity: "14",
    hit: "-1",
    guard: "-4",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "9",
    persistence: "3",
    rigidity: "23",
    hit: "D",
    guard: "-14",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "ジャンプ弱P",
    outbreak: "3",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "空中ヒット時吹き飛びやられ",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強P",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ弱K",
    outbreak: "4",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "70",
    remarks: "めくり性能",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中K",
    outbreak: "6",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "めくり性能",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ強K",
    outbreak: "9",
    persistence: "4",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "jump",
    command: ""
  },
  {
    name: "旋風刈り",
    outbreak: "22",
    persistence: "2",
    rigidity: "21",
    hit: "0",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "11F～18F 飛び道具&投げ無敵",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中K"
  },
  {
    name: "空蓮華",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "(ジャンプ中に) 中P ▶ 強P"
  },
  {
    name: "破城槌",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "120",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "荒熊いなし",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "throw",
    command: "(近距離で) ← + 弱P 弱K"
  },
  {
    name: "[VS1]明王拳",
    outbreak: "14",
    persistence: "5",
    rigidity: "17",
    hit: "D",
    guard: "-5",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS1]明王拳(ボタンホールド)",
    outbreak: "21",
    persistence: "5",
    rigidity: "18",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K (ボタンホールド)"
  },
  {
    name: "[VS2]不動双掌",
    outbreak: "11",
    persistence: "5",
    rigidity: "21",
    hit: "3",
    guard: "-2",
    damage: "60",
    stan: "100",
    remarks: "クラッシュカウンター対応(D)",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]不動双掌(ボタンホールド)",
    outbreak: "30",
    persistence: "5",
    rigidity: "17",
    hit: "4",
    guard: "3",
    damage: "80",
    stan: "120",
    remarks: "クラッシュカウンター対応(膝)",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K (ボタンホールド)"
  },
  {
    name: "神月流　天破の型",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+3000F\n                                                                                                                                                                                発動中、専用の必殺技が追加",
    vtrigger: 2,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "烈尖頂",
    outbreak: "17",
    persistence: "2",
    rigidity: "24",
    hit: "D",
    guard: "-2",
    damage: "60",
    stan: "0",
    remarks:
      "1F～30F 打撃&飛び道具無敵\n                                                発動時スタン値200回復",
    vtrigger: 2,
    type: "vsystem",
    command: "(ガード中に) → + 弱P"
  },
  {
    name: "弱 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体24",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱K"
  },
  {
    name: "中 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体25",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中K"
  },
  {
    name: "強 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体26",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強K"
  },
  {
    name: "EX 神月流歩行術　刹歩",
    outbreak: "",
    persistence: "",
    rigidity: "全体21",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks: "4F～17F 飛び道具無敵",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + K K"
  },
  {
    name: "天孤",
    outbreak: "9",
    persistence: "3",
    rigidity: "21",
    hit: "D",
    guard: "-10",
    damage: "60",
    stan: "80",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(刹歩中に) P"
  },
  {
    name: "天孤(最速)",
    outbreak: "6",
    persistence: "4",
    rigidity: "20",
    hit: "D",
    guard: "-10",
    damage: "70",
    stan: "80",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(刹歩中に) P"
  },
  {
    name: "EX 天孤",
    outbreak: "6",
    persistence: "4",
    rigidity: "18",
    hit: "D",
    guard: "-7",
    damage: "100",
    stan: "120",
    remarks:
      "1F～2F 飛び道具無敵\n                                                S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(EX 刹歩中に) P"
  },
  {
    name: "大蛇",
    outbreak: "11",
    persistence: "4",
    rigidity: "20",
    hit: "2",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks:
      "3F～14F 飛び道具無敵\n                                                S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(刹歩中に) ↓ + P"
  },
  {
    name: "EX 大蛇",
    outbreak: "12",
    persistence: "4",
    rigidity: "27",
    hit: "膝",
    guard: "-7",
    damage: "140",
    stan: "150",
    remarks:
      "1F～2F 飛び道具無敵\n                                                S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(EX 刹歩中に) ↓ + P"
  },
  {
    name: "弱 無尽脚",
    outbreak: "11",
    persistence: "6",
    rigidity: "19",
    hit: "2",
    guard: "-7",
    damage: "70",
    stan: "100",
    remarks: "CA※2段目のみ可能\nS※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 無尽脚",
    outbreak: "11",
    persistence: "8",
    rigidity: "23",
    hit: "2",
    guard: "-6",
    damage: "70+90",
    stan: "90+150",
    remarks: "CA※2段目のみ可能\nS※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 無尽脚",
    outbreak: "13",
    persistence: "12",
    rigidity: "31",
    hit: "D",
    guard: "-15",
    damage: "120",
    stan: "180",
    remarks: "CA※2段目のみ可能\nS※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX 無尽脚",
    outbreak: "8",
    persistence: "12",
    rigidity: "17",
    hit: "D",
    guard: "-2",
    damage: "150",
    stan: "200",
    remarks:
      "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費\n(ヒット時はキャンセル不可)",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "弱 烈殲破",
    outbreak: "16",
    persistence: "5",
    rigidity: "19",
    hit: "2",
    guard: "-6",
    damage: "70",
    stan: "100",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱P"
  },
  {
    name: "中 烈殲破",
    outbreak: "21",
    persistence: "6",
    rigidity: "18",
    hit: "2",
    guard: "-5",
    damage: "80",
    stan: "150",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中P"
  },
  {
    name: "強 烈殲破",
    outbreak: "26",
    persistence: "5",
    rigidity: "17",
    hit: "1",
    guard: "-4",
    damage: "90",
    stan: "150",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強P"
  },
  {
    name: "EX 烈殲破",
    outbreak: "5",
    persistence: "6",
    rigidity: "23+着地後12",
    hit: "D",
    guard: "-41",
    damage: "140",
    stan: "150",
    remarks:
      "1F～7F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + P P"
  },
  {
    name: "殲破烈蹴",
    outbreak: "23",
    persistence: "2",
    rigidity: "8+着地後14",
    hit: "D",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "しゃがみの相手にヒットしない",
    vtrigger: 2,
    type: "special",
    command: "(烈殲破中に) ↑ + K"
  },
  {
    name: "殲破楔",
    outbreak: "15",
    persistence: "8",
    rigidity: "20",
    hit: "D",
    guard: "-9",
    damage: "80",
    stan: "100",
    remarks: "S※夜叉返しでのみ動作硬直をキャンセル可能 Vタイマー800消費",
    vtrigger: 2,
    type: "special",
    command: "(烈殲破中に) ↓ + K"
  },
  {
    name: "V夜叉返し(構え)",
    outbreak: "2",
    persistence: "12",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー800F消費\n                                                                                                                                                                                動作中常に被カウンター判定",
    vtrigger: 2,
    type: "special",
    command: "(VトリガーⅡ発動中) 強P 強K"
  },
  {
    name: "V夜叉返し・天",
    outbreak: "0",
    persistence: "3",
    rigidity: "18",
    hit: "D",
    guard: "",
    damage: "120",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "（上・中段で当て身成立時）"
  },
  {
    name: "V夜叉返し・地",
    outbreak: "0",
    persistence: "3",
    rigidity: "36",
    hit: "膝",
    guard: "",
    damage: "100",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "（下段で当て身成立時）"
  },
  {
    name: "神月流覇道六式 覇者の型",
    outbreak: "1+4",
    persistence: "13",
    rigidity: "14+着地後24",
    hit: "D",
    guard: "-18",
    damage: "340",
    stan: "0",
    remarks: "1F～6F, 43F～44F 完全無敵",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  }
];

export { karin };
