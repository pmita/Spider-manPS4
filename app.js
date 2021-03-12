const burgerButton = document.querySelector('.burger');
const navItems = document.querySelector('.nav-links');

function animateBurger(){
    burgerButton.addEventListener('click', ()=>{
        console.log('it works');
        navItems.classList.toggle('nav-active');
    });
}

animateBurger();