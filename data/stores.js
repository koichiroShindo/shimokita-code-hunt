/*
 * お店の一覧。お店を足すときは { ... }, のかたまりを1つコピーして書き換える。
 * 選ぶ基準：観光客がほとんど来ない、路地裏・2階以上・地下・建物の一室にある個人店。チェーン店や大型店は入れない。
 *
 *   id         : 半角英数字の名前（QRコードのURLに入る。あとから変えない）
 *   key        : お店のQRコード用の合言葉（半角英数字8文字ほど。お店ごとに別にする）
 *   name       : 店名
 *   categories : 当てはまる種類。古着は系統で分ける（amekaji / y2kstreet / sports / euro / mode / graphic / remake）。
 *                そのほか（records / instruments / kissa / cafe / sweets / curry / bars / music / theater / cinema / books / galleries / goods）
 *   address    : 住所（地図のリンクにも使う）
 *   lat, lng   : お店の位置。Googleマップでお店を右クリックすると出る数字を入れる。null のあいだは位置を確かめない
 *   photo      : お店の写真（images/shops/ に入れたファイル名）
 *   desc       : 紹介文（en / zh / ko / ja）
 *
 * 紹介文はお店の公式情報と公開されている記事をもとに書いた。営業時間などは変わるので、ときどき見直す。
 */
