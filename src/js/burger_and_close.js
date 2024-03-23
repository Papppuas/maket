//Left menu close open
const wrapperWhite = document.querySelector('.wrapper_white');
const btnClose = document.querySelector('.leftmenu__close');
const burger = document.querySelector('.burger');
let menuCloseHelp = function () {
    document.querySelector('.wrapper_white').classList.remove('menu_open')
    document.querySelector('.leftmenu_wrapper').classList.remove('menu_open')
}
wrapperWhite.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu_open') ) {
        menuCloseHelp();
    }
})
burger.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.wrapper_white').classList.add('menu_open')
    document.querySelector('.leftmenu_wrapper').classList.add('menu_open')
})
btnClose.addEventListener('click', function(y) {
    y.preventDefault();
    menuCloseHelp();
})