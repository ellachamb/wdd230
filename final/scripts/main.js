const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const today = new Date(); 
document.querySelector("#currentYear").textContent = today.getFullYear(); 

document.querySelector("#lastModified").textContent = document.lastModified; 

document.getElementById("visits").innerHTML= localStorage.getItem("submissions"); 
