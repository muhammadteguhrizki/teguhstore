$(document).ready(function () {
  var btt = $('.back-to-top');

  btt.on('click', function (e) {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      500
    );
    e.preventDefault();
  });

  $(window).on('scroll', function () {
    var self = $(this),
      height = self.height(),
      top = self.scrollTop();

    if (top > height) {
      if (!btt.is(':visible')) {
        btt.show();
      }
    } else {
      btt.hide();
    }
  });
});
