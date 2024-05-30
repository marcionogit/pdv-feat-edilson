// dataAtual = metodo nativo para pagar data do sitema.

// dateToday = irá transformar a dataAtual em string em um formato compativel com o banco de dados

const dataAtual = new Date();
let dateToday = dataAtual.toISOString().split('T')[0];

// postOrderSale = pega as informações na hora de fechar a venda e manda para o banco de dados
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