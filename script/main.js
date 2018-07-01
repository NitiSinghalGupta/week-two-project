
function clickTask (clickContent, navResutls){
  document.getElementById(clickContent).addEventListener("click", function(e){
    for(let index = 0; index < navResutls.length; index++) {
      document.getElementById(navResutls[index]).classList.toggle('hidden');
    }
  });
}

function repeatTask (clickContent, navResutls, hideElement){
  document.getElementById(clickContent).addEventListener("click", function(e){
    document.getElementById(navResutls).classList.toggle('hidden');

    for(let i=0; i<hideElement.length;i++) {
      document.getElementById(hideElement[i]).classList.add('hidden');
    }
});
}

clickTask('shop-online',['secondary-nav','shop-cart']);
// repeatTask('shop-online','secondary-nav');
repeatTask('frui', 'fruit', ['veggies', 'cereal', 'candy', 'juice']);
repeatTask('veg','veggies', ['fruit', 'cereal', 'candy', 'juice']);
repeatTask('cer','cereal', ['veggies', 'fruit', 'candy', 'juice']);
repeatTask('ca','candy', ['veggies', 'cereal', 'fruit', 'juice']);
repeatTask('jui','juice', ['veggies', 'cereal', 'candy', 'fruit']);
// repeatTask('frui','fruits');
