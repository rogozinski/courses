/* Exercise 51 - getElementById Practice - Solution */
const heading = document.getElementById("mainheading");
const image = document.getElementById("unicorn");

/* Exercise 52 - querySelector Practice - Solution */
const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector('input[type="checkbox"]');

/* Exercise 53 - Pickles Exercise - Solution */
document.querySelector("h1 span").innerHTML = "<b>Disgusting</b>";

/* Exercise 54 - Magical Forest Circle Exercise - Solution */
document.querySelector("#container").style.textAlign = "center";

const picture = document.querySelector("#container img");
picture.style.width = "150px";
picture.style.borderRadius = "50%";

/* Exercise 55 - Rainbow Text Exercise - Solution */
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const span = document.querySelectorAll('span');

for (let i = 0; i < span.length; i++) {
    span[i].style.color = colors[i];
}