// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let quantity = Number(product.querySelector('.quantity input').value);
  console.log(quantity);
  const price = Number(product.querySelector('.price span').innerText);
  console.log(price);

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
  console.log('The target in remove is:', target);
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
