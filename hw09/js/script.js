
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

  loadCart();
}

window.onload = windowOnLoad;
