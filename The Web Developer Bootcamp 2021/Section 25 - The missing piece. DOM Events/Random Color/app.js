const h1 = document.querySelector("h1");
const btn = document.querySelector("button");


btn.addEventListener("click", () => {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}
