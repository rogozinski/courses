const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("You clicked button #2");
}

function scream() {
    console.log("AAAAAAAHHH");
}
btn.onmouseenter = scream;
document.querySelector("h1").onclick = () => { alert("you clicked the H1"); }

const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", () => {
    alert("CLICKED");
});

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
