/*
 * お店の一覧。お店を足すときは { ... }, のかたまりを1つコピーして書き換える。
 *
 *   id         : 半角英数字の名前（QRコードのURLに入る。あとから変えない）
 *   key        : お店のQRコード用の合言葉（半角英数字8文字ほど。お店ごとに別にする）
 *   name       : 店名
 *   categories : 当てはまる種類（vintage / records / cafe / sweets / curry / music / theater / books / hobby / lifestyle / spots）
 *   address    : 住所（地図のリンクにも使う）
 *   lat, lng   : お店の位置。Googleマップでお店を右クリックすると出る数字を入れる。
 *                null のあいだは、QRを読んだときに位置を確かめない
 *   photo      : お店の写真（images/shops/ に入れたファイル名）。なければ書かない
 *   desc       : 短い紹介文。en（英語）は必ず書く。zh / ko / ja は書けたら
 *
 * 住所と紹介文はWebの紹介記事から拾ったもの。移転・閉店していることがあるので、QRコードを置く前にお店に確かめる。
 */
window.STORES = [
  /* ---- 古着 ---- */
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
    id: "jam",
    key: "0pbw3p0j",
    name: "JAM Shimokitazawa",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-31-7 アビティ下北沢2F",
    lat: null, lng: null,
    desc: {
      en: "Open every day, 11:00–20:00.",
      zh: "每天营业，11:00–20:00。",
      ko: "매일 영업, 11:00–20:00.",
      ja: "毎日営業、11:00〜20:00。"
    }
  },
  {
    id: "jam-south",
    key: "d4t9uvpt",
    name: "JAM Shimokitazawa South Exit",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-15-16 シャイン北沢ビルB1F",
    lat: null, lng: null,
    desc: {
      en: "Opened in October 2025, 3 minutes' walk from the station.",
      zh: "2025年10月开业，距车站步行3分钟。",
      ko: "2025년 10월 오픈, 역에서 걸어서 3분입니다.",
      ja: "2025年10月開店。駅から歩いて3分。"
    }
  },

  /* ---- レコード ---- */
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
    address: "東京都世田谷区北沢1丁目",
    lat: null, lng: null,
    desc: {
      en: "A used record shop that opened in 1985.",
      zh: "1985年开业的二手唱片店。",
      ko: "1985년에 문을 연 중고 레코드 가게입니다.",
      ja: "1985年に開店した中古レコード店。"
    }
  },
  {
    id: "flash-disc-ranch",
    key: "oflouxui",
    name: "FLASH DISC RANCH",
    categories: ["records"],
    address: "東京都世田谷区北沢2-12-16 2F",
    lat: null, lng: null,
    desc: {
      en: "A second-floor record shop. The entrance is between two parts of a game arcade.",
      zh: "位于二楼的唱片店，入口夹在游戏厅的两个店面之间。",
      ko: "2층에 있는 레코드 가게입니다. 입구는 게임센터 두 곳 사이에 있습니다.",
      ja: "2階のレコード店。入口はゲームセンターに挟まれている。"
    }
  },

  /* ---- カフェ・スイーツ ---- */
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
    id: "anthrop",
    key: "8kyc663v",
    name: "anthrop. Espresso & Comfort",
    categories: ["cafe", "sweets"],
    address: "東京都世田谷区北沢2-11-17",
    lat: null, lng: null,
    desc: {
      en: "A café known for its homemade baked sweets.",
      zh: "以自制烘焙点心闻名的咖啡馆。",
      ko: "직접 구운 과자로 알려진 카페입니다.",
      ja: "自家製の焼き菓子で知られるカフェ。"
    }
  },
  {
    id: "new-york-cupcakes",
    key: "lgpyadqs",
    name: "New York Cupcakes Shimokitazawa",
    categories: ["sweets"],
    address: "東京都世田谷区北沢3-27-1 1F",
    lat: null, lng: null,
    desc: {
      en: "The marshmallow cupcake is the most popular. Only a few seats inside.",
      zh: "最受欢迎的是棉花糖杯子蛋糕。店内座位不多。",
      ko: "가장 인기 있는 것은 마시멜로 컵케이크입니다. 매장 좌석은 적습니다.",
      ja: "一番人気はマシュマロのカップケーキ。店内の席は少なめ。"
    }
  },
  {
    id: "flippers",
    key: "c1om3krr",
    name: "FLIPPER'S Shimokitazawa",
    categories: ["sweets", "cafe"],
    address: "東京都世田谷区北沢2-26-20 1F",
    lat: null, lng: null,
    desc: {
      en: "A pancake shop.",
      zh: "松饼店。",
      ko: "팬케이크 가게입니다.",
      ja: "パンケーキの店。"
    }
  },
  {
    id: "natural-crepe",
    key: "nr5tdnti",
    name: "Natural Crepe Shimokitazawa",
    categories: ["sweets"],
    address: "東京都世田谷区代沢5-36-16",
    lat: null, lng: null,
    desc: {
      en: "A crepe shop.",
      zh: "可丽饼店。",
      ko: "크레이프 가게입니다.",
      ja: "クレープの店。"
    }
  },

  /* ---- カレー ---- */
  {
    id: "curry-planet",
    key: "5mpaamqj",
    name: "Curry no Wakusei (Curry Planet)",
    categories: ["curry"],
    address: "東京都世田谷区北沢3-34-3 石川荘1F",
    lat: null, lng: null,
    desc: {
      en: "A curry restaurant in a renovated former camera shop.",
      zh: "由旧相机店改造而成的咖喱店。",
      ko: "예전 카메라 가게를 개조한 카레 가게입니다.",
      ja: "元カメラ屋を改装したカレー店。"
    }
  },
  {
    id: "nasu-oyaji",
    key: "f6v3x7te",
    name: "Nasu Oyaji",
    categories: ["curry"],
    address: "東京都世田谷区代沢5-36-8 アルファビル1F",
    lat: null, lng: null,
    desc: {
      en: "A curry restaurant about 4 minutes' walk from the South Exit.",
      zh: "距南口步行约4分钟的咖喱店。",
      ko: "남쪽 출구에서 걸어서 약 4분 거리의 카레 가게입니다.",
      ja: "南口から歩いて約4分のカレー店。"
    }
  },

  /* ---- ライブハウス ---- */
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

  /* ---- 劇場 ---- */
  {
    id: "honda-gekijo",
    key: "7f5p3cgz",
    name: "Honda Theater",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-10-15",
    lat: null, lng: null,
    desc: {
      en: "A theater for plays, opened in 1982.",
      zh: "1982年开幕的话剧专用剧场。",
      ko: "1982년에 문을 연 연극 전용 극장입니다.",
      ja: "1982年に開場した演劇専用の劇場。"
    }
  },
  {
    id: "ekimae-gekijo",
    key: "rdjd9eol",
    name: "Ekimae Theater",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-11-8 TAROビル3F",
    lat: null, lng: null,
    desc: {
      en: "A small theater. OFF OFF Theater is in the same building.",
      zh: "小剧场。同一栋楼里还有 OFF OFF 剧场。",
      ko: "작은 극장입니다. 같은 건물에 OFF OFF 시어터도 있습니다.",
      ja: "小劇場。同じビルにOFF・OFFシアターも入っている。"
    }
  },
  {
    id: "the-suzunari",
    key: "9ncf2lmp",
    name: "The Suzunari",
    categories: ["theater"],
    address: "下北沢 鈴なり横丁2F",
    lat: null, lng: null,
    desc: {
      en: "On the second floor of Suzunari Yokocho, about 5 minutes' walk from the East Exit.",
      zh: "位于铃奈里横丁二楼，距东口步行约5分钟。",
      ko: "스즈나리 요코초 2층에 있으며, 동쪽 출구에서 걸어서 약 5분입니다.",
      ja: "鈴なり横丁の2階。東口から歩いて約5分。"
    }
  },

  /* ---- 本・ホビー ---- */
  {
    id: "furuhon-bibibi",
    key: "eb4omac6",
    name: "Furuhon Bibibi",
    categories: ["books"],
    address: "東京都世田谷区北沢1丁目 土屋ビル1F",
    lat: null, lng: null,
    desc: {
      en: "A used bookstore with about 13,000 books, including many rare and strange ones.",
      zh: "约有13,000册藏书的旧书店，珍本和奇书很多。",
      ko: "약 13,000권을 갖춘 헌책방으로, 희귀하고 독특한 책이 많습니다.",
      ja: "約13,000冊をそろえる古書店。珍品・奇品が多い。"
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

  /* ---- 小さな店が集まる場所 ---- */
  {
    id: "reload",
    key: "tehw4nvq",
    name: "reload",
    categories: ["spots", "lifestyle"],
    address: "東京都世田谷区北沢3-19-20",
    lat: null, lng: null,
    desc: {
      en: "A row of low white buildings with small shops run by their owners, 4 minutes from the station.",
      zh: "由白色两层建筑组成的商业街，聚集着店主亲自经营的小店，距车站步行4分钟。",
      ko: "하얀 2층 건물이 늘어선 곳으로, 주인이 직접 운영하는 작은 가게들이 모여 있습니다. 역에서 걸어서 4분입니다.",
      ja: "白い2階建ての建物が並ぶ、店主の顔が見える個店街。駅から歩いて4分。"
    }
  },
  {
    id: "bonus-track",
    key: "f0x18s2h",
    name: "BONUS TRACK",
    categories: ["spots", "lifestyle"],
    address: "東京都世田谷区代田2-36-12",
    lat: null, lng: null,
    desc: {
      en: "A small shopping street halfway between Shimokitazawa and Setagaya-Daita stations.",
      zh: "位于下北泽站和世田谷代田站中间的小型商店街。",
      ko: "시모키타자와역과 세타가야다이타역 사이에 있는 작은 상점가입니다.",
      ja: "下北沢駅と世田谷代田駅のちょうど中間にある小さな商店街。"
    }
  },
  {
    id: "mikan-shimokita",
    key: "x3m8k1vb",
    name: "Mikan Shimokita",
    categories: ["spots"],
    address: "東京都世田谷区北沢2-11-15",
    lat: null, lng: null,
    desc: {
      en: "Shops under and beside the train tracks, right by the station.",
      zh: "位于车站旁高架桥下及其两侧的商业设施。",
      ko: "역 바로 옆, 고가 아래와 그 옆에 가게들이 모여 있습니다.",
      ja: "駅のすぐそば、高架下と高架の横に店が入る。"
    }
  }
];
