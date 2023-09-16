// ----------------------------------top page button
$(function () {
  var pagetop = $('.pagetop');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({
      scrollTop: 0 //ページトップまでスクロール
    }, 500); //ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false; //リンク自体の無効化
  });
});

//-------------------------------------- slider
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  dots: false,
  arrows: false,

});


// ----------------------------------hamburger menu
  $(function(){
    $('#nav-toggle').click(function () {
      $('body').toggleClass('open');
    });
 });


//  --------------------------------------modal
// コース画像モーダル表示イベント
$(".modal img").click(function () {
  // まず、クリックした画像の HTML(<img>タグ全体)を#frayDisplay内にコピー
  $("#grayDisplay").html($(this).prop("outerHTML"));
  //そして、fadeInで表示する。
  $("#grayDisplay").fadeIn(200);
  return false;
});

// コース画像モーダル非表示イベント
// モーダル画像背景 または 拡大画像そのものをクリックで発火
$("#grayDisplay").click(function () {
  // 非表示にする
  $("#grayDisplay").fadeOut(200);
  return false;
});

