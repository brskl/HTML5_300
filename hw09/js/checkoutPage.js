
var checkoutTemplate = Handlebars.compile( $('#checkoutTemplate').html());

function onLoadCheckoutPage() {
  
  updateCheckoutPage();
}

function updateCheckoutPage() { 
  var data = { cartData: cart };
  var html = checkoutTemplate(data);
  $('#divCheckout').html(html);
}
