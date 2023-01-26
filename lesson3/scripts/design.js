
const today = new Date(); 
document.querySelector("#currentYear").textContent = today.getFullYear(); 

document.querySelector("#lastModified").textContent = document.lastModified; 

function toggleMenu() {
    document.querySelector('#navbar').classList.toggle('menu-active'); 
    document.querySelector('#menu-close').classList.toggle('menu-active'); 
    document.querySelector('#menu-open').classList.toggle('menu-active'); 
}

document.querySelector('#ham-menu').addEventListener('click', toggleMenu); 