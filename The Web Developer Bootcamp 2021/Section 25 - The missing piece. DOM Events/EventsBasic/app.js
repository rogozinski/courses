const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("You clicked button #2");
}


function scream() {
    console.log("AAAAAAAHHH");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => { alert("you clicked the H1"); }