jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* --------------------------------------------
  /* ハンバーガーメニュー
  /* -------------------------------------------- */

  // ハンバーガーメニューのクリックイベント
  $(".js-hamburger").on("click", function (event) {
    event.preventDefault(); // デフォルトのイベント行動をキャンセル
    event.stopImmediatePropagation(); // イベント伝播の即時停止
    console.log("Hamburger clicked");

    if ($(this).hasClass("is-open")) {
      console.log("Menu is open, now closing...");
      closeDrawerMenu();
    } else {
      console.log("Menu is closed, now opening...");
      openDrawerMenu();
    }
  });

  // ロゴ画像のクリックイベントを設定
  const headerLogo = document.getElementById('header-logo');
  if (headerLogo) {
    headerLogo.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('ヘッダーロゴがクリックされました');
      // ここにイベント処理のコードを追加
    });
  }

  // ドロワーメニューを開く関数
  function openDrawerMenu() {
    console.log("Opening drawer menu...");
    $(".js-drawer-menu").fadeIn();
    $(".js-hamburger").addClass("is-open");
    $("body").css("overflow", "hidden");
    $(".header-logo img").attr("src", "./assets/images/common/logo-sp.png"); // ロゴ画像を変更
  }

  // ドロワーメニューを閉じる関数
  function closeDrawerMenu() {
    console.log("Closing drawer menu...");
    $(".js-drawer-menu").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $("body").css("overflow", "auto");
    $(".header-logo img").attr("src", "./assets/images/common/logo.png"); // ロゴ画像を元に戻す
  }

  // 画面幅が768pxを超えたらメニューを閉じる
  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      if ($(".js-hamburger").hasClass("is-open")) {
        console.log("Window resized to more than 768px, closing menu...");
        closeDrawerMenu();
      }
    }
  });

  // ページ読み込み時に画面幅が768pxを超えたらメニューを閉じる
  if ($(window).width() > 768) {
    if ($(".js-hamburger").hasClass("is-open")) {
      console.log("Page loaded with width more than 768px, closing menu...");
      closeDrawerMenu();
    }
  }

  // button--sp-navのクリックイベント
  $(".button--sp-nav").on("click", function () {
    console.log("SP Nav button clicked, closing menu...");
    closeDrawerMenu();
  });

  /* --------------------------------------------
  /* お問い合わせフォーム
  （訂正で前のページに戻った時、入力内容をセッションストレージに保持する）
  /* -------------------------------------------- */

  // const $form = $('form');
  // const $inputs = $form.find('input, textarea');

  // // フォームのデータをセッションストレージに保存
  // $inputs.on('input', function() {
  //   $inputs.each(function() {
  //     sessionStorage.setItem($(this).attr('name'), $(this).val());
  //   });
  // });

  // // セッションストレージからデータを復元
  // $inputs.each(function() {
  //   const value = sessionStorage.getItem($(this).attr('name'));
  //   if (value) {
  //     $(this).val(value);
  //   }
  // });

  // // フォームが正常に送信されたら、セッションストレージをクリアする
  // const $form = $('form');
  // $form.on('submit', function() {
  //   sessionStorage.clear();
  // });

}); // この閉じタグは消さない！！！！！