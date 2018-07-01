
function clickTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    for(let index = 0; index < navResutls.length; index++) {
      document.getElementById(navResutls)[index].classList.toggle('hidden');
    }
  });
}

function repeatTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    document.getElementById(navResutls).classList.toggle('hidden');
});
}

clickTask('shop-online',{'secondary-nav','shop-cart'})
// repeatTask('shop-online','secondary-nav');
repeatTask('frui','fruit');
repeatTask('veg','veggies');
repeatTask('cer','cereal');
repeatTask('ca','candy');
repeatTask('jui','juice');
repeatTask('frui','fruits');
