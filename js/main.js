// document.addEventListener('DOMContentLoaded', function() {
//     const burger = document.querySelector('.burger'),
//     header = document.querySelector('.header');

//     burger.addEventListener('click',  () => {
//         container.classList.toggle('menu-opened');
//     })
// })

const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const windowMenu = document.querySelector('.window-menu');

burgerOpen.onclick = (e) => {
  windowMenu.classList.add('show')
  document.body.classList.add('overflow')
};
burgerClose.onclick = (e) => {
  windowMenu.classList.remove('show')
  document.body.classList.remove('overflow')
};
