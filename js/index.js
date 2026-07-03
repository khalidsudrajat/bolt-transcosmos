(function () {
  "use strict";

  /* Tab switching — Objectives section */
  var tabs = document.querySelectorAll(".objectives-tabs__tab");
  var panels = document.querySelectorAll(".objectives-tabs__panel");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-tab");

      tabs.forEach(function (item) {
        var isActive = item.getAttribute("data-tab") === target;
        item.classList.toggle("objectives-tabs__tab--active", isActive);
        item.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panels.forEach(function (panel) {
        var isActive = panel.getAttribute("data-panel") === target;
        panel.classList.toggle("objectives-tabs__panel--active", isActive);
        panel.hidden = !isActive;
      });
    });
  });

  /* Projects carousel — Slick Slider */
  var $slider = $(".project-slider");

  if ($slider.length) {
    $slider.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      prevArrow: $(".project-slider__arrow--prev"),
      nextArrow: $(".project-slider__arrow--next"),
      dots: true,
      appendDots: $(".project-slider__dots"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });
  }
})();
