async function findApiOrderSales() {
  vendasSalvas.classList.add('ativo', 'animacao');
  let response = await fetch(`http://localhost:8080/orders`);
  let product = await response.json();

  console.log(product)
  product.forEach((item, i)=>{
    console.log(`Item ${i}: ${item.product}`)
    let formatado = `<li>
    <input type="number" placeholder="ID" disabled value="${i}" style="text-align:center;">
    <textarea name="produto${i}">${item.product}</textarea>
    <input type="text" placeholder="DATA" disabled value="${item.moment}" style="text-align:center;">
    <input type="text" placeholder="FORMA PGT" disabled value="${item.payment}" style="text-align:center;">
    </li>`   
    mostrarVendasSalvas.innerHTML += formatado;
  })
  
  const cancelarVendasSalvas = document.querySelector('#cancelarVendasSalvas');
  
  cancelarVendasSalvas.addEventListener('click', ()=>{
    
    vendasSalvas.classList.remove('ativo', 'animacao');
  })
  
  // <input type="text" placeholder="ITEM" disabled value="${item.product}">
}