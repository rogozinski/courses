/* textContent display all elements in selected object even if they're hidden. innerText display text which is visible for the user */

const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = "I AM A LINK!";
// }

//document.querySelector("h1").innerText = "<b>adasdads</b>"; //it won't recognize <i> as html but just as a regular text
document.querySelector("h1").innerHTML = "<i>Colt's Chickens</i>" //this will work

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

/* CLASS LIST */
const h2 = document.querySelector("h2");
h2.getAttribute("class"); //there's no class so it displays "null" so we're going to set an atribute

h2.setAttribute("class", "purple");  /* type of attribute, value of attribute */
h2.setAttribute("class", "border");  /* if we try to add another class to our element in this way then it will replace the previous one */

console.log(h2.classList); /* lists current classes */
h2.classList.add("purple"); /* add another class to existing ones */

console.log(h2.classList);
h2.classList.remove("border"); /* removes class from existing ones */
console.log(h2.classList);

h2.classList.contains("border"); /* checks if h2 have class border - TRUE/FALSE */

h2.classList.toggle("purple"); /* switch off/switch on class it will shows results or not */

/* TRAVERSING PARENT/CHILD/SIBLING */
const firstBold = document.querySelector("b"); //displays "Silkie"
const paragraph = firstBold.parentElement; //displays a parent (in thise case paragraph) in which our bolded element is nested 

paragraph.childElementCount; //tell us how many elements we have
paragraph.children; //tell us how many and what elements we have 
paragraph.children[0]; //display content of first children

const squareImg = document.querySelector(".square");

squareImg.previousSibling; //display text - an empty string
squareImg.previousElementSibling; //displays p - paragraph

squareImg.nextSibling; //display text - an empty string
squareImg.nextElementSibling; //displays another img with class square

/* APPEND & APPENDCHILD */
//EXAMPLE 1
const newPic = document.createElement("img"); //create new img element
newPic.src = "https://news.usc.edu/files/2019/11/Taiwan-Blue-Magpie-web-824x549.jpg"; //add source code
document.body.appendChild(newPic); //chose body element to insert our img on the website
newPic.classList.add("square"); //add class square to resize added picture

//EXAMPLE 2
const newH3 = document.createElement("h3");
newH3.innerText = "I am new Heading with number 3!";
document.body.appendChild(newH3);

//EXAMPLE 3 - Using Append method which is more flexible than appendChild and we can add more elements 
const p = document.querySelector("p"); //select first paragraph
p.append("I AM THE LAST SENTENCE OF PARAGRAPH INSERTED BY PURE JS", ", and I am another sentence inserted by JS"); //add your sentence at the end of the paragraph

const newB = document.createElement("b");
newB.append("You can get here with JS as well!! ");
p.prepend(newB); //add you text AT THE BEGINNING of the selected paragraph

//EXAMPLE 4 - insertAdjacentElement() if we want to insert an element between two existings ones as a sibling we should use insertAdjacentElement method
const newH2 = document.createElement("h2");
newH2.append("I'm here thanks to insertAdjacentElement method!");
h1.insertAdjacentElement("afterend", newH2);

const h3 = document.createElement("h3");
h3.innerText = "I'm last example in this lesson";
h1.after(h3);

/* REMOVE & REMOVECHILD (older version) */
//EXAMPLE 1 - removing li from ul
const firstLi = document.querySelector("li");
const ul = firstLi.parentElement;
ul.removeChild(firstLi);

//EXAMPLE 2 - removing first bold tag
const b = document.querySelector("b");
b.parentElement.removeChild(b);

//EXAMPLE 3 - removing first image by using new remove() method
const firstImg = document.querySelector("img");
firstImg.remove();