jQuery(function ($) {
  // ページトップボタン
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // ctaボタン
  jQuery(function () {
    var footer = $(".p-footer").innerHeight(); // footerの高さを取得

    window.onscroll = function () {
      var point = window.pageYOffset; // 現在のスクロール地点
      var docHeight = $(document).height(); // ドキュメントの高さ
      var dispHeight = $(window).height(); // 表示領域の高さ

      if (point > docHeight - dispHeight - footer) {
        // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
        $(".p-cta__button1, .p-cta__button2").fadeOut();
      } else {
        $(".p-cta__button1, .p-cta__button2").fadeIn();
      }
    };
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // フェードイン
  $(document).ready(function () {
    $(".fade-in-ready").addClass("scroll-in");
  });

  jQuery(function ($) {
    var fadeIn = $(".fade-in");
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });

  // ハンバーガーメニュー;
  $(".p-header__hamburger").click(function () {
    $(this).toggleClass("is-active");
    // bodyに「.active」class付け外し
    $("body").toggleClass("active");
    $(".js-drawer").fadeToggle();
  });
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".p-header__logo, .p-header__nav-item a").click(function () {
      $(".p-header__hamburger").removeClass("is-active");
      $("body").removeClass("active");
      $(".js-drawer").fadeOut();
    });
  }

  // アコーディオンメニュー
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(function () {
      $(".js-accordion-title").on("click", function () {
        $(".p-header__drop-list").slideToggle(400);
        $(this).toggleClass("open", 400);
      });
      $(".p-header__logo, .p-header__nav-item a, .p-header__drop-item a").on(
        "click",
        function () {
          $(".p-header__drop-list").slideUp();
        }
      );
    });
  }
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,

  // autoplay: {
  //   delay: 0,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },

  speed: 5000,

  slidesPerView: 1.7,
  spaceBetween: 20,

  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
