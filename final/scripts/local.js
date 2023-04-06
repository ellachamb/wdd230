const button = document.getElementById("submit"); 

let submissions = 0; 

const submitDisplay = document.getElementById("visits"); 

if (localStorage.getItem(submissions)) {
    submissions = parseInt(localStorage.getItem("submissions")); 
}
button.addEventListener("click", function() {
    submissions++; 
    submitDisplay.textContent = submissions; 
    localStorage.setItem("submissions", submissions); 
}); 
