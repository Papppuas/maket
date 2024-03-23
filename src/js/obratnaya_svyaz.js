const wrapperWhiteObratnaya = document.querySelector('.wrapper_white_obratnaya_svyaz');
const closeObratnaya = document.querySelector('.obratnaya_svyaz_close');
const obratnayaOpen = document.querySelector('.zajavka');

obratnayaOpen.addEventListener('click', function (e){
    e.preventDefault();
    wrapperWhiteObratnaya.classList.add('menu_open_obratnaya_svyaz');
    document.querySelector('.obratnaya_svyaz_wrapper').classList.add('menu_open_obratnaya_svyaz');
})

closeObratnaya.addEventListener('click', function(e){
    e.preventDefault();
    wrapperWhiteObratnaya.classList.remove('menu_open_obratnaya_svyaz');
    document.querySelector('.obratnaya_svyaz_wrapper').classList.remove('menu_open_obratnaya_svyaz');
})
wrapperWhiteObratnaya.addEventListener('click', function (e){
    if(e.target.classList.contains('menu_open_obratnaya_svyaz')){
        wrapperWhiteObratnaya.classList.remove('menu_open_obratnaya_svyaz');
        document.querySelector('.obratnaya_svyaz_wrapper').classList.remove('menu_open_obratnaya_svyaz');
    }
})