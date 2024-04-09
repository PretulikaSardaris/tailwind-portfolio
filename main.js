const menu = document.getElementById('menu')
const menuList = document.getElementById('menuList')

function menufunc(){
    menuList.classList.toggle('hidden')
    console.log('clicked')
}

menu.addEventListener('click' , menufunc)