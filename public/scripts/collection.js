
let addToCart  = document.querySelectorAll('#button');

// // let nonVeg  = document.querySelectorAll('#nonVeg');


// function handleNonVeg(){
//    let food="Non veg";
//    cats(food)
// }

let currentCategory = 'both';

function handleVegNonVeg(myRadio) {
  currentCategory = myRadio.value;
  axios.get('/collections/currentCategory').then(res =>{
      console.log(res);
    })
}

// // nonVeg.forEach((btn)=>{
// //     btn.addEventListener('click',(e) =>{
// //         let food = JSON.parse(btn.dataset.food);
// //       console.log(food);
// //     })
// // })

// function updateCart(food){
// axios.post('/add-cart',food).then(res =>{
// console.log(res);
//     })
// // }

// addToCart.forEach((btn)=>{
//     btn.addEventListener('click',(e) =>{
    
//         let food = JSON.parse(btn.dataset.food);
//         updateCart(food)
//     })
// })