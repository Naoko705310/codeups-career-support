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


  /* --------------------------------------------
  /* 就職実績ページのカウンター
  /* -------------------------------------------- */
// jQueryの関数。'.box'クラスの要素がビューに入ったときにイベントをトリガー
$('.box').on('inview', function(event, isInView) {
  // 要素がビューに入った場合
  if (isInView) {
    // '.number'クラスの子要素を見つける
    $(this).find('.number').each(function() {
      var $this = $(this);
      // カウンターアニメーションを実行
      $({ Counter: 0 }).animate({ Counter: parseInt($this.text()) }, {
        duration: 2000, // アニメーションの持続時間（2秒）
        easing: 'swing', // アニメーションのイージング（swing）
        step: function() {
          // アニメーションの各ステップでカウンターの値を更新
          $this.text(Math.ceil(this.Counter));
        }
      });
    });
  }
});

/* --------------------------------------------
/* お問い合わせフォーム
/* -------------------------------------------- */




}); // この閉じタグは消さない！！！！！