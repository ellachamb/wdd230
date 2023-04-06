const now = new Date().toDateString(); 
document.querySelector("#time").textContent = now; 

const visitsDisplay = document.getElementById("visits"); 

let numVisits = Number(window.localStorage.getItem("visits-ls")); 

localStorage.getItem("visits-ls"); 

visitsDisplay.textContent = numVisits; 

numVisits++;

localStorage.setItem("visits-ls", numVisits); 

