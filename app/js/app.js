const btnhamburger=document.querySelector('#btn-hamburger');
const body= document.querySelector('body');
const header = document.querySelector('.header');
const overlay= document.querySelector('.overlay__layer');
const fadeElements = document.querySelectorAll('.in__fade');

btnhamburger.addEventListener('click', function(){
    console.log("hamburguesa aca");
    if(header.classList.contains('open')){
        header.classList.remove('open');
        body.classList.remove('noscroll')
        fadeElements.forEach(function(element){
            element.classList.remove ('fade-in');
            element.classList.add ('fade-out');
        });
 

    } else {
        header.classList.add('open');
        body.classList.add('noscroll')
        fadeElements.forEach(function(element){
            element.classList.remove ('fade-out');
            element.classList.add ('fade-in');
        });
    }
})