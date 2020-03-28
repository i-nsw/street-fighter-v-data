import Lps from "../class/Lps";
import Lp from "../class/Lp";

const lps = new Lps();

lps.setLps(new Lp("0", "指定なし"));
lps.setLps(new Lp("1", "0 ~ 500"));
lps.setLps(new Lp("2", "501 ~ 1000"));
lps.setLps(new Lp("3", "1001 ~ 1500"));
lps.setLps(new Lp("4", "1501 ~ 2000"));
lps.setLps(new Lp("5", "2001 ~ 3000"));
lps.setLps(new Lp("6", "3001 ~ 3500"));
lps.setLps(new Lp("7", "3501 ~ 4000"));
lps.setLps(new Lp("8", "4001 ~ 5500"));
lps.setLps(new Lp("9", "5501 ~ 6500"));
lps.setLps(new Lp("10", "6501 ~ 7500"));
lps.setLps(new Lp("11", "7501 ~ 10000"));
lps.setLps(new Lp("12", "10001 ~ 12000"));
lps.setLps(new Lp("13", "12001 ~ 14000"));
lps.setLps(new Lp("14", "14001 ~ 20000"));
lps.setLps(new Lp("15", "20001 ~ 25000"));
lps.setLps(new Lp("16", "25001 ~ 30000"));
lps.setLps(new Lp("17", "30001 ~ 35000"));
lps.setLps(new Lp("18", "35001 ~ 100000"));
lps.setLps(new Lp("19", "100001 ~ 300000"));
lps.setLps(new Lp("20", "300001 ~"));

export { lps };
