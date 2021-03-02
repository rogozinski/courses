const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

button.addEventListener("click", function (e) {
    /* change div background color on button click */
    container.style.backgroundColor = makeRandColor();
    /* stops events bubbling. thanks to that we can launch on button click event without executing container event */
    e.stopPropagation();
});

container.addEventListener("click", function () {
    /* when we click on the container it add class hide */
    container.classList.toggle("hide");
});