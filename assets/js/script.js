$(".nav-link").click(function (e) {
  $(".navbar-toggler").click();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $(".navbar").css("paddingTop", "9px");
    $(".navbar-brand").css("color", "white");
    $(".nav-link").css("color", "white");
    $(".bg-blueviolet").css("backgroundColor", "blueviolet");
    $(".navbar-toggler").css("display", "block");
    $(".navbar-brand").hover(
      function () {
        $(this).css("color", "rgba(255, 255, 255, 0.75)");
      },
      function () {
        $(this).css("color", "white");
      }
    );
    $(".nav-link").hover(
      function () {
        $(this).css("color", "rgba(255, 255, 255, 0.75)");
      },
      function () {
        $(this).css("color", "white");
      }
    );
  } else if ($(this).scrollTop() == 0) {
    $(".navbar").css("paddingTop", "40px");
    $(".navbar-brand").css("color", "#625082");
    $(".nav-link").css("color", "#625082");
    $(".bg-blueviolet").css("backgroundColor", "");
    $(".navbar-toggler").css("display", "none");
    $(".navbar-brand").hover(
      function () {
        $(this).css("color", "rgba(255, 255, 255, 0.75)");
      },
      function () {
        $(this).css("color", "#625082");
      }
    );
    $(".nav-link").hover(
      function () {
        $(this).css("color", "rgba(255, 255, 255, 0.75)");
      },
      function () {
        $(this).css("color", "#625082");
      }
    );
  }
});
