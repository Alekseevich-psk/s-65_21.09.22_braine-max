(function() {

    const menu = document.querySelector('.menu');
    if (!menu) return;

    const header = document.querySelector('.header');
    const btnMenu = menu.querySelector('.menu__btn');

    btnMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
        header.classList.toggle('bg');
    })

}())