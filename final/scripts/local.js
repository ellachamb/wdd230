const submitDisplay = document.getElementById("visits"); 

const button = document.getElementById("submit"); 

let submissions = 0; 

if (localStorage.getItem(submissions)) {
    submissions = parseInt(localStorage.getItem("submissions")); 
}
button.addEventListener("click", function() {
    submissions++; 
    submitDisplay.textContent = submissions; 
    localStorage.setItem("submissions", submissions); 
}); 
