
function repeatTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    document.getElementById(navResutls).classList.remove('hidden');
  });
}

repeatTask('shop-online','secondary-nav');

document.getElementById('frui').addEventListener("click", function(e){
  document.getElementById('fruit').classList.remove('hidden');
});



document.getElementById('veg').addEventListener("click",displayFruits);

function displayFruits(e){
  document.getElementById('veggies').classList.remove('hidden');
}

document.getElementById('cer').addEventListener("click",displayFruits);

function displayFruits(e){
  document.getElementById('cereal').classList.remove('hidden');
}

document.getElementById('jui').addEventListener("click",displayFruits);

function displayFruits(e){
  document.getElementById('juice').classList.remove('hidden');
}

document.getElementById('ca').addEventListener("click",displayFruits);

function displayFruits(e){
  document.getElementById('candy').classList.remove('hidden');
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
