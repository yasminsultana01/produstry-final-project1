$(function () {
  // navbar
  let togglerBtn = $(".myTogglerBtn");
  togglerBtn.click(function () {
    let menu = $("nav #myNavbar ul");
    menu.toggleClass("menuActive");
    // logo
    let logo = $("nav .myLogo");
    logo.toggleClass("activeLogo");
  });

  //  banner
  $(".banner-slider").slick({
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    autoplaySpeed: 1500,
  });
  // slick for service
  $(".service-slider").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  // slick for portfolio
  $(".portfolioSlider").slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // blog slide
  $(".blogSlider").slick({
    slidesToShow: 3,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: ".blogleftArrow",
    nextArrow: ".blogrightArrow",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slickTrack: "none",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // slick for testimonial

  $(".testimonialTestSlider").slick({
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    asNavFor: '.testimonialImageSlider',
  });
 $(".testimonialImageSlider").slick({
  slidesToShow: 3,
  arrows: false,
    centerMode: true,
    centerPadding: "0px",
    asNavFor: '.testimonialTestSlider',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slickTrack: "none",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
   });

   $(".imageSlider").slick({
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slickTrack: "none",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],


   })








})
