
function windowOnLoad() {
  getCognitoUser();
  loadUpdateUser();

  if (typeof loadProducts != 'undefined') {
    loadProducts();
  }
  if (typeof updateProductList != 'undefined') {
    updateProductList();
  }
  if (typeof fillFilterBy != 'undefined') {
    fillFilterBy();
  }

  if (typeof onLoadUserPage != 'undefined') {
    onLoadUserPage();
  }

  loadCart();

  if (typeof onLoadCheckoutPage != 'undefined') {
    onLoadCheckoutPage();
  }
}

window.onload = windowOnLoad;

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
