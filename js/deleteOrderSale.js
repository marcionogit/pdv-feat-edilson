const deleteVenda = document.querySelector('#deleteVenda');

function deleteOrderSale(value){

  fetch(`http://localhost:8080/orders/${value}`, {
    method: 'DELETE'
  })

  .then((response) => response.json())
  .then((data) => console.log(data))
}

deleteVenda.addEventListener('click', ()=>{
  deleteOrderSale(inputApagar.value)

})


