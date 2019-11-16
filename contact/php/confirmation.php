<!-- Java Scriptで行うとセキュリティー上の問題があるため全てphp上で行う方が良いjsのみで書くのは危険 -->
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

<form action="submit.php" method="post" name="myform">

 
<dl class="clear-flex">
  <dt>
      <label for="company-name">
      <span class="Sente-contact">会社名</span>
      <span class="careful">※</span>
      </label>
  </dt>

  <dd>
    <input name="corporate-name" type="text" id="company-name" placeholder="Sente." >
  </dd>
</dl>

<dl class="clear-flex">
    <dt>
      <label for="company-names">
          <span class="Sente-contact">お名前</span>
        <span class="careful">※</span>
      </label>
        </dt>

      <dd>
        <input type="text"id="company-names" placeholder="性" name="family-name">
        　　
        <input type="text"id="company-names" placeholder="名" name="first-name">
      </dd>
</dl>

<dl class="clear-flex">
  <dt>
    <label for="company-names">
    <span class="Sente-contact">お名前(フリガナ)</span><span class="careful">※</span>
  </label>
  </dt>
  <dd>
    <input name="family-name-kana" type="text" id="company-names" placeholder="セイ">　　　
    <input name="first-name-kana"type="text" id="company-names" placeholder="メイ">
  </dd>
</dl>


<dl class="clear-flex">
  <dt>
    <label for="company-name">

    <span class="Sente-contact">電話番号</span>
    <span class="careful">※</span>
  </label>
  </dt>
  <dd>
    <input name="phone" type="text" id="company-name" placeholder="080-××××-××××">
  </dd>
</dl>


<dl class="clear-flex">
    <dt>
        <label for="company-name">
      <span class="Sente-contact">メールアドレス</span>
      <span class="careful">※</span>
    </label>
    </dt>
    <dd>
     <input name="address" type="text" id="company-name" placeholder="××××@example.jp">
  </dd>
</dl>


<dl class="clear-flex">
  <dt>
      <label for="company-name">
      <span class="Sente-contact">お問い合わせ項目<span>
      <span class="careful">※</span>
    </label>
      </dt>
    
    <dd>
      <input name="inquiry" type="text" id="company-name" placeholder="選択してください">
    </dd>
  </dl>
  

<dl class="clear-flex">

    <dt>
        <label for="company-name">
      <span class="Sente-contact">お問い合わせ内容</span><span class="careful">※</span>
    </label>
    </dt>

    <dd>
      <input name="inquiry-content" type="text" id="company-name" placeholder="選択して下さい">
    </dd>
  </dl>




<div class="clear-flex-button">
    <input type="submit" id="submit-button" value="Send" onclick="check_contactform()">
</div>
</form>
</body>
</html>