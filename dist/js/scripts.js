"use strict";

(function () {
  var parent = document.querySelector('.adv');
  if (!parent) return;
  var arrItem = parent.querySelectorAll('.adv__ico');
  arrItem.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('animate-glow');
    }, 350 * i);
  });
})();
"use strict";

(function () {
  var parent = document.querySelector(".document");
  if (!parent) return;
  var body = document.querySelector("body");
  if (body) body.classList.toggle("doc");
})();
"use strict";

(function () {
  var header = document.querySelector(".header");
  if (!header) return;
  var classForHeaderScroll = "scroll";
  var marginBottomFromElement = 0;
  var heightElem = getMaxOfArray(header);
  addClassForElement(header);

  window.onscroll = function () {
    addClassForElement(header);
  };

  function addClassForElement(el) {
    scrollHeight() > heightElem ? el.classList.add(classForHeaderScroll) : el.classList.remove(classForHeaderScroll);
  }

  function scrollHeight() {
    return Math.max.apply(null, [window.pageYOffset, document.documentElement.scrollTop]);
  }

  function getMaxOfArray(el) {
    return Math.max.apply(null, [el.clientHeight, el.offsetHeight, el.scrollHeight]) + marginBottomFromElement;
  }
})();
"use strict";

(function () {
  var menu = document.querySelector('.menu');
  if (!menu) return;
  var header = document.querySelector('.header');
  var btnMenu = menu.querySelector('.menu__btn');
  btnMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    header.classList.toggle('bg');
  });
})();
"use strict";

(function () {
  var parent = document.querySelector('.particles');
  if (!parent) return;
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 300
        }
      },
      color: {
        value: "#38B5FC"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#38B5FC",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
})();
"use strict";

(function () {
  var parent = document.querySelector(".popup");
  if (!parent) return;
  var btnsOpen = document.querySelectorAll(".open__popup");
  var popupBodyInner = document.querySelector(".popup__wrapper");

  if (btnsOpen.length) {
    btnsOpen.forEach(function (el) {
      if (el) {
        el.addEventListener("click", function (event) {
          var elemForInnerPopup = document.getElementById(el.getAttribute("data-popup-id"));

          if (elemForInnerPopup) {
            startPopup(parent);
            popupBodyInner.appendChild(elemForInnerPopup.cloneNode(true));
          } else {
            console.error("Елемент не найден! Проверьте data-popup-id елемента");
          }

          el.dispatchEvent(new Event("popupOpen", {
            bubbles: true
          }));
        });
      }
    });
  }

  parent.addEventListener("click", function (event) {
    var target = event.target;
    var noClose = popupBodyInner.querySelector('.popup__inner');
    var isPopupNeeded = noClose.id != 'popup-hi' && target.classList.contains("popup__overlay") || noClose.id != 'popup-hi' && target.classList.contains("popup__close");

    if (isPopupNeeded) {
      startPopup(parent);
      popupBodyInner.innerHTML = "";
    }

    if (target.classList.contains('btn--enter')) {
      startPopup(parent);
      popupBodyInner.innerHTML = "";
      localStorage.setItem('show', 1);
    }

    if (target.classList.contains('btn--refuse')) {
      document.querySelector('body').innerHTML = '';
    }
  });

  (function firstStart() {
    if (!localStorage.show == 1) {
      startPopup(parent);
      popupBodyInner.appendChild(document.querySelector("#popup-hi").cloneNode(true));
    }
  })();

  function startPopup(el) {
    el.classList.toggle("active");
  }
})();
"use strict";

(function () {
  var parent = document.querySelector(".swiper-container");
  if (!parent) return;
  new Swiper(parent, {
    navigation: {
      nextEl: ".articles .sl-arrows__arrow--next",
      prevEl: ".articles .sl-arrows__arrow--prev"
    },
    breakpoints: {
      320: {
        spaceBetween: 28,
        slidesPerView: 1
      },
      728: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      960: {
        spaceBetween: 32,
        slidesPerView: 3
      }
    }
  });
})();