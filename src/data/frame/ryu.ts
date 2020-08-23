const ryu = [
  {
    name: "立ち弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "V立ち弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "10",
    hit: "7",
    guard: "1",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "V立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "10",
    hit: "7",
    guard: "1",
    damage: "60",
    stan: "130",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強P",
    outbreak: "8",
    persistence: "3",
    rigidity: "20",
    hit: "3",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "V立ち強P",
    outbreak: "8",
    persistence: "3",
    rigidity: "20",
    hit: "3",
    guard: "-1",
    damage: "90",
    stan: "180",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "11",
    hit: "-1",
    guard: "-2",
    damage: "30",
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
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "10",
    persistence: "2",
    rigidity: "20",
    hit: "4",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+16F)\n                                                                しゃがみの相手にヒットしない\n                                                                                                ガード時に最速でトリガーキャンセル不可",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "5",
    hit: "3",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Vしゃがみ弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "5",
    hit: "3",
    guard: "2",
    damage: "30",
    stan: "100",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "2",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Vしゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "12",
    hit: "4",
    guard: "3",
    damage: "60",
    stan: "130",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強P",
    outbreak: "6",
    persistence: "4",
    rigidity: "24",
    hit: "-7",
    guard: "-10",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "強制立ち効果\n                                                                                                                持続部分はキャンセル不可\n※持続2F目以降",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "Vしゃがみ強P",
    outbreak: "6",
    persistence: "4",
    rigidity: "24",
    hit: "-7",
    guard: "-10",
    damage: "90(※70)",
    stan: "180",
    remarks:
      "強制立ち効果\n                                                                                                                持続部分はキャンセル不可\n※持続2F目以降",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "2",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "13",
    hit: "2",
    guard: "-1",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "8",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-11",
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
    persistence: "6",
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
    name: "Vジャンプ弱P",
    outbreak: "3",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "40",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "jump",
    command: ""
  },
  {
    name: "ジャンプ中P",
    outbreak: "7",
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
    name: "Vジャンプ中P",
    outbreak: "7",
    persistence: "6",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "60",
    stan: "130",
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
    name: "Vジャンプ強P",
    outbreak: "7",
    persistence: "5",
    rigidity: "",
    hit: "",
    guard: "",
    damage: "90",
    stan: "180",
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
    persistence: "4",
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
    name: "鎖骨割り",
    outbreak: "22",
    persistence: "4",
    rigidity: "17",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "V鎖骨割り",
    outbreak: "22",
    persistence: "4",
    rigidity: "17",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "130",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "鳩尾砕き",
    outbreak: "17",
    persistence: "4",
    rigidity: "18",
    hit: "8",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "S※昇龍拳、EX昇龍拳でのみキャンセル可能",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "V鳩尾砕き",
    outbreak: "17",
    persistence: "4",
    rigidity: "18",
    hit: "8",
    guard: "-2",
    damage: "90",
    stan: "180",
    remarks: "S※昇龍拳、EX昇龍拳でのみキャンセル可能",
    vtrigger: 1,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "踵落とし",
    outbreak: "9",
    persistence: "7",
    rigidity: "16",
    hit: "4",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "強制立ち効果",
    vtrigger: 1,
    type: "unique",
    command: "← + 強K"
  },
  {
    name: "上段二連撃",
    outbreak: "9",
    persistence: "2",
    rigidity: "28",
    hit: "-2",
    guard: "-9",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 強P"
  },
  {
    name: "V上段二連撃",
    outbreak: "9",
    persistence: "2",
    rigidity: "28",
    hit: "-2",
    guard: "-9",
    damage: "80",
    stan: "130",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 強P"
  },
  {
    name: "上段三連撃",
    outbreak: "9",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-7",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "unique",
    command: "中P ▶ 強P ▶ 強K"
  },
  {
    name: "背負い投げ",
    outbreak: "5",
    persistence: "3",
    rigidity: "17",
    hit: "",
    guard: "",
    damage: "130",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "throw",
    command: "(近距離で) → OR + 弱P 弱K"
  },
  {
    name: "巴投げ",
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
    name: "[VS1]心眼",
    outbreak: "3",
    persistence: "7",
    rigidity: "32",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "心眼成立後に出すキャンセル心眼は発生1F\n動作中常に被カウンター判定(キャンセル心眼は対象外)",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS2]入り身",
    outbreak: "25",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "10F～19F全身当て身判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]入り身(当て身成立時)",
    outbreak: "1",
    persistence: "4(※2)",
    rigidity: "37(※21)",
    hit: "D",
    guard: "4",
    damage: "120",
    stan: "200",
    remarks:
      "1F～23F 完全無敵\n                                                (初段空振り時は1～11F完全無敵)\n※初段空振り時",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "V[VS2]入り身",
    outbreak: "25",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-4",
    damage: "60",
    stan: "130",
    remarks: "10F～19F全身当て身判定",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "V[VS2]入り身(当て身成立時)",
    outbreak: "1",
    persistence: "4(※2)",
    rigidity: "37(※21)",
    hit: "D",
    guard: "4",
    damage: "120",
    stan: "250",
    remarks:
      "1F～23F 完全無敵\n                                                (初段空振り時は1～11F完全無敵)\n※初段空振り時",
    vtrigger: 1,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "電刃練気",
    outbreak: "1",
    persistence: "",
    rigidity: "4",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "Vゲージタイマー+800F\n                                                                                                                                                                                発動中、P系の通常技・特殊技・必殺技・CAが強化",
    vtrigger: 1,
    type: "vsystem",
    command: "強P 強K"
  },
  {
    name: "波掌撃",
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
    name: "弱 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "V弱 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体42",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "V中 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体42",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "V強 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体42",
    hit: "D",
    guard: "-2",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "V波動拳(Lv2)",
    outbreak: "5",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "0",
    damage: "100",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P (ボタンホールド)"
  },
  {
    name: "V波動拳(Lv3)",
    outbreak: "6",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "GB",
    damage: "130",
    stan: "300",
    remarks: "ガードブレイク時+32F",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P (ボタンホールド最大)"
  },
  {
    name: "EX 波動拳",
    outbreak: "11",
    persistence: "",
    rigidity: "全体42",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "VEX 波動拳(Lv1)",
    outbreak: "11",
    persistence: "",
    rigidity: "全体40",
    hit: "D",
    guard: "2",
    damage: "120",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "VEX 波動拳(Lv2)",
    outbreak: "5",
    persistence: "",
    rigidity: "",
    hit: "D",
    guard: "GB",
    damage: "150",
    stan: "300",
    remarks: "ガードブレイク時+32F",
    vtrigger: 1,
    type: "special",
    command: "↓↘→ + P P (ボタンホールド)"
  },
  {
    name: "弱 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "19+着地後11",
    hit: "D",
    guard: "-24",
    damage: "100(※60)",
    stan: "150(※100)",
    remarks:
      "1F～3F 投げ無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 昇龍拳",
    outbreak: "4",
    persistence: "11",
    rigidity: "26+着地後13",
    hit: "D",
    guard: "-32",
    damage: "120(※60)",
    stan: "150(※100)",
    remarks:
      "1F～6F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 昇龍拳",
    outbreak: "5",
    persistence: "10",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-36",
    damage: "130(※60)",
    stan: "150",
    remarks:
      "3F～6F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "V弱 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "19+着地後11",
    hit: "D",
    guard: "-24",
    damage: "110(※80)",
    stan: "200(※150)",
    remarks:
      "1F～3F 投げ無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "V中 昇龍拳",
    outbreak: "4",
    persistence: "11",
    rigidity: "26+着地後13",
    hit: "D",
    guard: "-32",
    damage: "130(※80)",
    stan: "200(※150)",
    remarks:
      "1F～6F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "V強 昇龍拳",
    outbreak: "5",
    persistence: "10",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-36",
    damage: "140(※80)",
    stan: "200",
    remarks:
      "3F～6F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-37",
    damage: "160(※80)",
    stan: "200(※100)",
    remarks:
      "1F～15F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "VEX 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-37",
    damage: "180(※100)",
    stan: "200",
    remarks:
      "1F～15F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※持続2F目以降",
    vtrigger: 1,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 竜巻旋風脚",
    outbreak: "10",
    persistence: "2",
    rigidity: "18+着地後12",
    hit: "D",
    guard: "-10",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 竜巻旋風脚",
    outbreak: "12",
    persistence: "4",
    rigidity: "16+着地後14",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "6F～45F 飛び道具無敵\n                                                削りダメージがヒットダメージの1/6",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 竜巻旋風脚",
    outbreak: "14",
    persistence: "6",
    rigidity: "16+着地後15",
    hit: "D",
    guard: "-13",
    damage: "110",
    stan: "150",
    remarks:
      "9F～61F 飛び道具無敵\n                                                削りダメージがヒットダメージの1/6",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX 竜巻旋風脚",
    outbreak: "10",
    persistence: "11",
    rigidity: "11+着地後15",
    hit: "D",
    guard: "-19",
    damage: "140",
    stan: "150",
    remarks:
      "7F～36F 飛び道具無敵\n                                                S※昇龍拳、EX昇龍拳でのみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "空中竜巻旋風脚",
    outbreak: "9",
    persistence: "6",
    rigidity: "着地後14",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "200",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "(ジャンプ中に) ↓↙← + K"
  },
  {
    name: "EX 空中竜巻旋風脚",
    outbreak: "8",
    persistence: "10",
    rigidity: "着地後14",
    hit: "D",
    guard: "",
    damage: "170",
    stan: "250",
    remarks: "めくり性能",
    vtrigger: 1,
    type: "special",
    command: "(ジャンプ中に) ↓↙← + K K"
  },
  {
    name: "弱 上段足刀蹴り",
    outbreak: "10",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "←↙↓↘→ + 弱K"
  },
  {
    name: "中 上段足刀蹴り",
    outbreak: "16",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "←↙↓↘→ + 中K"
  },
  {
    name: "強 上段足刀蹴り",
    outbreak: "18",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 1,
    type: "special",
    command: "←↙↓↘→ + 強K"
  },
  {
    name: "EX 上段足刀蹴り",
    outbreak: "18",
    persistence: "2",
    rigidity: "36",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "S※竜巻旋風脚/EX竜巻旋風脚でのみキャンセル可能",
    vtrigger: 1,
    type: "special",
    command: "←↙↓↘→ + K K"
  },
  {
    name: "真空波動拳",
    outbreak: "1+3",
    persistence: "",
    rigidity: "全体65",
    hit: "D",
    guard: "-17",
    damage: "320",
    stan: "0",
    remarks: "1F～3F 完全無敵",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "V電刃波動拳",
    outbreak: "1+3",
    persistence: "",
    rigidity: "全体65",
    hit: "D",
    guard: "GB",
    damage: "350",
    stan: "300",
    remarks:
      "Vゲージタイマー800F消費\n                                                                                                                                1F～3F 完全無敵\n                                                ガードブレイク時+9F",
    vtrigger: 1,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  },
  {
    name: "立ち弱P",
    outbreak: "3",
    persistence: "2",
    rigidity: "7",
    hit: "4",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち中P",
    outbreak: "5",
    persistence: "3",
    rigidity: "10",
    hit: "7",
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
    outbreak: "8",
    persistence: "3",
    rigidity: "20",
    hit: "3",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "V立ち強P",
    outbreak: "8",
    persistence: "3",
    rigidity: "20",
    hit: "3",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks: "クラッシュカウンター対応 (D)",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち弱K",
    outbreak: "4",
    persistence: "3",
    rigidity: "11",
    hit: "-1",
    guard: "-2",
    damage: "30",
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
    guard: "-2",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "立ち強K",
    outbreak: "10",
    persistence: "2",
    rigidity: "20",
    hit: "4",
    guard: "-1",
    damage: "90",
    stan: "150",
    remarks:
      "クラッシュカウンター対応(+16F)\n                                                                しゃがみの相手にヒットしない\n                                                                                                ガード時に最速でトリガーキャンセル不可",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱P",
    outbreak: "4",
    persistence: "3",
    rigidity: "5",
    hit: "3",
    guard: "2",
    damage: "30",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中P",
    outbreak: "6",
    persistence: "3",
    rigidity: "12",
    hit: "4",
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
    outbreak: "6",
    persistence: "4",
    rigidity: "24",
    hit: "-7",
    guard: "-10",
    damage: "90(※70)",
    stan: "150",
    remarks:
      "強制立ち効果\n                                                                                                                持続部分はキャンセル不可\n※持続2F目以降",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ弱K",
    outbreak: "4",
    persistence: "2",
    rigidity: "7",
    hit: "2",
    guard: "1",
    damage: "20",
    stan: "70",
    remarks: "連打キャンセル対応",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ中K",
    outbreak: "7",
    persistence: "3",
    rigidity: "13",
    hit: "2",
    guard: "-1",
    damage: "50",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "normal",
    command: ""
  },
  {
    name: "しゃがみ強K",
    outbreak: "8",
    persistence: "2",
    rigidity: "22",
    hit: "D",
    guard: "-11",
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
    persistence: "6",
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
    outbreak: "7",
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
    persistence: "4",
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
    name: "鎖骨割り",
    outbreak: "22",
    persistence: "4",
    rigidity: "17",
    hit: "1",
    guard: "-7",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "→ + 中P"
  },
  {
    name: "鳩尾砕き",
    outbreak: "17",
    persistence: "4",
    rigidity: "18",
    hit: "8",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks: "S※昇龍拳、EX昇龍拳、一心でのみキャンセル可能",
    vtrigger: 2,
    type: "unique",
    command: "→ + 強P"
  },
  {
    name: "踵落とし",
    outbreak: "9",
    persistence: "7",
    rigidity: "16",
    hit: "4",
    guard: "-2",
    damage: "80",
    stan: "150",
    remarks:
      "強制立ち効果\n                                                                                                                S※一心でキャンセル可能",
    vtrigger: 2,
    type: "unique",
    command: "← + 強K"
  },
  {
    name: "上段二連撃",
    outbreak: "9",
    persistence: "2",
    rigidity: "28",
    hit: "-2",
    guard: "-9",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "中P ▶ 強P"
  },
  {
    name: "上段三連撃",
    outbreak: "9",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-7",
    damage: "70",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "unique",
    command: "中P ▶ 強P ▶ 強K"
  },
  {
    name: "背負い投げ",
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
    name: "巴投げ",
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
    name: "[VS1]心眼",
    outbreak: "3",
    persistence: "7",
    rigidity: "32",
    hit: "",
    guard: "",
    damage: "",
    stan: "",
    remarks:
      "心眼成立後に出すキャンセル心眼は発生1F\n動作中常に被カウンター判定(キャンセル心眼は対象外)",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅠ選択時) 中P 中K"
  },
  {
    name: "[VS2]入り身",
    outbreak: "25",
    persistence: "2",
    rigidity: "26",
    hit: "D",
    guard: "-4",
    damage: "60",
    stan: "100",
    remarks: "10F～19F全身当て身判定",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "[VS2]入り身(当て身成立時)",
    outbreak: "1",
    persistence: "4(※2)",
    rigidity: "37(※21)",
    hit: "D",
    guard: "4",
    damage: "120",
    stan: "200",
    remarks:
      "1F～23F 完全無敵\n                                                (初段空振り時は1～11F完全無敵)\n※初段空振り時",
    vtrigger: 2,
    type: "vsystem",
    command: "(VスキルⅡ選択時) 中P 中K"
  },
  {
    name: "確固不抜",
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
    name: "波掌撃",
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
    name: "弱 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 弱P"
  },
  {
    name: "中 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 中P"
  },
  {
    name: "強 波動拳",
    outbreak: "14",
    persistence: "",
    rigidity: "全体45",
    hit: "-1",
    guard: "-6",
    damage: "60",
    stan: "100",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + 強P"
  },
  {
    name: "EX 波動拳",
    outbreak: "11",
    persistence: "",
    rigidity: "全体42",
    hit: "D",
    guard: "2",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↘→ + P P"
  },
  {
    name: "弱 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "19+着地後11",
    hit: "D",
    guard: "-24",
    damage: "100(※60)",
    stan: "150(※100)",
    remarks:
      "1F～3F 投げ無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 弱P"
  },
  {
    name: "中 昇龍拳",
    outbreak: "4",
    persistence: "11",
    rigidity: "26+着地後13",
    hit: "D",
    guard: "-32",
    damage: "120(※60)",
    stan: "150(※100)",
    remarks:
      "1F～6F 空中判定の攻撃に対して無敵\n                                動作中常に被カウンター判定\n※持続3F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 中P"
  },
  {
    name: "強 昇龍拳",
    outbreak: "5",
    persistence: "10",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-36",
    damage: "130(※60)",
    stan: "150",
    remarks:
      "3F～6F 打撃&飛び道具無敵\n                                                動作中常に被カウンター判定\n※持続2F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + 強P"
  },
  {
    name: "EX 昇龍拳",
    outbreak: "3",
    persistence: "12",
    rigidity: "29+着地後15",
    hit: "D",
    guard: "-37",
    damage: "160(※80)",
    stan: "200(※100)",
    remarks:
      "1F～15F 完全無敵\n                                                動作中常に被カウンター判定(被ダメージ1.2倍)\n※持続2F目以降",
    vtrigger: 2,
    type: "special",
    command: "→↓↘ + P P"
  },
  {
    name: "弱 竜巻旋風脚",
    outbreak: "10",
    persistence: "2",
    rigidity: "18+着地後12",
    hit: "D",
    guard: "-10",
    damage: "90",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 弱K"
  },
  {
    name: "中 竜巻旋風脚",
    outbreak: "12",
    persistence: "4",
    rigidity: "16+着地後14",
    hit: "D",
    guard: "-12",
    damage: "100",
    stan: "150",
    remarks:
      "6F～45F 飛び道具無敵\n                                                削りダメージがヒットダメージの1/6",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 中K"
  },
  {
    name: "強 竜巻旋風脚",
    outbreak: "14",
    persistence: "6",
    rigidity: "16+着地後15",
    hit: "D",
    guard: "-13",
    damage: "110",
    stan: "150",
    remarks:
      "9F～61F 飛び道具無敵\n                                                削りダメージがヒットダメージの1/6",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + 強K"
  },
  {
    name: "EX 竜巻旋風脚",
    outbreak: "10",
    persistence: "11",
    rigidity: "11+着地後15",
    hit: "D",
    guard: "-19",
    damage: "140",
    stan: "150",
    remarks:
      "7F～36F 飛び道具無敵\n                                                S※昇龍拳、EX昇龍拳でのみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "↓↙← + K K"
  },
  {
    name: "空中竜巻旋風脚",
    outbreak: "9",
    persistence: "6",
    rigidity: "着地後14",
    hit: "D",
    guard: "",
    damage: "100",
    stan: "200",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "(ジャンプ中に) ↓↙← + K"
  },
  {
    name: "EX 空中竜巻旋風脚",
    outbreak: "8",
    persistence: "10",
    rigidity: "着地後14",
    hit: "D",
    guard: "",
    damage: "170",
    stan: "250",
    remarks: "めくり性能",
    vtrigger: 2,
    type: "special",
    command: "(ジャンプ中に) ↓↙← + K K"
  },
  {
    name: "弱 上段足刀蹴り",
    outbreak: "10",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "70",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "←↙↓↘→ + 弱K"
  },
  {
    name: "中 上段足刀蹴り",
    outbreak: "16",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "←↙↓↘→ + 中K"
  },
  {
    name: "強 上段足刀蹴り",
    outbreak: "18",
    persistence: "2",
    rigidity: "28",
    hit: "D",
    guard: "-16",
    damage: "100",
    stan: "150",
    remarks: "",
    vtrigger: 2,
    type: "special",
    command: "←↙↓↘→ + 強K"
  },
  {
    name: "EX 上段足刀蹴り",
    outbreak: "18",
    persistence: "2",
    rigidity: "36",
    hit: "D",
    guard: "-16",
    damage: "80",
    stan: "150",
    remarks: "S※竜巻旋風脚/EX竜巻旋風脚でのみキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "←↙↓↘→ + K K"
  },
  {
    name: "一心 (構え)",
    outbreak: "2",
    persistence: "10",
    rigidity: "36",
    hit: "",
    guard: "",
    damage: "0",
    stan: "0",
    remarks:
      "Vゲージタイマー800F消費\n                                                                                                                                                                                動作中常に被カウンター判定\n心眼成立後の硬直を一心でキャンセル可能\n一心成立後の攻撃判定がヒットしなかった場合に硬直を一心でキャンセル発動可能\n※心眼からのキャンセル版は当身発生1F、被カウンター判定無し\n必殺技キャンセル可能な技からキャンセル不可",
    vtrigger: 2,
    type: "special",
    command: "強P 強K"
  },
  {
    name: "一心 (攻撃)",
    outbreak: "",
    persistence: "",
    rigidity: "",
    hit: "膝",
    guard: "",
    damage: "150",
    stan: "200",
    remarks: "S※昇龍拳(全強度) EX上段足刀蹴りでキャンセル可能",
    vtrigger: 2,
    type: "special",
    command: "(当身成立時)"
  },
  {
    name: "真空波動拳",
    outbreak: "1+3",
    persistence: "",
    rigidity: "全体65",
    hit: "D",
    guard: "-17",
    damage: "320",
    stan: "0",
    remarks: "1F～3F 完全無敵",
    vtrigger: 2,
    type: "ca",
    command: "↓↘→ ↓↘→ + P"
  }
];

export { ryu };
