/*
 * サイト全体の設定。数字や名前を変えるときはここだけ直す。
 */
window.CONFIG = {
  // サイト名。変えるときはここと index.html の <title> を書き換える
  siteName: "Shimokita Backstreets",

  // 運営者（言語ごとの表記）と連絡先。ページ下と「このサイトについて」に出る
  operator: {
    en: "Koichiro Shindo",
    zh: "新藤光一郎",
    "zh-Hant": "新藤光一郎",
    ko: "신도 고이치로",
    ja: "新藤光一郎"
  },
  contact: "shindokoichiro@gmail.com",

  // 種類ごとの写真を決めたいときだけ書く（例 vintage: "images/shops/kimama.jpg"）。書かなければお店の写真から自動で選ぶ
  stylePhotos: {}
};
