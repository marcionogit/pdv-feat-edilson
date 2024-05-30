// #deleteVenda = Botão para deletar o item do banco de dados.

// #inputApagar = Pega o valor do id para busca.

// deleteOrderSale(value) = função para apagar item expecifico.

// buscarIdCompra = Botão para confirmar busca item banco de dados.

// Quando o usuario digita o id no campo de input e clica no botão buscarIdCompra, chamamos a função findApiOrderSalesId(inputApagar.value) que mostra o item para confirmação do usuario. Caso este seja o item que deverá ser excluido, o usuario clicará no botão deleteVenda, que por sua vez irá chamar a função deleteOrderSale(inputApagar.value), que excluirá o item do banco de dados.

const deleteVenda = document.querySelector('#deleteVenda');
const inputApagar = document.querySelector('#inputApagar');

async function deleteOrderSale(value){

  let response = await fetch(`http://localhost:8080/orders/${value}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8' 
     }, 
  })

  let product = await response.json()
  console.log(product)
}

deleteVenda.addEventListener('click', ()=>{
  deleteOrderSale(inputApagar.value)
})

buscarIdCompra.addEventListener('click', ()=>{
  findApiOrderSalesId(inputApagar.value);
});
