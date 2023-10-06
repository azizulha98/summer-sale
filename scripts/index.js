let totalPrice = 0;
function getEventHandlerById(event) {
  const itemsContainer = document.getElementById('items-container');
  const textElement = event.parentNode.childNodes[3].childNodes[3].innerText;
  const counts = itemsContainer.childElementCount;
  const p = document.createElement('p');
  p.classList.add('my-2');
  p.classList.add('ml-4')
  p.innerHTML = `${counts + 1}. ${textElement}`;
  itemsContainer.appendChild(p)
  const productPrice = event.parentNode.childNodes[3].childNodes[5].childNodes[1].innerText;
  totalPrice = parseInt(totalPrice) + parseInt(productPrice);
  document.getElementById('total-amount').innerText = totalPrice;
  if (totalPrice > 0) {
    document.getElementById("make-purchase").removeAttribute('disabled')

  }
  if (totalPrice >= 200) {
    document.getElementById('apply-coupon').removeAttribute('disabled')
    document.getElementById('sell-element').removeAttribute('disabled')
  }
}
function sellCoupon(event) {
  const sellCouponValue = event.innerText;
  document.getElementById('input-field').value = sellCouponValue;
}
document.getElementById('apply-coupon').addEventListener('click', function () {
  const inputField = document.getElementById('input-field');
  let couponValue = inputField.value;
  const discountField = document.getElementById('discount-amount');
  const totalPrice = document.getElementById('total-amount');
  const productPriceElement = parseInt(totalPrice.innerText);
  if (couponValue === 'SELL200') {
    const discountPrice = parseFloat(productPriceElement * .2).toFixed(2);
    discountField.innerText = discountPrice;
    const finalPremed = (productPriceElement - discountPrice).toFixed(2);
    document.getElementById('final-amount').innerText = finalPremed;
  } else {
    alert('Invalid Coupon')
  }
})