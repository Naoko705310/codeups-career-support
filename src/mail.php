<?php
// PHPのタイムゾーン設定
date_default_timezone_set('Asia/Tokyo');

// メール送信先（管理者のメールアドレス）
$to = "naokos79@naoko-test.site";

// サイトのトップページのURL（送信後にトップページへ戻るボタンのリンク先）
$site_top = "https://www.naoko-test.site/career-support";

// 送信後にリダイレクトするサンクスページのURL
$thanksPage = "https://naoko-test.site/career-support/contact/thanks.html";

// フォームから送信されたデータを取得
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email = isset($_POST['Email']) ? htmlspecialchars($_POST['Email']) : '';
$address = isset($_POST['address']) ? htmlspecialchars($_POST['address']) : '';
$tel = isset($_POST['tel']) ? htmlspecialchars($_POST['tel']) : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

// メールの件名
$subject = "ホームページのお問い合わせ";

// メールの本文
$body = "お名前: $name\n";
$body .= "メールアドレス: $email\n";
$body .= "住所: $address\n";
$body .= "電話番号: $tel\n";
$body .= "お問い合わせ詳細:\n$message\n";

// メールのヘッダー
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// メール送信処理
if (mail($to, $subject, $body, $headers)) {
    // 送信成功時にサンクスページへリダイレクト
    header("Location: $thanksPage");
    exit;
} else {
    // 送信失敗時にエラーメッセージを表示
    echo "メール送信に失敗しました。";
    echo "<br><a href='$site_top'>トップページに戻る</a>";
}
?>
