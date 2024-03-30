// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!

  // アニメーションを適用する要素の設定
  const items = document.querySelectorAll(".product-list");

  // GSAPのタイムラインを作成
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".product-lists", // トリガーとなる要素
      scrub: true, // スクロールに応じてアニメーション
      pin: true, // トリガー要素を固定
      pinSpacing: false, // 固定時のスペーシングを無効
      start: "top top", // トリガーの開始条件
      endTrigger: ".footer", // アニメーション終了のトリガー要素
      end: "top bottom" // 終了条件
    }
  });

  // 各アイテムに対してアニメーションを適用
  items.forEach((item, index) => {
    if (index !== items.length - 1) { // 最後のアイテム以外に適用
      // 初期状態を設定
      gsap.set(item, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });

      // タイムラインにアニメーションを追加
      timeline.to(item, {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)", // クリップパスのアニメーション
        duration: 1 // アニメーションの期間
      });
    }
  });
});

