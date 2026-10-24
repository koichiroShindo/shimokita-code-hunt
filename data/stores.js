/*
 * お店の一覧。お店を足すときは { ... }, のかたまりを1つコピーして書き換える。
 *
 *   id         : 半角英数字の名前（QRコードのURLに入る。あとから変えない）
 *   key        : お店のQRコード用の合言葉（半角英数字8文字ほど。お店ごとに別にする）
 *   name       : 店名
 *   categories : 当てはまる種類（vintage / records / cafe / sweets / curry / music / theater / books / lifestyle / spots）
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
    desc: {
      en: "Open 12:00–21:00 on weekdays, 11:00–21:00 on weekends and holidays.",
      zh: "工作日12:00–21:00，周末及节假日11:00–21:00营业。",
      ko: "평일 12:00–21:00, 주말·공휴일 11:00–21:00 영업.",
      ja: "平日12:00〜21:00、土日祝11:00〜21:00。"
    }
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
    categories: ["vintage"],
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
    categories: ["records"],
    address: "東京都世田谷区北沢2-8-4 松田ビル1F",
    lat: null, lng: null,
    desc: {
      en: "A sister shop of Face Records in Shibuya.",
      zh: "涩谷 Face Records 的姊妹店。",
      ko: "시부야 Face Records의 자매점입니다.",
      ja: "渋谷のFace Recordsの姉妹店。"
    }
  },
  {
    id: "disk-union",
    key: "d4u7n2kq",
    name: "disk union Shimokitazawa",
    categories: ["records"],
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
      en: "Opened in 1982, one of the oldest record shops in Shimokitazawa. It appears in the film PERFECT DAYS.",
      zh: "1982年创业，下北泽最老的唱片店之一，也是电影《完美的日子》的取景地。",
      ko: "1982년 창업한 시모키타자와에서 가장 오래된 레코드 가게 중 하나로, 영화 〈퍼펙트 데이즈〉의 촬영지입니다.",
      ja: "1982年創業、下北沢で最古参のレコード店。映画『PERFECT DAYS』のロケ地。"
    }
  },
  {
    id: "jet-set",
    key: "jq33nzwy",
    name: "JET SET Shimokitazawa",
    categories: ["records"],
    address: "東京都世田谷区北沢2-33-12 柳川ビル2F",
    lat: null, lng: null,
    desc: {
      en: "Vinyl records of all genres. Its only other shop is in Kyoto.",
      zh: "经营各种类型的黑胶唱片。另一家店在京都。",
      ko: "모든 장르의 바이닐 레코드를 다룹니다. 다른 매장은 교토에만 있습니다.",
      ja: "全ジャンルのアナログレコードを扱う。ほかの店舗は京都だけ。"
    }
  },
  {
    id: "record-station",
    key: "mr4as3zy",
    name: "RECORD STATION",
    categories: ["records"],
    address: "下北沢一番街商店街",
    lat: null, lng: null,
    desc: {
      en: "Mainly used records, on the Ichibangai shopping street.",
      zh: "位于一番街商店街，以二手唱片为主。",
      ko: "이치반가이 상점가에 있으며, 중고 레코드가 중심입니다.",
      ja: "一番街商店街にある、中古盤中心のレコード店。"
    }
  },

  /* ---- カフェ ---- */
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
    id: "felice-domani",
    key: "18m2urbx",
    name: "felice domani",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-26-14 下北沢Coo 1F",
    lat: null, lng: null,
    desc: {
      en: "About 2 minutes from the station, with unusual drinks such as a black latte.",
      zh: "距车站约2分钟，有黑色拿铁等特色饮品。",
      ko: "역에서 약 2분 거리로, 블랙 라테 같은 독특한 음료가 있습니다.",
      ja: "駅から約2分。ブラックラテなど個性的なドリンクがある。"
    }
  },
  {
    id: "ballon-dessai",
    key: "2gz9jrm5",
    name: "BALLON D'ESSAI",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-30-11 北沢ビル1F",
    lat: null, lng: null,
    desc: {
      en: "A coffee stand with a gallery. You can try making latte art.",
      zh: "附设画廊的咖啡站，可以体验拉花。",
      ko: "갤러리가 있는 커피 스탠드로, 라테 아트를 체험할 수 있습니다.",
      ja: "ギャラリー併設のコーヒースタンド。ラテアート体験ができる。"
    }
  },
  {
    id: "tag-cafe",
    key: "cywp8pry",
    name: "tag cafe",
    categories: ["cafe"],
    address: "下北沢駅 東口から徒歩1分",
    lat: null, lng: null,
    desc: {
      en: "Just 1 minute from the East Exit of the station.",
      zh: "距车站东口仅1分钟。",
      ko: "역 동쪽 출구에서 1분 거리입니다.",
      ja: "下北沢駅の東口から歩いて1分。"
    }
  },

  /* ---- スイーツ ---- */
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
    categories: ["sweets"],
    address: "東京都世田谷区北沢2-26-20 1F",
    lat: null, lng: null,
    desc: {
      en: "Pancakes. Look for the smoky blue shop front; there is often a line.",
      zh: "松饼店。烟蓝色的外观是标志，常常排队。",
      ko: "팬케이크 가게입니다. 스모키 블루 외관이 표시이며, 줄을 서는 일이 많습니다.",
      ja: "パンケーキの店。スモーキーブルーの外観が目印で、行列ができることも多い。"
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
  {
    id: "chez-lui",
    key: "0kxjdpgn",
    name: "Chez Lui Shimokitazawa",
    categories: ["sweets"],
    address: "東京都世田谷区北沢2-11-18",
    lat: null, lng: null,
    desc: {
      en: "A takeout-only cake shop, 1 minute from the station.",
      zh: "只做外带的蛋糕店，距车站1分钟。",
      ko: "포장 전문 케이크 가게로, 역에서 1분 거리입니다.",
      ja: "テイクアウト専門のケーキ店。駅から歩いて1分。"
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
      en: "Curry in a renovated former camera shop. Chosen as one of Tabelog's top 100 curry restaurants in 2023.",
      zh: "由旧相机店改造而成的咖喱店，入选2023年 Tabelog 百名店。",
      ko: "예전 카메라 가게를 개조한 카레 가게로, 2023년 타베로그 100명점에 선정되었습니다.",
      ja: "元カメラ屋を改装したカレー店。2023年の食べログ百名店。"
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
  {
    id: "kyu-yamu-tei",
    key: "kkmvw0ru",
    name: "Kyu Yamu-tei Shimokita-so",
    categories: ["curry"],
    address: "東京都世田谷区代沢5-29-9 ナイスビル",
    lat: null, lng: null,
    desc: {
      en: "Three kinds of keema curry that change every month. 8 minutes from the station.",
      zh: "每月更换的3种肉末咖喱。距车站8分钟。",
      ko: "매달 바뀌는 3종류의 키마 카레. 역에서 8분 거리입니다.",
      ja: "月替わりで3種類のキーマカレー。駅から歩いて8分。"
    }
  },
  {
    id: "moona",
    key: "setyc9v4",
    name: "SPICE KITCHEN MOONA",
    categories: ["curry"],
    address: "下北沢駅 南口から徒歩約1分 ビル5F",
    lat: null, lng: null,
    desc: {
      en: "South Indian food; the seafood curry is the specialty. On a 5th floor, 1 minute from the South Exit.",
      zh: "以南印度料理为主，招牌是海鲜咖喱。位于距南口1分钟的大楼5楼。",
      ko: "남인도 요리가 중심이며, 해산물 카레가 명물입니다. 남쪽 출구에서 1분, 건물 5층에 있습니다.",
      ja: "南インド料理が軸で、名物は海鮮カレー。南口から1分のビル5階。"
    }
  },
  {
    id: "magic-spice",
    key: "ss3yfidb",
    name: "Magic Spice Tokyo",
    categories: ["curry"],
    address: "マジックスパイス 東京店 下北沢",
    lat: null, lng: null,
    desc: {
      en: "Indonesian-style soup curry, about 6 minutes' walk from the station.",
      zh: "印尼风格的汤咖喱，距车站步行约6分钟。",
      ko: "인도네시아풍 수프 카레로, 역에서 걸어서 약 6분입니다.",
      ja: "インドネシア風のスープカレー。駅から歩いて約6分。"
    }
  },

  /* ---- ライブハウス ---- */
  {
    id: "shelter",
    key: "l2e7s3gk",
    name: "Shimokitazawa SHELTER",
    categories: ["music"],
    address: "東京都世田谷区北沢2-6-10 仙田ビルB1",
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
      en: "A live music venue about 3 minutes' walk from the station.",
      zh: "距车站步行约3分钟的现场音乐场馆。",
      ko: "역에서 걸어서 약 3분 거리의 라이브 공연장입니다.",
      ja: "駅から歩いて約3分のライブハウス。"
    }
  },
  {
    id: "garden",
    key: "hptexsco",
    name: "Shimokitazawa GARDEN",
    categories: ["music"],
    address: "東京都世田谷区北沢2-4-5 mosia B1F",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "daisy-bar",
    key: "5mtfjnyi",
    name: "Shimokitazawa Daisy Bar",
    categories: ["music"],
    address: "東京都世田谷区北沢2-2-3 エルサント北沢B1",
    lat: null, lng: null,
    desc: {
      en: "Holds about 140 people. 4 minutes from the station.",
      zh: "可容纳约140人，距车站4分钟。",
      ko: "약 140명을 수용하며, 역에서 4분 거리입니다.",
      ja: "キャパは約140人。駅から歩いて4分。"
    }
  },
  {
    id: "loft",
    key: "qdevs8x0",
    name: "Shimokitazawa LOFT",
    categories: ["music"],
    address: "東京都世田谷区代沢5-31-8 エクセレント下北沢B1",
    lat: null, lng: null,
    desc: {}
  },

  /* ---- 小劇場 ---- */
  {
    id: "honda-gekijo",
    key: "7f5p3cgz",
    name: "Honda Theater",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-10-15",
    lat: null, lng: null,
    desc: {
      en: "A theater for plays with 386 seats, opened in 1982.",
      zh: "1982年开幕的话剧专用剧场，有386个座位。",
      ko: "1982년에 문을 연 386석의 연극 전용 극장입니다.",
      ja: "1982年開場、客席386席の演劇専用劇場。"
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
      en: "A small theater. OFF OFF Theater is on the same floor.",
      zh: "小剧场。同一层还有 OFF OFF 剧场。",
      ko: "작은 극장입니다. 같은 층에 OFF OFF 시어터가 있습니다.",
      ja: "小劇場。同じフロアにOFF・OFFシアターがある。"
    }
  },
  {
    id: "off-off-theater",
    key: "quy56bm4",
    name: "OFF OFF Theater",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-11-8 TAROビル3F",
    lat: null, lng: null,
    desc: {
      en: "A small theater on the same floor as Ekimae Theater.",
      zh: "与站前剧场在同一层的小剧场。",
      ko: "에키마에 극장과 같은 층에 있는 작은 극장입니다.",
      ja: "駅前劇場と同じフロアにある小劇場。"
    }
  },
  {
    id: "theater-rakuen",
    key: "fr6fmx7a",
    name: "Theater Rakuen",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-10-18 藤和下北沢ハイタウンB棟B1F",
    lat: null, lng: null,
    desc: {}
  },
  {
    id: "the-suzunari",
    key: "9ncf2lmp",
    name: "The Suzunari",
    categories: ["theater"],
    address: "東京都世田谷区北沢1-45-15",
    lat: null, lng: null,
    desc: {
      en: "On the second floor of Suzunari Yokocho, about 5 minutes' walk from the East Exit.",
      zh: "位于铃奈里横丁二楼，距东口步行约5分钟。",
      ko: "스즈나리 요코초 2층에 있으며, 동쪽 출구에서 걸어서 약 5분입니다.",
      ja: "鈴なり横丁の2階。東口から歩いて約5分。"
    }
  },

  /* ---- 本 ---- */
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
    id: "bookstore-bb",
    key: "qvca6sgg",
    name: "Bookstore B&B",
    categories: ["books"],
    address: "東京都世田谷区代田2-36-15 BONUS TRACK 2F",
    lat: null, lng: null,
    desc: {
      en: "B&B means Books & Beer: you can drink beer while choosing books.",
      zh: "店名 B&B 是 Books & Beer 的缩写，可以边喝啤酒边选书。",
      ko: "B&B는 Books & Beer의 줄임말로, 맥주를 마시며 책을 고를 수 있습니다.",
      ja: "店名はBooks & Beerの略。ビールを飲みながら本を選べる。"
    }
  },
  {
    id: "clarice-books",
    key: "alm43wuj",
    name: "Clarice Books",
    categories: ["books"],
    address: "東京都世田谷区北沢3丁目 一番街商店街 HANA 2F",
    lat: null, lng: null,
    desc: {
      en: "Used books from philosophy to art, fashion and subculture. 6 minutes from the North Exit.",
      zh: "从哲学到美术、时尚、亚文化的旧书店。距北口6分钟。",
      ko: "철학부터 미술, 패션, 서브컬처까지 다루는 헌책방입니다. 북쪽 출구에서 6분.",
      ja: "哲学・思想から美術・ファッション・サブカルまでの古書店。北口から歩いて6分。"
    }
  },
  {
    id: "fuzkue",
    key: "loz5k7q8",
    name: "fuzkue Shimokitazawa",
    categories: ["books", "cafe"],
    address: "東京都世田谷区代田2-36-14 BONUS TRACK",
    lat: null, lng: null,
    desc: {
      en: "A café made for reading in quiet.",
      zh: "专为安静读书而设的咖啡馆。",
      ko: "조용히 책을 읽기 위한 카페입니다.",
      ja: "本を読むための静かな店。"
    }
  },
  {
    id: "village-vanguard",
    key: "h4n9a2qc",
    name: "Village Vanguard Shimokitazawa",
    categories: ["books", "lifestyle"],
    address: "東京都世田谷区北沢2-10-15 マルシェ下北沢1F",
    lat: null, lng: null,
    desc: {
      en: "A bookstore that also sells toys and goods, 2 minutes' walk from the station.",
      zh: "同时售卖玩具和杂货的书店，距车站步行2分钟。",
      ko: "장난감과 잡화도 파는 서점으로, 역에서 걸어서 2분입니다.",
      ja: "おもちゃや雑貨も売っている本屋。駅から歩いて2分。"
    }
  },

  /* ---- 雑貨・ホビー ---- */
  {
    id: "drama-tcg",
    key: "ndx37dcv",
    name: "Drama Shimokitazawa (trading cards)",
    categories: ["lifestyle"],
    address: "東京都世田谷区北沢2-14-10 こだまビル",
    lat: null, lng: null,
    desc: {
      en: "A trading card shop, open every day 10:00–24:00.",
      zh: "集换式卡牌店，每天10:00–24:00营业。",
      ko: "트레이딩 카드 가게로, 매일 10:00–24:00 영업합니다.",
      ja: "トレカの販売・買取店。毎日10:00〜24:00。"
    }
  },
  {
    id: "sansato",
    key: "o8vpe9p0",
    name: "Sansato",
    categories: ["lifestyle"],
    address: "東京都世田谷区代沢5-36-14",
    lat: null, lng: null,
    desc: {
      en: "A goods shop with a café in the same building. 5 minutes from the station.",
      zh: "同一栋楼里还有咖啡馆的杂货店，距车站5分钟。",
      ko: "같은 건물에 카페가 있는 잡화점으로, 역에서 5분 거리입니다.",
      ja: "一棟でカフェと買い物が楽しめる雑貨店。駅から歩いて5分。"
    }
  },
  {
    id: "tokyo-retro",
    key: "pm84co98",
    name: "Tokyo Retro a.m.a. store",
    categories: ["lifestyle"],
    address: "東京都世田谷区北沢3-34-2",
    lat: null, lng: null,
    desc: {
      en: "Antique goods from Japan's Showa era.",
      zh: "经营日本昭和时代的古董杂货。",
      ko: "일본 쇼와 시대의 앤티크 잡화를 다룹니다.",
      ja: "昭和のアンティーク雑貨の店。"
    }
  },
  {
    id: "sukonbu",
    key: "6cegalmh",
    name: "Sukonbu",
    categories: ["lifestyle"],
    address: "ミカン下北 東洋百貨店別館",
    lat: null, lng: null,
    desc: {
      en: "Handmade, one-of-a-kind accessories and goods.",
      zh: "手工制作的独一无二的饰品和杂货。",
      ko: "하나뿐인 수제 액세서리와 잡화를 다룹니다.",
      ja: "一点もののアクセサリーやハンドメイド雑貨。"
    }
  },

  /* ---- 商店街 ---- */
  {
    id: "reload",
    key: "tehw4nvq",
    name: "reload",
    categories: ["spots"],
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
    categories: ["spots"],
    address: "東京都世田谷区代田2-36-12",
    lat: null, lng: null,
    desc: {
      en: "About 13 small shops halfway between Shimokitazawa and Setagaya-Daita stations.",
      zh: "位于下北泽站和世田谷代田站中间，聚集了约13家小店。",
      ko: "시모키타자와역과 세타가야다이타역 사이에 작은 가게 약 13곳이 모여 있습니다.",
      ja: "下北沢駅と世田谷代田駅の中間に、13店ほどが集まる。"
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
  },
  {
    id: "shimokita-ekiue",
    key: "0gwwjoy0",
    name: "Shimokita Ekiue",
    categories: ["spots"],
    address: "東京都世田谷区北沢2-24-2",
    lat: null, lng: null,
    desc: {
      en: "Shops, cafés and bars right on top of the Odakyu station. Opened in 2019.",
      zh: "位于小田急线车站上的商场，有杂货店、咖啡馆和居酒屋。2019年开业。",
      ko: "오다큐선 역 바로 위에 잡화점, 카페, 이자카야가 모여 있습니다. 2019년 개업.",
      ja: "小田急線の駅の上に、雑貨・カフェ・居酒屋などが集まる。2019年開業。"
    }
  },
  {
    id: "senrogai-akichi",
    key: "zchfjaga",
    name: "Shimokita Senrogai Akichi",
    categories: ["spots"],
    address: "下北線路街 空き地（北沢2丁目）",
    lat: null, lng: null,
    desc: {
      en: "An open space in the middle of Shimokita Senrogai, 4 minutes from the station.",
      zh: "位于下北线路街中心的空地，距车站4分钟。",
      ko: "시모키타 센로가이 한가운데에 있는 공터로, 역에서 4분 거리입니다.",
      ja: "下北線路街の真ん中にある空き地。駅から歩いて4分。"
    }
  }
];
