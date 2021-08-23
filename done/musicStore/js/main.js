
$(function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

});



const formElement = document.querySelector('#form');
const textareaContentElement = document.querySelector('#textareaContent');
const inputPhoneElement = document.querySelector('#inputPhone');
const modalMessageElement = document.querySelector('#modalMessage');
const buttonCancelElement = document.querySelector('#buttonCancel');
const buttonCloselElement = document.querySelector('.btn-close');


const modalButtonElement = document.querySelector('#modalButton');
const modalFormElement = document.querySelector('#modalForm');
const headerElement = document.querySelector('.header');
const bodyElement = document.querySelector('body');



function handleSubmit(event){
    event.preventDefault();

    textareaContentElement.value = '';
    inputPhoneElement.value = '';

    modalMessageElement.classList.remove('d_none');

}

function handleWrite(){
    modalMessageElement.classList.add('d_none');
}

let counter = 0;

function changeWidth(){

    console.log (counter);
    console.log(headerElement.style.width);
    console.log("contains(modal-open)=====")
    console.log(bodyElement.classList.contains("modal-open"))
    

    // if ((event.target == modalButtonElement) && (bodyElement.classList.contains("modal-open"))){
    //     counter++;
    // }

    if(bodyElement.classList.contains("modal-open")){
        headerElement.style.width = '98.9%';
    } else {
        headerElement.style.width = '100%';
    }

    // if (counter%2 != 0){
    //      console.log("modal-open");
    //      headerElement.style.width = '98.9%';

    // } else {
    //     console.log("-------")
    //   headerElement.style.width = '100%';  
    // }

    // return counter;

    // if(bodyElement.classList.contains("modal-open")){
    //     console.log("modal-open")
    //   headerElement.style.width = '98.9%';
    // } else {
    //     console.log("-------")
    //   headerElement.style.width = '100%';  
    // }
}

formElement.addEventListener('submit', handleSubmit); 
textareaContentElement.addEventListener('keydown', handleWrite);
buttonCancelElement.addEventListener('click', handleWrite);
buttonCloselElement.addEventListener('click', handleWrite);

// bodyElement.addEventListener('click', ()=>setTimeout (changeWidth, 20));
// modalButtonElement.addEventListener('click', changeWidth);
// changeWidth();