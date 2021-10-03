const getCart = () => {
    var xhr = new XMLHttpRequest();
    //Display cart items in the cart field
    var getUrl = "http://localhost:7878/orders"
    xhr.open("GET", getUrl);
    xhr.send()
    xhr.onload = function() {
        var response = JSON.parse(this.response)
        console.log(response.items);
        for (let i = 0; i < response.items.length; i++) {
            updateOrderPage(response.items[i]);
        }
    }

}
getCart();
let order_div_data = document.getElementById("order-data");

function updateOrderPage(data) {
    let Order_div = document.createElement('div');
    Order_div.id = "prod";
    let food_name = document.createElement('div');
    food_name.id = "prodName";
    let food_price = document.createElement('div');
    food_price.id = "prodPrice";
    let food_rating = document.createElement('div');
    food_rating.id = "prodName";
    let description = document.createElement('div');
    description.id = "proddesc";
    let food_veg_or_NonVeg = document.createElement('div');
    food_veg_or_NonVeg.id = "prodveg";
    let food_img = document.createElement('img');
    food_img.id = "prodImage";
    let process = document.createElement('div');
    process.innerText = "Your Order will be processes"
    process.id = "prodName";
    process.style.marginLeft = "28%";
    food_name.innerHTML = `Name : ${data.food_name}`;
    food_price.innerHTML = `Price : ₹ ${data.price}`;
    food_rating.innerHTML = `Rating : ${data.rating}`;
    description.innerHTML = `Description : ${data.description}`;
    food_veg_or_NonVeg.innerHTML = `Veg or Non Veg : ${data.veg_NonVeg}`;
    food_img.src = data.img_src;

    Order_div.append(food_img, food_name, food_price, food_rating, food_veg_or_NonVeg, description, process);
    order_div_data.append(Order_div);

}

setTimeout(function() {
    document.getElementById("order_div_data").style.display = "none"
        //localStorage.removeItem("cart");

}, 15000);