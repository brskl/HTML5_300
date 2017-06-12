
function windowOnLoad() {
  if (typeof loadProducts != 'undefined') {
    loadProducts();
  }
  if (typeof updateProductList != 'undefined') {
    updateProductList();
  }
  if (typeof fillFilterBy != 'undefined') {
    fillFilterBy();
  }

  if (typeof loadUpdateUser != 'undefined') {
    loadUpdateUser();
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
