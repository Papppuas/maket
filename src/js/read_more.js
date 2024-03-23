//Read more close and open
const readMoreBtn = document.querySelector('.read_more__wrapper')
const infoCompany = document.querySelector('.info_text')
const readIco  = document.querySelector('.read-next_ico')
const bttnRead = document.querySelector('.read_more_company');





readMoreBtn.addEventListener('click', function(){
    if(infoCompany.classList.contains('info_text_active')){
        infoCompany.classList.remove('info_text_active');
        readIco.classList.remove('read-next_ico__active');
        bttnRead.innerHTML="Читать далее";
    } else{
        infoCompany.classList.add('info_text_active');
        readIco.classList.add('read-next_ico__active');
        bttnRead.innerHTML="Скрыть";

    }
})
