var triger = document.getElementById("triger");
var modal_wraper = document.querySelector('.modal_wraper');
var close = document.querySelector('.close');
triger.addEventListener("click", function () {
    modal_wraper.classList.add('active')
})
close.addEventListener("click", function () {
    modal_wraper.classList.remove('active')
})
modal_wraper.addEventListener("click", function (e) {
    if (e.target !== modal_wraper)
        return;
    modal_wraper.classList.remove('active');
})