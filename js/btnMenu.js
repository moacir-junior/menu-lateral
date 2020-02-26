const $menu = document.querySelector('.menu');
const $btnMenuOpened = document.querySelector('.btnmenu-opened');
const $btnMenuClosed = document.querySelector('.btnmenu-closed');

$btnMenuOpened.addEventListener('click', () => {
    $menu.classList.add('menu-open');
})

$btnMenuClosed.addEventListener('click', () => {
    $menu.classList.remove('menu-open');
})