// TODO: Consider placing filter arrays in DynamoDB table, possibly string set
var filterGloves = [
  { "optionValue": "mitten", "optionText": "Mittens" },
  { "optionValue": "fingerless", "optionText": "Fingerless" },
  { "optionValue": "fullfinger", "optionText": "Full Finger" },
  { "optionValue": "liner", "optionText": "Liners" },
  { "optionValue": "convertible", "optionText": "Convertibles" }
]

var filterHats = [
  { "optionValue": "ascot", "optionText": "Ascot" },
  { "optionValue": "baseball", "optionText": "Baseball" },
  { "optionValue": "beanie", "optionText": "Beanies" },
  { "optionValue": "beret", "optionText": "Berets" },
  { "optionValue": "dress", "optionText": "Dress" }
]

var filterScarves = [
  { "optionValue": "stripe", "optionText": "Stripes" },
  { "optionValue": "solid", "optionText": "Solids" },
  { "optionValue": "plaid", "optionText": "Plaids" },
  { "optionValue": "pattern", "optionText": "Patterns" }
]

var products;

function loadProducts() {
  if (!Modernizr.sessionstorage) {
    return;
  }

  var productsStorage = sessionStorage["products"];
  if (productsStorage) {
    products = JSON.parse(productsStorage);
  } else {
    downloadProducts();
  }
}

function idxProduct(prodId) {
  var i;

  for (i = 0; i < products.length; i++) {
    if (products[i].productId === prodId) {
      return i;
    }
  }
  return -1;
}

function downloadProducts() {
  // Initialize the Amazon Cognito credentials provider
  AWS.config.region = 'us-east-1'; // Region
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:00bc38d6-c5d0-4cb8-879c-a5976a6a19b3',
  });
  var dynamodbdoc = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "ecomm-Products"
  };
  dynamodbdoc.scan(params, function(err, data) {
    if (err) {
      console.log(err, err.stack); // an error occurred
    } else {
      console.log("Downloaded products from DynamoDB");
      products = data.Items;
      sessionStorage["products"] = JSON.stringify(products);
    }
  });
}
