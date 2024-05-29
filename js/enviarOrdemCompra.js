const dataAtual = new Date();
let dateToday = dataAtual.toISOString().split('T')[0]; // Apenas a data no formato YYYY-MM-DD

console.log(dateToday)


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
      moment:dateToday
    })
  })

  .then((response) => response.json())
  .then((data) => console.log(data))
}