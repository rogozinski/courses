/* textContent display all elements in selected object even if they're hidden. innerText display text which is visible for the user */

const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = "I AM A LINK!";
// }

//document.querySelector("h1").innerText = "<b>adasdads</b>"; //it won't recognize <i> as html but just as a regular text
document.querySelector("h1").innerHTML = "<b>Colt's Chickens</b>" //this will work

//we can also add content to the existing one
document.querySelector("h1").innerHTML += "<sup><i> straight outta bootcamp</i></sup>" //this will work

//changing style of links by JS
for (let link of allLinks) {
    link.style.color = "orange";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}

//we want to check font-size of h1
const h1 = document.querySelector("h1")
console.log(h1.style.fontSize); //isnt able to display a value
//so we can use different command to achieve that
console.log(window.getComputedStyle(h1).fontSize); //32px


