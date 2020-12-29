
$(function () {
  'use strict'
  var API = {
    customers: 'http://localhost:4000/customers',
    donors: 'https://fn9n4aiip2.execute-api.ap-south-1.amazonaws.com/prod/donor',
    getDoner: 'https://fn9n4aiip2.execute-api.ap-south-1.amazonaws.com/prod/donor/1'
  }
  // MENU
  $('.navbar .nav-link').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // $(window).on('scroll', function () {

  //   /*----------------------------------------------------*/
  //   /*  Navigtion Menu Scroll
  //   /*----------------------------------------------------*/

  //   var b = $(window).scrollTop();

  //   if (b > 50) {
  //     $(".navbar").addClass("scroll");
  //   } else {
  //     $(".navbar").removeClass("scroll");
  //   }
  // });

  // TESTIMONIALS CAROUSEL
  $('#testimonials-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1200: {
        items: 3,
        loop: false
      }
    }
  })

  // SMOOTHSCROLL
  $(function () {
    $('.navbar .nav-link, .faq').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  $.ajax({
    type: 'GET',
    url: API.getDoner,
    contentType: "application/json"
  }).done(function (res) {
    iconsole.log(res);
  });


  $('#user-form').submit(function (event) {
    event.preventDefault();
    var url = API[$(this).attr('action')];
    // var formData = $(this).serialize();
    var formData = {
      id: "8",
      name: $(this).find('#name').val(),
      email: $(this).find('#email').val(),
      mobile: $(this).find('#mobile').val(),
    }
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      contentType: "application/json"
    }).done(function (res) {
      if (res.status === 200) {
        document.location.href = res.redirect + '?ref=' + res.id;
      }
    });

  })

});
