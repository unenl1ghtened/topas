jQuery(document).ready(function () {
  jQuery(".phone-inp").mask("8 (999) 999-99-99");

  $('a[href*="#"]').bind("click", function (e) {
    var anchor = $(this);
    if ($(window).width() > "991") {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 0,
          },
          1000
        );
    } else {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top,
          },
          1000
        );
    }
    e.preventDefault();
  });

  $(".team__slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 2,
    nav: true,
    responsiveClass: true,
    // autoHeight:true,
    navText: [
      "<img src='img/brands/left.svg'>",
      "<img src='img/brands/right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
        dots: true,
      },
      768: {
        items: 1,
        nav: false,
        dots: true,
      },
      991: {
        items: 2,
        nav: true,
      },
    },
  });

  $(".video__m").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    items: 2,
    nav: true,
    navText: [
      "<img src='img/brands/left.svg'>",
      "<img src='img/brands/right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      768: {
        items: 2,
        nav: false,
        loop: true,
      },
      1000: {
        items: 2,
        nav: true,
        // loop:false,
        dots: false,
      },
    },
  });

  $(".brands").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    autoWidth: true,
    dots: false,
    center: true,
    navText: [
      "<img src='img/brands/left.svg'>",
      "<img src='img/brands/right.svg'>",
    ],
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: true,
      },
      768: {
        items: 3,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3,
        nav: true,
        dots: false,
      },
    },
  });

  $(".job__slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    navText: [
      "<img src='img/brands/left.svg'>",
      "<img src='img/brands/right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3,
        nav: true,
        dots: true,
      },
    },
  });

  $(".sert__slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    items: 3,
    dots: false,
    nav: true,
    // autoHeight:true,
    navText: [
      "<img src='img/brands/left.svg'>",
      "<img src='img/brands/right.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
        nav: false,
        dots: true,
      },
      1000: {
        items: 3,
        nav: true,
        // loop:false
      },
    },
  });

  $(".question__block-title").click(function () {
    $(this).parent().find(".question__answer").toggle(100);
    if ($(this).find("img").hasClass("trr")) {
      $(this).find("img").removeClass("trr");
    } else {
      $(this).find("img").addClass("trr");
    }
  });

  $(".header__button").click(function () {
    $("#bg_modal").fadeIn(300);
    $("#menu").fadeIn(600).css("display", "flex");
  });
  $("#bg_modal, .menu__close, .nav_ul a").click(function () {
    $("#bg_modal").fadeOut(600);
    $("#menu").fadeOut(300);
    $(".order").fadeOut(300);
    $(".orderrr").fadeOut(300);
    $(".order_phone").fadeOut(300);
    $("#quiz").removeClass("quiz_pop");
    $(".main-btn").show(200);
  });

  $(".btn_order").click(function () {
    var dd = $(this).parent().find(".catalog__prod-title").html();
    $("#septik").val(dd);
    $(".order").fadeIn(300);
    $("#bg_modal").fadeIn(600);
  });

  $(".btn_order").click(function () {
    var dd = $(this).parent().find(".catalog__prod-title").html();
    $(".order1").fadeIn(300);
    $("#bg_modal").fadeIn(600);
  });

  $(".btn_order").click(function () {
    var dd = $(this).parent().find(".catalog__prod-title").html();
    $(".order2").fadeIn(300);
    $("#bg_modal").fadeIn(600);
  });

  $(".btn_orderrr").click(function () {
    var dd = $(this).parent().find("").html();
    $(".orderrr").fadeIn(300);
    $("#bg_modal").fadeIn(600);
  });

  $(".header__order").click(function () {
    $(".order_phone").fadeIn(300);
    $("#bg_modal").fadeIn(600);
  });

  var bLazy = new Blazy({
    breakpoints: [
      {
        width: 420, // Max-width
        src: "data-src-small",
      },
    ],
    success: function (element) {
      setTimeout(function () {
        // We want to remove the loader gif now.
        // First we find the parent container
        // then we remove the "loading" class which holds the loader image
        var parent = element.parentNode;
        parent.className = parent.className.replace(/\bloading\b/, "");
      }, 200);
    },
  });

  jQuery(".btn-more-cat").click(function () {
    if (jQuery(".catalog__block-1").is(":visible") == true) {
      jQuery(".catalog__block-2").fadeIn(300);
      jQuery(".btn-more-cat").fadeOut(300);
    } else {
      jQuery(".catalog__block-1").fadeIn(300);
    }
  });

  jQuery(".team__slider-img, .sert__slider-img, .job__slider-img").fancybox({
    loop: true,
  });

  jQuery(function () {
    let data = sessionStorage.getItem("quiz_pop");
    if (data !== "on") {
      setTimeout(function () {
        jQuery("#bg_modal").fadeIn(100);
        jQuery("#quiz").addClass("quiz_pop");
      }, 15000);
      sessionStorage.setItem("quiz_pop", "on");
    }
  });

  jQuery(function () {
    jQuery(".main-btn").click(function () {
      jQuery("#bg_modal").fadeIn(100);
      jQuery("#quiz").addClass("quiz_pop");
      jQuery(this).hide(200);
    });
  });
});