window.STORES = [
  /* ---- ファッション（古着） ---- */
  {
    id: "lomad-loman",
    key: "82vvfnwe",
    name: "Lomad Loman",
    categories: ["amekaji", "y2kstreet"],
    address: "東京都世田谷区北沢2-35-15 下北沢マンション2F 66号室",
    lat: null, lng: null,
    photo: "lomad-loman.jpg",
    desc: {
      en: "A vintage shop built around 1970s–80s American clothing chosen by the owner, with a few British-rock-flavored pieces, sneakers and mountain boots. Opened in May 2021, it aims for clothes that are easy to wear but make you look different, so expect unusual colors and one-off designs. It is room 66 on the 2nd floor of Shimokitazawa Mansion (Kitazawa 2-35-15), at the back of the corridor. Closed irregularly.",
      zh: "以店主亲自挑选的1970〜80年代美国古着为主的古着店，也有少量带英国摇滚气息的衣服，以及运动鞋和登山靴。2021年5月开业，方针是“好穿，但穿上和别人不一样”的古着，因此少见的颜色和像孤品一样的设计很多。店在下北泽公寓（北泽2-35-15）2楼的66号室，位于走廊深处。不定期休息。",
      ko: "점주가 직접 고른 1970〜80년대 미국 구제를 중심으로, 영국 록 분위기가 나는 옷과 스니커즈, 마운틴 부츠도 갖춘 구제숍. 2021년 5월에 문을 열었고 '입기 편하지만 남과 달라 보이는 구제'를 방침으로 해서, 보기 드문 색과 단품 같은 디자인이 많다. 시모키타자와 맨션(기타자와 2-35-15) 2층 66호실로, 복도 안쪽에 있다. 휴무일은 부정기.",
      ja: "店主が自分の目で選んだ1970〜80年代のアメリカ古着を中心に、英国ロックの気配がある服やスニーカー、マウンテンブーツも並ぶ古着店。「着やすいのに人と違って見える古着」を方針に2021年5月に開店し、見慣れない色や一点物のようなデザインが多い。店は下北沢マンション（北沢2-35-15）の2階66号室で、廊下の奥にある。不定休。"
    }
  },
  {
    id: "step-ahead",
    key: "vp30quds",
    name: "STEP AHEAD (Shimokitazawa main store)",
    categories: ["amekaji", "y2kstreet"],
    address: "東京都世田谷区北沢2-30-10 浜辺ビル101",
    lat: null, lng: null,
    photo: "step-ahead.jpg",
    desc: {
      en: "A vintage shop for 1970s–90s American street clothing and the main store of a chain with four shops in Shimokitazawa. ¥1,000 T-shirts hang on the same floor as ¥30,000 vintage pieces. The Hamabe Building holds several vintage shops, so look for room 101 and the neon sign. Open 12:00–20:00 weekdays, 11:00–20:00 weekends. Old US sizing runs large: a vintage L is close to today's XL.",
      zh: "经营1970〜90年代美式街头vintage的古着店，是在下北泽有4家店的系列的总店。1,000日元的T恤和30,000日元的vintage摆在同一个卖场。浜边大楼里有好几家古着店，请认准“101号室”和霓虹招牌。平日12:00〜20:00，周末11:00〜20:00。当年的美国尺码偏大，那时的L接近现在的XL。",
      ko: "1970〜90년대 아메리칸 스트리트 빈티지를 다루는 구제숍으로, 시모키타자와에 4개 매장이 있는 계열의 본점이다. 1,000엔짜리 티셔츠와 30,000엔짜리 빈티지가 같은 매장에 놓여 있다. 하마베빌딩에는 구제숍이 여러 곳 있으니 '101호'와 네온 간판을 찾을 것. 평일 12:00〜20:00, 주말 11:00〜20:00. 당시 미국 사이즈는 커서 그때의 L이 지금의 XL에 가깝다.",
      ja: "1970〜90年代のアメリカン・ストリート系ヴィンテージを扱う古着店で、下北沢に4店舗ある系列の本店。1,000円のTシャツと30,000円のヴィンテージが同じ売場に並ぶ。浜辺ビルには古着店が複数入っているので、「101号室」とネオン看板を目印に探す。平日12〜20時、土日11〜20時。当時のUS規格は大きめで、Lが今のXLに近い。"
    }
  },
  {
    id: "mwc",
    key: "1h2wy343",
    name: "MWC",
    categories: ["amekaji"],
    address: "東京都世田谷区代沢5-30-3 1F",
    lat: null, lng: null,
    photo: "mwc.jpg",
    desc: {
      en: "A vintage shop for 1980s–90s American clothing, with sunglasses and watches too. The owner comes from the dry-cleaning trade, so you can ask about care, repairs and hem alterations. It is on the ground floor of Daizawa 5-30-3; look for the rabbit figure out front. Open 13:00–20:00, every day.",
      zh: "经营1980〜90年代美国古着的店，也有太阳镜和手表。店主出身洗衣行业，可以咨询衣物保养、修补和改裤长。位于代泽5-30-3的1楼，店门口的兔子玩偶是标志。13:00〜20:00，无休。",
      ko: "1980〜90년대 미국 구제에 선글라스와 시계도 갖춘 구제숍. 점주가 세탁업 출신이라 옷 관리, 수선, 기장 수선을 상담할 수 있다. 다이자와 5-30-3 1층으로, 가게 앞 토끼 인형이 표시다. 13:00〜20:00, 연중무휴.",
      ja: "1980〜90年代のアメリカ古着に、サングラスや時計も並ぶ古着店。店主がクリーニング業の出身で、服の手入れや修理、丈直しの相談ができる。代沢5-30-3の1階で、店先のウサギの人形が目印。13〜20時、定休日なし。"
    }
  },
  {
    id: "damagedone",
    key: "c890oxs0",
    name: "DAMAGEDONE",
    categories: ["amekaji"],
    address: "東京都世田谷区北沢2-30-10",
    lat: null, lng: null,
    photo: "damagedone.jpg",
    desc: {
      en: "An American-casual shop mixing vintage, deadstock and some new select items. Stock is bought directly in the US and arrives every week, including sizes XL and up. The interior is clean and urban, with wide gaps between the racks. It is at Kitazawa 2-30-10, in the same building as STEP AHEAD. Open 12:00–20:30, every day.",
      zh: "经营美式休闲古着和deadstock，也有部分新品select的店。在美国直接采购，每周到货，也有XL以上的尺码。内装偏都市感，货架之间很宽。和STEP AHEAD在同一栋楼（北泽2-30-10）。12:00〜20:30，无休。",
      ko: "아메카지 구제와 데드스톡에 새 셀렉트 상품도 갖춘 가게. 미국에서 직접 사들여 매주 입고되며, XL 이상 사이즈도 들어온다. 인테리어는 도회적이고 선반 사이가 넓다. STEP AHEAD와 같은 기타자와 2-30-10 건물에 있다. 12:00〜20:30, 연중무휴.",
      ja: "アメカジ古着とデッドストックに、新品のセレクト品も置く店。アメリカで直接買い付けた品が毎週入荷し、XL以上のサイズも入る。内装は都会的で、棚と棚の間が広い。STEP AHEADと同じ北沢2-30-10の建物に入っている。12〜20時30分、定休日なし。"
    }
  },
  {
    id: "spike",
    key: "feu5u0in",
    name: "SPiKe",
    categories: ["graphic", "amekaji"],
    address: "東京都世田谷区北沢2-35-15 下北沢マンション1F 63号",
    lat: null, lng: null,
    photo: "spike.jpg",
    desc: {
      en: "A vintage shop covering the 1930s–90s: vintage tees, flannel shirts and military. Its sister shop SyuNa by SPiKe (Kitazawa 2-31-9) carries music, film and art tees. It trades from room 63 on the ground floor of an apartment block, Shimokitazawa Mansion (Kitazawa 2-35-15); the street number alone won't lead you to the door, so note the room number. Open 12:00–20:30 weekdays, 11:00–20:30 weekends and holidays. Pieces from the 1930s–60s run small (S–M).",
      zh: "经营1930〜90年代vintage的古着店，vintage T恤、法兰绒衬衫和军装齐全。同系列的SyuNa by SPiKe（北泽2-31-9）专营音乐、电影和艺术T恤。店开在公寓楼“下北泽公寓”1楼的63号室，只看门牌号找不到入口，请记下房号。平日12:00〜20:30，周末及节假日11:00〜20:30。30〜60年代的衣服偏小，多为S、M码。",
      ko: "1930〜90년대 빈티지를 다루는 구제숍으로, 빈티지 티셔츠, 플란넬 셔츠, 밀리터리를 갖췄다. 계열점 SyuNa by SPiKe(기타자와 2-31-9)는 음악·영화·아트 티셔츠를 다룬다. 공동주택 '시모키타자와 맨션' 1층 63호에서 영업해서 번지만으로는 입구를 찾기 어려우니 호수를 메모해 갈 것. 평일 12:00〜20:30, 주말·공휴일 11:00〜20:30. 30〜60년대 옷은 S·M으로 작은 편.",
      ja: "1930〜90年代のヴィンテージを扱う古着店で、ヴィンテージTシャツ、ネルシャツ、ミリタリーがそろう。系列店のSyuNa by SPiKe（北沢2-31-9）では音楽・映画・アートのTシャツを扱う。集合住宅「下北沢マンション」1階の63号室で営業していて、番地だけでは入口が分からないので号数を控えて行く。平日12〜20時30分、土日祝11〜20時30分。30〜60年代の服はS・Mの小さめが多い。"
    }
  },
  {
    id: "kimama",
    key: "kthaz9mb",
    name: "KIMAMA",
    categories: ["sports"],
    address: "東京都世田谷区北沢2-30-6 UCビル2F",
    lat: null, lng: null,
    photo: "kimama.jpg",
    desc: {
      en: "A small vintage shop for sportswear: football shirts and 1980s–90s game shirts. The Magico hair-salon group opened it on 29 April 2021, and the manager buys pieces one at a time; prices run about ¥3,000–45,000. It is on the 2nd floor of the UC Building, the one with Starbucks, and you can't see in from the street. About 2 minutes from the West Exit. Closed Wednesdays. Game shirts run short, so try one size up.",
      zh: "以足球球衣和1980〜90年代比赛衫为主的运动系古着小店。美发沙龙Magico集团于2021年4月29日开设，店长逐件挑选进货，价格约3,000〜45,000日元。位于有星巴克的UC大楼2楼，从街上看不到店内，容易走过头。从西口步行约2分钟。周三休息。比赛衫衣长偏短，可以试大一号。",
      ko: "축구 유니폼과 1980〜90년대 게임셔츠 등 스포츠 구제를 중심으로 한 작은 가게. 미용실 마지코 그룹이 2021년 4월 29일에 열었고, 점장이 한 점씩 골라 들여온다. 가격은 약 3,000〜45,000엔. 스타벅스가 있는 UC빌딩 2층으로, 길에서 가게 안이 보이지 않아 지나치기 쉽다. 서쪽 출구에서 도보 약 2분. 수요일 휴무. 게임셔츠는 기장이 짧은 편이라 한 사이즈 크게 입어 볼 것.",
      ja: "サッカーユニフォームや1980〜90年代のゲームシャツなど、スポーツ古着を中心にした小さな古着店。美容室のマジコグループが2021年4月29日に開き、店長が一点ずつ選んで仕入れる。価格は3,000〜45,000円ほど。スターバックスが入るUCビルの2階で、路面から店内が見えず通り過ぎやすい。西口から徒歩約2分、水曜定休。ゲームシャツは着丈が短めなので、ワンサイズ上も試すとよい。"
    }
  },
  {
    id: "iot-reverse",
    key: "lf90n8s8",
    name: "iot reverse (Shimokitazawa)",
    categories: ["sports", "y2kstreet"],
    address: "東京都世田谷区北沢2-13-14 1F",
    lat: null, lng: null,
    photo: "iot-reverse.jpg",
    desc: {
      en: "A vintage shop mixing sportswear, tech, mode and American casual, with plenty of nylon and track jackets. Its sister shops are iot Shimokitazawa (Kitazawa 2-33-3) and iot replay. It is on the ground floor of Kitazawa 2-13-14; look for the white sign. Open 12:00–22:00, late for a Shimokitazawa vintage shop.",
      zh: "经营运动、tech、mode和美式休闲古着的店，尼龙夹克和运动夹克很多。同系列还有iot下北泽店（北泽2-33-3）和iot replay。位于北泽2-13-14的1楼，白色招牌是标志。营业时间12:00〜22:00，在下北泽的古着店里算开得晚。",
      ko: "스포츠, 테크, 모드, 아메카지 구제를 다루는 가게로, 나일론 재킷과 트랙 재킷이 많다. 계열점으로 iot 시모키타자와점(기타자와 2-33-3)과 iot replay가 있다. 기타자와 2-13-14 1층으로, 흰 간판이 표시다. 영업은 12:00〜22:00으로, 시모키타자와 구제숍 중에서는 늦게까지 연다.",
      ja: "スポーツ、テック、モード、アメカジの古着を扱う店で、ナイロンジャケットやトラックジャケットが多い。系列に iot 下北沢店（北沢2-33-3）と iot replay がある。北沢2-13-14の1階で、白い看板が目印。営業は12〜22時で、下北沢の古着店では遅くまで開いている。"
    }
  },
  {
    id: "add-c-vintage",
    key: "14pk4moj",
    name: "add (C) Vintage",
    categories: ["y2kstreet", "mode", "remake"],
    address: "東京都世田谷区北沢3-26-3 1F",
    lat: null, lng: null,
    photo: "add-c-vintage.jpg",
    desc: {
      en: "A men's vintage shop for vintage, Y2K and mode, with many one-offs that have a remade feel. Prices start around ¥10,000, on the higher end for Urakita, the back streets north of the station. It is on the ground floor almost opposite NEW YORK JOE EXCHANGE (Kitazawa 3-26-3); look for the blue neon. Open 12:00–20:00. The Y2K pieces lean oversized.",
      zh: "经营男装vintage、Y2K和mode系的古着店，带改造感的孤品很多。价格从10,000日元起，在车站北侧后街（裏北）的古着店里属于偏高的。位于NEW YORK JOE EXCHANGE几乎正对面的1楼，蓝色霓虹店面是标志。12:00〜20:00。Y2K的衣服偏宽松。",
      ko: "남성 빈티지, Y2K, 모드 계열을 다루는 구제숍으로, 리메이크 느낌의 단품이 많다. 가격은 10,000엔부터로, 역 북쪽 뒷골목(우라키타) 구제숍 중에서는 높은 편. NEW YORK JOE EXCHANGE 거의 맞은편 1층으로, 파란 네온 가게 앞이 표시다. 12:00〜20:00. Y2K 옷은 오버사이즈 쪽이다.",
      ja: "メンズのヴィンテージ、Y2K、モード系を扱う古着店で、リメイク感のある一点物が多い。価格は10,000円からで、裏北の古着店では高めの価格帯。NEW YORK JOE EXCHANGEのほぼ向かいの1階にあり、青いネオンの店先が目印。12〜20時。Y2Kの服はオーバーサイズ寄り。"
    }
  },
  {
    id: "kroneko",
    key: "fbm1lp4o",
    name: "kroneko used store",
    categories: ["euro", "mode"],
    address: "東京都世田谷区代沢5-28-12 藤田ビル1C",
    lat: null, lng: null,
    photo: "kroneko.jpg",
    desc: {
      en: "A vintage shop for men's 1980s–90s regular clothing, vintage and military, with slim European tailored jackets and coats among the racks. Opened on 8 April 2023, it stocks trousers in a wide size range: sweatpants, denim and slacks. Find it in unit 1C of the Fujita Building (Daizawa 5-28-12), about 4 minutes' walk from the station. Open 13:00–20:00 and closed irregularly. European cuts are slim: fit the shoulders first, then check the length.",
      zh: "经营1980〜90年代男装常规古着、vintage和军装的古着店，也有欧洲的修身西装外套和大衣。2023年4月8日开业，运动裤、牛仔裤、西裤等裤装尺码齐全。位于代泽5-28-12的藤田大楼1C，从车站步行约4分钟。营业时间13:00〜20:00，不定期休息。欧洲尺码偏瘦，先按肩宽选，再看衣长。",
      ko: "1980〜90년대 남성 레귤러 구제와 빈티지, 밀리터리를 다루는 구제숍으로, 유럽의 슬림한 테일러드 재킷과 코트도 있다. 2023년 4월 8일에 문을 열었고, 스웨트팬츠·데님·슬랙스 등 바지를 폭넓은 사이즈로 갖췄다. 다이자와 5-28-12 후지타빌딩 1C로, 역에서 도보 약 4분. 영업은 13:00〜20:00, 휴무는 부정기. 유럽 사이즈는 슬림하니 어깨를 먼저 맞추고 기장을 볼 것.",
      ja: "80〜90年代のメンズのレギュラー古着、ヴィンテージ、ミリタリーを扱う古着店で、ヨーロッパ物の細身のテーラードやコートもそろう。2023年4月8日に開店し、スウェットパンツ・デニム・スラックスなどパンツ類を幅広いサイズで置く。代沢5-28-12の藤田ビル1Cで、駅から徒歩4分。13〜20時、不定休。ユーロ規格は細身なので、肩で合わせてから着丈を見る。"
    }
  },
  {
    id: "flocci",
    key: "ftzmbi6b",
    name: "floccinaucinihilipilification (flocci)",
    categories: ["mode", "euro"],
    address: "東京都世田谷区代田5-35-8",
    lat: null, lng: null,
    desc: {
      en: "A shop for 1970s–80s archive pieces by Japanese designers such as Comme des Garçons, Issey Miyake and Yohji Yamamoto plus DC-brand and no-brand European vintage. Its full name, floccinaucinihilipilification, is an English word meaning worthlessness; regulars just say flocci. After selling only on Instagram, it opened this store in 2018. It sits on a residential street about 3 minutes from the West Exit, away from the vintage-shop strips.",
      zh: "经营Comme des Garçons、Issey Miyake、Yohji Yamamoto等日本设计师1970〜80年代的archive单品、DC品牌和无品牌欧洲古着的店。正式店名floccinaucinihilipilification取自意为“无价值”的英语单词，熟客简称“flocci”。原本只在Instagram上销售，2018年开了实体店。位于西口步行约3分钟的住宅区，不在古着店集中的街上。",
      ko: "꼼데가르송, 이세이 미야케, 요지 야마모토 등 일본 디자이너의 1970〜80년대 아카이브와 DC브랜드, 노브랜드 유럽 구제를 다루는 가게. 정식 가게 이름 floccinaucinihilipilification은 '무가치'를 뜻하는 영어 단어에서 따왔고, 단골들은 '플록시'라고 줄여 부른다. 인스타그램으로만 팔다가 2018년에 실제 매장을 열었다. 서쪽 출구에서 도보 3분 정도의 주택가로, 구제숍이 모인 거리에서 벗어나 있다.",
      ja: "コム デ ギャルソン、イッセイ ミヤケ、ヨウジヤマモトなど日本のデザイナーの1970〜80年代のアーカイブ、DCブランド、ノーブランドのヨーロッパ古着を扱う店。店名floccinaucinihilipilificationは「無価値」を意味する英単語から取ったもので、客は「フロクシ」と呼ぶ。Instagramでの販売を経て2018年に実店舗を出した。古着店が並ぶ通りを外れた、西口から徒歩3分ほどの住宅街にある。"
    }
  },
  {
    id: "memento",
    key: "9l2an7ki",
    name: "memento (Shimokitazawa)",
    categories: ["euro", "mode"],
    address: "東京都世田谷区北沢2-15-1 たつみビル1F",
    lat: null, lng: null,
    photo: "memento.jpg",
    desc: {
      en: "An independent vintage shop, opened on 15 September 2023, that mixes American and European clothing, military and mode pieces. It is on the ground floor of the Tatsumi Building (Kitazawa 2-15-1); look for the black shopfront. Open 13:00–20:00 weekdays and 12:00–20:00 weekends, never in the morning. A US L and a European L measure differently, so ask whether you can try things on.",
      zh: "美国古着、欧洲古着、军装和mode系混在一起的个人古着店，2023年9月15日开业。位于巽大楼1楼，黑色的店面是标志。平日13:00〜20:00，周末12:00〜20:00，上午不营业。同样是L，美国货和欧洲货的实际尺寸不同，可以问问能否试穿。",
      ko: "미국 구제와 유럽 구제, 밀리터리, 모드 계열을 함께 다루는 개인 구제숍으로, 2023년 9월 15일에 문을 열었다. 다쓰미빌딩 1층으로, 검은 가게 앞이 표시다. 평일 13:00〜20:00, 주말 12:00〜20:00이며 오전에는 열지 않는다. 같은 L이라도 미국 것과 유럽 것은 실제 치수가 다르니 입어 볼 수 있는지 물어볼 것.",
      ja: "アメリカ古着とヨーロッパ古着、ミリタリー、モード系を一緒に扱う個人経営の古着店で、2023年9月15日に開店した。たつみビルの1階にあり、黒い店先が目印。平日13〜20時、土日12〜20時で、午前中は開いていない。同じLでもアメリカ物とヨーロッパ物で実寸が違うので、試着できるか聞いてみるとよい。"
    }
  },
  {
    id: "monk",
    key: "0ukcq6ag",
    name: "MONK",
    categories: ["euro"],
    address: "東京都世田谷区北沢2-26-25 エクセレントビルB102",
    lat: null, lng: null,
    photo: "monk.jpg",
    desc: {
      en: "A basement shop for classic American and European menswear, especially deep in European pieces. Those run slim and tend to suit Japanese S and M sizes. It is unit B102, below ground in the Excellent Building (Kitazawa 2-26-25); the entrance and sign are easy to miss, so note the unit number before you go. Open 14:00–20:00 weekdays, 13:00–20:00 weekends.",
      zh: "经营美国和欧洲男装经典古着的地下小店，欧洲货尤其多。欧洲货偏瘦，比较适合日本人的S、M码。位于Excellent大楼地下的B102，入口不好找，招牌也很难注意到，出发前记下房号。平日14:00〜20:00，周末13:00〜20:00。",
      ko: "미국과 유럽의 남성 클래식 구제를 다루는 지하 가게로, 특히 유럽 제품이 많다. 유럽 제품은 슬림해서 일본인의 S·M 사이즈에 잘 맞는다. 엑설런트빌딩 지하 B102로, 입구를 찾기 어렵고 간판도 눈에 잘 띄지 않으니 호수를 메모해 갈 것. 평일 14:00〜20:00, 주말 13:00〜20:00.",
      ja: "アメリカとヨーロッパのメンズ・クラシック古着を扱う地下の店で、特にヨーロッパ物の品ぞろえが厚い。ヨーロッパ物は細身で、日本人のS・Mサイズに合いやすい。エクセレントビル地下のB102にあり、入口が分かりにくく看板を探しても気づきにくいので、部屋番号を控えて行く。平日14〜20時、土日13〜20時。"
    }
  },
  {
    id: "ruby-tuesday",
    key: "l2v5hbft",
    name: "Ruby Tuesday",
    categories: ["euro"],
    address: "東京都世田谷区代沢5-36-15 井上ビル1C",
    lat: null, lng: null,
    photo: "ruby-tuesday.jpg",
    desc: {
      en: "A vintage shop for European clothing, centered on 1970s–80s shirts and jackets, with vintage jerseys as well. You can also talk to them about having made-to-order jeans produced. It is unit 1C of the Inoue Building (Daizawa 5-36-15), which also holds another vintage shop, so check the unit number and look for the brick shopfront. Open 12:00–21:00, later than most; closed irregularly.",
      zh: "经营欧洲vintage的古着店，以1970〜80年代的衬衫和夹克为主，也有vintage运动衫。还可以咨询定制牛仔裤。位于井上大楼1C，同一栋楼里还有别的古着店，请看好房号，红砖店面是标志。营业到21:00，不定期休息。",
      ko: "1970〜80년대 셔츠와 재킷을 중심으로 유럽 빈티지를 다루는 구제숍으로, 빈티지 저지도 있다. 맞춤 청바지 제작도 상담할 수 있다. 이노우에빌딩 1C로, 같은 건물에 다른 구제숍도 있으니 호수를 확인하고 벽돌 가게 앞을 찾을 것. 12:00〜21:00 영업, 휴무는 부정기.",
      ja: "1970〜80年代のシャツやジャケットを中心に、ヨーロッパのヴィンテージを扱う古着店で、ヴィンテージジャージもそろう。オーダーメイドジーンズの製作も相談できる。井上ビルの1Cで、同じ建物に別の古着店も入っているので部屋番号を確かめ、レンガの店先を目印に。12〜21時と遅くまで開いている。不定休。"
    }
  },
  {
    id: "iroha-tokyo",
    key: "hcoh582s",
    name: "iroha tokyo",
    categories: ["mode"],
    address: "東京都世田谷区北沢2-29-14 第11FMGビル2F",
    lat: null, lng: null,
    photo: "iroha-tokyo.jpg",
    desc: {
      en: "A second-floor shop for designer vintage and mode pieces in a clean, refined direction, strongest in coats, jackets and knitwear. It is on the 2nd floor of the 11th FMG Building (Kitazawa 2-29-14); look for the red-tiled staircase and the sign. Open 13:00–20:00, from 12:00 on weekends and holidays.",
      zh: "经营设计感古着、mode和vintage的二楼小店，走简洁利落路线，大衣、夹克和针织衫尤其多。位于第11FMG大楼2楼，红色瓷砖楼梯和招牌是标志。13:00〜20:00，周末及节假日12:00开门。",
      ko: "디자인 구제, 모드, 빈티지를 다루는 2층 가게로, 깔끔한 모드 계열이며 코트·재킷·니트가 특히 많다. 제11FMG빌딩 2층으로, 빨간 타일 계단과 간판이 표시다. 13:00〜20:00, 주말·공휴일은 12:00부터.",
      ja: "デザイン古着、モード、ヴィンテージを扱う2階の店で、きれいめ・モード寄りの品ぞろえ。特にコート、ジャケット、ニットが厚い。第11FMGビルの2階で、赤いタイルの階段と看板が目印。13〜20時（土日祝は12時から）。"
    }
  },
  {
    id: "lansdowne",
    key: "tons6is4",
    name: "lansdowne",
    categories: ["mode", "remake"],
    address: "東京都世田谷区北沢3-30-3 T・Tビル1F",
    lat: null, lng: null,
    photo: "lansdowne.jpg",
    desc: {
      en: "A vintage shop that crosses genres: designer pieces, brand-name used clothing and traditional ethnic garments. Sizing systems vary from piece to piece, so check each item's measurements. It is on the ground floor of the T·T Building (Kitazawa 3-30-3), toward the Higashi-Kitazawa end, with red walls inside. Open 12:00–20:00 weekdays, 12:00–19:00 weekends and holidays.",
      zh: "跨类别经营设计师古着、品牌古着乃至民族服装的古着店。尺码标准各不相同，请逐件确认实际尺寸。位于T·T大楼1楼，在下北泽靠东北泽的一侧，店内是红色的墙。平日12:00〜20:00，周末及节假日12:00〜19:00。",
      ko: "디자인 구제, 브랜드 구제, 민족의상까지 장르를 넘나드는 구제숍. 사이즈 규격이 제각각이라 한 벌씩 실제 치수를 확인할 것. T·T빌딩 1층으로, 시모키타자와에서도 히가시키타자와 쪽에 있으며 매장 안은 빨간 벽이다. 평일 12:00〜20:00, 주말·공휴일 12:00〜19:00.",
      ja: "デザイン古着、ブランド古着、民族衣装まで、ジャンルをまたいで扱う古着店。服の規格がばらばらなので、1着ずつ実寸を確かめて選ぶ。T・Tビルの1階で、下北沢の中でも東北沢寄りにあり、店内は赤い壁。平日12〜20時、土日祝12〜19時。"
    }
  },
  {
    id: "mania-furugi83",
    key: "4f20y6tr",
    name: "MANIA! by Furugi83",
    categories: ["graphic"],
    address: "東京都世田谷区北沢2-19-15 松下ビル2F",
    lat: null, lng: null,
    photo: "mania-furugi83.jpg",
    desc: {
      en: "A vintage shop devoted to character clothing, Disney above all. Online prices run about ¥5,500–21,800, and the character tees are mostly men's sizes around US L. It is on the 2nd floor of the Matsushita Building (Kitazawa 2-19-15), above DOSTYLE; look for the bee logo and the yellow FURUGI83 projecting sign. Open 12:00–20:00 Mon–Fri, 11:00–20:00 weekends and holidays.",
      zh: "专门经营迪士尼等卡通角色古着的店。网店价格约5,500〜21,800日元，角色T恤以男装尺码（美码L左右）为主。位于松下大楼2楼，1楼是DOSTYLE。认准蜜蜂标志和黄色的“FURUGI83”侧挂招牌。周一至周五12:00〜20:00，周末及节假日11:00〜20:00。",
      ko: "디즈니 등 캐릭터 구제를 모은 가게. 온라인 스토어 가격은 약 5,500〜21,800엔이고, 캐릭터 티셔츠는 남성 사이즈(US L 전후)가 중심이다. 마쓰시타빌딩 2층으로, 1층은 DOSTYLE. 벌 마크와 노란 'FURUGI83' 돌출 간판이 표시다. 월〜금 12:00〜20:00, 주말·공휴일 11:00〜20:00.",
      ja: "ディズニーなどキャラクター物の古着を集めた店。オンラインストアでの価格は5,500〜21,800円ほどで、キャラクターTシャツはメンズサイズ（US L前後）が中心。松下ビルの2階で、1階はDOSTYLE。蜂のマークと黄色い「FURUGI83」の袖看板が目印。月〜金12〜20時、土日祝11〜20時。"
    }
  },
  {
    id: "brief-brief",
    key: "2855f7dt",
    name: "Brief Brief",
    categories: ["remake"],
    address: "東京都世田谷区北沢3-31-5-1D",
    lat: null, lng: null,
    photo: "brief-brief.jpg",
    desc: {
      en: "A vintage shop of one-offs with strong personalities: patterned and animal-motif clothing, remade denim and small goods. It trades from unit 1D at Kitazawa 3-31-5, so search by the unit number rather than by a sign. It fits into a walk around Urakita, the back streets north of the station toward reload. Open 13:00–20:00, closed irregularly.",
      zh: "经营个性鲜明孤品的古着店：印花和动物图案的衣服、改造牛仔、杂货。店在北泽3-31-5的“1D”区划营业，比起找招牌，按房号找更容易。可以在逛车站北侧往reload方向的后街（裏北）时顺路去。13:00〜20:00，不定期休息。",
      ko: "무늬 옷과 동물 모티브, 리메이크 데님, 잡화 등 개성 강한 단품을 다루는 구제숍. 기타자와 3-31-5의 '1D' 구획에서 영업하므로 간판보다 호수로 찾는 편이 쉽다. 역 북쪽에서 reload 방향으로 이어지는 뒷골목(우라키타)을 걷다가 들르기 좋다. 13:00〜20:00, 휴무는 부정기.",
      ja: "柄物や動物モチーフの服、リメイクデニム、雑貨など、個性の強い一点物を扱う古着店。北沢3-31-5の「1D」という区画で営業していて、看板より部屋番号で探すほうが見つけやすい。駅の北側をreload方面へ歩く裏北散策の途中に寄れる。13〜20時、不定休。"
    }
  },

  /* ---- レコード ---- */
  {
    id: "flash-disc-ranch",
    key: "oflouxui",
    name: "Flash Disc Ranch",
    categories: ["records"],
    address: "東京都世田谷区北沢2-12-16 三鈴ビル2F",
    lat: null, lng: null,
    photo: "flash-disc-ranch.jpg",
    desc: {
      en: "A used record shop stocked mainly through buying trips to the US, covering Japanese jazz and fusion, city pop, rock, soul and R&B, with about 15,000 records on the floor. Tsubaki Masao has run it since 1982, and it appears as the used cassette shop in the film PERFECT DAYS. From the South Exit, walk 3 minutes and climb the stairs between two game arcades to the 2nd floor. Closed Wednesdays (Thursday if Wednesday is a holiday).",
      zh: "以美国采购为主的二手唱片店，品类有日本爵士与融合乐、City Pop、摇滚、灵魂乐和R&B，店内常备约1万5000张。店主椿正雄自1982年经营至今，电影《完美的日子》中的二手磁带店就在这里取景。从下北泽站南口步行3分钟，走上夹在两家游戏中心之间的楼梯，就在2楼。周三休息（逢节假日则改为周四）。",
      ko: "미국 현지 매입을 중심으로 한 중고 레코드점으로, 일본 재즈·퓨전, 시티팝, 록, 소울, R&B 등을 갖추고 매장에 늘 약 1만 5000장이 진열되어 있다. 1982년부터 점주 쓰바키 마사오 씨가 운영해 왔으며, 영화 『퍼펙트 데이즈』의 중고 카세트 가게 장면을 이곳에서 찍었다. 시모키타자와역 남쪽 출구에서 걸어서 3분, 게임센터 두 곳 사이의 계단을 올라간 2층에 있다. 수요일 휴무(공휴일이면 다음 날 목요일).",
      ja: "アメリカ買い付けが中心の中古レコード店で、和ジャズ・フュージョン、シティポップ、ロック、ソウル、R&Bなどを店頭に約1万5000枚並べる。1982年から店主の椿正雄さんが営み、映画『PERFECT DAYS』で中古カセット店の場面に使われた。南口から徒歩3分、ゲームセンターに挟まれた階段を上がった2階にある。水曜定休（祝日の場合は翌木曜）。"
    }
  },
  {
    id: "record-station",
    key: "mr4as3zy",
    name: "Record Station",
    categories: ["records"],
    address: "東京都世田谷区北沢3-30-1 かどやビル2F",
    lat: null, lng: null,
    photo: "record-station.jpg",
    desc: {
      en: "A used record shop with bins of Japanese wamono, soul, funk, jazz, rock, house, disco, hip hop, reggae and soundtracks, plus a small selection of new releases, cassettes and its own apparel. It started in Yokohama and moved to Shimokitazawa, opening on August 11. Look for the 2nd floor of the building next to Lawson on the Ichibangai shopping street, a 4-minute walk from the East Exit. Closed Tuesdays.",
      zh: "二手唱片店，品类有日本老歌（和物）、灵魂乐、放克、爵士、摇滚、House、Disco、嘻哈、雷鬼和电影原声，也有少量新唱片、磁带和自家服饰。原本开在横滨，后迁到下北泽，于8月11日开业。位于一番街商店街罗森便利店隔壁大楼的2楼，从东口步行4分钟。周二休息。",
      ko: "중고 레코드점으로, 일본 가요(와모노), 소울, 펑크, 재즈, 록, 하우스, 디스코, 힙합, 레게, 사운드트랙 등을 다루며 소량의 신보와 카세트테이프, 자체 의류 굿즈도 판다. 원래 요코하마에 있던 가게가 시모키타자와로 옮겨 8월 11일에 문을 열었다. 이치반가이 상점가 로손 옆 건물 2층으로, 동쪽 출구에서 걸어서 4분. 화요일 휴무.",
      ja: "和モノ、ソウル、ファンク、ジャズ、ロック、ハウス、ディスコ、ヒップホップ、レゲエ、サウンドトラックなどがそろう中古レコード店で、少量の新譜やカセット、オリジナルのアパレルも置く。もとは横浜の店で、下北沢へ移って8月11日にグランドオープンした。一番街商店街のローソンの隣の建物の2階で、東口から徒歩4分。火曜定休。"
    }
  },
  {
    id: "jet-set",
    key: "jq33nzwy",
    name: "JET SET Shimokitazawa",
    categories: ["records"],
    address: "東京都世田谷区北沢2-33-12 柳川ビル201号",
    lat: null, lng: null,
    photo: "jet-set.jpg",
    desc: {
      en: "A record shop known for its hand-picked new vinyl across genres, from hip hop, house, jazz and soul to indie pop, with plenty of reissues, indie releases, cassettes and CDs. The main store opened in Kyoto in 1998; the Shimokitazawa branch opened in 2002 and moved to Ichibangai in 2009. It is in room 201 on the 2nd floor of a building on the Ichibangai shopping street. Open almost every day of the year except around New Year.",
      zh: "以精选新唱片闻名的唱片店，涵盖嘻哈、House、爵士、灵魂乐、独立流行等各类黑胶，再版、独立厂牌作品、磁带和CD也很多。总店是1998年开业的京都店，下北泽店2002年开业，2009年迁到一番街。位于一番街商店街一栋大楼的2楼201室。除新年前后外几乎全年营业。",
      ko: "엄선한 신보로 알려진 레코드점으로, 힙합, 하우스, 재즈, 소울, 인디 팝 등 모든 장르의 LP를 다루며 재발매반, 인디 작품, 카세트와 CD도 많다. 본점은 1998년에 연 교토점이고, 시모키타자와점은 2002년에 문을 열어 2009년에 이치반가이로 옮겼다. 이치반가이 상점가 건물 2층 201호에 있다. 연말연시를 빼고 거의 연중무휴.",
      ja: "全ジャンルのアナログ盤から新譜を厳選してそろえるレコード店で、ヒップホップ、ハウス、ジャズ、ソウル、インディーポップのほか、再発盤やインディーズ作品、カセット、CDも多い。本店は1998年開店の京都店で、下北沢店は2002年に開店し、2009年に一番街へ移った。一番街商店街にあるビルの2階201号。大晦日〜1月2日以外はほぼ毎日営業。"
    }
  },
  {
    id: "pianola-records",
    key: "4km9awl0",
    name: "Pianola Records",
    categories: ["records"],
    address: "東京都世田谷区代田2-36-15 BONUS TRACK内",
    lat: null, lng: null,
    photo: "pianola-records.jpg",
    desc: {
      en: "A tiny record shop that files nothing by genre: experimental and electronic music from around the world, roots music, avant-garde, new wave, world music and pre-war recordings sit together with cassettes and books. Owner Kunitomo Yohei, who spent over 10 years at Disk Union and HMV, opened it in April 2020 and named it after the self-playing pianola, whose records he collects. It is inside BONUS TRACK, the shopping lane built on old Odakyu Line tracks between Shimokitazawa and Setagaya-Daita. Open 14:00-21:00, closed Thursdays.",
      zh: "不按类型分类陈列的小唱片店，世界各地的实验音乐、电子音乐、根源音乐、前卫、新浪潮、世界音乐和战前录音，与磁带、书籍摆在一起。店主国友洋平曾在Disk Union和HMV工作10年以上，2020年4月开店，店名取自他爱收集唱片的自动演奏钢琴“Pianola”。位于下北泽与世田谷代田之间、由小田急线旧铁轨用地改建的商店街BONUS TRACK内。营业时间14:00至21:00，周四休息。",
      ko: "장르를 나누지 않고 진열하는 작은 레코드점으로, 세계 각지의 실험·전자음악, 루츠 음악, 아방가르드, 뉴웨이브, 월드뮤직, 전쟁 전 음악이 카세트, 책과 함께 놓여 있다. 디스크유니온과 HMV에서 10년 넘게 일한 점주 구니토모 요헤이 씨가 2020년 4월에 열었고, 그가 레코드를 모으는 자동 연주 피아노 '피아놀라'에서 이름을 땄다. 시모키타자와와 세타가야다이타 사이, 오다큐선 옛 선로 터에 생긴 상점가 BONUS TRACK 안에 있다. 영업은 14:00~21:00, 목요일 휴무.",
      ja: "ジャンルで分けずに並べる小さなレコード店で、世界の実験音楽・電子音楽、ルーツ音楽、アヴァンギャルド、ニューウェイヴ、戦前の音楽などがカセットや本と一緒に詰まっている。ディスクユニオンとHMVで10年以上働いた國友洋平さんが2020年4月に開き、店名は自身が集める自動演奏ピアノ「ピアノラ」から。下北沢と世田谷代田の間、小田急線の線路跡にできた商店街BONUS TRACKの中にある。14時〜21時、木曜定休。"
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
      en: "A used and vintage guitar shop selling guitars and basses from vintage pieces to current models, plus effects pedals, strings, cables and straps, with buying, consignment and repairs. It was opened in 2007 by Takeichi Tatsuya, a guitar-craft school graduate who worked over 15 years at major Tokyo guitar stores. From the Central Exit, walk about 4 minutes toward Shimokitazawa SHELTER and Kitazawa Town Hall, then take the entrance beside the sign up to the 2nd floor. Open 14:00-19:00; closed Wednesdays and the 1st and 3rd Sundays.",
      zh: "二手与古董吉他店，出售从古董到最新款的吉他、贝斯，以及效果器、琴弦、线材、背带等，也提供收购、寄售和维修。店主武市达也毕业于吉他制作科，在东京大型吉他店工作15年以上后，于2007年独立开店。从中央口步行约4分钟，靠近下北泽SHELTER和北泽Town Hall，从招牌旁的入口上到2楼。营业时间14:00至19:00，周三及每月第1、第3个周日休息。",
      ko: "중고·빈티지 기타 전문점으로, 빈티지부터 최신 모델까지의 기타와 베이스, 이펙터, 줄, 케이블, 스트랩 등을 팔고 매입, 위탁 판매, 수리도 한다. 기타 제작과를 졸업하고 도쿄의 대형 기타점에서 15년 넘게 일한 다케이치 다쓰야 씨가 2007년에 독립해 열었다. 중앙 출구에서 걸어서 약 4분, 시모키타자와 SHELTER와 기타자와 타운홀 근처로, 간판 옆 입구에서 2층으로 올라간다. 영업은 14:00~19:00, 수요일과 첫째·셋째 일요일 휴무.",
      ja: "ヴィンテージから最新モデルまでのギター・ベースと、エフェクター、弦、ケーブル、ストラップなどを扱う中古・ヴィンテージギター店で、買取・委託販売・リペアも行う。ギタークラフト科を出て都内の大手ギター店に15年以上勤めた武市達也さんが2007年に独立して開いた。中央口から徒歩約4分、下北沢SHELTERや北沢タウンホールの近くで、看板横の入口から2階へ上がる。14時〜19時、水曜と第1・第3日曜休み。"
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
      en: "A specialist shop for classical and flamenco guitars, from beginner models to new instruments by Japanese luthiers and guitars by Spanish masters, plus used guitars, cases, books, capos and strings. It opened in Shimokitazawa in 1982 as a handmade-guitar shop and also buys instruments. It is on the south side of the station near the Daizawa three-way junction, about 5 to 10 minutes on foot depending on the route. The official site lists 11:00-17:00, closed Wednesdays and Thursdays.",
      zh: "古典吉他与弗拉门戈吉他专卖店，从入门款到日本制琴师的新作、西班牙名匠吉他，还有二手吉他、琴盒、书籍、变调夹和琴弦。1982年作为手工吉他专卖店在下北泽开业，也收购乐器。位于车站南侧的代泽三岔路附近，依路线步行约5至10分钟。官网标示营业时间11:00至17:00，周三、周四休息。",
      ko: "클래식 기타·플라멩코 기타 전문점으로, 입문용부터 일본 제작가의 신작, 스페인 명장의 기타까지 갖추고 중고 기타, 케이스, 책, 카포, 줄도 판다. 1982년에 수제 기타 전문점으로 시모키타자와에서 문을 열었고 악기 매입도 한다. 역 남쪽 다이자와 삼거리 근처로, 경로에 따라 걸어서 약 5~10분. 공식 사이트 기준 11:00~17:00, 수요일·목요일 휴무.",
      ja: "クラシックギター・フラメンコギターの専門店で、入門用から国産ルシアーの新作、スペインの名工のギターまでそろい、中古ギター、ケース、書籍、カポタスト、弦も置く。1982年に下北沢で手工ギター専門店として開業し、楽器の買取も行う。駅の南側、代沢三差路の近くで、道順により徒歩5〜10分ほど。公式サイトでは11時〜17時、水曜・木曜定休。"
    }
  },

  /* ---- 純喫茶 ---- */
  {
    id: "toumei-bara",
    key: "konz4yf5",
    name: "Toumei Bara",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-14-5 イスズビル203号",
    lat: null, lng: null,
    photo: "toumei-bara.jpg",
    desc: {
      en: "A Showa-retro kissaten whose signature is spaghetti Napolitan served on a silver plate with potato salad and a cherry tomato, alongside homemade mixed juice, cream soda, morning sets and brûlée cheesecake. Owner Suzuki Kazuki, born in the Heisei era, opened it on July 6, 2023 and named it after a phrase in a Miyazawa Kenji poem. Red ceiling, green walls, antique furniture and a record player fill room 203 on the 2nd floor of a small building on the South Exit shopping street, 3 minutes from the station.",
      zh: "昭和复古风纯喫茶，招牌是盛在银盘上、配土豆沙拉和小番茄的拿坡里意面，还有自制混合果汁、奶油苏打、早餐套餐和焦糖布蕾芝士蛋糕。生于平成年代的店主铃木一希于2023年7月6日开店，店名取自宫泽贤治诗中的一句。红色天花板、绿色墙壁、古董家具和唱片机，位于南口商店街一栋小楼的2楼203室，离车站步行3分钟。",
      ko: "쇼와 레트로 순킷사로, 은색 접시에 감자 샐러드와 방울토마토를 곁들인 나폴리탄이 간판 메뉴이며 수제 믹스주스, 크림소다, 모닝 세트, 브륄레 치즈케이크도 있다. 헤이세이 시대에 태어난 점주 스즈키 가즈키 씨가 2023년 7월 6일에 열었고, 가게 이름은 미야자와 겐지의 시 구절에서 따왔다. 빨간 천장, 초록 벽, 앤티크 가구, 레코드플레이어가 있는 곳으로, 남쪽 출구 상점가의 작은 건물 2층 203호, 역에서 걸어서 3분.",
      ja: "昭和レトロの純喫茶で、看板は銀皿にポテトサラダとミニトマトを添えたナポリタン。自家製ミックスジュース、クリームソーダ、モーニング、ブリュレチーズケーキもある。平成生まれの店主・鈴木一希さんが2023年7月6日に開き、店名は宮沢賢治の詩『恋と病熱』にちなむ。赤い天井と緑の壁にアンティーク家具とレコードプレーヤーが並ぶ。南口商店街の小さなビルの2階203号室で、駅から徒歩3分。"
    }
  },
  {
    id: "ichifusa",
    key: "hlbx95ep",
    name: "Kissa Hitofusa",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-21-26 2F",
    lat: null, lng: null,
    desc: {
      en: "A small café serving seasonal fruit sandwiches with mascarpone cream and large pieces of fruit, plus coffee; sandwiches come in a regular (4 pieces) or half (2 pieces) size. It is a sister shop of the fruit sandwich store Futsuuni Furuutsu, open as a daytime kissaten since April 2023. Climb to the 2nd floor of a building in a side street, about 2 minutes from the Southwest Exit; queues sometimes reach the bottom of the stairs. They can sell out, and reviews say cash only.",
      zh: "小咖啡馆，主打用当季水果做的水果三明治，夹马斯卡彭奶油和大块水果，也有咖啡；三明治分常规（4块）和半份（2块）。是水果三明治店“Futsuuni Furuutsu”的姊妹店，2023年4月起白天作为喫茶店营业。位于小巷里一栋楼的2楼，从西南口步行约2分钟，有时队伍排到楼梯下。三明治可能售罄，评论称只收现金。",
      ko: "제철 과일 샌드위치가 중심인 작은 카페로, 마스카르포네 크림과 큼직한 과일을 넣으며 커피도 있다. 샌드위치는 레귤러(4조각)와 하프(2조각) 중에서 고른다. 과일 샌드위치 가게 '후쓰니 후루쓰'의 자매점으로, 2023년 4월부터 낮 시간에 킷사로 영업하고 있다. 남서쪽 출구에서 걸어서 약 2분, 골목 안 건물 2층이며 계단 아래까지 줄이 늘어설 때가 있다. 샌드위치가 품절될 수 있고 후기로는 현금만 받는다.",
      ja: "季節のフルーツを使ったフルーツサンドとコーヒーの小さな店で、マスカルポーネ入りの生クリームと大粒のフルーツを挟む。サイズはレギュラー（4切れ）とハーフ（2切れ）。フルーツサンド店「フツウニフルウツ」の姉妹店で、2023年4月から昼の「喫茶 一房」として営業している。南西口から徒歩2分ほど、路地のビルの2階で、階段下まで行列ができることもある。完売することがあり、口コミでは現金のみ。"
    }
  },
  {
    id: "trois-chambres",
    key: "m14a14z6",
    name: "Trois Chambres",
    categories: ["kissa"],
    address: "東京都世田谷区代沢5-36-14 湯浅ビル2F",
    lat: null, lng: null,
    photo: "trois-chambres.jpg",
    desc: {
      en: "A kissaten devoted to flannel-drip coffee and aged beans, with a dark and a light roast as its two signatures and a rare and baked cheesecake named to Tabelog's top 100. Owner Matsuzaki Hiroshi trained at Café Trois Bagues in Jimbocho and opened in 1980; the 6.15 m single-plank Oregon pine counter has never been remodeled. Antique cups line the shelves and jazz plays across 32 seats on the 2nd floor of the Yuasa Building, 5 minutes from the station. Cash only, smoking allowed.",
      zh: "专注法兰绒滤布手冲和陈年咖啡豆的喫茶店，招牌是深焙和浅焙两种，生芝士和烤芝士蛋糕入选食べログ百名店。店主松崎宽在神保町的“Café Trois Bagues”修业后，于1980年开店；长6米15的美国松整板吧台自开业以来从未翻修。架上摆着古董杯，店内播放爵士，共32席，位于汤浅大楼2楼，离车站步行5分钟。只收现金，可吸烟。",
      ko: "넬 드립과 올드 빈에 공을 들인 킷사텐으로, 강배전과 약배전 두 가지가 간판이며 레어·베이크드 치즈케이크는 다베로그 100명점에 선정되었다. 점주 마쓰자키 히로시 씨가 진보초의 '카페 트로와 바그'에서 수련한 뒤 1980년에 열었고, 길이 6m 15cm의 미송 통판 카운터는 창업 이래 한 번도 고치지 않았다. 앤티크 컵이 놓인 선반과 재즈가 흐르는 32석의 가게로, 유아사 빌딩 2층, 역에서 걸어서 5분. 현금만 받고 흡연 가능.",
      ja: "ネルドリップとオールドビーンズにこだわる喫茶店で、深煎りと浅煎りの2種類が看板。レアとベイクドのチーズケーキは食べログ百名店に選ばれた。店主の松﨑寛さんが神保町「カフェ トロワバグ」で修業し1980年に開いた店で、6m15cmの米松一枚板のカウンターは創業以来改装していない。アンティークのカップが並びジャズが流れる32席。湯浅ビルの2階、駅から徒歩5分。現金のみ、喫煙可。"
    }
  },
  {
    id: "masako",
    key: "i9zxttzs",
    name: "Jazz Kissa Masako",
    categories: ["kissa", "music"],
    address: "本店：東京都世田谷区北沢2-31-2 大久ビル2F／パルファン店：東京都世田谷区北沢2-29-3 パルファンビル2F",
    lat: null, lng: null,
    desc: {
      en: "A jazz kissaten that plays records, known for its anko (sweet bean) toast at 450 yen and homemade ginger ale. The original Masako opened in 1953 and closed in 2009; moe, a regular since high school and a former staff member, revived the name in 2020. The main shop is on the 2nd floor of the Okyu Building, 2 minutes from the station; in August 2025 a second shop, Masako Parfun, opened 2 minutes away on the 2nd floor of the former Café de Parfun, reusing its booths, tables and chairs. Both close Thursdays; live nights have a 1,000 yen charge plus a drink.",
      zh: "用黑胶播放爵士的爵士喫茶，招牌是450日元的红豆吐司和自制姜汁汽水。初代Masako于1953年开业、2009年歇业；从高中起就是常客、也曾在店里工作的moe继承店名，于2020年重新开张。总店在大久大楼2楼，离车站步行2分钟；2025年8月又在步行2分钟外的老喫茶“Café de Parfun”旧址2楼开了二号店“Masako Parfun店”，沿用原来的卡座和桌椅。两店均周四休息，现场演出日收费1,000日元另加一杯饮品。",
      ko: "레코드로 재즈를 트는 재즈 킷사로, 450엔짜리 앙(팥) 토스트와 수제 진저에일로 알려져 있다. 원조 마사코는 1953년에 문을 열어 2009년에 닫았고, 고등학생 때부터 단골이자 전 직원인 moe 씨가 이름을 이어받아 2020년에 다시 열었다. 본점은 오큐 빌딩 2층으로 역에서 걸어서 2분이며, 2025년 8월에는 걸어서 2분 거리의 노포 킷사 '카페 드 파르팡' 자리 2층에 2호점 '마사코 파르팡점'을 열어 원래의 박스석과 테이블, 의자를 그대로 쓴다. 두 곳 모두 목요일 휴무이며, 라이브 날에는 차지 1,000엔에 음료 1잔 주문이 필요하다.",
      ja: "レコードでジャズを流すジャズ喫茶で、看板は450円の「あんトースト」と自家製ジンジャーエール。1953年創業の「マサコ」は2009年に閉店し、高校生からの常連で元スタッフのmoeさんが名前を継いで2020年に再開した。本店は大久ビル2階で駅から徒歩2分。2025年8月には徒歩2分の老舗喫茶「カフェ・ド・パルファン」跡の2階に「マサコ パルファン店」を開き、元のボックス席や机・椅子を使っている。どちらも木曜定休。ライブ日はチャージ1,000円＋1ドリンク。"
    }
  },
  {
    id: "tag-cafe",
    key: "cywp8pry",
    name: "TAG CAFE",
    categories: ["kissa"],
    address: "東京都世田谷区北沢2-12-10 サウスサイド2 2B",
    lat: null, lng: null,
    desc: {
      en: "A retro kissaten known for cream soda in 7 colors (strawberry, melon, blue Hawaii, lemon, grape, peach and Calpis) at 650 yen, and a firm \"donut pudding\" with whipped cream in the hole, cherries and chocolate sprinkles. It opened in 2011 and was renewed as a \"neo kissaten\" in January 2021. It is unit 2B on the 2nd floor of the Southside 2 building on a back street, 1 to 2 minutes from the station. Open 11:00-20:00 (last order 19:30), irregular holidays; power outlets and Wi-Fi available, reservations by phone only.",
      zh: "复古喫茶店，招牌是可选7种颜色（草莓、蜜瓜、蓝色夏威夷、柠檬、葡萄、桃子、可尔必思）的奶油苏打，650日元，还有中间孔里填满鲜奶油、点缀樱桃和巧克力碎的硬布丁“甜甜圈布丁”。2011年开业，2021年1月改装为“NEO喫茶店”。位于后街Southside 2大楼2楼2B，离车站步行1至2分钟。营业11:00至20:00（最后点单19:30），不定期休息；有电源和Wi-Fi，只接受电话预约。",
      ko: "레트로 킷사로, 딸기·멜론·블루하와이·레몬·포도·복숭아·칼피스 7가지 색 중에서 고르는 크림소다(650엔)와, 구멍에 생크림을 채우고 체리와 초코 스프링클을 올린 단단한 '도넛 푸딩'으로 알려져 있다. 2011년에 문을 열어 2021년 1월에 'NEO 킷사텐'으로 새단장했다. 뒷골목 사우스사이드 2 빌딩 2층 2B호로, 역에서 걸어서 1~2분. 영업은 11:00~20:00(라스트오더 19:30), 부정기 휴무이며, 콘센트와 Wi-Fi가 있고 예약은 전화로만 받는다.",
      ja: "7色から選べるクリームソーダ（イチゴ・メロン・ブルーハワイ・レモン・ブドウ・ピーチ・カルピス、650円）と、穴に生クリームを詰めてチェリーとチョコスプレーをのせた固めの「ドーナツプリン」で知られるレトロ喫茶。2011年に開店し、2021年1月に「NEO喫茶店」としてリニューアルした。裏通りのサウスサイド2の2階2Bで、駅から徒歩1〜2分。11時〜20時（LO19時半）、不定休。電源・Wi-Fiあり、予約は電話のみ。"
    }
  },

  /* ---- 隠れ家カフェ ---- */
  {
    id: "browns-books-cafe",
    key: "ydoec1aj",
    name: "Brown's Books & Café",
    categories: ["cafe", "books"],
    address: "東京都世田谷区代沢5-32-13 露崎商店ビル5F",
    lat: null, lng: null,
    desc: {
      en: "A book café run by Brown's Books, publisher of the culture magazines BARFOUT! and STEPPIN' OUT!, where you can read and buy current and back issues and secondhand books on music, art, travel, literature and manga, mostly from editor Yamazaki Jiro's own collection. On weekdays the room is the magazine's editorial office; it opens as a café only on Saturdays and Sundays. It is on the 5th floor of the Tsuyuzaki Shoten Building on the South Exit side, 5 minutes from the station.",
      zh: "由出版文化杂志《BARFOUT!》《STEPPIN' OUT!》的Brown's Books经营的书咖啡馆，可以阅读和购买最新及过期杂志，以及音乐、艺术、旅行、文学、漫画等二手书，多为编辑山崎二郎的个人藏书。平日这里是杂志编辑部，只在周六、周日作为咖啡馆营业。位于南口一侧露崎商店大楼5楼，离车站步行5分钟。",
      ko: "문화 잡지 『BARFOUT!』『STEPPIN' OUT!』을 내는 브라운즈 북스가 운영하는 북카페로, 최신호와 과월호, 그리고 편집자 야마자키 지로 씨의 장서를 중심으로 한 음악·미술·여행·문학·만화 헌책을 읽고 살 수 있다. 평일에는 잡지 편집부이고, 토요일과 일요일에만 카페로 문을 연다. 남쪽 출구 쪽 쓰유자키 상점 빌딩 5층으로, 역에서 걸어서 5분.",
      ja: "カルチャー誌『BARFOUT!』『STEPPIN' OUT!』を出すブラウンズブックスが営むブックカフェで、最新号やバックナンバー、店主・山崎二郎さんの蔵書を中心とした音楽・アート・旅・文学・漫画の古本を読め、買うこともできる。平日は雑誌の編集部で、カフェとして開くのは土日だけ。南口側の露崎商店ビル5階で、駅から徒歩5分。"
    }
  },
  {
    id: "city-country-city",
    key: "49a6yjnq",
    name: "CITY COUNTRY CITY",
    categories: ["cafe", "records"],
    address: "東京都世田谷区北沢2-12-13 細沢ビル4F",
    lat: null, lng: null,
    photo: "city-country-city.jpg",
    desc: {
      en: "A record shop and café-bar owned by Sokabe Keiichi of the band Sunny Day Service, known for chewy fresh-noodle pasta such as mentaiko pasta. Every record carries a handwritten note and can be played on the in-store turntables, from acid folk to house and ambient; it has been open since 2006. It is on the 4th floor of an office building on the South Exit shopping street, 2 minutes from the station. Closed Wednesdays (Thursday if Wednesday is a holiday).",
      zh: "由乐队Sunny Day Service的曾我部惠一经营的唱片店兼咖啡酒吧，招牌是明太子意面等口感筋道的生面意面。每张唱片都附手写介绍，可以在店内唱机试听，从迷幻民谣到House、氛围音乐都有；2006年开业至今。位于南口商店街一栋办公楼的4楼，离车站步行2分钟。周三休息（逢节假日则改为周四）。",
      ko: "밴드 서니 데이 서비스의 소카베 게이이치가 운영하는 레코드숍 겸 카페 바로, 명란 파스타 등 쫄깃한 생면 파스타로 알려져 있다. 레코드마다 손글씨 소개가 붙어 있고 매장의 턴테이블로 들어볼 수 있으며, 애시드 포크부터 하우스, 앰비언트까지 갖췄다. 2006년부터 영업하고 있다. 남쪽 출구 상점가 사무실 건물 4층으로, 역에서 걸어서 2분. 수요일 휴무(공휴일이면 목요일).",
      ja: "サニーデイ・サービスの曽我部恵一さんがオーナーのレコードショップ兼カフェバーで、名物は明太子パスタなど生麺のもちもちしたパスタ。レコードには1枚ずつ手書きの紹介文が付き、店内のプレーヤーで試聴できる。アシッドフォークからハウス、アンビエントまでそろい、2006年から営業している。南口商店街のオフィスビルの4階で、駅から徒歩2分。水曜定休（祝日の場合は木曜）。"
    }
  },
  {
    id: "ballon-dessai",
    key: "2gz9jrm5",
    name: "BALLON D'ESSAI",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-10-10 1F",
    lat: null, lng: null,
    desc: {
      en: "A specialty coffee stand where baristas pull each espresso by hand, known for its lattes, a latte-art experience (no booking needed) and espresso shaved ice. After its old Kitazawa Building home was torn down for age and it closed in January 2025, it reopened about 18 months later, on August 19, 2026, as a roastery and coffee stand. The new shop is on the ground floor of a building right in front of the East Exit.",
      zh: "由咖啡师逐杯萃取浓缩咖啡的精品咖啡站，以拿铁、无需预约的拉花体验和浓缩咖啡刨冰闻名。原店所在的北泽大楼因老旧拆除，于2025年1月停业，约一年半后的2026年8月19日以烘焙工坊兼咖啡站的形式重新开业。新店位于东口正前方一栋楼的1楼。",
      ko: "바리스타가 한 잔씩 에스프레소를 추출하는 스페셜티 커피 스탠드로, 라테와 예약 없이 할 수 있는 라테아트 체험, 에스프레소 빙수로 알려져 있다. 예전 가게가 있던 기타자와 빌딩이 노후화로 철거되면서 2025년 1월에 문을 닫았다가, 약 1년 반 뒤인 2026년 8월 19일에 로스팅 공장 겸 커피 스탠드로 다시 열었다. 새 가게는 동쪽 출구 바로 앞 건물 1층이다.",
      ja: "バリスタが1杯ずつエスプレッソを抽出するスペシャルティコーヒースタンドで、ラテと予約不要のラテアート体験、エスプレッソかき氷で知られる。旧店舗の北沢ビルが老朽化で立ち退きとなり2025年1月に閉めたが、約1年半後の2026年8月19日に焙煎工場兼スタンドとして移転オープンした。新店舗は東口の目の前のビルの1階。"
    }
  },
  {
    id: "fuzkue",
    key: "loz5k7q8",
    name: "fuzkue Shimokitazawa",
    categories: ["cafe", "books"],
    address: "東京都世田谷区代田2-36-14 BONUS TRACK内",
    lat: null, lng: null,
    desc: {
      en: "A café made only for reading: talking is not allowed, and studying, working, writing, watching videos or gaming are off-limits too. There is a seat fee starting at 1,650 yen that drops as you order food and drinks, so most visits come to around 2,000 yen. Owner Akutsu Takashi opened the first fuzkue in Hatsudai in 2014 and this second shop in 2020 inside BONUS TRACK, 5 minutes from the Inokashira Line West Exit or Odakyu Line Southwest Exit. Open daily 12:00-22:00 per the official site; reservations are for one person each.",
      zh: "专为读书而设的店：禁止交谈，学习、工作、写作、看视频、玩游戏等读书以外的活动也不行。采用座位费制，基本座位费1,650日元起，点餐和饮品越多扣减越多，一般花费约2,000日元。店主阿久津隆于2014年在初台开了第一家，2020年在BONUS TRACK内开了这家二号店，从井之头线西口或小田急线西南口步行5分钟。官网显示每天12:00至22:00营业，预约每次限1人。",
      ko: "책을 읽기 위한 가게로, 대화는 금지이며 공부, 일, 집필, 동영상 시청, 게임 등 독서 외의 활동도 할 수 없다. 자릿세 제도로, 기본 자릿세 1,650엔에서 음료와 음식을 주문할수록 줄어들어 보통 2,000엔 전후가 든다. 점주 아쿠쓰 다카시 씨가 2014년 하쓰다이에 1호점을 열었고, 2020년에 BONUS TRACK 안에 이 2호점을 열었다. 이노카시라선 서쪽 출구·오다큐선 남서쪽 출구에서 걸어서 5분. 공식 사이트 기준 매일 12:00~22:00 영업하며, 예약은 1건에 1명이다.",
      ja: "本を読むためだけの店で、おしゃべりはできず、勉強・仕事・執筆・動画視聴・ゲームなど読書以外の過ごし方もできない。席料制で、基本の1,650円が飲み物や食べ物の注文に応じて減り、目安は2,000円前後。店主の阿久津隆さんが2014年に初台に1号店を開き、2020年にBONUS TRACK内に2号店としてこの店を開いた。井の頭線西口・小田急線南西口から徒歩5分。公式では毎日12時〜22時。予約は1件1名。"
    }
  },
  {
    id: "bear-pond-espresso",
    key: "c9y4j6ub",
    name: "Bear Pond Espresso",
    categories: ["cafe"],
    address: "東京都世田谷区北沢2-36-12 1F",
    lat: null, lng: null,
    desc: {
      en: "A tiny espresso bar famous for its \"Angel Stain\" espresso, served only in the morning until 13:00 and in limited numbers, and for the \"Dirty\" latte. Owner-barista Tanaka Katsuyuki trained in New York and opened it in 2009 in a converted candy shop that had operated for 60 years; the room is about 6 tsubo (20 m²) and mostly standing. It is on the Shimokitazawa Ichibangai street, 5 minutes from the station. English guides note that photos, laptops and cameras are not allowed.",
      zh: "小小的浓缩咖啡吧，以只在上午13点前限量供应的“Angel Stain”浓缩咖啡和拿铁“Dirty”闻名。店主兼咖啡师田中胜幸在纽约修业后，于2009年把一家经营了60年的粗点心店改装开店；店面约6坪（约20平方米），基本是站着喝。位于下北泽一番街，离车站步行5分钟。英文指南提到店内禁止拍照、使用笔记本电脑和相机。",
      ko: "아주 작은 에스프레소 바로, 오전 13시까지만 한정 수량으로 내는 에스프레소 '엔젤 스테인'과 라테 '더티'로 알려져 있다. 뉴욕에서 수련한 오너 바리스타 다나카 가쓰유키 씨가 60년 동안 영업한 막과자 가게를 고쳐 2009년에 열었고, 매장은 약 6평(약 20㎡)으로 대부분 서서 마신다. 시모키타자와 이치반가이에 있으며 역에서 걸어서 5분. 영어 가이드에는 사진 촬영, 노트북, 카메라가 금지라고 나와 있다.",
      ja: "午前中（13時まで）に数量限定で出すエスプレッソ「エンジェルステイン」と、ラテの「ダーティー」で知られる小さなエスプレッソバー。ニューヨークで修業したオーナーバリスタの田中勝幸さんが、60年続いた駄菓子店「大月商店」の店舗を改装して2009年に開いた。約6坪で、基本は立ち飲み。下北沢一番街にあり、駅から徒歩5分。英語のガイドでは写真撮影やノートパソコン、カメラは禁止と紹介されている。"
    }
  },
  {
    id: "anthrop",
    key: "8kyc663v",
    name: "anthrop. Espresso & Comfort",
    categories: ["cafe", "books"],
    address: "東京都世田谷区北沢2-26-7 テラスマディーナ別棟1F",
    lat: null, lng: null,
    photo: "anthrop.jpg",
    desc: {
      en: "An espresso café with a wall of bookshelves whose books you can read freely or buy, serving coffee, shaved ice, pancakes, cakes and a morning menu. It opened in 2013 as \"anthrop Espresso & Biblio\", a name taken from anthropology, and now runs as anthrop. Espresso & Comfort. It is on the ground floor of the Terrace Madina annex, 1 to 3 minutes from the station depending on the exit.",
      zh: "浓缩咖啡馆，整面墙的书架上的书可自由阅读，也可购买，提供咖啡、刨冰、松饼、蛋糕和早餐。2013年以“anthrop Espresso & Biblio”之名开业，店名源自人类学（anthropology）；现名为anthrop. Espresso & Comfort。位于Terrace Madina别栋1楼，依出口不同离车站步行1至3分钟。",
      ko: "벽 한 면을 채운 책장의 책을 자유롭게 읽거나 살 수 있는 에스프레소 카페로, 커피, 빙수, 팬케이크, 케이크, 모닝 메뉴를 낸다. 2013년에 'anthrop Espresso & Biblio'라는 이름으로 문을 열었고, 이름은 인류학(anthropology)에서 왔다. 지금은 anthrop. Espresso & Comfort로 영업한다. 테라스 마디나 별관 1층으로, 출구에 따라 역에서 걸어서 1~3분.",
      ja: "壁一面の本棚の本を自由に読め、買うこともできるエスプレッソのカフェで、コーヒー、かき氷、パンケーキ、ケーキ、モーニングを出す。2013年に「anthrop Espresso & Biblio」として開店し、店名は人類学（anthropology）から。現在の店名は「anthrop.Espresso&Comfort」。テラスマディーナ別棟の1階で、出口により駅から徒歩1〜3分。"
    }
  },

  /* ---- スイーツ ---- */
  {
    id: "mardi-gras",
    key: "n96g3t0u",
    name: "Mardi Gras",
    categories: ["sweets", "kissa"],
    address: "東京都世田谷区北沢2-31-1 サン・ローザ1F",
    lat: null, lng: null,
    photo: "mardi-gras.jpg",
    desc: {
      en: "A long-running kissaten known for custard pudding and shortcake, with a cake set where you pick 2 of about 5 cakes, a pudding à la mode at 770 yen and French toast. Sources put its history at 35 to nearly 40 years. It sits at the end of a quiet side street off the shopping street, about 3 minutes from the station, on the ground floor of the Sun Rosa building.",
      zh: "老字号喫茶店，以卡仕达布丁和草莓奶油蛋糕闻名，有从约5种蛋糕中选2种的蛋糕套餐、770日元的布丁圣代和法式吐司。各处资料称其历史约35年至近40年。位于从商店街拐进的安静小巷尽头，Sun Rosa大楼1楼，离车站步行约3分钟。",
      ko: "오래된 킷사텐으로, 커스터드 푸딩과 쇼트케이크로 알려져 있으며 5가지 정도의 케이크 중 2가지를 고르는 케이크 세트, 770엔짜리 푸딩 아라모드, 프렌치토스트가 있다. 역사는 자료에 따라 약 35년에서 40년 가까이로 나온다. 상점가에서 조용한 골목으로 들어간 안쪽, 산 로자 빌딩 1층으로 역에서 걸어서 약 3분.",
      ja: "プリンとショートケーキで知られる喫茶店で、5種類ほどのケーキから2つ選べるケーキセット、プリンアラモード（770円）、フレンチトーストもある。歴史は「約35年」「40年近い」と情報源で異なる。商店街から静かな路地に入った奥、サン・ローザの1階で、駅から徒歩3分ほど。"
    }
  },
  {
    id: "latte",
    key: "ag4kn3lk",
    name: "Latte",
    categories: ["sweets", "cafe"],
    address: "東京都世田谷区代田5-10-6 イーストコート代田1F",
    lat: null, lng: null,
    desc: {
      en: "A café-restaurant known for old-style firm pudding and matcha gâteau au chocolat, plus a weekend morning plate with pudding, lunch and dinner. It opened in April 2022, appeared as a filming location in the TV drama silent, and reopened after a renewal in July 2025. It is on the ground floor of East Court Daita, 2 to 3 minutes from the West Exit of Setagaya-Daita Station on the Odakyu Line (7 minutes from Shimokitazawa Station). It does not take reservations and can get busy.",
      zh: "咖啡餐厅，以老式硬布丁和抹茶巧克力蛋糕闻名，周末及节假日有可附布丁的早餐拼盘，也供应午餐和晚餐。2022年4月开业，曾是电视剧《silent》的取景地，2025年7月装修后重新开业。位于East Court代田1楼，从小田急线世田谷代田站西口步行2至3分钟（从下北泽站步行7分钟）。不接受预约，有时较拥挤。",
      ko: "옛날식 단단한 푸딩과 말차 가토 쇼콜라로 알려진 카페 레스토랑으로, 주말·공휴일에는 푸딩이 함께 나오는 모닝 플레이트도 있고 점심과 저녁도 한다. 2022년 4월에 문을 열었고 드라마 『silent』의 촬영지로 소개되었으며, 2025년 7월에 새단장해 다시 열었다. 이스트코트 다이타 1층으로, 오다큐선 세타가야다이타역 서쪽 출구에서 걸어서 2~3분(시모키타자와역에서 7분). 예약은 받지 않고 붐빌 때가 있다.",
      ja: "昔ながらの固めのプリンと抹茶ガトーショコラで知られるカフェレストランで、土日祝にはプリン付きのワンプレートもあるモーニングを出し、ランチ・ディナーもある。2022年4月に開店し、ドラマ『silent』のロケ地になり、2025年7月にリニューアルした。イーストコート代田の1階で、小田急線世田谷代田駅西口から徒歩2〜3分（下北沢駅から徒歩7分）。予約は受け付けておらず、混むことがある。"
    }
  },

  /* ---- カレー ---- */
  {
    id: "anjali",
    key: "jriwafja",
    name: "ANJALI",
    categories: ["curry"],
    address: "東京都世田谷区北沢2-15-11 センヤビルB1",
    lat: null, lng: null,
    photo: "anjali.jpg",
    desc: {
      en: "A curry shop serving three or four spice curries that change daily; a two-curry plate is ¥1,600 and a one-curry plate ¥1,400. The owner, who trained in Japanese cuisine, built the recipes from travels in India and Sri Lanka, and the shop is run by a couple. It is in the basement (B1) of a building on a back lane, about 2 minutes on foot from the Southwest Exit of Shimokitazawa Station. Around 8 seats. No credit cards or e-money.",
      zh: "每天更换三到四种香料咖喱的咖喱店，双拼盘1,600日元，单品盘1,400日元。店主出身日本料理，根据在印度和斯里兰卡旅行时的体验设计了原创食谱，由一对夫妇经营。位于小巷里一栋大楼的地下1层，从下北泽站西南口步行约2分钟。座位约8个。不能使用信用卡和电子货币。",
      ko: "매일 바뀌는 스파이스 카레 3~4종을 내는 카레 가게로, 2종 플레이트는 1,600엔, 1종 플레이트는 1,400엔입니다. 일식 출신 주인이 인도와 스리랑카를 여행하며 맛본 경험을 바탕으로 직접 레시피를 만들었고, 부부가 함께 운영합니다. 골목 안 건물의 지하 1층에 있으며 시모키타자와역 남서쪽 출구에서 걸어서 2분 정도입니다. 좌석은 8석 정도. 신용카드와 전자화폐는 사용할 수 없습니다.",
      ja: "日替わりで3〜4種類のスパイスカレーを出すカレー店で、2種盛りのプレートは1,600円、1種は1,400円。和食出身の店主がインドやスリランカの旅で味わった経験をもとにレシピを考え、夫婦で切り盛りしている。路地裏のビルの地下1階にあり、下北沢駅南西口から徒歩2分ほど。席は8席ほど。カード・電子マネーは使えない。"
    }
  },
  {
    id: "kappa-ism",
    key: "584e6bym",
    name: "Kappa-ism",
    categories: ["curry"],
    address: "東京都世田谷区北沢2-37-16 林ビル3F",
    lat: null, lng: null,
    desc: {
      en: "A dashi (Japanese broth) curry shop by day and a music bar by night. Curries include chicken curry made with dried-sardine, kombu and bonito broth, and a pork keema with Hatcho miso. The shop moved here from Suzunari Yokocho, and at night it serves motsuni (simmered offal) in the style of the owner's family yakitori shop near Odawara, open for over 70 years. Look for the building with a spiral staircase on Ichibangai shopping street; the shop is on the 3rd floor, with no sign, only a small name on the door.",
      zh: "白天是使用日式高汤的咖喱店，晚上是音乐酒吧。咖喱有用小鱼干、昆布和厚削柴鱼高汤做的鸡肉咖喱，以及用八丁味噌做的猪肉肉末咖喱等。店铺从铃成横丁搬来，晚上供应炖内脏，味道来自店主老家——小田原附近经营70多年的烤鸡串店。在一番街商店街找有螺旋楼梯的大楼，店在3楼。没有招牌，只在门上写着小小的店名。",
      ko: "낮에는 일본식 육수(다시) 카레, 밤에는 뮤직 바가 되는 가게입니다. 멸치·다시마·두껍게 깎은 가쓰오부시 육수로 만든 치킨 카레, 핫초 된장을 넣은 포크 키마 카레 등을 냅니다. 스즈나리 요코초에서 이전해 온 가게로, 밤에는 주인의 본가인 오다와라 근처에서 70년 넘게 이어 온 야키토리집의 맛을 담은 모쓰니(곱창 조림)를 냅니다. 이치반가이 상점가에서 나선 계단이 있는 건물을 찾으면 3층에 있습니다. 간판은 없고 문에 작게 가게 이름만 적혀 있습니다.",
      ja: "昼は出汁カレー、夜はミュージックバーになる店。いりこ・昆布・厚削り節の出汁を使ったチキンカレーや、八丁味噌を使ったポークキーマなどを出す。鈴なり横丁から移ってきた店で、夜は小田原の近くで70年以上続く店主の実家の焼き鳥屋の味のモツ煮がある。一番街商店街の、らせん階段が目印のビルの3階。看板はなく、ドアに小さく店名があるだけ。"
    }
  },
  {
    id: "moona",
    key: "setyc9v4",
    name: "Spice Kitchen Moona",
    categories: ["curry"],
    address: "東京都世田谷区北沢2-12-13 細沢ビル5F",
    lat: null, lng: null,
    desc: {
      en: "A seafood curry restaurant influenced by South Indian cooking. Its best-known dish is a set of two daily seafood curries with dal, vegetables, shrimp pickle, fried roti and fragrant rice, using seasonal fish such as salmon and saury; the seafood lunch set is limited to 10 a day. Opened in 2007, it was named one of Tabelog's 100 best Asian and ethnic restaurants in Tokyo for 2024. It is on the 5th floor of a building about a minute from Shimokitazawa Station; take the elevator. 21 seats, reservations and credit cards accepted. Closed Mondays and the last Tuesday of each month.",
      zh: "受南印度料理影响的海鲜咖喱店。招牌是套餐：两种每日更换的海鲜咖喱，配豆咖喱、蔬菜、腌虾、炸烤饼和香米，使用三文鱼、秋刀鱼等当季的鱼。海鲜午餐套餐每天限量10份。2007年开业，入选食べログ百名店“亚洲·民族料理 TOKYO 2024”。位于离下北泽站步行约1分钟的大楼5楼，乘电梯上楼。共21个座位，可预约，可刷信用卡。周一和每月最后一个周二休息。",
      ko: "남인도 요리의 영향을 받은 해산물 카레 가게입니다. 대표 메뉴는 매일 바뀌는 해산물 카레 2종에 콩 카레, 채소, 새우 피클, 튀긴 로티, 향이 좋은 밥을 곁들인 정식으로, 연어나 꽁치 같은 제철 생선을 씁니다. 해산물 런치 세트는 하루 10인분 한정. 2007년에 문을 열었고 다베로그 백명점 '아시아·에스닉 TOKYO 2024'에 선정되었습니다. 시모키타자와역에서 걸어서 1분 정도인 건물 5층으로, 엘리베이터로 올라갑니다. 21석, 예약 가능, 신용카드 가능. 월요일과 매월 마지막 화요일 휴무.",
      ja: "南インド料理の影響を受けた海鮮カレーの店。名物は日替わりの海鮮カレー2種に豆カレー、野菜、海老のピクルス、揚げたロティ、香りのよいライスを合わせた定食で、鮭やサンマなど旬の魚を使う。海鮮ランチセットは1日10食限定。2007年開店で、食べログ百名店 アジア・エスニック TOKYO 2024に選ばれた。下北沢駅から徒歩1分ほどのビルの5階で、エレベーターで上がる。21席、予約可、カード可。月曜と毎月最終火曜休み。"
    }
  },
  {
    id: "kyu-yamu-tei",
    key: "kkmvw0ru",
    name: "Kyu Yamu Tei",
    categories: ["curry"],
    address: "東京都世田谷区代沢5-29-9 ナイスビル1F",
    lat: null, lng: null,
    photo: "kyu-yamu-tei.jpg",
    desc: {
      en: "The first Tokyo branch of Kyu Yamu Tei, a spice curry shop from Osaka, serving a keema curry that changes every month along with a Japanese-dashi soup. You can order the 'aigake' or 'zengake' combination plates, each with curry soup, and choose brown rice. It opened in July 2017. About 5 to 7 minutes on foot from Shimokitazawa Station; look for the grapevine at the entrance. Around 12 to 14 seats, no reservations, no credit cards. On weekends you take a numbered ticket and come back when your turn comes.",
      zh: "大阪香料咖喱店“旧ヤム邸”的东京1号店，供应每月更换的肉末咖喱和日式高汤汤品。可以点“あいがけ”“ぜんがけ”两种拼盘，都附咖喱汤，米饭也可选糙米。2017年7月开业。从下北泽站步行约5〜7分钟，入口的葡萄树是标志。座位约12〜14个，不能预约，不能刷卡。周末采用号码牌制，轮到时再回到店里。",
      ko: "오사카의 스파이스 카레 가게 '규야무테이(旧ヤム邸)'의 도쿄 1호점으로, 매달 바뀌는 키마 카레와 일본식 육수 수프를 냅니다. '아이가케', '젠가케' 조합 플레이트를 주문할 수 있고 둘 다 카레 수프가 함께 나오며, 밥은 현미도 고를 수 있습니다. 2017년 7월에 문을 열었습니다. 시모키타자와역에서 걸어서 5~7분, 입구의 포도나무가 표시입니다. 좌석은 12~14석 정도, 예약 불가, 카드 불가. 주말에는 번호표를 받고 순서가 되면 가게로 돌아오는 방식입니다.",
      ja: "大阪のスパイスカレー店「旧ヤム邸」の東京1号店で、月替わりのキーマカレーと和出汁のスープを出す。「あいがけ」「ぜんがけ」ができてそれぞれカレースープが付き、ご飯は玄米も選べる。2017年7月開店。下北沢駅から徒歩5〜7分で、入口のぶどうの木が目印。席は12〜14席ほど、予約不可・カード不可。土日は整理券制で、順番が来たら店に戻る。"
    }
  },

  /* ---- 隠れ家バー ---- */
  {
    id: "barnitas",
    key: "jy4kcd0i",
    name: "Barnitas",
    categories: ["bars"],
    address: "東京都世田谷区北沢2-33-11 SY-Ⅰ 2F",
    lat: null, lng: null,
    desc: {
      en: "An authentic cocktail bar with more than 180 standard cocktails; the house favorite is a Moscow Mule made with homemade ginger vodka. The name combines 'bar' with 'vanitas', a 17th-century genre of painting. The master has over 20 years behind the bar and won a merit award in the set-product category of Suntory's The Cocktail Award 2007. It is on the 2nd floor of a building about 3 minutes from the East Exit of Shimokitazawa Station. Opens at 8 pm, closed irregularly, non-smoking, PayPay accepted.",
      zh: "正统鸡尾酒吧，备有180种以上的标准鸡尾酒，常点的是用自制姜味伏特加调的莫斯科骡子。店名是“bar”和17世纪绘画类型“vanitas（虚空派）”组合而成的造词。调酒师从业20年以上，曾获三得利“The Cocktail Award 2007”指定产品部门优秀奖。位于从下北泽站东口步行约3分钟的大楼2楼。晚上8点开门，不定期休息，禁烟，可用PayPay。",
      ko: "스탠더드 칵테일을 180종 넘게 갖춘 오센틱 바로, 자주 찾는 메뉴는 직접 만든 진저 보드카로 만드는 모스코 뮬입니다. 가게 이름은 'bar'와 17세기 회화 장르 '바니타스(vanitas)'를 합친 조어입니다. 마스터는 바텐더 경력 20년 이상으로, 산토리 '더 칵테일 어워드 2007' 과제 제품 부문 우수상을 받았습니다. 시모키타자와역 동쪽 출구에서 걸어서 약 3분인 건물 2층에 있습니다. 저녁 8시 오픈, 부정기 휴무, 금연, PayPay 가능.",
      ja: "スタンダードカクテルを180種以上そろえるオーセンティックバーで、定番は自家製ジンジャーウォッカのモスコー・ミュール。店名は「bar」と17世紀の絵画ジャンル「ヴァニタス」を合わせた造語。マスターはバーテンダー歴20年以上で、サントリー「ザ・カクテルアワード2007」課題製品部門の優秀賞を受けている。下北沢駅東口から徒歩約3分のビルの2階。20時開店、不定休、禁煙、PayPay可。"
    }
  },

  /* ---- ライブ・レコードバー ---- */
  {
    id: "mona-records",
    key: "wzm3zkia",
    name: "Mona Records",
    categories: ["music"],
    address: "東京都世田谷区北沢2-13-5 伊奈ビル 3F",
    lat: null, lng: null,
    photo: "mona-records.jpg",
    desc: {
      en: "A live music space that also runs a record label, with many acoustic and pop shows. It opened in 2004 and expanded to two floors in 2009; the 2nd-floor cafe has since closed, and only the live space remains. Japanese TV once introduced it as a venue that holds memories for singer Gen Hoshino. It is on the 3rd floor of a building on the South Exit shopping street, 2 minutes from the Central or Southwest Exit of Shimokitazawa Station. One drink must be bought on entry; seated shows hold about 50 people.",
      zh: "同时经营音乐厂牌的现场演出空间，原声和流行音乐的演出较多。2004年开业，2009年扩建为两层；2楼的咖啡馆后来关闭，现在只剩演出空间。曾在电视节目中作为歌手星野源充满回忆的演出场地被介绍。位于南口商店街沿线大楼的3楼，从下北泽站中央口或西南口步行2分钟。入场时需购买一杯饮品，坐席演出约可容纳50人。",
      ko: "음악 레이블도 운영하는 라이브 공간으로, 어쿠스틱과 팝 공연이 많습니다. 2004년에 문을 열어 2009년에 두 개 층으로 넓혔는데, 2층 카페는 이후 문을 닫아 지금은 라이브 공간만 남아 있습니다. 가수 호시노 겐의 추억이 담긴 라이브 공간으로 TV에 소개된 적이 있습니다. 미나미구치 상점가에 있는 건물 3층으로, 시모키타자와역 중앙 출구·남서쪽 출구에서 걸어서 2분입니다. 입장할 때 음료 1잔 값이 필요하며, 좌석 공연은 50명 정도 들어갑니다.",
      ja: "音楽レーベルも運営するライブスペースで、アコースティックやポップスの公演が多い。2004年オープンで、2009年に2フロアへ広げたが、2階のカフェはその後閉店し、今はライブスペースだけ。星野源さんの思い出のライブスペースとしてテレビで紹介されたこともある。南口商店街沿いのビルの3階で、下北沢駅中央口・南西口から徒歩2分。入場時に1ドリンク代が必要で、着席の公演なら50名ほど入る。"
    }
  },
  {
    id: "little-soul-cafe",
    key: "sbznoqfx",
    name: "Little Soul Cafe",
    categories: ["music", "bars"],
    address: "東京都世田谷区北沢3-20-2 大成ビル2階",
    lat: null, lng: null,
    photo: "little-soul-cafe.jpg",
    desc: {
      en: "A record bar playing soul, funk, jazz and dance music from a collection of about 14,000 to 15,000 records (none are for sale). It stocks over 300 spirits, including more than 100 rums, with drinks from about ¥800. Owner Nobuo Miyamae opened it in 1999 and built the interior, including the 8-seat counter, by hand. It is on the 2nd floor of a building near Ichibangai on the North Exit side, about 4 minutes from Shimokitazawa Station. Charge ¥500 per person, cash only, open every day.",
      zh: "播放灵魂乐、放克、爵士和舞曲的黑胶酒吧，收藏约14,000〜15,000张唱片（不出售）。烈酒300种以上，其中朗姆酒超过100种，饮品约800日元起。1999年由店主宫前伸夫开设，有8个座位的吧台等内装都是他亲手做的。位于北口一番街附近大楼的2楼，从下北泽站步行约4分钟。每人收费500日元，只收现金，全年无休。",
      ko: "소울, 펑크, 재즈, 댄스 음악을 중심으로 약 14,000~15,000장의 레코드를 트는 레코드 바입니다(레코드 판매는 하지 않음). 스피릿은 300종 이상, 그중 럼만 100종이 넘고, 음료는 800엔 정도부터입니다. 1999년에 주인 미야마에 노부오 씨가 열었으며, 8석 카운터를 비롯한 내부를 직접 만들었습니다. 북쪽 출구 쪽 이치반가이 근처 건물 2층으로, 시모키타자와역에서 걸어서 4분입니다. 1인당 차지 500엔, 현금만 가능, 연중무휴.",
      ja: "ソウル、ファンク、ジャズ、ダンスミュージックを中心に、約14,000〜15,000枚のレコードをかけるレコードバー（レコードの販売はしない）。スピリッツは300種以上、うちラムは100種以上で、ドリンクは約800円から。1999年にオーナーの宮前伸夫さんが開き、カウンター8席などの内装も自分で作った。北口・一番街商店街の近くのビル2階で、下北沢駅から徒歩4分。チャージ1人500円、現金のみ、無休。"
    }
  },
  {
    id: "daisy-bar",
    key: "5mtfjnyi",
    name: "Daisy Bar",
    categories: ["music"],
    address: "東京都世田谷区北沢2-2-3 エルサント北沢B1",
    lat: null, lng: null,
    desc: {
      en: "A live music club centered on indie bands, holding about 140 people standing. It opened on March 19, 2005, and bands including Creephyp played its 10th-anniversary shows in 2015. On the 1st floor is the 60-capacity lounge 'Laguna', and the club also runs the music label 'Primitive'. It is 4 minutes on foot from the South Exit of Shimokitazawa Station, right by the South Exit shopping street; go down the stairs from the entrance to the basement. Open on show days only; see the schedule at daisybar.jp.",
      zh: "以独立乐队为主的Live House，站席约可容纳140人。2005年3月19日开业，2015年10周年时Creephyp等乐队登台演出。1楼有可容纳60人的休息室“Laguna”，还经营音乐厂牌“Primitive”。从下北泽站南口步行4分钟，就在南口商店街旁边，从入口走下楼梯就是地下1层。只在有演出的日子营业，请查看 daisybar.jp 的日程。",
      ko: "인디 밴드 중심의 라이브 하우스로, 스탠딩으로 약 140명이 들어갑니다. 2005년 3월 19일에 문을 열었고, 2015년 10주년에는 크리프하이프 등이 축하 공연을 했습니다. 1층에는 60명이 들어가는 라운지 'Laguna'가 있고, 음악 레이블 'Primitive'도 운영합니다. 시모키타자와역 남쪽 출구에서 걸어서 4분, 미나미구치 상점가 바로 근처로, 입구에서 계단을 내려간 지하 1층입니다. 공연이 있는 날만 영업하니 daisybar.jp 일정을 확인하세요.",
      ja: "インディーズのバンドを中心にしたライブハウスで、キャパはスタンディングで約140人。2005年3月19日開店で、2015年の10周年にはクリープハイプなどが出演した。1階には60人入るラウンジ「Laguna」があり、音楽レーベル「Primitive」も運営する。下北沢駅南口から徒歩4分、南口商店街のすぐ近くで、入口から階段を下りた地下1階。公演のある日だけの営業なので、daisybar.jp のスケジュールを確認。"
    }
  },
  {
    id: "basement-bar",
    key: "4k2pkjmp",
    name: "BASEMENTBAR",
    categories: ["music"],
    address: "東京都世田谷区代沢5-18-1 カラバッシュビルB1F",
    lat: null, lng: null,
    desc: {
      en: "A live music club founded in 1995 that marked its 30th anniversary in 2025, holding about 250 people standing. Its sister venue THREE is next door in the same building. In 2021 a lease problem put it at risk of moving or closing, and the two venues ran a crowdfunding campaign called 'CONTINUE PROJECT'; in 2025 the bar counter and sound system were renewed. It is in the basement of a building on Chazawa-dori, marked by the Kakuyasu liquor store's '酒' sign, 8 to 12 minutes on foot from the South Exit of Shimokitazawa Station. Open on show days.",
      zh: "1995年创办、2025年迎来30周年的Live House，站席约可容纳250人。同一栋楼的隔壁是姊妹店“THREE”。2021年因租约问题面临搬迁或关闭，与THREE一起发起了众筹“CONTINUE PROJECT”；2025年翻新了吧台和音响。位于茶泽通沿线、以酒类店KAKUYASU的“酒”字招牌为标志的大楼地下1层，从下北泽站南口步行8〜12分钟。只在有演出的日子营业。",
      ko: "1995년에 창업해 2025년에 30주년을 맞은 라이브 하우스로, 스탠딩으로 약 250명이 들어갑니다. 같은 건물 옆에 자매점 'THREE'가 있습니다. 2021년에는 계약 문제로 이전이나 폐점 가능성이 생겨 THREE와 함께 크라우드펀딩 'CONTINUE PROJECT'를 진행했고, 2025년에는 바 카운터와 음향을 새로 바꿨습니다. 차자와도리에 있는, 주류점 가쿠야스의 '酒' 간판이 표시인 건물 지하 1층으로, 시모키타자와역 남쪽 출구에서 걸어서 8~12분입니다. 공연이 있는 날 영업합니다.",
      ja: "1995年創業、2025年に30周年を迎えたライブハウスで、キャパはスタンディングで約250人。同じビルの隣に姉妹店「THREE」がある。2021年には契約の問題で移転・閉店の可能性があり、THREEとともにクラウドファンディング「CONTINUE PROJECT」を行った。2025年にはバーカウンターと音響を一新。茶沢通り沿い、カクヤスの「酒」の看板が目印のビルの地下1階で、下北沢駅南口から徒歩8〜12分。公演のある日に営業。"
    }
  },

  /* ---- 小劇場 ---- */
  {
    id: "theater-rakuen",
    key: "fr6fmx7a",
    name: "Shogekijo Rakuen",
    categories: ["theater"],
    address: "東京都世田谷区北沢2-10-18 藤和下北沢ハイタウンB棟 地下1F",
    lat: null, lng: null,
    desc: {
      en: "A basement theater of the Honda Theater Group; the companies and plays change with each run. Kazuo Honda opened it in February 2007 as 'a theater for adults'. Its roughly 70 to 90 seats sit on two sides around a pillar, so the stage is watched from two directions; on one side the ceiling is low under a loft. Turn into the street in front of Honda Theater; Rakuen is on the right, behind a green door near a sweet-potato shop with a round '芋' sign, and you go down to the basement. 3 to 5 minutes from the East Exit of Shimokitazawa Station.",
      zh: "本多剧场集团旗下位于地下的小剧场，上演的剧团和剧目每次都不同。2007年2月由本多一夫以“为大人而设的剧场”为理念开设。约70〜90个座位围绕柱子分两个方向排列，从两面观看舞台；其中一侧在阁楼下方，天花板较低。走进本多剧场前的街道，右侧就是乐园，入口是挂着圆形“芋”字招牌的红薯点心店附近的绿色门，从那里下到地下。从下北泽站东口步行3〜5分钟。",
      ko: "혼다 극장 그룹의 지하 소극장으로, 공연하는 극단과 작품은 공연마다 바뀝니다. 2007년 2월 혼다 가즈오 씨가 '어른을 위한 극장'이라는 콘셉트로 열었습니다. 약 70~90석의 객석이 기둥을 둘러싸고 두 방향으로 놓여 있어 두 면에서 무대를 보며, 한쪽은 로프트 아래라 천장이 낮습니다. 혼다 극장 앞 길로 들어서면 오른쪽에 있으며, 둥근 '芋(고구마)' 간판의 고구마 과자점 근처의 초록색 문으로 들어가 지하로 내려갑니다. 시모키타자와역 동쪽 출구에서 걸어서 3~5분.",
      ja: "本多劇場グループの地下の小劇場で、上演する劇団・演目は公演ごとに替わる。2007年2月、本多一夫氏が「大人のための劇場」というコンセプトで開いた。約70〜90席の客席が柱を囲んで2方向に並び、2面から舞台を見る造りで、片側はロフトの下で天井が低い。本多劇場の前の通りに入った右側、「芋」の丸い看板の芋菓子店の近くにある緑色の扉から地下へ降りる。下北沢駅東口から徒歩3〜5分。"
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
      en: "A small theater of the Honda Theater Group with about 80 seats, opened in November 1993; the 180-seat Ekimae Gekijo is on the same floor. Productions change with each run; shows in October 2026 had tickets at ¥3,500 to ¥4,000. It was closed from March to July 2026 for building renovation, and performances resumed by October. It is on the 3rd floor of the TARO Building on the East Exit side of Shimokitazawa Station, just past the Inokashira Line overpass, about 3 minutes on foot.",
      zh: "本多剧场集团旗下约80个座位的小剧场，1993年11月开幕；同一层还有约180个座位的“站前剧场”。剧目随每次演出更换，2026年10月的演出票价为3,500〜4,000日元。2026年3月至7月因大楼改建休馆，10月已有演出。位于下北泽站东口一侧、穿过井之头线高架桥后的TARO大楼3楼，步行约3分钟。",
      ko: "혼다 극장 그룹의 약 80석 소극장으로, 1993년 11월에 문을 열었습니다. 같은 층에 약 180석의 '에키마에 극장'이 있습니다. 작품은 공연마다 바뀌며, 2026년 10월 공연의 티켓은 3,500~4,000엔이었습니다. 2026년 3~7월에는 건물 보수 공사로 휴관했고 10월에는 공연이 있습니다. 시모키타자와역 동쪽 출구 쪽, 이노카시라선 고가 아래를 지나면 나오는 TARO 빌딩 3층으로, 걸어서 약 3분입니다.",
      ja: "本多劇場グループの約80席の小劇場で、1993年11月開場。同じフロアには約180席の駅前劇場がある。演目は公演ごとに替わり、2026年10月の公演はチケット3,500〜4,000円だった。2026年3〜7月はビルの改修工事で休館し、10月には公演がある。下北沢駅東口側、井の頭線の高架下をくぐった先のTAROビル3階で、駅から徒歩約3分。"
    }
  },
  {
    id: "geki-shogekijo",
    key: "gbco1gbl",
    name: "Geki Shogekijo",
    categories: ["theater", "cinema"],
    address: "東京都世田谷区北沢2-6-6",
    lat: null, lng: null,
    desc: {
      en: "A small theater of the Honda Theater Group, opened in September 1997, with about 100 to 130 seats; the companies and plays change with each run. It is diagonally across from Honda Theater: from the East Exit of Shimokitazawa Station (Central Exit for the Keio Inokashira Line), walk toward Village Vanguard, turn right at the first intersection, and it is on the left. Shogekijo Rakuen is in the basement across the street. There is no cloakroom or coin locker; whether bags can be left in the lobby depends on the company staging the show.",
      zh: "本多剧场集团旗下的小剧场，1997年9月开幕，约100〜130个座位，上演的剧团和剧目每次都不同。位于本多剧场的斜对面：从下北泽站东口（京王井之头线为中央口）朝Village Vanguard方向走，在第一个路口右转，就在街道左侧。街对面的地下是小剧场乐园。没有衣帽间和投币储物柜，能否在大厅寄存行李取决于演出团体。",
      ko: "혼다 극장 그룹의 소극장으로, 1997년 9월에 문을 열었고 객석은 약 100~130석이며, 공연하는 극단과 작품은 공연마다 바뀝니다. 혼다 극장의 대각선 맞은편에 있습니다. 시모키타자와역 동쪽 출구(게이오 이노카시라선은 중앙 출구)에서 빌리지 뱅가드 쪽으로 가다가 첫 교차로에서 오른쪽으로 돌면 길 왼편에 있습니다. 길 건너편 지하가 소극장 라쿠엔입니다. 클로크룸이나 코인 로커는 없고, 로비에서 짐을 맡아 주는지는 공연 단체에 따라 다릅니다.",
      ja: "本多劇場グループの小劇場で、1997年9月開場。客席は約100〜130席で、上演する劇団・演目は公演ごとに替わる。本多劇場の斜め前にあり、下北沢駅東口（京王井の頭線は中央口）からヴィレッジヴァンガード方面へ進み、最初の交差点を右に曲がった通りの左手。通りの向かいの地下が小劇場楽園。クロークやコインロッカーはなく、ロビーで荷物を預かるかは公演団体による。"
    }
  },
  {
    id: "theater-711",
    key: "w9chst34",
    name: "Theater 711",
    categories: ["theater"],
    address: "東京都世田谷区北沢1-45-15 スズナリ横丁2F",
    lat: null, lng: null,
    desc: {
      en: "A small theater of the Honda Theater Group, opened in February 2009 in the former Shimokitazawa Cinema Arton, a movie theater that closed suddenly in 2008. It still uses the cinema's original seats, about 70 to 90 of them, and the plays change with each run. It is on the 2nd floor of the same building as The Suzunari, just to its left on Chazawa-dori; enter on the left side of the building, go up the stairs, and the theater door is on the right. About 5 minutes from the East Exit of Shimokitazawa Station. A line often forms in front before curtain.",
      zh: "本多剧场集团旗下的小剧场，2009年2月在2008年突然停业的电影院“下北泽Cinema Arton”旧址开幕。至今仍沿用电影院时代的座位，约70〜90席，剧目随每次演出更换。与铃成剧场（ザ・スズナリ）在同一栋楼的2楼，位于茶泽通上铃成剧场的左边；从建物左侧入口上楼梯，右手边的门就是剧场。从下北泽站东口步行约5分钟。开演前剧场门口常常排队。",
      ko: "혼다 극장 그룹의 소극장으로, 2008년에 갑자기 문을 닫은 영화관 '시모키타자와 시네마 아톤' 자리에 2009년 2월 문을 열었습니다. 영화관 시절의 좌석을 그대로 쓰고 있으며 객석은 70~90석 정도, 작품은 공연마다 바뀝니다. 더 스즈나리와 같은 건물의 2층으로, 차자와도리에서 스즈나리의 왼쪽 옆입니다. 건물 왼쪽 입구에서 계단을 올라가면 오른쪽 문이 극장입니다. 시모키타자와역 동쪽 출구에서 걸어서 약 5분. 개연 전에는 극장 앞에 줄이 생기는 경우가 많습니다.",
      ja: "2008年に急に閉館した映画館「下北沢シネマアートン」の跡に、2009年2月に開いた本多劇場グループの小劇場。映画館時代の座席をそのまま使っていて、客席は70〜90席ほど。演目は公演ごとに替わる。ザ・スズナリと同じ建物の2階で、茶沢通り沿いのスズナリの左隣。建物左側の入口から階段を上がり、右手のドアが劇場。下北沢駅東口から徒歩約5分。開演前は劇場の前に行列ができることが多い。"
    }
  },
  {
    id: "shogekijo-b1",
    key: "rcgzflaq",
    name: "Shogekijo B1",
    categories: ["theater", "cinema"],
    address: "東京都世田谷区北沢2-8-18 北沢タウンホール 地下1階",
    lat: null, lng: null,
    desc: {
      en: "A privately run small theater that opened on February 17, 2014, the eighth venue of the Honda Theater Group in Shimokitazawa. It has about 125 to 135 seats set in an L-shape around the stage, so the audience faces it from two sides; plays change with each run. It is in the basement of Kitazawa Town Hall, the gray ward building with a bus stop in front. Inside, take the stairs, or the elevator or escalator at the back on the left, down to B1. 3 to 8 minutes on foot from the East or Central Exit of Shimokitazawa Station.",
      zh: "2014年2月17日开幕的民营小剧场，是本多剧场集团在下北泽开设的第8座剧场。约125〜135个座位以L字形围绕舞台排列，从两面观看演出，剧目随每次演出更换。位于区立设施“北泽Town Hall”（门前有公交车站的灰色大楼）的地下1层；进入大楼后走楼梯，或乘坐里面左手边的电梯、扶梯下到地下1层。从下北泽站东口或中央口步行3〜8分钟。",
      ko: "2014년 2월 17일에 문을 연 민영 소극장으로, 혼다 극장 그룹이 시모키타자와에 연 8번째 극장입니다. 약 125~135석의 객석이 무대를 L자로 둘러싸고 있어 두 면에서 무대를 보며, 작품은 공연마다 바뀝니다. 구의 시설인 기타자와 타운홀(앞에 버스 정류장이 있는 회색 건물) 지하 1층에 있습니다. 건물에 들어가 계단이나 안쪽 왼편의 엘리베이터·에스컬레이터로 지하 1층에 내려갑니다. 시모키타자와역 동쪽 출구·중앙 출구에서 걸어서 3~8분.",
      ja: "2014年2月17日開館の民営の小劇場で、本多劇場グループが下北沢で開いた8つ目の劇場。客席は約125〜135席で、舞台に対してL字形に並ぶ「2面舞台」。演目は公演ごとに替わる。区の施設・北沢タウンホール（バス停があるグレーのビル）の地下1階にあり、ビルに入ったら階段か、奥の左手にあるエレベーター・エスカレーターで降りる。下北沢駅東口・中央口から徒歩3〜8分。"
    }
  },

  /* ---- ミニシアター・お笑い ---- */
  {
    id: "tollywood",
    key: "ht2njd1o",
    name: "Tollywood",
    categories: ["cinema"],
    address: "東京都世田谷区代沢5-32-5 シェルポ下北沢2F",
    lat: null, lng: null,
    desc: {
      en: "A one-screen mini cinema with 45 seats plus one wheelchair space. It opened in December 1999 as a short-film theater and now also shows features, including work by up-and-coming Japanese directors and overseas animation. Makoto Shinkai's 'Voices of a Distant Star' premiered here. The name comes from a TV remark by comedian Tsutomu Sekine. It is on the 2nd floor of Sherpo Shimokitazawa (elevator), about 5 minutes from the Southwest Exit of Shimokitazawa Station. Closed Tuesdays. Online tickets are card only; the box office takes cash, PayPay and Setagaya Pay. An English-subtitled screening was held in 2021, but regular English subtitles could not be confirmed.",
      zh: "只有一块银幕的迷你影院，45个座位外加1个轮椅位。1999年12月作为短片专门影院开幕，现在也放映新锐日本导演的作品、海外动画等长片。新海诚导演的《星之声》就是在这里首映的。馆名来自关根勤在电视上的一句话。位于Sherpo下北泽2楼（有电梯），从下北泽站西南口步行约5分钟。周二休息。网上购票只能刷信用卡，窗口可用现金、PayPay和世田谷Pay。2021年曾有英文字幕场次，但平时是否有英文字幕无法确认。",
      ko: "스크린 1개, 좌석 45석과 휠체어석 1석의 미니 시어터입니다. 1999년 12월 단편 영화 전문관으로 문을 열었고, 지금은 신진 일본 감독의 작품, 해외 애니메이션 등 장편도 상영합니다. 신카이 마코토 감독의 '별의 목소리'가 처음 공개된 영화관입니다. 이름은 코미디언 세키네 쓰토무 씨가 TV에서 한 말에서 따왔습니다. 셰르포 시모키타자와 2층(엘리베이터 있음)으로, 시모키타자와역 남서쪽 출구에서 걸어서 약 5분. 화요일 휴관. 온라인 예매는 카드만, 창구는 현금·PayPay·세타가야Pay 가능. 2021년에 영어 자막 상영이 있었지만 평소 영어 자막 여부는 확인하지 못했습니다.",
      ja: "スクリーン1つ・45席（＋車椅子1席）のミニシアター。1999年12月に短編映画専門館として開館し、今は新進の日本人監督の作品や海外アニメーションなど長編も上映する。新海誠監督の『ほしのこえ』が初めて公開された館で、館名は関根勤さんのテレビでの発言から。シェルポ下北沢の2階（エレベーターあり）、下北沢駅南西口から徒歩約5分。火曜休み。ウェブ販売はカードのみ、窓口は現金・PayPay・せたがやPay。英語字幕付きは2021年に上映例がある。"
    }
  },
  {
    id: "k2-cinema",
    key: "79yt8hhu",
    name: "K2 Cinema",
    categories: ["cinema"],
    address: "東京都世田谷区北沢2-21-22 (tefu)lounge 2F",
    lat: null, lng: null,
    desc: {
      en: "A one-screen mini cinema with 71 seats (two wheelchair-accessible) that has run English-subtitled screenings of selected films since it opened. It opened in January 2022; the name combines its address, Kitazawa 2-chome, with K2, one of the world's highest peaks. The opening film was Ryusuke Hamaguchi's 'Wheel of Fortune and Fantasy', shown with English subtitles. It is on the 2nd floor of (tefu) lounge, directly connected to the Southwest Gate of Odakyu Line Shimokitazawa Station, at the back of the cafe on the same floor; some cafe items can be taken into the theater. Cashless only, no cash. General admission ¥1,800.",
      zh: "只有一块银幕、71个座位（其中2个可供轮椅使用）的迷你影院，自开幕以来针对部分作品举办英文字幕场次。2022年1月开幕，馆名取自所在地“北泽2丁目”和世界最高峰之一“K2”。开幕作品是滨口龙介导演的《偶然与想象》（附英文字幕）。位于与小田急线下北泽站西南检票口直接相连的“(tefu) lounge”2楼，在同层咖啡馆的里面，部分咖啡馆餐饮可带入影厅。只能无现金支付，不收现金。一般票价1,800日元。",
      ko: "스크린 1개, 71석(그중 2석은 휠체어 가능)의 미니 시어터로, 개관 때부터 작품에 따라 영어 자막 상영을 해 왔습니다. 2022년 1월에 문을 열었고, 이름은 소재지 '기타자와 2초메'와 세계 최고봉 중 하나인 'K2'에서 따왔습니다. 개관작은 하마구치 류스케 감독의 '우연과 상상'(영어 자막)이었습니다. 오다큐선 시모키타자와역 남서쪽 개찰구와 바로 이어진 '(tefu) lounge' 2층, 같은 층 카페 안쪽에 있으며 카페 메뉴 일부는 상영관에 가지고 들어갈 수 있습니다. 캐시리스 결제만 가능하고 현금은 쓸 수 없습니다. 일반 1,800엔.",
      ja: "スクリーン1つ・71席（うち2席は車椅子可）のミニシアターで、開館時から作品ごとに英語字幕付きの上映を行っている。2022年1月開館で、館名は所在地の「北沢2丁目」と世界最高峰の一つ「K2」から。開館作品は濱口竜介監督『偶然と想像』（英語字幕付き）。小田急線下北沢駅の南西改札に直結する「(tefu) lounge」の2階、同じフロアのカフェの奥にあり、カフェの一部メニューは館内に持ち込める。キャッシュレスのみで現金不可。一般1,800円。"
    }
  },
  {
    id: "shimokita-zawazawa",
    key: "onq77kwe",
    name: "Shimokita ZAWAZAWA",
    categories: ["cinema"],
    address: "東京都世田谷区北沢2-9-20 カ十ビルB1",
    lat: null, lng: null,
    desc: {
      en: "A 26-seat comedy theater that hosts free stand-up shows by young comedians every day: 'Shimokita GRIP' from Friday to Sunday and 'Shimokita GRIP DASH' from Monday to Thursday. When its former venue, Shimokita Slash, closed for a building rebuild, a crowdfunding campaign raised about ¥2.1 million from 252 backers, and it reopened here in April 2025 in the basement of a former hospital on Azuma-dori. 2 minutes from the Central Exit of Shimokitazawa Station. Shows start around 3 pm and 6 pm (also 12:30 pm on weekends); entry may be limited to the first 25 or so. Reservations via coubic/STORES.",
      zh: "只有26个座位的喜剧剧场，每天都有年轻搞笑艺人的免费演出：周五至周日是“下北GRIP”，周一至周四是“下北GRIP DASH”。原来的场地“下北Slash”因大楼改建关闭后，通过众筹从252人那里筹得约210万日元，2025年4月搬到东通商店街一家旧医院遗址的地下重新开张。从下北泽站中央口步行2分钟。演出约在下午3点和6点开始（周末另有12点半场），有时只限先到的约25人入场。可在coubic/STORES预约。",
      ko: "객석 26석의 코미디 극장으로, 젊은 개그맨들의 무료 공연을 매일 엽니다. 금~일은 '시모키타 GRIP', 월~목은 '시모키타 GRIP DASH'입니다. 이전 공연장 '시모키타 슬래시'가 건물 재건축으로 문을 닫자 크라우드펀딩으로 252명에게서 약 210만 엔을 모아, 2025년 4월 아즈마도리 상점가의 옛 병원 자리 지하로 옮겨 문을 열었습니다. 시모키타자와역 중앙 출구에서 걸어서 2분. 공연은 오후 3시, 6시 무렵 시작하며(주말은 12시 30분도 있음), 선착순 25명 정도로 입장을 제한할 때가 있습니다. 예약은 coubic/STORES에서.",
      ja: "若手芸人の入場無料のお笑いライブを毎日開く、客席26席の劇場。金〜日は「下北GRIP」、月〜木は「下北GRIP DASH」。前の会場「下北スラッシュ」がビルの建て替えで閉館し、クラウドファンディングで252人から約210万円を集めて、2025年4月にあずま通り商店街の旧病院跡の地下に移った。下北沢駅中央口から徒歩2分。15時・18時ごろ（土日は12時半も）の回があり、先着25名ほどで入場を制限することがある。予約はcoubic／STORESで。"
    }
  },

  /* ---- 古本 ---- */
  {
    id: "furuhon-bibibi",
    key: "eb4omac6",
    name: "Furuhon BIBIBI",
    categories: ["books"],
    address: "東京都世田谷区北沢1-40-8 土屋ビル1F",
    lat: null, lng: null,
    photo: "furuhon-bibibi.jpg",
    desc: {
      en: "A used bookshop with about 13,000 books, leaning toward subculture: out-of-print manga, film and theater books and philosophy, plus photo books, DVDs and children's books. It opened in January 2005; the name expresses the owner's wish for a selection that gives you a 'bi-bi-bi!' jolt the moment you walk in. Stock comes from books bought from customers, and it now also carries new books and zines. It is on the ground floor on Chazawa-dori, on the right just before The Suzunari, about 4 minutes from the East Exit of Shimokitazawa Station; outside is a glass-doored shelf of fixed-price books. Closed Tuesdays.",
      zh: "藏书约13,000册的旧书店，偏重亚文化：绝版漫画、电影和戏剧书籍、思想类书籍，还有写真集、DVD和儿童书。2005年1月开业，店名寄托了店主的愿望：希望品种齐全到让人一进门就像“哔哔哔！”被电到一样。商品都是从客人那里收购来的，现在也卖新书和ZINE。位于茶泽通沿街的1楼，在铃成剧场前面的右侧，从下北泽站东口步行约4分钟；店外有带门的均价书架。周二休息。",
      ko: "약 13,000권을 갖춘 헌책방으로, 절판 만화, 영화·연극 책, 사상서 같은 서브컬처 계열에 사진집, DVD, 아동서도 있습니다. 2005년 1월에 문을 열었고, 가게 이름에는 들어서는 순간 '비비빗!' 하고 전기가 통하는 듯한 책을 갖추고 싶다는 주인의 바람이 담겨 있습니다. 상품은 손님에게서 사들인 책이며, 요즘은 신간과 ZINE도 다룹니다. 차자와도리에 면한 1층, 스즈나리 바로 앞 오른쪽으로 시모키타자와역 동쪽 출구에서 약 4분이며, 가게 밖에 문 달린 균일가 책장이 있습니다. 화요일 휴무.",
      ja: "約13,000冊をそろえる古書店で、絶版マンガ、映画・演劇の本、思想書などのサブカル系に、写真集・DVD・児童書も並ぶ。2005年1月開業で、店名は入った瞬間「ビビビッ!」と痺れるような品ぞろえにしたいという店主の思いから。商品はお客さんから買い取ったもので、新刊やZINEも扱う。茶沢通り沿いの1階、スズナリ手前の右側で、下北沢駅東口から約4分。店外に扉付きの均一本棚がある。火曜定休。"
    }
  },
  {
    id: "honkichi",
    key: "qeuv61u7",
    name: "Honkichi",
    categories: ["books"],
    address: "東京都世田谷区北沢2-7-10 上原ビル1F",
    lat: null, lng: null,
    photo: "honkichi.jpg",
    desc: {
      en: "A general used bookshop with about 30,000 books on shelves reaching nearly to the ceiling, from novels, manga and cookbooks to psychiatry, psychology, gender studies and art. It opened in 2008 with the aim of covering everything 'from tonight's dinner menu to life's crises'; the owner worked four years at a used bookshop in Kichijoji before going independent. It faces Kitazawa Town Hall, right by the 'Kitazawa Town Hall' bus stop, about 3 minutes from the Central Exit of Shimokitazawa Station. Open Tuesday to Sunday, 12 pm to 8 pm; closed Mondays.",
      zh: "综合旧书店，约3万册书摆在几乎顶到天花板的书架上，从小说、漫画、料理书到精神医学、心理学、性别研究和美术。2008年开业，目标是经营一家涵盖“从今天的晚餐菜单到人生危机”的书店；店主在吉祥寺的旧书店工作4年后独立。位于北泽Town Hall正对面，紧邻“北泽Town Hall”公交车站，从下北泽站中央口步行约3分钟。周二至周日12:00〜20:00营业，周一休息。",
      ko: "천장 가까이까지 닿는 책장에 약 3만 권을 꽂은 종합 헌책방으로, 소설, 만화, 요리책부터 정신의학, 심리학, 젠더, 미술 책까지 있습니다. '오늘 저녁 메뉴부터 인생의 위기까지' 다루는 서점을 목표로 2008년에 문을 열었고, 주인은 기치조지의 헌책방에서 4년간 일한 뒤 독립했습니다. 기타자와 타운홀 바로 앞, '기타자와 타운홀' 버스 정류장 옆으로 시모키타자와역 중앙 출구에서 걸어서 약 3분입니다. 화~일 12:00~20:00, 월요일 휴무.",
      ja: "小説や漫画、料理の本から精神医学・心理学・ジェンダー・美術の本まで、約3万冊を天井近くまでの棚に並べる総合古書店。「今日の夕食献立から人生の危機まで」を扱う店をめざして2008年に開店した。店主は吉祥寺の古書店で4年働いて独立した。北沢タウンホールの目の前、バス停「北沢タウンホール」のすぐそばで、下北沢駅中央口から徒歩約3分。火〜日12:00〜20:00、月曜定休。"
    }
  },
  {
    id: "kosho-asu",
    key: "k12klf3u",
    name: "Kosho Ashita",
    categories: ["books"],
    address: "東京都世田谷区北沢3-21-1 1F",
    lat: null, lng: null,
    photo: "kosho-asu.jpg",
    desc: {
      en: "A used bookshop that aims to be an 'ordinary bookshop' without narrowing its focus. The owner once worked at an art-book specialist, so art books and photo books are well stocked, along with film, theater, picture books and hobby books on cooking and handicrafts. It opened in January 2017 in the shop of Shirakaba Shoin, a used bookstore that had operated in Shimokitazawa for about 70 years. It is on Shimokitazawa Ichibangai shopping street, about 7 minutes from the North Exit; there are entrances on both left and right, with book carts outside. Open 12 pm to 8 pm.",
      zh: "以不限定类型的“普通旧书店”为目标的旧书店。店主曾在美术书专门店工作，所以美术书和写真集很丰富，还有电影、戏剧、绘本以及料理、手工等兴趣类书籍。2017年1月接手在下北泽经营约70年的旧书店“白桦书院”的店面开业。店名读作“こしょあした（Kosho Ashita）”。位于下北泽一番街商店街，从下北泽站北口步行约7分钟；左右各有一个入口，店外摆着书车。营业时间12:00〜20:00。",
      ko: "장르를 좁히지 않는 '평범한 헌책방'을 목표로 하는 서점입니다. 주인이 미술서 전문점에서 일했기 때문에 미술서와 사진집이 많고, 영화·연극, 그림책, 요리·수예 같은 취미 책도 있습니다. 2017년 1월, 시모키타자와에서 약 70년 이어진 헌책방 '시라카바 서원'의 가게를 이어받아 문을 열었습니다. 가게 이름은 '고쇼 아시타'라고 읽습니다. 시모키타자와 이치반가이 상점가에 있으며 북쪽 출구에서 걸어서 7분 정도이고, 입구는 좌우 두 곳, 가게 밖에 책 왜건이 있습니다. 12:00~20:00 영업.",
      ja: "ジャンルを絞らない「普通の古本屋」をめざす古書店。店主が美術書専門店で働いていたため美術書・写真集が厚く、映画・演劇、絵本、料理・手芸など趣味の本もある。2017年1月、下北沢で約70年続いた古書店「白樺書院」の店舗を引き継いで開いた。店名の読みは「こしょあした」。下北沢一番街商店街沿いで、下北沢駅北口から徒歩7分ほど。入口は左右2カ所あり、店外にワゴンが出ている。12:00〜20:00。"
    }
  },
  {
    id: "clarice-books",
    key: "alm43wuj",
    name: "Clarice Books",
    categories: ["books"],
    address: "東京都世田谷区北沢3-26-2 2F",
    lat: null, lng: null,
    photo: "clarice-books.jpg",
    desc: {
      en: "A used bookshop strongest in philosophy and critical thought, covering ten genres including literature, art and photography, fashion and subculture. It opened in December 2013; the owner trained for about ten years at a used bookshop in Kanda Jimbocho. The name comes from Clarice Starling in 'The Silence of the Lambs', chosen because she is strong, intelligent and beautiful. It is on the 2nd floor above Gallery HANA on Ichibangai, North Exit side; the entrance is at the side of the building, so look for the '本' (book) sign and take the side stairs. Closed Mondays.",
      zh: "以哲学·思想类见长的旧书店，涵盖文学、美术·摄影、时尚、亚文化等10个类别。2013年12月开业，店主曾在神田神保町的旧书店修业约10年。店名来自电影《沉默的羔羊》中的克拉丽斯·史达琳，因为她“坚强、聪明又美丽”。位于北口一番街商店街、HANA画廊所在大楼的2楼，入口在建筑侧面：以从街上看得到的“本”字为标志，走楼侧的楼梯上去。周一休息。",
      ko: "철학·사상 분야에 특히 힘을 쏟는 헌책방으로, 문학, 미술·사진, 패션, 서브컬처 등 10개 장르를 갖추고 있습니다. 2013년 12월에 문을 열었고, 주인은 간다 진보초의 헌책방에서 약 10년간 수련했습니다. 가게 이름은 영화 '양들의 침묵'의 클라리스 스탈링이 '강하고 지적이며 아름답다'는 데서 따왔습니다. 북쪽 출구 쪽 이치반가이의 갤러리 'HANA' 건물 2층으로, 입구가 건물 옆에 있습니다. 길에서 보이는 '本' 글자를 표시 삼아 건물 옆 계단을 올라가세요. 월요일 휴무.",
      ja: "哲学・思想に力を入れ、文学、美術・写真、ファッション、サブカルチャーなど10ジャンルをそろえる古書店。2013年12月開店で、店主は神田神保町の古書店で約10年修業した。店名は映画『羊たちの沈黙』のクラリス・スターリングが「強く、知的で、美しい」ことから取った。北口・一番街商店街のギャラリー「HANA」の2階で、入口は建物の脇。通りから見える「本」の文字を目印に、ビル横の階段を上る。月曜休み。"
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
      en: "A rental gallery of about 9 square meters on Shimokitazawa Ichibangai shopping street. Exhibitors change every six days (Wednesday to Monday) and use it for shows, sales and pop-ups of handmade goods, accessories and clothing, so what you find differs each week. It is the spot where the owner first started a select shop called 'kasutela'. The front is all glass, so you can see inside from the street. 5 to 7 minutes on foot from the West Exit of Keio Inokashira Line Shimokitazawa Station. Usually closed Tuesdays; hours depend on the exhibitor.",
      zh: "位于下北泽一番街商店街、约9平方米的出租画廊。每6天（周三至周一）更换一次参展者，用于手工艺品、饰品和服装的展示、销售与快闪店，所以每周的内容都不同。这里是店主最初开精选店“kasutela”的地方。店面全是玻璃，从街上就能看到里面。从京王井之头线下北泽站西口步行5〜7分钟。主要周二休息，营业时间因参展者而异。",
      ko: "시모키타자와 이치반가이 상점가에 있는 약 9㎡의 대여 갤러리입니다. 수요일부터 월요일까지 6일 단위로 출품자가 바뀌며 핸드메이드 작품, 액세서리, 옷 등의 전시·판매나 팝업이 열려 주마다 내용이 다릅니다. 주인이 처음 셀렉트숍 'kasutela'를 시작한 곳입니다. 앞면이 통유리라 길에서 안이 보입니다. 게이오 이노카시라선 시모키타자와역 서쪽 출구에서 걸어서 5~7분. 주로 화요일 휴무이며 영업시간은 출품자에 따라 다릅니다.",
      ja: "下北沢一番街商店街沿いにある約9㎡の貸しギャラリー。水曜〜月曜の6日間ごとに出展者が替わり、ハンドメイド品やアクセサリー、服の展示・販売やポップアップが開かれるので、週ごとに中身が違う。もとは店主が最初にセレクトショップ「kasutela」を始めた場所。前面がガラス張りで、通りから中が見える。京王井の頭線下北沢駅西口から徒歩5〜7分。主に火曜休みで、営業時間は出展者による。"
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
      en: "A rental gallery used for solo, group and collaborative exhibitions; past shows have included ink painting, picture books and tea ware, and in October 2026 it hosted a solo show by Shimokitazawa-born painter Riku Harada. The owner ran a kimono shop and, delivering clothes to customers' homes, was often shown their hobby artworks, so the owner opened a place where such work could be displayed easily. The first exhibition was a father-and-son show by photographer Shinpei Asai and Ryusuke Asai. About 3 minutes on foot from the North Exit side of Shimokitazawa Station. Closed Mondays.",
      zh: "用于个展、联展和合作展的出租画廊，过去曾举办水墨画、绘本、茶器等展览，2026年10月举办了下北泽出身的画家原田陆的个展。店主原本经营和服店，给客人送衣服时常被请去看客人兴趣创作的艺术作品，于是想开一个能轻松展示作品的地方。第一场展览是摄影师浅井慎平与浅井龙介的父子展。从下北泽站北口一侧步行约3分钟。周一休息。",
      ko: "개인전, 단체전, 협업전에 쓰이는 대여 화랑으로, 지금까지 수묵화, 그림책, 다기 전시 등이 열렸고 2026년 10월에는 시모키타자와 출신 화가 하라다 리쿠 씨의 개인전이 열렸습니다. 주인은 원래 포목점을 운영했는데, 손님 집에 옷을 배달하러 갔다가 취미로 만든 작품을 보는 일이 많아 작품을 부담 없이 걸 수 있는 곳을 만들었습니다. 첫 전시는 사진가 아사이 신페이 씨와 아사이 류스케 씨의 부자전이었습니다. 시모키타자와역 북쪽 출구 쪽에서 걸어서 약 3분. 월요일 휴무.",
      ja: "個展・グループ展・コラボ展に使われる貸し画廊で、これまで水墨画・絵本・茶器などの展示があり、2026年10月には下北沢出身の画家・原田陸さんの個展が開かれた。もとは呉服店で、店主がお客さんの家に服を届けたときに趣味のアート作品を見せてもらうことが多かったことから、作品を気軽に飾れる場所としてつくった。最初の展示は写真家・浅井愼平さんと浅井竜介さんの父子展。下北沢駅北口側から徒歩約3分。月曜休み。"
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
      en: "A commercial gallery that shows and sells work by young contemporary artists, changing exhibitions, mostly solo shows, about once a month. It opened on April 1, 2022. Director Yuko Suzuki, a Shimokitazawa resident for over 30 years whose father was an art collector, started it to add art to a neighborhood known for theater, live music, vintage clothing, used books, curry and coffee. It is a glass-fronted ground-floor space on Chazawa-dori, 4 minutes from the East Exit of Shimokitazawa Station. Open 1 pm to 7 pm only during exhibitions; closing days vary by show. The website has an English page.",
      zh: "介绍并销售年轻当代艺术家作品的商业画廊，大约每月更换一次展览，以个展为主。2022年4月1日开幕。负责人铃木裕子在下北泽住了30多年，父亲是艺术收藏家；她开设这家画廊，是想为这个以戏剧、Live House、古着、旧书、咖喱和咖啡闻名的街区“加上艺术”。位于茶泽通边上的玻璃门面1楼，从下北泽站东口步行4分钟。只在展期内的下午1点至7点开放，休息日因展览而异。官网有英文页面。",
      ko: "젊은 현대 미술 작가의 작품을 소개·판매하는 커머셜 갤러리로, 대체로 한 달에 한 번 개인전을 중심으로 전시를 바꿉니다. 2022년 4월 1일에 문을 열었습니다. 시모키타자와에 30년 넘게 살아온 대표 스즈키 유코 씨는 아버지가 아트 컬렉터였으며, 연극·라이브 하우스·구제 옷·헌책·카레·커피의 동네에 '아트를 더하는' 곳으로 이 갤러리를 만들었습니다. 차자와도리에 면한 통유리 1층으로, 시모키타자와역 동쪽 출구에서 걸어서 4분. 전시 기간 중 오후 1시~7시에만 열고, 휴관일은 전시마다 다릅니다. 공식 사이트에 영어 페이지가 있습니다.",
      ja: "若手の現代アーティストの作品を紹介・販売するギャラリーで、だいたい月に1回、個展を中心に展覧会を替える。2022年4月1日開廊。下北沢に30年以上住み、父がアートコレクターだった代表の鈴木裕子さんが、演劇・ライブハウス・古着・古本・カレー・コーヒーの街に「アートを加える」場所としてつくった。茶沢通りに面したガラス張りの1階で、下北沢駅東口から徒歩4分。会期中の13〜19時だけ開き、休廊日は展示ごとに異なる。公式サイトに英語ページがある。"
    }
  },
  {
    id: "gallery-hana",
    key: "k4x1w7gb",
    name: "Gallery HANA",
    categories: ["galleries"],
    address: "東京都世田谷区北沢3-26-2 1F",
    lat: null, lng: null,
    desc: {
      en: "A gallery, open since 2006, that runs both its own curated exhibitions and rental shows, so the exhibition changes regularly. Artworks can be seen from the street through a large window, and the lighting comes in three types with adjustable brightness. It is on the ground floor facing Shimokitazawa Ichibangai, about 5 minutes from the North Exit of Shimokitazawa Station; the used bookshop Clarice Books is upstairs. Hours vary by exhibition (recent shows ran 12 pm to 7 pm, until 5 pm on the last day), and it is usually closed Tuesdays.",
      zh: "自2006年开设、同时举办自主策划展和出租展的画廊，展览定期更换。透过临街的大窗可以从外面看到作品，照明有三种，可以调节亮度。位于面向下北泽一番街的1楼，从下北泽站北口步行约5分钟；楼上2楼是旧书店“Clarice Books”。开放时间因展览而异（最近的展览为中午12点至晚上7点，最后一天到5点），通常周二休息。",
      ko: "2006년부터 이어 온 갤러리로, 기획전과 대관전을 모두 열어 전시가 정기적으로 바뀝니다. 길에 면한 큰 창으로 밖에서도 작품이 보이며, 조명은 세 종류로 밝기를 조절할 수 있습니다. 시모키타자와 이치반가이에 면한 1층으로, 시모키타자와역 북쪽 출구에서 걸어서 약 5분이며 2층은 헌책방 '클라리스 북스'입니다. 개관 시간은 전시마다 다르고(최근 전시는 낮 12시~저녁 7시, 마지막 날은 5시까지), 보통 화요일 휴관입니다.",
      ja: "2006年からある、企画展と貸し出しの両方を行うギャラリーで、展示は定期的に替わる。通りに面した大きな窓から外でも作品が見え、照明は3種類で明るさを調整できる。下北沢一番街に面した1階で、下北沢駅北口から徒歩約5分。2階は古書店「クラリスブックス」。開廊時間は展示によって異なり（直近の展示は12〜19時、最終日は17時まで）、火曜休廊のことが多い。"
    }
  },

  /* ---- アンティーク・雑貨 ---- */
  {
    id: "tokyo-retro",
    key: "pm84co98",
    name: "Tokyo Retro a.m.a. store",
    categories: ["goods"],
    address: "東京都世田谷区北沢3-34-2",
    lat: null, lng: null,
    photo: "tokyo-retro.jpg",
    desc: {
      en: "A shop of colorful, pop Showa-era furniture, appliances, lighting, tableware, toys, kitchen goods and stationery, almost all one-of-a-kind, with some Meiji- and Taisho-era antiques too. It was started by two former recycle-shop coworkers who left because that shop treated retro items too lightly, and it has been running for more than 20 years. Customers often say 'my grandmother had one of these'. It is at the far end of Shimokitazawa Ichibangai on the Kitazawa 3-chome side, 5 to 6 minutes from Shimokitazawa Station. Opens around 1 pm, closed irregularly. The online store ships within Japan only.",
      zh: "专卖昭和时代色彩鲜艳、风格流行的家具、家电、灯具、餐具、玩具、厨房杂货和文具的店，几乎都是孤品，也有明治、大正时期的旧物。由两位曾在二手回收店共事的同事开设——他们不认同那家店轻率对待复古物件的做法而独立，至今已经营20多年。客人常说“奶奶家里就有这个”。位于下北泽一番街商店街北泽3丁目一侧的尽头，从下北泽站步行5〜6分钟。下午1点左右开门，不定期休息。网店只发日本国内。",
      ko: "알록달록하고 팝한 쇼와 시대의 가구, 가전, 조명, 식기, 장난감, 주방 잡화, 문구를 모은 가게로, 거의 모두 하나뿐인 물건이며 메이지·다이쇼 시대의 옛 도구도 있습니다. 리사이클숍에서 함께 일하던 두 사람이 레트로 물건을 가볍게 다루는 가게 방침과 맞지 않아 독립해 열었고, 20년 넘게 이어지고 있습니다. 손님들에게 '할머니 집에 있던 거다'라는 말을 자주 듣는다고 합니다. 시모키타자와 이치반가이 상점가의 기타자와 3초메 쪽 끝으로, 시모키타자와역에서 걸어서 5~6분. 오후 1시쯤 열고 부정기 휴무. 온라인 스토어는 일본 국내 배송만 합니다.",
      ja: "昭和のポップでカラフルな家具・家電・照明・食器・おもちゃ・キッチン雑貨・文具を集めた店で、ほとんどが1点もの。明治・大正の古道具もある。元リサイクルショップの同僚2人が、レトロ品を軽く扱う店の方針に合わず独立して開き、20年以上続いている。お客さんからは「おばあちゃんちにあった」と言われることが多い。下北沢一番街商店街の北沢3丁目側のはずれで、下北沢駅から徒歩5〜6分。午後1時ごろから営業、不定休。オンラインストアの発送は国内のみ。"
    }
  },
  {
    id: "antique-life-jin",
    key: "ce5f6mzq",
    name: "Antique Life Jin",
    categories: ["goods"],
    address: "東京都世田谷区北沢2-30-8",
    lat: null, lng: null,
    photo: "antique-life-jin.jpg",
    desc: {
      en: "An antique goods shop with accessories, cutlery, lamps, antique glass tableware and glasses printed with beer company logos. It is said to date from 1982 and began as a secondhand-tools shop, becoming a goods shop as its stock grew. About 2 to 3 minutes from the North Exit of Shimokitazawa Station. Open 12 pm to 7 pm on weekdays and 11:30 am to 7 pm on weekends and holidays. About 2 minutes away at Kitazawa 2-35-15 is the second shop, JIN 2 (closed Sundays), focused on larger pieces such as early-Showa furniture, bookcases and low chabudai tables.",
      zh: "古董杂货店，有饰品、餐具刀叉、灯具、古董玻璃餐具和印着啤酒公司标志的玻璃杯。据介绍创立于1982年，最初是旧道具店，商品变多后成为杂货店。从下北泽站北口步行约2〜3分钟。平日12:00〜19:00，周末及节假日11:30〜19:00。步行约2分钟的北泽2-35-15还有2号店“JIN 2”（周日休息），以昭和初期的旧家具、书架、矮饭桌等大件为主。",
      ko: "액세서리, 커트러리, 램프, 앤티크 유리 식기, 맥주 회사 로고가 들어간 잔 등을 파는 앤티크 잡화점입니다. 1982년 창업으로 소개되며, 처음에는 고도구점이었다가 물건이 늘면서 잡화점이 되었습니다. 시모키타자와역 북쪽 출구에서 걸어서 2~3분. 평일 12:00~19:00, 주말·공휴일 11:30~19:00. 걸어서 2분 정도 떨어진 기타자와 2-35-15에는 쇼와 초기의 옛 가구, 책장, 밥상(차부다이) 등 큰 물건이 중심인 2호점 'JIN 2'(일요일 휴무)가 있습니다.",
      ja: "アクセサリー、カトラリー、ランプ、骨董のガラス食器、ビール会社のロゴ入りグラスなどを並べるアンティーク雑貨店。1982年創業と紹介されており、はじめは古道具店で、品が増えてから雑貨店になった。下北沢駅北口から徒歩約2〜3分。平日12:00〜19:00、土日祝11:30〜19:00。徒歩約2分の北沢2-35-15には、昭和初期の古家具や本棚・ちゃぶ台など大きめの品が中心の2号店「JIN 2」（日曜定休）がある。"
    }
  },
  {
    id: "sukonbu",
    key: "6cegalmh",
    name: "Sukonbu",
    categories: ["goods"],
    address: "東京都世田谷区北沢2-11-15 ミカン下北 A街区1階 A-101 東洋百貨店 別館内",
    lat: null, lng: null,
    photo: "sukonbu.jpg",
    desc: {
      en: "A handmade-goods shop where each artist rents one wooden box to display their work. About 480 boxes hold items by around 500 makers, such as earrings, clasp purses and pouches, with accessories making up most of the stock; even the boxes are handmade. Started in Shimokitazawa nearly 20 years ago, it moved its South Exit branch here in 2022, and the original North Exit shop closed in March 2025 when its building shut. It is inside the Toyo Hyakkaten annex in Block A of Mikan Shimokita, under the Keio Inokashira Line tracks, about a minute from the station. Open 11 am to 8 pm.",
      zh: "每位作者租下一个木箱来摆放作品的手工艺品“一箱商店”。约480个木箱里陈列着约500位作者的耳环、口金包、小袋等，饰品占了大部分，店里的箱子也是手工做的。在下北泽开了将近20年，2022年南口店搬到这里，北口的总店则在2025年3月随大楼闭馆结束营业。位于京王井之头线高架下的商业设施“Mikan下北”A区、东洋百货店别馆内，离车站步行约1分钟。营业时间11:00〜20:00。",
      ko: "작가가 나무 상자를 하나씩 빌려 작품을 진열하는 핸드메이드 '한 상자 상점'입니다. 약 480개의 상자에 작가 약 500명의 피어스, 귀걸이, 똑딱이 지갑(가마구치), 파우치 등이 놓여 있으며 대부분이 액세서리이고, 상자도 손으로 만든 것입니다. 시모키타자와에서 20년 가까이 이어 온 가게로, 2022년에 미나미구치점이 이곳으로 옮겼고 북쪽 출구의 본점은 2025년 3월 건물 폐관으로 문을 닫았습니다. 게이오 이노카시라선 고가 아래 상업시설 '미칸 시모키타' A구역의 도요햐카텐 별관 안에 있으며 역에서 걸어서 1분 정도입니다. 11:00~20:00 영업.",
      ja: "作家が木箱を1つずつ借りて作品を並べる、ハンドメイドの「1箱商店」。約480箱に約500人の作家のピアス、イヤリング、がまぐち、ポーチなどが並び、アクセサリーが大半を占める。店内の箱も手作り。下北沢で20年近く続く店で、2022年に南口店がここへ移り、北口の本店は2025年3月にビルの閉館で営業を終えた。京王井の頭線の高架下の「ミカン下北」A街区、東洋百貨店 別館の中で、駅から徒歩1分ほど。11:00〜20:00。"
    }
  },
  {
    id: "desk-labo",
    key: "6zcd516t",
    name: "DESK LABO",
    categories: ["goods"],
    address: "東京都世田谷区北沢3-19-20 reload 2-6",
    lat: null, lng: null,
    desc: {
      en: "A stationery shop themed on 'a stationery store in a European town', selling Japanese and imported stationery and desk-side interior goods. It started as a small shop near Shoin-jinja-mae, moved to Sangenjaya, and in 2021 relocated to reload, the low-rise shopping complex built on the former Odakyu Line tracks. It is in unit 2-6 on the 2nd floor of reload, about 4 minutes on foot from Shimokitazawa or Higashi-Kitazawa Station. Open 12 pm to 7 pm, closed Mondays (Tuesday if Monday is a holiday).",
      zh: "以“欧洲小镇的文具店”为主题的文具店，销售日本国内和进口的文具以及桌边的室内杂货。从松阴神社前的一家小店起步，经过三轩茶屋，2021年搬进建在小田急线旧铁道上的低层商业设施“reload”。位于reload 2楼的2-6号铺，从下北泽站或东北泽站步行约4分钟。营业时间12:00〜19:00，周一休息（遇节假日改为周二）。",
      ko: "'유럽 거리의 문방구'를 테마로 한 문구점으로, 국내외 문구와 책상 주변 인테리어 잡화를 판매합니다. 쇼인진자마에의 작은 가게에서 시작해 산겐자야를 거쳐, 2021년 오다큐선 옛 선로 자리에 생긴 저층 상업시설 'reload'로 옮겨 왔습니다. reload 2층의 2-6 구획으로, 시모키타자와역이나 히가시키타자와역에서 걸어서 약 4분입니다. 12:00~19:00 영업, 월요일 휴무(공휴일이면 화요일).",
      ja: "「ヨーロッパの街の文房具店」がテーマの文具店で、国内外の文具やデスクまわりのインテリア雑貨を扱う。松陰神社前の小さな店から始まり、三軒茶屋を経て、2021年に小田急線の線路跡にできた低層の商業施設「reload」へ移ってきた。reloadの2階、区画2-6にあり、下北沢駅または東北沢駅から徒歩約4分。12:00〜19:00、月曜定休（祝日なら火曜）。"
    }
  },
  {
    id: "sansato",
    key: "o8vpe9p0",
    name: "sansato",
    categories: ["goods"],
    address: "東京都世田谷区代沢5-36-14",
    lat: null, lng: null,
    desc: {
      en: "A three-story building that is a shop from top to bottom: the 1st floor is a cafe, the 2nd and 3rd floors carry accessories, goods, clothing and shoes by independent makers, and the 3rd floor also hosts solo shows and events. The name comes from the wish to light up the South Exit's three-way junction where people cross paths. The cafe's 'Shimokitazawa Blend' coffee is blended by the local coffee shop BOOKENDS. About 4 minutes from the Southwest Exit of Shimokitazawa Station, facing the three-way junction. Closed Mondays.",
      zh: "整栋三层楼都是店铺：1楼是咖啡馆，2楼和3楼陈列独立创作者的饰品、杂货、服装和鞋子，3楼还会举办个展等活动。店名寄托了“在下北泽南口人来人往的三岔路口点亮一盏灯”的心愿。咖啡馆的“下北泽Blend”咖啡由下北泽的咖啡店BOOKENDS调配。从下北泽站西南口步行约4分钟，就在三岔路口旁。周一休息。",
      ko: "3층 건물 전체가 가게로, 1층은 카페, 2·3층에는 개인 작가의 액세서리, 잡화, 옷, 신발이 있고 3층에서는 개인전 등도 열립니다. 가게 이름은 '사람들이 오가는 시모키타자와 남쪽 출구의 삼거리(산사로)에 불을 밝히고 싶다'는 마음에서 지었습니다. 카페의 '시모키타자와 블렌드' 커피는 시모키타자와의 커피점 BOOKENDS가 블렌딩했습니다. 시모키타자와역 남서쪽 출구에서 걸어서 약 4분, 삼거리에 면한 건물입니다. 월요일 휴무.",
      ja: "3階建ての建物全体が店で、1階はカフェ、2・3階は個人作家のアクセサリーや雑貨、服、靴を並べ、3階では個展なども開く。店名は「下北沢南口の三叉路、人々が交差するこの場所に灯を」という思いから。カフェのコーヒーは、下北沢のコーヒー店BOOKENDSがブレンドした「下北沢ブレンド」。下北沢駅南西口から徒歩約4分、南口の三叉路に面した建物。月曜定休。"
    }
  }
];
