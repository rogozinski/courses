
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

const addProduct = (product, quantity) => {
    const newListItem = document.createElement("li");

    newListItem.append(quantity);
    newListItem.append(` ${product}`);
    listContainer.append(newListItem);
};