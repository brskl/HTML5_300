
var checkoutTemplate = Handlebars.compile( $('#checkoutTemplate').html());
var checkoutInfo;

function onLoadCheckoutPage() {
  $('#divCheckout').show();
  $('#divOrder').hide();
  updateCheckoutPage();
}

function updateCheckoutPage() {
  var checkoutLine;
  var prod;
  checkoutInfo = new Object;
  checkoutInfo.total = 0;
  checkoutInfo.cart = [];
  
  for (cartLine of cart) {
    checkoutLine = new Object;
    checkoutLine.productName = cartLine.productName;
    checkoutLine.number = cartLine.number;
    prod = products.find(function(product) {return product.name == this}, cartLine.productName);
    checkoutLine.productId = prod.productId;
    checkoutLine.lineTotal = cartLine.number * prod.price;
    checkoutLine.lineTotalString = "$" + checkoutLine.lineTotal.toFixed(2);
    checkoutInfo.total += checkoutLine.lineTotal;
    checkoutInfo.cart.push(checkoutLine);
  }
  
  checkoutInfo.totalString = "$" + checkoutInfo.total.toFixed(2);
  
  var data = { checkoutData: checkoutInfo };
  var html = checkoutTemplate(data);
  $('#divCheckout').html(html);
}

function onclickSubmitCheckout(evt) {
  $('#divCheckout').hide();
  $('#divOrder').show();
  
  // TODO: upload from to table ecomm-Order
  // checkoutData.total user.userid, user.address, datetime
  
}

function callbackOrderUpload(err, data) {
  // display template for divOrder using new ecomm-Order id, user.address
  // for (cartLine of checkoutInfo.cart) 
  // TODO: upload to ecomm-Orderline
  // new ecomm-Order id, checkoutLine.productId, checkoutLine.number
}
