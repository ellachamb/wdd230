let url = new URL(window.location);
let params  = url.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

document.querySelector('#firstname').textContent = params.get("firstname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#cellphone').textContent = params.get("cellphone");
document.querySelector('#select1').textContent = params.get("select1");
document.querySelector('#select2').textContent = params.get("select2");
document.querySelector('#select3').textContent = params.get("select3");
document.querySelector('#description').textContent = params.get("description");
document.querySelector('#time').textContent = params.get("time");
