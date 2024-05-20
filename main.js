const menu = document.getElementById('menu')
const menuList = document.getElementById('menuList')
const darkMode = document.getElementById('darkMode')

function menufunc(){
    menuList.classList.toggle('hidden')
    console.log('clicked')
}

function dark(){
    body.classList.toggle('dark')
}

menu.addEventListener('click',menufunc);
darkMode.addEventListener('click',dark);

