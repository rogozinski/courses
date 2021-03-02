const input = document.querySelector("input");
const pContent = document.querySelector("p");

/* using onChange event */
// input.addEventListener("change", function () {
//     console.log("onChange event");
// });

/* using onInput event */
input.addEventListener("input", function (e) {
    /* insert input text to paragraph as we change its value */
    pContent.innerHTML = input.value;
    console.log("onInput event");
});