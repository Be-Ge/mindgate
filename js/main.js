document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger'),
    body = document.querySelector('body');
  
    if (burger) {
      burger.addEventListener('click', function () {
        body.classList.toggle('menu-opened')
      })
    }
})