
function repeatTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    document.getElementById(navResutls).classList.remove('hidden');
  });
}

repeatTask('shop-online','secondary-nav');
repeatTask('frui','fruits');
repeatTask('veg','veggies');
repeatTask('cer','cereal');
repeatTask('ca','candy');
repeatTask('jui','juice');
repeatTask('frui','fruits');
