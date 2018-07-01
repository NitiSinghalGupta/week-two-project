
function clickTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    for(let index = 0; index < navResutls.length; index++) {
      document.getElementById(navResutls[index]).classList.toggle('hidden');
    }
  });
}

function repeatTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    let hideElement = document.getElementsByClassName('itemi');
    for(let i=0; i<hideElement.length;i++) {
      hideElement[i].classList.add('hidden');
    }

    document.getElementById(navResutls).classList.toggle('hidden');
});
}

clickTask('shop-online',['secondary-nav','shop-cart']);
repeatTask('frui', 'fruit');
repeatTask('veg','veggies');
repeatTask('cer','cereal');
repeatTask('ca','candy');
repeatTask('jui','juice');

let cart = [];
let x = document.getElementsByClassName('atc');
for(let i=0; i<x.length; i++){
x[i].addEventListener('click',function(e){
  let buttonName = e.target.getAttribute('data-name');
  let buttonPrice = e.target.getAttribute('data-price');
  let item = {
      name : buttonName,
      price : buttonPrice
  };
  cart.push(item);

  updateCart();

});

}



function updateCart() {
  let sum = 0;
  for(let i = 0; i < cart.length ; i++){
    let item = cart[i];

     sum = sum + Number(item.price);

  }

  let ul = document.getElementById('cart-items');

  // delete all current items in cart
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // update items in Cart
  for(let i = 0; i < cart.length; i++) {
    let item = cart[i];

    let li = document.createElement('li');
    li.innerHTML = item.name + ' for $' + item.price;
// creating the remove button in the shopping cart using font awesome class
    let cross = document.createElement('i');
    cross.classList.add('fa');
    cross.classList.add('fa-times');
    li.appendChild(cross);
    ul.appendChild(li);

  }

  // update the price
  document.getElementById('cart-total').innerHTML = '$' + sum;
}
