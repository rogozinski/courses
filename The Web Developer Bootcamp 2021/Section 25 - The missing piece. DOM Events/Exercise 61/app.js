
const form = document.querySelector("form");
const listContainer = document.querySelector("#list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const productName = this.elements.product;
    const quantityValue = this.elements.qty;

    addProduct(productName.value, quantityValue.value);
    productName.value = "";
    quantityValue.value = "";
});

/* function to add a new line with product */
// const addProduct = (product, quantity) => {
//     const newListItem = document.createElement("li");

//     newListItem.append(quantity);
//     newListItem.append(` ${product}`);
//     listContainer.append(newListItem);
// };

/* SOLUTION 2 */
const addProduct = (product, quantity) => {

    const newListItem = document.createElement("li");
    newListItem.innerHTML = `${quantity} ${product}`;
    listContainer.appendChild(newListItem);

};