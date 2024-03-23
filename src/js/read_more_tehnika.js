const readMoreBtnTehnika = document.querySelector('.read_more__wrapper_tehnika')
const remontTehnika = document.querySelector('.tehnika_all')
const readIcoTehnica  = document.querySelector('.read-next_ico_tehnika')
const btnReadTeh = document.querySelector('.see_all_tehnika');





readMoreBtnTehnika.addEventListener('click', function(){
    if(remontTehnika.classList.contains('see_tehnika_active')){
        remontTehnika.classList.remove('see_tehnika_active');
        readIcoTehnica.classList.remove('read-next_ico__active');
        btnReadTeh.innerHTML="Показать все";
    } else{
        remontTehnika.classList.add('see_tehnika_active');
        readIcoTehnica.classList.add('read-next_ico__active');
        btnReadTeh.innerHTML="Скрыть";

    }
})