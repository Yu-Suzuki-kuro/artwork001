function check_contactform() {
  // 会社の名前
  var corporatename = $('input[name="corporate-name"]').val();
  // 名前(漢字 性)
  var familyname = $('input[name="family-name"]').val();
   // 名前(漢字 名)
   var firstname = $('input[name="first-name"]').val();
    // 名前(フリガナ 性)
  var familynamekana = $('input[name="family-name-kana""]').val();
   // 名前(フリガナ 名)
   var firstnamekana = $('input[name="first-name-kana"]').val();
  // メールアドレス
  var address = $('input[name="address"]').val();
  // 電話番号
  var tel = $('input[name="tel"]').val();
  // お問い合わせ項目
  var otoiawaselist = $('textarea[name="inquiry"]').val();
  // お問い合わせ
  var otoiawase = $('textarea[name="inquiry-content"]').val();

  // エラーメッセージ
  var errmsg = "";
  
	if(corporatename == "") {
		errmsg = "お名前を入力して下さい\n";
	}
	if(familyname == "") {
		errmsg = errmsg + "漢字(性)を入力して下さい\n";
  }
  if(firstname == "") {
		errmsg = errmsg + "漢字(名)を入力して下さい\n";
  }
  if(familynamekana == "") {
		errmsg = errmsg + "フリガナ(セイ)を入力して下さい\n";
  }
  if(firstnamekana == "") {
		errmsg = errmsg + "フリガナ(メイ)を入力して下さい\n";
	}
	if(address == "") {
		errmsg = errmsg + "メールアドレスを入力して下さい\n";
  }
  // メールアドレスの確認＠がついてるかなど
	if(!address.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
		errmsg = errmsg + "メールアドレスをご確認下さい\n";
	}
	if(tel == "") {
		errmsg = errmsg + "電話番号を入力して下さい\n";
  }
  if(otoiawaselist == "") {
		errmsg = errmsg + "お問い合わせ項目を入力して下さい\n";
	}
	if(otoiawase == "") {
		errmsg = errmsg + "お問い合わせ内容を入力して下さい\n";
	}
	if(errmsg != "") {
		alert(errmsg);
		return false;
	}
	$('form[name="myform"]').submit();
}

  