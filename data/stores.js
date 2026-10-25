/*
 * お店の一覧。お店を足すときは { ... }, のかたまりを1つコピーして書き換える。
 * 選ぶ基準：観光客がほとんど来ない、路地裏・2階以上・地下・建物の一室にある個人店。チェーン店や有名な施設は入れない。
 *
 *   id         : 半角英数字の名前（QRコードのURLに入る。あとから変えない）
 *   key        : お店のQRコード用の合言葉（半角英数字8文字ほど。お店ごとに別にする）
 *   name       : 店名
 *   categories : 当てはまる種類（vintage / records / instruments / kissa / cafe / sweets / curry / bars / music / theater / cinema / books / galleries / goods）
 *   address    : 住所（地図のリンクにも使う）
 *   lat, lng   : お店の位置。Googleマップでお店を右クリックすると出る数字を入れる。
 *                null のあいだは、QRを読んだときに位置を確かめない
 *   photo      : お店の写真（images/shops/ に入れたファイル名）。なければ書かない
 *   credit     : 写真の出典（画面には出さない。掲載の許可をとった相手の記録）
 *   desc       : 短い紹介文。en（英語）は必ず書く。zh / ko / ja は書けたら
 *
 * 住所と紹介文はWebの紹介記事から拾ったもの。移転・閉店していることがあるので、QRコードを置く前にお店に確かめる。
 */
