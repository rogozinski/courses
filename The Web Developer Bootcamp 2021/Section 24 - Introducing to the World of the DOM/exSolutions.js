/* Exercise 51 - getElementById Practice - Solution */
const heading = document.getElementById("mainheading");
const image = document.getElementById("unicorn");

/* Exercise 52 - querySelector Practice - Solution */
const doneTodos = document.querySelectorAll(".done");
const checkbox = document.querySelector('input[type="checkbox"]');

/* Exercise 53 - Pickles Exercise - Solution */
document.querySelector("h1 span").innerHTML = "<b>Disgusting</b>";

/* Exercise 54 - Manipulating Attributes - Solution */
document.querySelector("#egg").src = "https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg";
document.querySelector("#egg").alt = "chicken";

/* Exercise 55 - Magical Forest Circle Exercise - Solution */
document.querySelector("#container").style.textAlign = "center";

const picture = document.querySelector("#container img");
picture.style.width = "150px";
picture.style.borderRadius = "50%";

/* Exercise 56 - Rainbow Text Exercise - Solution */
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const span = document.querySelectorAll('span');

for (let i = 0; i < span.length; i++) {
    span[i].style.color = colors[i];
}

/* Exercise 57 - classList Practice - Solution */
const liContainer = document.querySelectorAll("li");
for (let li of liContainer) {
    li.classList.toggle("highlight");
}