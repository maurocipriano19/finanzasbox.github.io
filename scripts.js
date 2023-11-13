let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    //window.alert(products.join(", \n"));
    location.href="https://mpago.la/1JKXDw7"
}
