
const readMoreBtnBrands = document.querySelector('.read_more__wrapper_brands')
const remontBrands = document.querySelector('.remont_brendov_all')
const readIcoBrands  = document.querySelector('.read-next_ico_brands')
const btnRead = document.querySelector('.see_all_brends');





readMoreBtnBrands.addEventListener('click', function(){
    if(remontBrands.classList.contains('see_brends_active')){
        remontBrands.classList.remove('see_brends_active');
        readIcoBrands.classList.remove('read-next_ico__active');
        btnRead.innerHTML="Показать все";
    } else{
        remontBrands.classList.add('see_brends_active');
        readIcoBrands.classList.add('read-next_ico__active');
        btnRead.innerHTML="Скрыть";

    }
})