window.STORES = [
  /* ---- 古着 ---- */
  {
    id: "lomad-loman",
    key: "82vvfnwe",
    name: "lomad・loman",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-35-15 下北沢マンション2F 66号室",
    lat: null, lng: null,
    photo: "lomad-loman.jpg", credit: "#シモフル",
    desc: {
      en: "Deep inside the 2nd floor of an old building on a back street. Opened in May 2021. 14:00–20:00 (weekends from 13:00).",
      zh: "位于小巷里一栋老楼的二楼深处，2021年5月开业。14:00–20:00（周末13:00起）。",
      ko: "골목 안 낡은 건물 2층 안쪽에 있으며, 2021년 5월에 문을 열었습니다. 14:00–20:00(주말은 13:00부터).",
      ja: "路地裏の雑居ビル2階の奥。2021年5月開店。14:00〜20:00（土日祝13:00〜）。"
    }
  },
  {
    id: "kimama",
    key: "kthaz9mb",
    name: "KIMAMA",
    categories: ["vintage"],
    address: "東京都世田谷区北沢2-30-6 UCビル2F",
    lat: null, lng: null,
    photo: "kimama.jpg", credit: "AVEND",
    desc: {
      en: "On the 2nd floor of UC Building, up a staircase that is easy to miss. Closed on Wednesdays.",
      zh: "位于UC大楼二楼，楼梯入口很容易错过。周三休息。",
      ko: "UC빌딩 2층에 있으며, 계단 입구를 지나치기 쉽습니다. 수요일 휴무.",
      ja: "UCビルの2階。路面から階段を上がるので見逃しやすい。水曜定休。"
    }
  },
  {
    id: "kroneko",
    key: "fbm1lp4o",
    name: "kroneko",
    categories: ["vintage"],
    address: "東京都世田谷区代沢5-28-12 藤田ビル1C",
    lat: null, lng: null,
    photo: "kroneko.jpg", credit: "AVEND",
    desc: {
      en: "The owner buys and sells everything alone. About 5 minutes from the station.",
      zh: "店主一人负责采购和销售。距车站约5分钟。",
      ko: "주인 혼자 매입부터 판매까지 하는 가게입니다. 역에서 약 5분.",
      ja: "店主が一人で買い付けから販売までする店。駅から約5分。"
    }
  },
  {
    id: "flocci",
    key: "ftzmbi6b",
    name: "flocci naucinihilipilification",
    categories: ["vintage"],
    address: "下北沢（民家のような建物）",
    lat: null, lng: null,
    desc: {
      en: "From outside it looks like a private house, so most people walk right past.",
      zh: "从外面看像普通民宅，很多人会直接走过。",
      ko: "밖에서 보면 일반 주택 같아서 대부분 그냥 지나칩니다.",
      ja: "民家のような外見で、知らなければ通り過ぎてしまう店。"
    }
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

  /* ---- レコード ---- */
  {
    id: "flash-disc-ranch",
    key: "oflouxui",
    name: "FLASH DISC RANCH",
    categories: ["records"],
    address: "東京都世田谷区北沢2-12-16 2F",
    lat: null, lng: null,
    photo: "flash-disc-ranch.jpg", credit: "Time Out Tokyo",
    desc: {
      en: "Opened in 1982, one of the oldest record shops in Shimokitazawa. The 2nd-floor entrance is squeezed between two parts of a game arcade.",
      zh: "1982年创业，下北泽最老的唱片店之一。二楼的入口夹在游戏厅的两个店面之间。",
      ko: "1982년 창업한 시모키타자와에서 가장 오래된 레코드 가게 중 하나입니다. 2층 입구는 게임센터 사이에 끼어 있습니다.",
      ja: "1982年創業、下北沢で最古参のレコード店。2階への入口はゲームセンターに挟まれている。"
    }
  },
  {
    id: "record-station",
    key: "mr4as3zy",
    name: "RECORD STATION",
    categories: ["records"],
    address: "東京都世田谷区北沢3-30-1 2F",
    lat: null, lng: null,
    photo: "record-station.jpg", credit: "Time Out Tokyo",
    desc: {
      en: "A used record shop on a 2nd floor along the Ichibangai shopping street.",
      zh: "位于一番街商店街一栋楼二楼的二手唱片店。",
      ko: "이치반가이 상점가의 건물 2층에 있는 중고 레코드 가게입니다.",
      ja: "一番街商店街のビル2階にある中古レコード店。"
    }
  },
  {
    id: "jet-set",
    key: "jq33nzwy",
    name: "JET SET Shimokitazawa",
    categories: ["records"],
    address: "東京都世田谷区北沢2-33-12 柳川ビル2F",
    lat: null, lng: null,
    photo: "jet-set.jpg", credit: "Time Out Tokyo",
    desc: {
      en: "Vinyl of all genres on a 2nd floor. Its only other shop is in Kyoto.",
      zh: "位于二楼，经营各种类型的黑胶唱片。另一家店在京都。",
      ko: "2층에서 모든 장르의 바이닐을 다룹니다. 다른 매장은 교토에만 있습니다.",
      ja: "2階で全ジャンルのアナログ盤を扱う。ほかの店舗は京都だけ。"
    }
  },
  {
    id: "pianola-records",
    key: "4km9awl0",
    name: "pianola records",
    categories: ["records"],
    address: "東京都世田谷区代田2-36-13 BONUS TRACK",
    lat: null, lng: null,
    photo: "pianola-records.jpg", credit: "Time Out Tokyo",
    desc: {
      en: "Records from any genre and era, picked by the owner. Closed on Thursdays.",
      zh: "店主亲自挑选、不分类型和年代的唱片。周四休息。",
      ko: "주인이 장르와 시대를 가리지 않고 고른 레코드. 목요일 휴무.",
      ja: "ジャンルも年代も問わず店主が選んだレコードが並ぶ。木曜定休。"
    }
  },
  {
    id: "best-sound-record",
    key: "s8wrf9cb",
    name: "Best Sound Record",
    categories: ["records"],
    address: "下北沢駅 西口すぐのビルの一室",
    lat: null, lng: null,
    desc: {
      en: "Hidden in one room of a building with a clinic and a dry cleaner, right by the West Exit. Mainly jazz and rock, open for over 20 years.",
      zh: "藏在西口旁一栋有诊所和洗衣店的大楼里的一个房间。以爵士和摇滚为主，已营业20多年。",
      ko: "서쪽 출구 바로 옆, 병원과 세탁소가 있는 건물의 한 방에 숨어 있습니다. 재즈와 록 중심으로 20년 넘게 영업 중입니다.",
      ja: "西口すぐ、病院やクリーニング店が入るビルの一室でひっそり営業。ジャズとロックが中心で20年以上続く。"
    }
  },

  /* ---- 純喫茶 ---- */
  {
    id: "toumei-bara",
    key: "konz4yf5",
    name: "Kissa Toumei Bara",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-14-5 イスズビル203",
    lat: null, lng: null,
    photo: "toumei-bara.jpg", credit: "Yahoo!ニュース エキスパート",
    desc: {
      en: "A coffee house in room 203 of an old building on a back street.",
      zh: "位于小巷里一栋老楼203室的老派咖啡馆。",
      ko: "골목 안 낡은 건물 203호에 있는 다방입니다.",
      ja: "路地に建つ雑居ビル2階、203号室の喫茶店。"
    }
  },
  {
    id: "ichifusa",
    key: "hlbx95ep",
    name: "Kissa Ichifusa",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-21-26 2F",
    lat: null, lng: null,
    desc: {
      en: "A 2nd-floor coffee house in a back alley, 2 minutes from the South-West Exit.",
      zh: "位于小巷里的二楼咖啡馆，距西南口2分钟。",
      ko: "골목 안 2층에 있는 다방으로, 남서쪽 출구에서 2분입니다.",
      ja: "南西口から歩いて2分、路地裏のビル2階の喫茶店。"
    }
  },
  {
    id: "trois-chambres",
    key: "m14a14z6",
    name: "Trois Chambres",
    categories: ["kissa"],
    address: "東京都世田谷区代沢5-36-14 湯浅ビル2F",
    lat: null, lng: null,
    photo: "trois-chambres.jpg", credit: "くふうトリップ",
    desc: {
      en: "A coffee house on the 2nd floor of a building, about 5 minutes from the South Exit.",
      zh: "位于大楼二楼的咖啡馆，距南口约5分钟。",
      ko: "남쪽 출구에서 약 5분, 건물 2층에 있는 다방입니다.",
      ja: "南口から歩いて約5分、ビル2階の喫茶店。"
    }
  },
  {
    id: "masako",
    key: "i9zxttzs",
    name: "Jazz Kissa Masako",
    categories: ["kissa", "music"],
    address: "東京都世田谷区北沢2-31-2 大久ビル201",
    lat: null, lng: null,
    desc: {
      en: "A jazz coffee house in room 201. It closed in 2009 and came back in 2020. Closed on Thursdays.",
      zh: "位于201室的爵士咖啡馆。2009年歇业，2020年重新开张。周四休息。",
      ko: "201호에 있는 재즈 다방입니다. 2009년에 문을 닫았다가 2020년에 다시 열었습니다. 목요일 휴무.",
      ja: "201号室のジャズ喫茶。2009年に閉店し、2020年に復活した。木曜定休。"
    }
  },
  {
    id: "tag-cafe",
    key: "cywp8pry",
    name: "tag cafe",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-12-10 サウスサイド下北沢 2-2B",
    lat: null, lng: null,
    desc: {
      en: "A wood-paneled \"neo\" coffee house, 1 minute from the East Exit.",
      zh: "以木质为基调的新派老式咖啡馆，距东口1分钟。",
      ko: "나무로 꾸민 '네오' 다방으로, 동쪽 출구에서 1분입니다.",
      ja: "木を基調にしたネオ純喫茶。東口から歩いて1分。"
    }
  },

  /* ---- 隠れ家カフェ ---- */
  {
    id: "browns-books-cafe",
    key: "ydoec1aj",
    name: "Brown's Books & Cafe",
    categories: ["cafe", "books"],
    address: "東京都世田谷区代沢5-32-13 露崎商店ビル5F",
    lat: null, lng: null,
    desc: {
      en: "On the 5th floor of a shop building. Open only on weekends; on weekdays it is a magazine office.",
      zh: "位于一栋商店大楼的5楼。只在周末营业，平日是杂志编辑部。",
      ko: "상점 건물 5층에 있습니다. 주말에만 열고, 평일에는 잡지 편집부로 쓰입니다.",
      ja: "商店ビルの5階。土日だけ開くブックカフェで、平日は雑誌の編集部。"
    }
  },
  {
    id: "city-country-city",
    key: "49a6yjnq",
    name: "CITY COUNTRY CITY",
    categories: ["cafe", "records"],
    address: "東京都世田谷区北沢2-12-13 細沢ビル4F",
    lat: null, lng: null,
    photo: "city-country-city.jpg", credit: "Harumari TOKYO",
    desc: {
      en: "A record shop and café bar on the 4th floor of an old building, 1 minute from the station.",
      zh: "位于一栋老楼4楼的唱片店兼咖啡酒吧，距车站1分钟。",
      ko: "낡은 건물 4층에 있는 레코드 가게 겸 카페 바로, 역에서 1분입니다.",
      ja: "古い雑居ビルの4階にあるレコード店兼カフェバー。駅から歩いて1分。"
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
    id: "fuzkue",
    key: "loz5k7q8",
    name: "fuzkue Shimokitazawa",
    categories: ["cafe", "books"],
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
    id: "bear-pond-espresso",
    key: "c9y4j6ub",
    name: "Bear Pond Espresso",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-30-11",
    lat: null, lng: null,
    desc: {
      en: "A tiny espresso bar in a renovated old candy shop. Closed on Mondays.",
      zh: "由老式零食店改造而成的小小意式咖啡店。周一休息。",
      ko: "오래된 과자 가게를 개조한 작은 에스프레소 바입니다. 월요일 휴무.",
      ja: "古い駄菓子屋を改装した小さなエスプレッソの店。月曜定休。"
    }
  },

  /* ---- スイーツ ---- */
  {
    id: "monalisa-coffee",
    key: "ush9rz7o",
    name: "Monalisa Coffee",
    categories: ["sweets"],
    address: "東京都世田谷区北沢2-34-8付近 2F",
    lat: null, lng: null,
    photo: "monalisa-coffee.jpg", credit: "Lemon8",
    desc: {
      en: "A tiny 2nd-floor café with 2 counter seats and 2 tables, known for its firm pudding.",
      zh: "只有2个吧台座位和2张桌子的二楼小咖啡馆，以口感结实的布丁闻名。",
      ko: "카운터 2석과 테이블 2개뿐인 2층의 작은 카페로, 단단한 푸딩으로 유명합니다.",
      ja: "カウンター2席とテーブル2つだけの、ビル2階の小さなカフェ。固めのプリンが評判。"
    }
  },
  {
    id: "mardi-gras",
    key: "n96g3t0u",
    name: "Café Mardi Gras",
    categories: ["sweets", "kissa"],
    address: "東京都世田谷区北沢2-31-1 サン・ローザ1F",
    lat: null, lng: null,
    photo: "mardi-gras.jpg", credit: "さんたつ by 散歩の達人",
    desc: {
      en: "A café of almost 40 years at the end of a back alley. Known for its pudding and shortcake.",
      zh: "位于小巷深处、经营近40年的咖啡馆。招牌是布丁和草莓蛋糕。",
      ko: "골목 끝에 있는 40년 가까이 된 카페입니다. 푸딩과 쇼트케이크가 명물입니다.",
      ja: "路地裏の奥にある、40年近く続くカフェ。プリンとショートケーキが名物。"
    }
  },
  {
    id: "anthrop",
    key: "8kyc663v",
    name: "anthrop. Espresso & Comfort",
    categories: ["sweets", "cafe"],
    address: "東京都世田谷区北沢2-11-17",
    lat: null, lng: null,
    photo: "anthrop.jpg", credit: "aumo",
    desc: {
      en: "A café known for its homemade baked sweets.",
      zh: "以自制烘焙点心闻名的咖啡馆。",
      ko: "직접 구운 과자로 알려진 카페입니다.",
      ja: "自家製の焼き菓子で知られるカフェ。"
    }
  },
  {
    id: "latte",
    key: "ag4kn3lk",
    name: "Latte",
    categories: ["sweets"],
    address: "世田谷代田駅 西口から徒歩1分",
    lat: null, lng: null,
    desc: {
      en: "A hidden café 1 minute from the West Exit of Setagaya-Daita Station, with a firm, chewy pudding.",
      zh: "距世田谷代田站西口1分钟的隐秘咖啡馆，布丁口感结实有嚼劲。",
      ko: "세타가야다이타역 서쪽 출구에서 1분 거리의 숨은 카페로, 쫀득하고 단단한 푸딩이 있습니다.",
      ja: "世田谷代田駅西口から1分の隠れ家カフェ。むっちり固めのプリン。"
    }
  },
  {
    id: "sweet-twist",
    key: "h9bhmfv0",
    name: "SWEET TWIST",
    categories: ["sweets"],
    address: "下北沢駅から徒歩5分",
    lat: null, lng: null,
    desc: {
      en: "Additive-free gelato with flavors that change by season. Closed on Wednesdays.",
      zh: "无添加的意式冰淇淋，口味随季节变化。周三休息。",
      ko: "무첨가 젤라토로, 맛은 계절마다 바뀝니다. 수요일 휴무.",
      ja: "無添加のジェラート。フレーバーは季節で変わる。水曜定休。"
    }
  },

  /* ---- カレー ---- */
  {
    id: "anjali",
    key: "jriwafja",
    name: "Anjali",
    categories: ["curry"],
    address: "東京都世田谷区北沢2-15-11 センヤビルB1F",
    lat: null, lng: null,
    photo: "anjali.jpg", credit: "食べログまとめ",
    desc: {
      en: "A tiny half-basement curry shop, a few steps down in a back-alley building. Only a counter and small tables.",
      zh: "位于小巷大楼里、走下几级台阶的半地下小咖喱店。只有吧台和小桌。",
      ko: "골목 건물에서 계단을 조금 내려간 반지하의 작은 카레 가게입니다. 카운터와 작은 테이블뿐입니다.",
      ja: "路地裏のビルの階段を少し下りた半地下の小さなカレー店。カウンターと小さなテーブルだけ。"
    }
  },
  {
    id: "rabukyo",
    key: "te43ir1o",
    name: "Rabukyo",
    categories: ["curry"],
    address: "東京都世田谷区北沢2-32-7 青柳ビル3F",
    lat: null, lng: null,
    desc: {
      en: "A curry shop on the 3rd floor of a building.",
      zh: "位于大楼3楼的咖喱店。",
      ko: "건물 3층에 있는 카레 가게입니다.",
      ja: "ビルの3階にあるカレー店。"
    }
  },
  {
    id: "kappa-ism",
    key: "584e6bym",
    name: "Kappa ism",
    categories: ["curry"],
    address: "下北沢の路地裏 3F",
    lat: null, lng: null,
    desc: {
      en: "Found in a back alley: climb a spiral staircase to the 3rd floor.",
      zh: "藏在小巷里，要爬螺旋楼梯到3楼。",
      ko: "골목 안에 있으며, 나선 계단을 올라 3층에 있습니다.",
      ja: "路地裏で、らせん階段を上った3階にある。"
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
    id: "kyu-yamu-tei",
    key: "kkmvw0ru",
    name: "Kyu Yamu-tei Shimokita-so",
    categories: ["curry"],
    address: "東京都世田谷区代沢5-29-9 ナイスビル1F",
    lat: null, lng: null,
    photo: "kyu-yamu-tei.jpg", credit: "食べログまとめ",
    desc: {
      en: "Three kinds of keema curry that change every month. 8 minutes from the station.",
      zh: "每月更换的3种肉末咖喱。距车站8分钟。",
      ko: "매달 바뀌는 3종류의 키마 카레. 역에서 8분 거리입니다.",
      ja: "月替わりで3種類のキーマカレー。駅から歩いて8分。"
    }
  },

  /* ---- ライブ・レコードバー ---- */
  {
    id: "mona-records",
    key: "wzm3zkia",
    name: "mona records",
    categories: ["music"],
    address: "東京都世田谷区北沢2-13-5 伊奈ビル3F",
    lat: null, lng: null,
    photo: "mona-records.jpg", credit: "mona records",
    desc: {
      en: "A live space, record shop and café on a 3rd floor, 2 minutes from the station.",
      zh: "位于三楼，集现场演出、唱片店和咖啡馆于一体，距车站2分钟。",
      ko: "3층에 있는 라이브 공간 겸 레코드 가게 겸 카페로, 역에서 2분입니다.",
      ja: "ビル3階のライブスペース兼レコード店兼食堂。駅から歩いて2分。"
    }
  },
  {
    id: "little-soul-cafe",
    key: "sbznoqfx",
    name: "Little Soul Cafe",
    categories: ["music", "bars"],
    address: "東京都世田谷区北沢3-20-2 大成ビル2F",
    lat: null, lng: null,
    photo: "little-soul-cafe.jpg", credit: "Time Out Tokyo",
    desc: {
      en: "A record bar on a 2nd floor, open for about 20 years. ¥500 cover charge, cash only.",
      zh: "位于二楼、营业约20年的唱片酒吧。每人收500日元座位费，只收现金。",
      ko: "2층에 있는 약 20년 된 레코드 바입니다. 자릿세 500엔, 현금만 가능.",
      ja: "ビル2階、20年続くレコードバー。チャージ500円、現金のみ。"
    }
  },
  {
    id: "daisy-bar",
    key: "5mtfjnyi",
    name: "Shimokitazawa Daisy Bar",
    categories: ["music"],
    address: "東京都世田谷区北沢2-2-3 エルサント北沢B1",
    lat: null, lng: null,
    desc: {
      en: "A basement live venue for about 140 people, 4 minutes from the station.",
      zh: "可容纳约140人的地下现场音乐场馆，距车站4分钟。",
      ko: "약 140명이 들어가는 지하 라이브 공연장으로, 역에서 4분입니다.",
      ja: "キャパ約140人の地下のライブハウス。駅から歩いて4分。"
    }
  },
  {
    id: "basement-bar",
    key: "4k2pkjmp",
    name: "BASEMENT BAR",
    categories: ["music"],
    address: "東京都世田谷区代沢5-18-1 カラバッシュビルB1F",
    lat: null, lng: null,
    desc: {
      en: "A basement venue for many kinds of music, for about 250 people.",
      zh: "演出各种类型音乐的地下场馆，可容纳约250人。",
      ko: "다양한 장르의 음악을 다루는 지하 공연장으로, 약 250명을 수용합니다.",
      ja: "さまざまなジャンルの音楽を扱う地下のライブハウス。キャパ250人。"
    }
  },
  {
    id: "garden",
    key: "hptexsco",
    name: "Shimokitazawa GARDEN",
    categories: ["music"],
    address: "東京都世田谷区北沢2-4-5 mosia B1F",
    lat: null, lng: null,
    desc: {
      en: "A basement live venue.",
      zh: "地下的现场音乐场馆。",
      ko: "지하에 있는 라이브 공연장입니다.",
      ja: "地下のライブハウス。"
    }
  },

  /* ---- 小劇場 ---- */
  {
    id: "theater-rakuen",
    key: "fr6fmx7a",
    name: "Theater Rakuen",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-10-18 藤和下北沢ハイタウンB棟B1F",
    lat: null, lng: null,
    desc: {
      en: "A small basement theater.",
      zh: "位于地下的小剧场。",
      ko: "지하에 있는 작은 극장입니다.",
      ja: "地下の小劇場。"
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
      en: "A small theater on the 3rd floor, on the same floor as Ekimae Theater.",
      zh: "位于三楼的小剧场，与站前剧场在同一层。",
      ko: "3층에 있는 작은 극장으로, 에키마에 극장과 같은 층입니다.",
      ja: "ビル3階の小劇場。駅前劇場と同じフロア。"
    }
  },
  {
    id: "geki-shogekijo",
    key: "gbco1gbl",
    name: "\"Geki\" Shogekijo",
    categories: ["theater", "cinema"],
    address: "東京都世田谷区北沢2-6-6",
    lat: null, lng: null,
    desc: {
      en: "A small theater opened in 1997.",
      zh: "1997年开幕的小剧场。",
      ko: "1997년에 문을 연 작은 극장입니다.",
      ja: "1997年開場の小劇場。"
    }
  },
  {
    id: "theater-711",
    key: "w9chst34",
    name: "Theater 711",
    categories: ["theater"],
    address: "東京都世田谷区北沢1-45-15",
    lat: null, lng: null,
    desc: {
      en: "A small theater right next to The Suzunari.",
      zh: "紧挨着铃奈里剧场的小剧场。",
      ko: "더 스즈나리 바로 옆에 있는 작은 극장입니다.",
      ja: "ザ・スズナリの隣にある小劇場。"
    }
  },
  {
    id: "shogekijo-b1",
    key: "rcgzflaq",
    name: "Shogekijo B1",
    categories: ["theater", "cinema"],
    address: "東京都世田谷区北沢2-8-18 北沢タウンホールB1",
    lat: null, lng: null,
    desc: {
      en: "A small theater in the basement of Kitazawa Town Hall.",
      zh: "位于北泽市民会馆地下的小剧场。",
      ko: "기타자와 타운홀 지하에 있는 작은 극장입니다.",
      ja: "北沢タウンホールの地下にある小劇場。"
    }
  },

  /* ---- 古本 ---- */
  {
    id: "furuhon-bibibi",
    key: "eb4omac6",
    name: "Furuhon Bibibi",
    categories: ["books"],
    address: "東京都世田谷区北沢1-40-8 土屋ビル1F",
    lat: null, lng: null,
    photo: "furuhon-bibibi.jpg", credit: "さんたつ by 散歩の達人",
    desc: {
      en: "A used bookstore with about 13,000 books, including many rare and strange ones.",
      zh: "约有13,000册藏书的旧书店，珍本和奇书很多。",
      ko: "약 13,000권을 갖춘 헌책방으로, 희귀하고 독특한 책이 많습니다.",
      ja: "約13,000冊をそろえる古書店。珍品・奇品が多い。"
    }
  },
  {
    id: "honkichi",
    key: "qeuv61u7",
    name: "Hon-kichi",
    categories: ["books"],
    address: "東京都世田谷区北沢2-7-10",
    lat: null, lng: null,
    photo: "honkichi.jpg", credit: "ほん吉",
    desc: {
      en: "A small used bookstore, 3 minutes from the Central Exit.",
      zh: "距中央口3分钟的小旧书店。",
      ko: "중앙 출구에서 3분 거리의 작은 헌책방입니다.",
      ja: "中央口から歩いて3分の小さな古本屋。"
    }
  },
  {
    id: "kosho-asu",
    key: "k12klf3u",
    name: "Kosho Asu",
    categories: ["books"],
    address: "東京都世田谷区北沢3-21-1 1F",
    lat: null, lng: null,
    photo: "kosho-asu.jpg", credit: "下北沢一番街商店街振興組合",
    desc: {
      en: "A used bookstore about 7 minutes from the North Exit.",
      zh: "距北口约7分钟的旧书店。",
      ko: "북쪽 출구에서 약 7분 거리의 헌책방입니다.",
      ja: "北口から歩いて約7分の古本屋。"
    }
  },
  {
    id: "clarice-books",
    key: "alm43wuj",
    name: "Clarice Books",
    categories: ["books"],
    address: "東京都世田谷区北沢3-26-2 2F",
    lat: null, lng: null,
    photo: "clarice-books.jpg", credit: "aumo",
    desc: {
      en: "Go up the stairs beside the small gallery HANA. Used books from philosophy to art, fashion and subculture.",
      zh: "从小画廊HANA旁边的楼梯上去。从哲学到美术、时尚、亚文化的旧书。",
      ko: "작은 갤러리 HANA 옆 계단을 올라가세요. 철학부터 미술, 패션, 서브컬처까지의 헌책.",
      ja: "1階の小さなギャラリー「HANA」脇の階段を上がる。哲学・思想から美術・ファッション・サブカルまでの古書店。"
    }
  },

  /* ---- アンティーク・手作り雑貨 ---- */
  {
    id: "tokyo-retro",
    key: "pm84co98",
    name: "Tokyo Retro a.m.a. store",
    categories: ["goods"],
    address: "東京都世田谷区北沢3-34-2",
    lat: null, lng: null,
    photo: "tokyo-retro.jpg", credit: "aumo",
    desc: {
      en: "Antique goods from Japan's Showa era.",
      zh: "经营日本昭和时代的古董杂货。",
      ko: "일본 쇼와 시대의 앤티크 잡화를 다룹니다.",
      ja: "昭和のアンティーク雑貨の店。"
    }
  },
  {
    id: "antique-life-jin",
    key: "ce5f6mzq",
    name: "Antique Life Jin",
    categories: ["goods"],
    address: "東京都世田谷区北沢2-30-8",
    lat: null, lng: null,
    photo: "antique-life-jin.jpg", credit: "aumo",
    desc: {
      en: "Vintage goods, about 3 minutes from the North Exit.",
      zh: "经营复古杂货，距北口约3分钟。",
      ko: "빈티지 잡화를 다루며, 북쪽 출구에서 약 3분입니다.",
      ja: "ヴィンテージ雑貨の店。北口から歩いて約3分。"
    }
  },
  {
    id: "sukonbu",
    key: "6cegalmh",
    name: "Sukonbu",
    categories: ["goods"],
    address: "ミカン下北 東洋百貨店別館",
    lat: null, lng: null,
    photo: "sukonbu.jpg", credit: "aumo",
    desc: {
      en: "Handmade, one-of-a-kind accessories and goods.",
      zh: "手工制作的独一无二的饰品和杂货。",
      ko: "하나뿐인 수제 액세서리와 잡화를 다룹니다.",
      ja: "一点もののアクセサリーやハンドメイド雑貨。"
    }
  },
  {
    id: "desk-labo",
    key: "6zcd516t",
    name: "DESK LABO",
    categories: ["goods"],
    address: "東京都世田谷区北沢3-19-20 reload 2F",
    lat: null, lng: null,
    desc: {
      en: "Goods and flowers on the 2nd floor of reload.",
      zh: "位于 reload 二楼的杂货和花店。",
      ko: "reload 2층에 있는 잡화·꽃 가게입니다.",
      ja: "reloadの2階にある雑貨と花の店。"
    }
  },
  {
    id: "sansato",
    key: "o8vpe9p0",
    name: "Sansato",
    categories: ["goods"],
    address: "東京都世田谷区代沢5-36-14",
    lat: null, lng: null,
    desc: {
      en: "A goods shop with a café in the same building. 5 minutes from the station.",
      zh: "同一栋楼里还有咖啡馆的杂货店，距车站5分钟。",
      ko: "같은 건물에 카페가 있는 잡화점으로, 역에서 5분 거리입니다.",
      ja: "一棟でカフェと買い物が楽しめる雑貨店。駅から歩いて5分。"
    }
  },

  /* ---- 隠れ家バー ---- */
  {
    id: "bar-cajica",
    key: "zgskwukt",
    name: "Bar cajica",
    categories: ["bars"],
    address: "東京都世田谷区代沢2-29-1 MART下北沢II 2F",
    lat: null, lng: null,
    desc: {
      en: "A hidden antique bar on a 2nd floor, with sofas and carefully chosen furniture, lights and glasses. 4 minutes from the station.",
      zh: "位于二楼的隐秘古董酒吧，有沙发座，家具、灯具和酒杯都很讲究。距车站4分钟。",
      ko: "2층에 있는 숨은 앤티크 바로, 소파석이 있고 가구·조명·잔까지 신경 썼습니다. 역에서 4분.",
      ja: "ビル2階の隠れ家アンティークバー。ソファー席があり、家具や照明、グラスにもこだわる。駅から歩いて4分。"
    }
  },
  {
    id: "bar-ad-2nd",
    key: "keq3vez4",
    name: "Bar ad. 2nd",
    categories: ["bars"],
    address: "東京都世田谷区北沢2-22-13 XAビル2F",
    lat: null, lng: null,
    desc: {
      en: "A whisky bar on a 2nd floor.",
      zh: "位于二楼、以威士忌为主的酒吧。",
      ko: "2층에 있는 위스키 중심의 바입니다.",
      ja: "ビル2階の、ウイスキー中心のバー。"
    }
  },
  {
    id: "bar-secondo-tabacchi",
    key: "gibdxnbe",
    name: "Bar secondo TABACCHI",
    categories: ["bars"],
    address: "東京都世田谷区代田6-1-23",
    lat: null, lng: null,
    desc: {
      en: "A bar inside an apartment building in a quiet residential area.",
      zh: "位于安静住宅区一栋公寓楼里的酒吧。",
      ko: "조용한 주택가의 맨션 안에 있는 바입니다.",
      ja: "住宅街のマンションの中にあるバー。"
    }
  },
  {
    id: "barnitas",
    key: "jy4kcd0i",
    name: "barnitas",
    categories: ["bars"],
    address: "東京都世田谷区北沢2-33-6 飯嶋ビル2F",
    lat: null, lng: null,
    desc: {
      en: "A small counter bar on a 2nd floor, playing music from the 70s and 80s.",
      zh: "位于二楼、以吧台为主的小酒吧，播放70至80年代的音乐。",
      ko: "2층에 있는 카운터 중심의 작은 바로, 70~80년대 음악이 흐릅니다.",
      ja: "ビル2階、カウンター中心の小さなバー。70〜80年代の音楽が流れる。"
    }
  },
  {
    id: "bar-ensamble",
    key: "sf6tq65p",
    name: "BAR ENSAMBLE",
    categories: ["bars"],
    address: "東京都世田谷区北沢2丁目 大久ビル2D",
    lat: null, lng: null,
    desc: {
      en: "A tiny bar in room 2D of an old building. Little is written about it anywhere.",
      zh: "位于一栋老楼2D室的小酒吧，几乎查不到相关信息。",
      ko: "낡은 건물 2D호에 있는 아주 작은 바로, 알려진 정보가 거의 없습니다.",
      ja: "大久ビル2Dにある小さなバー。事前の情報はほとんどない。"
    }
  },

  /* ---- ギター・楽器 ---- */
  {
    id: "underneath",
    key: "3l20zvd7",
    name: "UNDERNEATH",
    categories: ["instruments"],
    address: "東京都世田谷区北沢2-7-10 上原ビル2F",
    lat: null, lng: null,
    desc: {
      en: "A 2nd-floor shop for used and vintage guitars, near SHELTER and Kitazawa Town Hall. Also does adjustments and repairs.",
      zh: "位于二楼的二手及复古吉他店，靠近 SHELTER 和北泽市民会馆。也做调整和维修。",
      ko: "SHELTER와 기타자와 타운홀 근처 2층에 있는 중고·빈티지 기타 가게입니다. 조정과 수리도 합니다.",
      ja: "SHELTERや北沢タウンホール近く、ビル2階の中古・ヴィンテージギター店。調整やリペアもする。"
    }
  },
  {
    id: "forte-gakki",
    key: "bv1mp53b",
    name: "Forte Gakki",
    categories: ["instruments"],
    address: "東京都世田谷区代沢5-6-1",
    lat: null, lng: null,
    desc: {
      en: "A specialist shop for classical and flamenco guitars, including used ones.",
      zh: "古典吉他和弗拉门戈吉他的专门店，也有二手琴。",
      ko: "클래식 기타와 플라멩코 기타 전문점으로, 중고도 다룹니다.",
      ja: "クラシックギターとフラメンコギターの専門店。中古も扱う。"
    }
  },
  {
    id: "rojiura-gakkiten",
    key: "hr0whpro",
    name: "Shimokitazawa Rojiura Gakkiten",
    categories: ["instruments"],
    address: "東京都世田谷区北沢2-12-10 サウスサイドビル1F",
    lat: null, lng: null,
    desc: {
      en: "Its name means \"back-alley instrument shop\".",
      zh: "店名的意思是“小巷里的乐器店”。",
      ko: "가게 이름이 '골목 안 악기점'이라는 뜻입니다.",
      ja: "その名のとおり、路地裏の楽器店。"
    }
  },
  {
    id: "lost-boys",
    key: "md7494sa",
    name: "LOST BOYS",
    categories: ["instruments"],
    address: "東京都世田谷区北沢3-20-18",
    lat: null, lng: null,
    desc: {
      en: "A small guitar workshop.",
      zh: "小型吉他工坊。",
      ko: "작은 기타 공방입니다.",
      ja: "小さなギター工房。"
    }
  },
  {
    id: "little-by-tech",
    key: "zu3knejv",
    name: "LITTLE BY TECH.",
    categories: ["instruments"],
    address: "東京都世田谷区北沢2-12-2 レインフォレストビル2F",
    lat: null, lng: null,
    desc: {
      en: "Guitar and bass repairs and small parts, on a 2nd floor right by the station.",
      zh: "位于车站旁二楼，做吉他和贝斯的维修，也卖小配件。",
      ko: "역 바로 옆 2층에서 기타·베이스 수리와 소품 판매를 합니다.",
      ja: "駅すぐのビル2階。ギター・ベースのリペアと小物の販売。"
    }
  },

  /* ---- ミニシアター・お笑い ---- */
  {
    id: "tollywood",
    key: "ht2njd1o",
    name: "Shimokitazawa Tollywood",
    categories: ["cinema"],
    address: "東京都世田谷区代沢5-32-5 シェルポ下北沢2F",
    lat: null, lng: null,
    desc: {
      en: "A one-screen cinema on a 2nd floor, showing short films and work by young directors. 5 minutes from the station.",
      zh: "位于二楼、只有一块银幕的影院，主要放映短片和年轻导演的作品。距车站5分钟。",
      ko: "2층에 있는 스크린 1개짜리 영화관으로, 단편 영화와 젊은 감독의 작품을 주로 상영합니다. 역에서 5분.",
      ja: "ビル2階、スクリーン1つの映画館。短編や若手監督の作品を中心に上映。駅から歩いて5分。"
    }
  },
  {
    id: "k2-cinema",
    key: "79yt8hhu",
    name: "Shimokita-Ekimae-Cinema K2",
    categories: ["cinema"],
    address: "東京都世田谷区北沢2-21-22 tefu lounge 2F",
    lat: null, lng: null,
    desc: {
      en: "A small cinema that opened in 2022, on the 2nd floor of a building connected to the station.",
      zh: "2022年开业的小影院，位于与车站相连的大楼二楼。",
      ko: "2022년에 문을 연 작은 영화관으로, 역과 연결된 건물 2층에 있습니다.",
      ja: "2022年に開館したミニシアター。駅直結の建物の2階。"
    }
  },
  {
    id: "shimokita-zawazawa",
    key: "onq77kwe",
    name: "Shimokita ZAWAZAWA (Shimokita GRIP)",
    categories: ["cinema"],
    address: "東京都世田谷区北沢2-9-20 力十ビルB1",
    lat: null, lng: null,
    desc: {
      en: "A basement comedy venue with free stand-up shows by young comedians, Friday to Sunday. On weekdays it seats only about 20 people.",
      zh: "地下的喜剧场地，周五至周日有年轻艺人的免费演出。平日只能容纳约20人。",
      ko: "지하에 있는 코미디 공연장으로, 금~일요일에 젊은 개그맨들의 무료 공연이 열립니다. 평일에는 약 20명만 들어갑니다.",
      ja: "地下のお笑いライブの会場。金〜日は若手芸人の入場無料ライブ。平日は先着20名ほど。"
    }
  },

  /* ---- 小さなギャラリー ---- */
  {
    id: "gallery-kasutela",
    key: "miimnkjm",
    name: "gallery kasutela",
    categories: ["galleries"],
    address: "東京都世田谷区北沢3-34-3",
    lat: null, lng: null,
    desc: {
      en: "A tiny gallery of just 9 square meters, 7 minutes from the West Exit.",
      zh: "只有9平方米的小画廊，距西口7分钟。",
      ko: "겨우 9제곱미터의 아주 작은 갤러리로, 서쪽 출구에서 7분입니다.",
      ja: "広さわずか9㎡のギャラリー。西口から歩いて7分。"
    }
  },
  {
    id: "musashiya-garo",
    key: "1tkhdclg",
    name: "Musashiya Garo",
    categories: ["galleries"],
    address: "東京都世田谷区北沢2-32-8",
    lat: null, lng: null,
    desc: {
      en: "A calm gallery of about 29 square meters.",
      zh: "约29平方米、气氛沉稳的画廊。",
      ko: "약 29제곱미터의 차분한 분위기의 갤러리입니다.",
      ja: "約29㎡の、大人の雰囲気の画廊。"
    }
  },
  {
    id: "gallery-geki",
    key: "a8bjrtq4",
    name: "Gallery Geki",
    categories: ["galleries"],
    address: "東京都世田谷区北沢2-6-6",
    lat: null, lng: null,
    desc: {
      en: "A gallery inside the \"Geki\" Shogekijo theater, 3 minutes from the South Exit.",
      zh: "位于“剧”小剧场内的画廊，距南口3分钟。",
      ko: "'게키' 소극장 안에 있는 갤러리로, 남쪽 출구에서 3분입니다.",
      ja: "「劇」小劇場の中にあるギャラリー。南口から歩いて3分。"
    }
  },
  {
    id: "shimokitazawa-arts",
    key: "rdroyy2m",
    name: "Shimokitazawa Arts",
    categories: ["galleries"],
    address: "東京都世田谷区北沢1-40-9 1F",
    lat: null, lng: null,
    desc: {
      en: "Opened in 2022. A new solo show by a young contemporary artist about once a month.",
      zh: "2022年开业，大约每月举办一次年轻当代艺术家的个展。",
      ko: "2022년에 문을 열었으며, 거의 매달 젊은 현대 미술가의 개인전을 엽니다.",
      ja: "2022年開廊。月に1回ほど、若手現代アーティストの個展を開く。"
    }
  },
  {
    id: "gallery-hana",
    key: "k4x1w7gb",
    name: "Gallery HANA Shimokitazawa",
    categories: ["galleries"],
    address: "東京都世田谷区北沢3-26-2",
    lat: null, lng: null,
    desc: {
      en: "A small gallery on the ground floor; Clarice Books is up the stairs beside it. 11:00–19:00.",
      zh: "一楼的小画廊，旁边楼梯上去就是 Clarice Books。11:00–19:00。",
      ko: "1층의 작은 갤러리로, 옆 계단을 올라가면 Clarice Books가 있습니다. 11:00–19:00.",
      ja: "1階の小さなギャラリー。脇の階段を上がるとクラリスブックス。11:00〜19:00。"
    }
  }
];
