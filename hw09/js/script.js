
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

  loadCart();
}

window.onload = windowOnLoad;
