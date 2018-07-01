
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

// function repeatTask (clickContent, navResutls, hideElement){
//   document.getElementById(clickContent).addEventListener("click", function(e){
//     document.getElementById(navResutls).classList.toggle('hidden');
// for(let i=0; i<hideElement.length;i++) {
//       document.getElementById(hideElement[i]).classList.add('hidden');
//     }
// });
// }

clickTask('shop-online',['secondary-nav','shop-cart']);

repeatTask('frui', 'fruit');
repeatTask('veg','veggies');
repeatTask('cer','cereal');
repeatTask('ca','candy');
repeatTask('jui','juice');
