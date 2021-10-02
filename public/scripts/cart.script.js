let addtocart = document.querySelectorAll("#button");

addtocart.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        let item = btn.dataset.p;
        postCart(item);
        getCart();

    })
})


const postCart = (item) => {
    var xhr = new XMLHttpRequest();

    //Adding items data to the cart
    var addUrl = "http://localhost:7878/cart";
    xhr.open("POST", addUrl);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(item);
    console.log("success");


}

const getCart = () => {
    var xhr = new XMLHttpRequest();
    //Display cart items in the cart field
    var getUrl = "http://localhost:7878/cart"
    xhr.open("GET", getUrl);
    xhr.send()
    xhr.onload = function() {
        var response = JSON.parse(this.response)
            //console.log(response.items);
        for (let i = 0; i < response.items.length; i++) {
            createCart(response.items[i]);
        }
    }

}
getCart();
let main_cart_data = document.getElementById("cart_data_div");

const createCart = (data) => {
    let cartDiv = document.createElement('div');
    let item_name = document.createElement('p');
    let price = document.createElement('p');
    let veg_NonVeg = document.createElement('p');
    item_name.innerHTML = data.food_name;
    //console.log(data.items.food_name, data.items.price, data.items.veg_NonVeg);
    price.innerHTML = data.price;
    veg_NonVeg.innerHTML = data.veg_NonVeg;
    cartDiv.append(item_name, price, veg_NonVeg);
    main_cart_data.append(cartDiv);
}