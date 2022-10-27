// Метрика
(function () {
    const parent = document.querySelectorAll('.metric_link');
    if (!parent.length) return;

    parent.forEach(function (el) {
        el.addEventListener('click', function () {
            const link = el.dataset.metric;
            console.log(link);
            new Image(1, 1).src = link;
        });
    });
})();