let addtocart = document.querySelectorAll("#button");
let main_cart_data = document.getElementById("cart_data_div");
let totalh1 = document.getElementById('total');
let submit = document.getElementById('submit');

addtocart.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        let item = btn.dataset.p;
        //  if(response.items[i]==response.items[i]){
        //         alert("product alredy added")
        //     }
        postCart(item);
        getCart();
        OrdersCart(item);
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
    Refresh()

}



const OrdersCart = (item) => {
    var xhr = new XMLHttpRequest();

    //Adding items data to the cart
    var addUrl = "http://localhost:7878/orders";
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
        var total = 0;
        for (let i = 0; i < response.items.length; i++) {
            createCart(response.items[i]);
            total += response.items[i].price;
        }
        console.log(total);
        let totalValue = document.createElement('p');
        totalValue.innerText = `₹ ${total}`;
        totalh1.append(totalValue);

        let subtotalButton = document.createElement('button');
        subtotalButton.id = 'subtotalButton';
        subtotalButton.innerText = 'Checkout';
        subtotalButton.onclick = () => {
            window.location.href = "http://localhost:7878/address";

        }
        submit.append(subtotalButton)
    }

}
getCart();
const createCart = (data) => {
    let cartDiv = document.createElement('div');
    cartDiv.id = "Cartprod";

    // let del = document.createElement('form')
    // del.action = `/cart/` + data._id
    // del.method="delete";

    let item_name = document.createElement('p');
    item_name.innerHTML = data.food_name;
    item_name.id = "cartprodName"
    let price = document.createElement('p');
    price.innerHTML = "₹ " + data.price;
    price.id = "cartPrice";
    let veg_NonVeg = document.createElement('p');
    veg_NonVeg.innerHTML = data.veg_NonVeg;
    veg_NonVeg.id = "CartVegNonveg"
    
    let charges = document.createElement('h3');
    charges.innerText = "SubTotal"
    charges.id = "SubTotal"

    let remove = document.createElement('button');
    remove.id = 'Remove';
    remove.innerText = 'Remove';
    remove.onclick = function () {
        removeItem(data._id)
      };

    cartDiv.append(item_name,veg_NonVeg,price,remove);
    main_cart_data.append(cartDiv);      
}

function send(total){
        let totalValue = document.createElement('p');
        totalValue.innerText = `₹ ${total}`;
        totalh1.append(totalValue);

        let subtotalButton = document.createElement('button');
        subtotalButton.id = 'subtotalButton';
        subtotalButton.innerText = 'Checkout';
        submit.append(subtotalButton)
    }
function Refresh() {
    window.parent.location = window.parent.location.href;
   }


    async function removeItem(data) {
        try {
            let response = await fetch(`http://localhost:7878/cart/${data}`, {
                method: "DELETE",
            });
        } catch (err) {
        }
        Refresh()
    }
    