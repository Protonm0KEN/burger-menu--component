//* ПРАКТИКА 
const headerNavList = document.querySelector('.header__nav-list')
const burgerMenu = document.querySelector('.burger-menu')
const middleLine = document.querySelector('.middle-line')
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
burgerMenu.addEventListener('click', () =>{
        headerNavList.classList.toggle('active')
        middleLine.classList.toggle('active')
        burgerMenu.classList.toggle('active')
        line1.classList.toggle('active')
        line2.classList.toggle('active')
})