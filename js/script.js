const product = ["pane", "latte", "uova", "formaggio", "verdura", "frutta"]

const productElem = document.querySelector("ul");
console.log(productElem);

//Ciclo while
let productItem = "";
let i = 0;
while (i < product.length - 1) {
    console.log(product[i]);
    i++;
    productItem += `<li>${product[i]}</li>`
}
console.log(productItem);

productElem.innerHTML = productItem;