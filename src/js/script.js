
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  /* --------------------------------------------
  /* お問い合わせフォーム（バリデーション）
  /* -------------------------------------------- */
  function validateForm() {
    let hasError = false;
    $('.input-area, .checkbox-input').removeClass('errored');
    $('.js-error-required, .js-checkbox-error, .js-radio-error, .js-privacy-error').text('');
    $('#js-error-message').hide(); // エラーメッセージを非表示にする

    // 必須テキストフィールドのバリデーション	
    // 入力が無いとき、各項目の下とボタンの下にメッセージを出す。
    $('.required').each(function() {	
    if ($(this).val().trim() === '') {	
    $(this).addClass('errored');	
    $(this).next('.js-error-required').text('※入力必須項目です');	
    $('#js-error-message').show(); // ボタンの下にエラーメッセージを表示
    hasError = true;	
    } else {	
      $(this).removeClass('errored'); // エラースタイルを削除
      $(this).css('color', ''); // 文字色をデフォルトに戻す
    }	
    });	
    // チェックボックスのバリデーション	
    if ($('input[name="checkbox-name"]:checked').length === 0) {	
    $('.js-checkbox-error').text('※少なくとも一つ選択してください');	
    hasError = true;	
    }	

    // 個人情報の取り扱いについてのチェックボックスバリデーション	
    if (!$('input[name="checkbox-name-agree"]:checked').length) {	
    $('.js-privacy-error').text('※個人情報保護方針に同意してください。');	
    hasError = true;	
    }

    // ラジオボタン（セット１）のバリデーション
    if ($('input[name="radio-name-1"]:checked').length === 0) {
        $('.js-radio-error').first().text('※選択してください');
        hasError = true;
    }

    // ラジオボタン（セット２）のバリデーション
    if ($('input[name="radio-name-2"]:checked').length === 0) {
        $('.js-radio-error').last().text('※選択してください');
        hasError = true;
    }

  // セレクトボックス-01のバリデーション
  if ($('#prefecture').val() === '') {
    $('#prefecture').addClass('errored');
    // エラーメッセージの追加
    $('#prefecture').next('.js-select-error').text('※お住まいの地域を選択してください');
    $('#js-error-message').show(); // エラーメッセージを表示
    hasError = true;
  } else {
    $('#prefecture').removeClass('errored');
    // エラーメッセージをクリア
    $('#prefecture').next('.js-select-error').text('');
  }

  // エラーがある場合は送信ボタンを非アクティブに
  if (hasError) {
      $('#js-submit').addClass('disabled').prop('disabled', true);
  } else {
      $('#js-submit').removeClass('disabled').prop('disabled', false);
      $('#js-error-message').hide(); // 全ての入力が正しければエラーメッセージを非表示にする
  }

    return !hasError; // ここでエラーの有無に基づいて true または false を返す
  }

  // 送信ボタンクリック時の処理
  $('#js-submit').click(function(e) {
    e.preventDefault();
    if (validateForm()) {
        // バリデーション成功時にページ遷移（要確認：遷移先は適宜変更）
        window.location.href = '../contact-thanks/index.html';
    }
  });

// 入力フィールドの変更を監視
$('.required, .checkbox-input, input[type="radio"], #prefecture').on('change input', function() {
  validateForm();
});

});//この閉じタグは消さない！！！！！
