/*
 * お店の一覧。お店を足すときは { ... }, のかたまりを1つコピーして書き換える。
 *
 *   id         : 半角英数字の名前（QRコードのURLに入る。あとから変えない）
 *   key        : お店のQRコード用の合言葉（半角英数字8文字ほど。お店ごとに別にする）
 *   name       : 店名
 *   categories : 当てはまる種類（vintage / records / cafe / music / books / hobby / lifestyle / food）
 *   address    : 住所（地図のリンクにも使う）
 *   lat, lng   : お店の位置。Googleマップでお店を右クリックすると出る数字を入れる。
 *                null のあいだは、QRを読んだときに位置を確かめない
 *   desc       : 短い紹介文。en（英語）は必ず書く。zh / ko / ja は書けたら
 *
 * 住所はWebの紹介記事から拾ったもの。移転していることがあるので、QRコードを置く前にお店に確かめる。
 */
window.STORES = [
  {
    id: "flamingo",
    key: "k7m2q9xa",
    name: "Flamingo Shimokitazawa",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-25-12 リサビル1F",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "new-york-joe",
    key: "p3w8n1zr",
    name: "New York Joe Exchange",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-29-2",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "zondag",
    key: "z5a8c2pt",
    name: "zondag",
    categories: ["vintage", "lifestyle"],
    address: "東京都世田谷区北沢2-36-6",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "general-record-store",
    key: "r5t2h8vd",
    name: "General Record Store",
    categories: ["records", "music"],
    address: "東京都世田谷区北沢2-8-4 松田ビル1F",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "disk-union",
    key: "d4u7n2kq",
    name: "disk union Shimokitazawa",
    categories: ["records", "music"],
    address: "東京都世田谷区北沢1丁目【番地を確認】",
    lat: null, lng: null,
    desc: {
      en: "A used record shop that opened in 1985.",
      zh: "1985年开业的二手唱片店。",
      ko: "1985년에 문을 연 중고 레코드 가게입니다.",
      ja: "1985年に開店した中古レコード店。"
    }
  },
  {
    id: "bear-pond-espresso",
    key: "c9y4j6ub",
    name: "Bear Pond Espresso",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-30-11",
    lat: null, lng: null,
    desc: {
      en: "An espresso bar in a renovated old candy shop. Closed on Mondays.",
      zh: "由老式零食店改造而成的意式咖啡店。周一休息。",
      ko: "오래된 과자 가게를 개조한 에스프레소 바입니다. 월요일 휴무.",
      ja: "古い駄菓子屋を改装したエスプレッソの店。月曜定休。"
    }
  },
  {
    id: "shelter",
    key: "l2e7s3gk",
    name: "Shimokitazawa SHELTER",
    categories: ["music"],
    address: "東京都世田谷区北沢2-6-10 B1",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "club-que",
    key: "q8w3e6rt",
    name: "Shimokitazawa CLUB Que",
    categories: ["music"],
    address: "東京都世田谷区北沢2-5-2 ビッグベンビルB2",
    lat: null, lng: null,
    desc: {
      en: "A live music venue about 3 minutes' walk from Shimokitazawa Station.",
      zh: "距下北泽站步行约3分钟的现场音乐场馆。",
      ko: "시모키타자와역에서 걸어서 약 3분 거리의 라이브 공연장입니다.",
      ja: "下北沢駅から歩いて約3分のライブハウス。"
    }
  },
  {
    id: "village-vanguard",
    key: "h4n9a2qc",
    name: "Village Vanguard Shimokitazawa",
    categories: ["hobby", "lifestyle", "books"],
    address: "東京都世田谷区北沢2-10-15 マルシェ下北沢1F",
    lat: null, lng: null,
    desc: {
      en: "A bookstore that also sells toys and goods, 2 minutes' walk from the station.",
      zh: "同时售卖玩具和杂货的书店，距车站步行2分钟。",
      ko: "장난감과 잡화도 파는 서점으로, 역에서 걸어서 2분입니다.",
      ja: "おもちゃや雑貨も売っている本屋。駅から歩いて2分。"
    }
  },
  {
    id: "nasu-oyaji",
    key: "f6v3x7te",
    name: "Nasu Oyaji (curry)",
    categories: ["food"],
    address: "東京都世田谷区代沢5-36-8 アルファビル1F",
    lat: null, lng: null,
    desc: {
      en: "A curry restaurant about 4 minutes' walk from the South Exit.",
      zh: "距南口步行约4分钟的咖喱店。",
      ko: "남쪽 출구에서 걸어서 약 4분 거리의 카레 가게입니다.",
      ja: "南口から歩いて約4分のカレー店。"
    }
  }
];
