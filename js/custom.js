
// phone number international code set over there Start
$(function () {
//   var code = "+19876543210"; // Assigning value from model.
//   $('.mobile').val(code);
  $('.mobile').intlTelInput({
    autoHideDialCode: true,
    autoPlaceholder: "ON",
    dropdownContainer: document.body,
    formatOnDisplay: true,
    // hiddenInput: "full_number",
    initialCountry: "us",
    //  nationalMode: true,
    placeholderNumberType: "MOBILE",
    preferredCountries: ['us'],
    separateDialCode: true
  });
  $('#btn-submit').on('click', function () {
    var code = $(".mobile").intlTelInput("getSelectedCountryData").dialCode;
    var phoneNumber = $('.mobile').val();
    //  $('.mobile').val(code+phoneNumber);
    //  alert('Country Code : ' + code + '\nPhone Number : ' + phoneNumber );
    document.getElementById("code").innerHTML = code;
    document.getElementById("mobile-number").innerHTML = phoneNumber;
  });
});

// phone number international code set over there END




function initializeCarousel() {
  if ($(window).width() <= 767) {
    $("#package_car").owlCarousel({
      items: 1, // You can adjust this if needed
      loop: false,
      nav: false,
      dots: true,
      margin: 20,
      center: false,
      autoplay: false,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      rtl: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          center: false,
          items: 1
        },
        992: {
          center: false,
          items: 1
        }
      }
    });
  }


  if ($(window).width() <= 767) {
    $("#portfol_car").owlCarousel({
      items: 1, // You can adjust this if needed
      loop: false,
      nav: false,
      dots: true,
      margin: 20,
      center: false,
      autoplay: false,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      rtl: false,
      responsive: {
        0: {
          items: 1,
          margin: 0,
        },
        768: {
          center: false,
          items: 1,
          margin: 0,
        },
        992: {
          center: false,
          items: 1
        }
      }
    });
  }
}

// Initialize the carousel on document ready
$(document).ready(function() {
  initializeCarousel();
});

// Optional: Reinitialize on window resize
$(window).resize(function() {
  initializeCarousel();
});





// Initialize the carousel on document ready

// $(".testimonial-slider").owlCarousel({
//   items: 1,
//   loop: false,
//   nav: true,
//   dots: false,
//   margin: 0,
//   center: false,
//   autoplay: true,
//   autoplayTimeout: 1000,
//   autoplayHoverPause: true,
//   rtl: false,
//   responsive: {
//     0: {
//       items: 1
//     },
//     768: {
//       center: false,
//       items: 1
//     },
//     992: {
//       center: false,
//       items: 1
//     }
//   }

// });
//=========== FLOATING FORM STRAT
$(".clickbutton").click(function () {
  $('.floatbutton').toggleClass("active");
  //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS
