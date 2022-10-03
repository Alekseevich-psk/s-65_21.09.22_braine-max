(function () {
    const parent = document.querySelector(".document");
    if (!parent) return;

    const body = document.querySelector("body");
    if (body) body.classList.toggle("doc");
})();
