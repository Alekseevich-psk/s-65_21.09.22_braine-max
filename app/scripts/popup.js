(function () {
    const parent = document.querySelector(".popup");
    if (!parent) return;

    const btnsOpen = document.querySelectorAll(".open__popup");
    const popupBodyInner = document.querySelector(".popup__wrapper");

    if (btnsOpen.length) {
        btnsOpen.forEach((el) => {
            if (el) {
                el.addEventListener("click", (event) => {
                    const elemForInnerPopup = document.getElementById(el.getAttribute("data-popup-id"));

                    if (elemForInnerPopup) {
                        startPopup(parent);
                        const cloneNode = elemForInnerPopup.cloneNode(true);
                        popupBodyInner.appendChild(cloneNode);
                        updatePixel(cloneNode);
                    } else {
                        console.error("Елемент не найден! Проверьте data-popup-id елемента");
                    }

                    el.dispatchEvent(new Event("popupOpen", { bubbles: true }));
                });
            }
        });
    }

    parent.addEventListener("click", (event) => {
        const target = event.target;
        const noClose = popupBodyInner.querySelector('.popup__inner');
        
        const isPopupNeeded = noClose.id != 'popup-hi' && target.classList.contains("popup__overlay") || noClose.id != 'popup-hi' && target.classList.contains("popup__close");

        if(isPopupNeeded) {
            startPopup(parent);
            popupBodyInner.innerHTML = "";
        }

        if(target.classList.contains('btn--enter')) {
            startPopup(parent);
            popupBodyInner.innerHTML = "";
            localStorage.setItem('show', 1);
        }

        if(target.classList.contains('btn--refuse')) {
            document.querySelector('body').innerHTML = '';
        }

    });

    function updatePixel(el) {
        if (!el) return;

        const metrics = el.querySelectorAll(".metric_link");
        if (!metrics.length) return;

        metrics.forEach((element) => {
            element.addEventListener("click", function () {
                let pixel = new Image(1, 1).src = this.getAttribute("data-metric");
                if(pixel != null) console.log(pixel);
            });
        });
    }

    (function firstStart() {
        if(!localStorage.show == 1) {
            startPopup(parent);
            popupBodyInner.appendChild(document.querySelector("#popup-hi").cloneNode(true));
        }
    }());

    function startPopup(el) {
        el.classList.toggle("active");
    }
})();
