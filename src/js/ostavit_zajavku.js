const wrapperWhiteZajavka = document.querySelector('.wrapper_white_ostavit_zajavku');
const closeZajavka = document.querySelector('.ostavit_zajavku_close');
const zajavkaOpen = document.querySelector('.status');

zajavkaOpen.addEventListener('click', function (e){
    e.preventDefault();
    wrapperWhiteZajavka.classList.add('menu_open_ostavit_zajavku');
    document.querySelector('.ostavit_zajavku_wrapper').classList.add('menu_open_ostavit_zajavku');
})

closeZajavka.addEventListener('click', function(e){
    e.preventDefault();
    wrapperWhiteZajavka.classList.remove('menu_open_ostavit_zajavku');
    document.querySelector('.ostavit_zajavku_wrapper').classList.remove('menu_open_ostavit_zajavku');
})
wrapperWhiteZajavka.addEventListener('click', function (e){
    if(e.target.classList.contains('menu_open_ostavit_zajavku')){
        wrapperWhiteZajavka.classList.remove('menu_open_ostavit_zajavku');
        document.querySelector('.ostavit_zajavku_wrapper').classList.remove('menu_open_ostavit_zajavku');
    }
})