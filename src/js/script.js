jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* --------------------------------------------
  /* ハンバーガーメニュー
  /* -------------------------------------------- */

//ヘッダーロゴの画像パスを更新する関数
function updateHeaderLogo(isOpen) {
  var isContactPage = window.location.pathname.includes('/contact/');
  var pathPrefix = isContactPage ? '../assets/images/common/' : './assets/images/common/';
  var logoSrc = isOpen ? pathPrefix + 'logo-sp.png' : pathPrefix + 'logo.png';
  $('#js-header-logo').attr('src', logoSrc);
}

  // ハンバーガーメニューのクリックイベント
  $('.js-hamburger').click(function() {
    // ハンバーガーアイコンのアニメーション
    $(this).toggleClass('is-open');
    
    // ドロワーメニューの開閉
    if ($('.js-drawer-menu').hasClass('is-open')) {
      $('.js-drawer-menu').removeClass('is-open').slideUp();
      updateHeaderLogo(false); // ロゴの更新
      $('body').css('overflow', 'auto');
    } else {
      $('.js-drawer-menu').addClass('is-open').slideDown();
      updateHeaderLogo(true); // ロゴの更新
      $('body').css('overflow', 'hidden');
    }
  });

  // 画面幅が768pxを超えた時の処理
  $(window).resize(function() {
    if ($(window).width() > 768) {
      $('.js-drawer-menu').removeClass('is-open').css('display', 'none');
      updateHeaderLogo(false); // ロゴの更新
      $('.js-hamburger').removeClass('is-open'); // ハンバーガーアイコンのリセット
      $('body').css('overflow', 'auto'); // スクロール禁止の解除
    }
  });

  // 初期表示時の画面幅チェック
  if ($(window).width() > 768) {
    $('.js-drawer-menu').removeClass('is-open').css('display', 'none');
    updateHeaderLogo(false); // ロゴの更新
    $('.js-hamburger').removeClass('is-open'); // ハンバーガーアイコンのリセット
    $('body').css('overflow', 'auto'); // スクロール禁止の解除
  }

  // 元のコード

  // // ヘッダーロゴの画像パスを更新する関数
  // function updateHeaderLogo(type) {
  //   var pathPrefix = window.location.pathname.includes('/contact/') ? '../assets/images/common/' : './assets/images/common/';
  //   var logoSrc = type === 'sp' ? pathPrefix + 'logo-sp.png' : pathPrefix + 'logo.png';
  //   $('#header-logo img').attr('src', logoSrc);
  // }

  // // ハンバーガーメニューのクリックイベント
  // $('.js-hamburger').click(function() {
  //   // ハンバーガーアイコンのアニメーション
  //   $(this).toggleClass('is-open');
    
  //   // ドロワーメニューの開閉
  //   if ($('.js-drawer-menu').hasClass('is-open')) {
  //     $('.js-drawer-menu').removeClass('is-open').slideUp();
  //     $('#header-logo img').attr('src', './assets/images/common/logo.png');
  //     $('body').css('overflow', 'auto');
  //   } else {
  //     $('.js-drawer-menu').addClass('is-open').slideDown();
  //     $('#header-logo img').attr('src', './assets/images/common/logo-sp.png');
  //     $('body').css('overflow', 'hidden');
  //   }
  // });

  // // 画面幅が768pxを超えた時の処理
  // $(window).resize(function() {
  //   if ($(window).width() > 768) {
  //     $('.js-drawer-menu').removeClass('is-open').css('display', 'none');
  //     $('#header-logo img').attr('src', './assets/images/common/logo.png');
  //     $('.js-hamburger').removeClass('is-open'); // ハンバーガーアイコンのリセット
  //     $('body').css('overflow', 'auto'); // スクロール禁止の解除
  //   }
  // });

  // // 初期表示時の画面幅チェック
  // if ($(window).width() > 768) {
  //   $('.js-drawer-menu').removeClass('is-open').css('display', 'none');
  //   $('#header-logo img').attr('src', './assets/images/common/logo.png');
  //   $('.js-hamburger').removeClass('is-open'); // ハンバーガーアイコンのリセット
  //   $('body').css('overflow', 'auto'); // スクロール禁止の解除
  // }





}); // この閉じタグは消さない！！！！！