/*
 * サイト全体の設定。数字や名前を変えるときはここだけ直す。
 */
window.CONFIG = {
  // サービス名（仮）。決まったらここを書き換える
  siteName: "Shimokita Code Hunt",

  // 運営者（言語ごとの表記）と連絡先。ページ下と「このサイトについて」に出る
  operator: {
    en: "Koichiro Shindo",
    zh: "新藤光一郎",
    ko: "신도 고이치로",
    ja: "新藤光一郎"
  },
  contact: "shindokoichiro@gmail.com",

  // 種類ごとの写真を決めたいときだけ書く（例 vintage: "images/shops/kimama.jpg"）。書かなければお店の写真から自動で選ぶ
  stylePhotos: {},

  // お店のQRを読んだとき、お店からこの距離（m）以内なら「来店」とみなす
  radiusMeters: 80,

  // false にすると位置情報を確かめずに記録する（動作確認用。公開時は true）
  requireLocation: true
};
