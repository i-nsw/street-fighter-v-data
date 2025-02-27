"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abigail_1 = require("./frame/abigail");
const alex_1 = require("./frame/alex");
const balrog_1 = require("./frame/balrog");
const birdie_1 = require("./frame/birdie");
const blanka_1 = require("./frame/blanka");
const cammy_1 = require("./frame/cammy");
const chun_li_1 = require("./frame/chun-li");
const cody_1 = require("./frame/cody");
const dhalsim_1 = require("./frame/dhalsim");
const ed_1 = require("./frame/ed");
const ehonda_1 = require("./frame/ehonda");
const falke_1 = require("./frame/falke");
const fang_1 = require("./frame/fang");
const g_1 = require("./frame/g");
const gill_1 = require("./frame/gill");
const gouki_1 = require("./frame/gouki");
const guile_1 = require("./frame/guile");
const ibuki_1 = require("./frame/ibuki");
const juri_1 = require("./frame/juri");
const kage_1 = require("./frame/kage");
const karin_1 = require("./frame/karin");
const ken_1 = require("./frame/ken");
const kolin_1 = require("./frame/kolin");
const laura_1 = require("./frame/laura");
const lucia_1 = require("./frame/lucia");
const mbison_1 = require("./frame/mbison");
const menat_1 = require("./frame/menat");
const nash_1 = require("./frame/nash");
const necalli_1 = require("./frame/necalli");
const poison_1 = require("./frame/poison");
const rashid_1 = require("./frame/rashid");
const rmika_1 = require("./frame/rmika");
const ryu_1 = require("./frame/ryu");
const sagat_1 = require("./frame/sagat");
const sakura_1 = require("./frame/sakura");
const seth_1 = require("./frame/seth");
const urien_1 = require("./frame/urien");
const vega_1 = require("./frame/vega");
const zangief_1 = require("./frame/zangief");
const zeku_1 = require("./frame/zeku");
const dan_1 = require("./frame/dan");
const Characters_1 = require("../class/Characters");
const Character_1 = require("../class/Character");
const characters = new Characters_1.default();
exports.characters = characters;
characters.setCharacter(new Character_1.default("1", "リュウ", "ryu", ryu_1.ryu));
characters.setCharacter(new Character_1.default("2", "春麗", "chunli", chun_li_1.chunli));
characters.setCharacter(new Character_1.default("3", "ナッシュ", "nash", nash_1.nash));
characters.setCharacter(new Character_1.default("4", "ベガ", "vega", vega_1.vega));
characters.setCharacter(new Character_1.default("5", "キャミィ", "cammy", cammy_1.cammy));
characters.setCharacter(new Character_1.default("6", "バーディー", "birdie", birdie_1.birdie));
characters.setCharacter(new Character_1.default("7", "ケン", "ken", ken_1.ken));
characters.setCharacter(new Character_1.default("8", "ネカリ", "necalli", necalli_1.necalli));
characters.setCharacter(new Character_1.default("9", "バルログ", "balrog", balrog_1.balrog));
characters.setCharacter(new Character_1.default("10", "レインボー・ミカ", "rmika", rmika_1.rmika, ["ミカ"]));
characters.setCharacter(new Character_1.default("11", "ラシード", "rashid", rashid_1.rashid));
characters.setCharacter(new Character_1.default("12", "かりん", "karin", karin_1.karin));
characters.setCharacter(new Character_1.default("13", "ザンギエフ", "zangief", zangief_1.zangief, ["ザンギ"]));
characters.setCharacter(new Character_1.default("14", "ララ", "laura", laura_1.laura));
characters.setCharacter(new Character_1.default("15", "ダルシム", "dhalsim", dhalsim_1.dhalsim));
characters.setCharacter(new Character_1.default("16", "ファン", "fang", fang_1.fang));
characters.setCharacter(new Character_1.default("17", "アレックス", "alex", alex_1.alex));
characters.setCharacter(new Character_1.default("18", "ガイル", "guile", guile_1.guile));
characters.setCharacter(new Character_1.default("19", "いぶき", "ibuki", ibuki_1.ibuki));
characters.setCharacter(new Character_1.default("20", "バイソン", "mbison", mbison_1.mbison));
characters.setCharacter(new Character_1.default("21", "ジュリ", "juri", juri_1.juri));
characters.setCharacter(new Character_1.default("22", "ユリアン", "urien", urien_1.urien));
characters.setCharacter(new Character_1.default("23", "豪鬼", "gouki", gouki_1.gouki, ["ごうき"]));
characters.setCharacter(new Character_1.default("24", "コーリン", "kolin", kolin_1.kolin));
characters.setCharacter(new Character_1.default("25", "エド", "ed", ed_1.ed));
characters.setCharacter(new Character_1.default("26", "アビゲイル", "abigail", abigail_1.abigail, ["アビ"]));
characters.setCharacter(new Character_1.default("27", "メナト", "menat", menat_1.menat));
characters.setCharacter(new Character_1.default("28", "是空", "zeku", zeku_1.zeku));
characters.setCharacter(new Character_1.default("29", "さくら", "sakura", sakura_1.sakura));
characters.setCharacter(new Character_1.default("30", "ブランカ", "blanka", blanka_1.blanka));
characters.setCharacter(new Character_1.default("31", "ファルケ", "falke", falke_1.falke));
characters.setCharacter(new Character_1.default("32", "コーディー", "cody", cody_1.cody));
characters.setCharacter(new Character_1.default("33", "サガット", "sagat", sagat_1.sagat));
characters.setCharacter(new Character_1.default("34", "G", "g", g_1.g));
characters.setCharacter(new Character_1.default("35", "影ナル者", "kage", kage_1.kage, ["影", "カゲ"]));
characters.setCharacter(new Character_1.default("36", "ポイズン", "poison", poison_1.poison));
characters.setCharacter(new Character_1.default("37", "ルシア", "lucia", lucia_1.lucia));
characters.setCharacter(new Character_1.default("38", "エドモンド本田", "ehonda", ehonda_1.ehonda, ["本田"]));
characters.setCharacter(new Character_1.default("39", "ギル", "gill", gill_1.gill));
characters.setCharacter(new Character_1.default("40", "セス", "seth", seth_1.seth));
characters.setCharacter(new Character_1.default("41", "ダン", "dan", dan_1.dan));
//# sourceMappingURL=character.js.map