(function() {

    const parent = document.querySelector('.adv');
    if(!parent) return;

    const arrItem = parent.querySelectorAll('.adv__item');

    arrItem.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('animate-glow')
        }, 350 * i);
    });

}());