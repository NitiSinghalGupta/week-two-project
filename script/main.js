

document.getElementById('shop-online').addEventListener("click", displaySecNav);

function displaySecNav(e){
  document.getElementById('secondary-nav').classList.remove('hidden');
}

document.getElementById('frui').addEventListener("click",displayFruits);

function displayFruits(e){
  document.getElementById('fruits').classList.remove('hidden');
}









// var fruits = [];
//
// fruits.push({ name : 'bananas', price : 2.99, image : '/fruits/bananas.png' });
// fruits.push({ name : 'cherries', price : 8.99, image : '/fruits/cherries.png' });
//
// let parent = document.getElementById('fruits');
// for(let index = 0; index < fruits.length; index++) {
//   let fruit = fruits[index];
//   // generate card element
//   let card = document.createElement('div');
//   card.addClass('card-item');
//  // push it to dom
//   parent.appendChild(card);
// }
