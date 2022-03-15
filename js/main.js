const hamburger = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__desktop');
const closeBtn = document.querySelector('.header__close-btn');
const curtain = document.querySelector('.curtain');

hamburger.addEventListener('click', () => {
  menu.classList.add('header__desktop--on');
  curtain.classList.add('curtain--on');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__desktop--on');
  curtain.classList.remove('curtain--on');
})



const menuBtn = document.querySelector('.header__menu-btn');
const desktop = document.querySelector('.header__desktop');
const closeButton = document.querySelector('.header__close-btn');

hamburger.addEventListener('click', () => {
  menu.classList.add('header__desktop--320');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('header__desktop--320');
})