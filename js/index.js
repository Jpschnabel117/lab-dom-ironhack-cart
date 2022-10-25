// ITERATION 1

function updateSubtotal(product) {
  ('Calculating subtotal, yey!');

  let quantity = Number(product.querySelector('.quantity input').value);
  quantity;
  const price = Number(product.querySelector('.price span').innerText);
  price;

  product.querySelector('.subtotal span').innerText = price * quantity;
  return price * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  let productslist = document.getElementsByClassName('product');
  for (const product of productslist) {
    total = total + updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  'The target in remove is:', target;
  event.currentTarget.parentElement.parentElement;
  target.parentElement.parentElement.remove();
}

// ITERATION 5

function createProduct() {
  let inputs = document
    .querySelector('.create-product')
    .getElementsByTagName('input');

  let name = inputs[0].value;
  name;
  let price = inputs[1].value;
  price;

  let productToCopy = document.querySelector('.product');
  productToCopy;
  let copyOfProduct = productToCopy.cloneNode(true);
  copyOfProduct;

  document.querySelector('tbody').appendChild(copyOfProduct);

  copyOfProduct.querySelector('.price span').innerText = price;
  copyOfProduct.querySelector('.name span').innerText = name;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtonList = document.querySelectorAll('.btn-remove');
  for (const removeButton of removeButtonList) {
    removeButton.addEventListener('click', removeProduct);
  }
  document.querySelector('#create').addEventListener('click', createProduct);
});
