(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
  }); // end DOM ready
})(jQuery);

//

let span = document.querySelector(".menu");
let list = document.querySelector(".header__list");
let list2 = document.querySelector(".header__list2");
let line = document.querySelector(".line");

$(".menu").click(function () {
  span.style.display = "none";
  list.style.right = "0";
  list2.style.right = "0";
  line.style.right = "0";
});

$(".exit").click(function () {
  span.style.display = "flex";
  list.style.right = "-180px";
  list2.style.right = "-180px";
  line.style.right = "-180px";
});

// //

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   direction: 'horizontal', 
//   slidesPerView: 1,
//   autoplay: {
//     delay: 2800,
//   }
// });

$('.gallery ul li a').click(function() {
  var itemID = $(this).attr('href');
  $('.gallery ul').addClass('item_open');
  $(itemID).addClass('item_open');
  return false;
});
$('.close').click(function() {
  $('.port, .gallery ul').removeClass('item_open');
  return false;
});

$(".gallery ul li a").click(function() {
  $('html, body').animate({
      scrollTop: parseInt($("#top").offset().top)
  }, 400);
});
