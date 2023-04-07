let fruit1 = localStorage.getItem("select1");
let fruit2 = localStorage.getItem("select2"); 
let fruit3 = localStorage.getItem("select3"); 

document.getElementById("select1").innerHTML= fruit1; 
document.getElementById("select2").innerHTML= fruit2; 
document.getElementById("select3").innerHTML= fruit3;  

const url = './data/fruityvice.json'; 

let carbohydrates = 0; 
let sugar = 0; 
let calories = 0; 
let fat = 0; 

const displayNutrition = (fruits) => {
    const nutritions = document.querySelector(".nutrition"); 
        fruits.forEach((fruit) => {
        if (fruit.name == fruit1 || fruit.name == fruit2 || fruit.name == fruit3){
        carbohydrates = carbohydrates + fruit.nutritions.carbohydrates; 
        calories = calories + fruit.nutritions.calories; 
        fat = fat + fruit.nutritions.fat; 
        sugar = sugar + fruit.nutritions.sugar; 
        }
    });
    let nutrition = document.createElement("section");
        nutrition.innerHTML = `<h3>Calories: ${calories}</h3>
        <h3>Fat: ${fat}</h3>
        <h3>Sugar: ${sugar}</h3>
        <h3>Carbohydrates: ${carbohydrates}</h3>`;
        nutritions.appendChild(nutrition);
  }; 

  async function getFruitData() {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayNutrition(data.fruits);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector(".nutrition");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
  
  getFruitData();