(function() {

    const parent = document.querySelector('.adv');
    if(!parent) return;

    const arrItem = parent.querySelectorAll('.adv__ico');

    arrItem.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('animate-glow')
        }, 350 * i);
    });

}());