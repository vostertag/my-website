$( document ).ready(function() {

  $(".link-header").hover(function () {
    $(this).addClass("animated pulse");
  },
  function () {
    $(this).removeClass("animated pulse");
  });

  $(".logo-header img").hover(function () {
    $(this).addClass("animated swing");
  },
  function () {
    $(this).removeClass("animated swing");
  });

  var $header = $("header");
  var $content = $(".landing-infos");
  var $window = $(window).on("resize", function(){
  var height = $(this).outerHeight() - $header.outerHeight();
  $content.height(height);
  $content.css("margin-top", $header.outerHeight());
  }).trigger("resize");

  $(document).scroll(function() {
    if ($(document).scrollTop() > $("header").height()) {
      $(".logo-header img").attr("class", "logo-scroll");
      $("header").addClass("header-scroll");
      $("#back-to-top").css("display", "block");
      $("#back-to-top").removeClass("animated bounceOut");
      $("#back-to-top").addClass("animated bounceIn");
    } else {
      $(".logo-header img").attr("class", "logo-top");
      $("header").removeClass("header-scroll");
      $("#back-to-top").removeClass("animated bounceIn");
      $("#back-to-top").fadeOut();
    }
  });

  $("#back-to-top").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $('[data-toggle="tooltip"]').tooltip();

});
