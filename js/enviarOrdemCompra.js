function postOrderSale( product, total, payment){

  fetch('http://localhost:8080/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product:product,
      total:total,
      payment:payment,
      moment:'2024-05-27'
    })
  })

  .then((response) => response.json())
  .then((data) => console.log(data))
}