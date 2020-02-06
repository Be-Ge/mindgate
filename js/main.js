document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger'),
    header = document.querySelector('.header');

    burger.addEventListener('click',  () => {
        container.classList.toggle('menu-opened');
    })
})