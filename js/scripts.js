$(document).ready(function() {
  $('.main-slide-show').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.slide-show-about').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 6000
  });

  $('.partners-slide').slick({
    variableWidth: true,
    arrows: false,
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        // breakpoint: 1024,
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });

});
