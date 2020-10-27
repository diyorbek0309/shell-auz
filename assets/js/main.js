/*
@author Diyorbek Olimov https://diyorbek.me
*/
(function($) {
  "use strict";

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  if (window.innerWidth > 767) {
    $(window).scroll(function() {
      event.preventDefault();
      let scroll = $(window).scrollTop();
        if (scroll > 50) {
          $("#header_menu").css({
            'top': '0',
            'marginTop': '0'
          });
        } else {
          $("#header_menu").css({
            'marginTop': '50px'
          });
        }
    });
  } else {
    $("#header_menu").css({
      'marginTop': '0'
    });
  }

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $(".hero-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    lazyLoad: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    items: 1,
    nav: true,
    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
  });

  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: true,
    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 4
      }
    }
  });

  $("#wrapper").on("click", function () {
    if ($("#wrapper .menu").hasClass('close')) {
      $("#wrapper .menu").removeClass('close')
      $.magnificPopup.close();
    } else {
      $("#wrapper .menu").addClass('close');

      $.magnificPopup.open({
        items: {
          src: '#test-popup'
        },
        callbacks: {
          open: function () {
            $('html,body').css({
              'overflow': 'hidden'
            })
          },
          close: function () {
            $('html,body').css({
              'overflow': 'unset'
            })
            $('body,html').css({
              'position': 'unset',
              'height': 'auto'
            })
          }
        },
        closeOnBgClick: false,
        enableEscapeKey: false,
        showCloseBtn: false
      })
    }
  })

  $("#search").on('click',function () {
    $.magnificPopup.open({
      items: {
        src: '#search-popup'
      },
      callbacks: {
        open: function () {
          $('html,body').css({
            'overflow': 'hidden'
          })
        },
        close: function () {
          $('html,body').css({
            'overflow': 'unset'
          })
          $('body,html').css({
            'position': 'unset',
            'height': 'auto'
          })
        }
      },
      closeOnBgClick: false,
      enableEscapeKey: false,
      showCloseBtn: true
    })
  })


  $("#drop-down").on('click', function () {
    $("#hidden").slideToggle();
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back').fadeIn('slow');} else {$('.back').fadeOut('slow');}
  });

  $('.back').click(function() {$('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');return false;});
})(jQuery);

