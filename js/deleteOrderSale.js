const deleteVenda = document.querySelector('#deleteVenda');

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


