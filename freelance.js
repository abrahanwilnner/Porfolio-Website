const navToggle = document.querySelector('.mobile-menu-btn');
const navContainer = document.querySelector('.navbar');

navToggle.addEventListener('click', () =>{
    const visibility = navContainer.getAttribute('data-visible');
    if (visibility === 'false'){
        navContainer.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');

    }else if(visibility === 'true'){
        navContainer.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
        dropMenu.setAttribute('data-visible', 'false');
        dropMenu2.setAttribute('data-visible', 'false');
    }
})

const dropBtn = document.querySelector('.drop-btn');
const dropMenu = document.querySelector('.dropdown-menu');
const dropMenu2 = document.querySelector('.dropdown-menu2');
const dropBtn1 = document.querySelector('.drop-btn1');
const dropDown = document.querySelector('.dropdown');


dropBtn.addEventListener('click', () =>{
    const visibility = dropMenu.getAttribute('data-visible');
    if (visibility === 'false'){
        dropMenu.setAttribute('data-visible', 'true');
        dropBtn.setAttribute('aria-expanded', 'true');

    }else if(visibility === 'true'){
        dropMenu.setAttribute('data-visible', 'false');
        dropBtn.setAttribute('aria-expanded', 'false');
    }
})
dropBtn1.addEventListener('click', () =>{
    const visibility = dropMenu2.getAttribute('data-visible');
    if (visibility === 'false'){
        dropMenu2.setAttribute('data-visible', 'true');
        dropBtn1.setAttribute('aria-expanded', 'true');

    }else if(visibility === 'true'){
        dropMenu2.setAttribute('data-visible', 'false');
        dropBtn1.setAttribute('aria-expanded', 'false');
    }
})
