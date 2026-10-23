/*
 * サイト全体の設定。数字を変えるときはここだけ直す。
 */
window.CONFIG = {
  // サービス名（仮）。決まったらここを書き換える
  siteName: "Shimokita Code Hunt",

  // お店のQRを読んだとき、お店からこの距離（m）以内なら「来店」とみなす
  radiusMeters: 80,

  // false にすると位置情報を確かめずに記録する（動作確認用。公開時は true）
  requireLocation: true
};
