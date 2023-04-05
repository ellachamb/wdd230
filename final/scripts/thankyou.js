let url = new URL(window.location);
let params  = url.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

document.querySelector('#firstname').textContent = params.get("firstname");
document.querySelector('#time').textContent = params.get("time");
