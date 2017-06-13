
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
  
  var newid = guid();
  var isoDate = new Date().toISOString();

  // TODO: upload from to table ecomm-Order
  // checkoutData.total user.userid, user.address, datetime
  var params = {
    TableName : 'ecomm-Orders',
    Item: {
      orderId: newid,
      userid: user.userid,
      datetime: isoDate,
      ordertotal: checkoutInfo.total,
      addressLine1: user.address.line1,
      addressCity: user.address.city,
      addressState: user.address.state,
      addressZip: user.address.zip
    },
    ReturnConsumedCapacity: "TOTAL"
  };

  var documentClient = new AWS.DynamoDB.DocumentClient();

  documentClient.put(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      callbackOrderUpload(err, data, params);
    }
  });

  
}

function callbackOrderUpload(err, data, paramsOrder) {
  // display template for divOrder using new ecomm-Order id, user.address
  console.log (paramsOrder.Item.orderId);
  // for (cartLine of checkoutInfo.cart) 
  // TODO: upload to ecomm-Orderline
  // new ecomm-Order id, checkoutLine.productId, checkoutLine.number
}
