const cancelarVendasSalvas = document.querySelector('.cancelarVendasSalvas');




async function findApiOrderSales() {
  vendasSalvas.classList.add('ativo', 'animacao');
  let response = await fetch(`http://localhost:8080/orders`);
  let product = await response.json();

  console.log(product)
  product.forEach((item, i)=>{
    console.log(`Item ${i}: ${item.product}`)
    let formatado = `<li>
    <input type="number" placeholder="ID" disabled value="${i}" style="text-align:center;">
    <textarea name="produto${i}" disabled>${item.product}</textarea>
    <input type="text" placeholder="DATA" disabled value="${item.moment}" style="text-align:center;">
    <input type="text" placeholder="FORMA PGT" disabled value="${item.payment}" style="text-align:center;">
    </li>`   
    mostrarVendasSalvas.innerHTML += formatado;
  })
  
  cancelarVendasSalvas.addEventListener('click', ()=>{
  
  
    vendasSalvas.classList.remove('ativo', 'animacao');
  })
  
}

const buscadorVenda = document.querySelector('#buscadorVenda');
const buscarIdCompra = document.querySelector('#buscarIdCompra');
const inputApagar = document.querySelector('#inputApagar');
const mostrarVendaId = document.querySelector('#mostrarVenda');

async function findApiOrderSalesId(value) {
  let response = await fetch(`http://localhost:8080/orders/${value}`);
  let product = await response.json();
  
  console.log(product)

    let formatado = `<li style="width:95%;">
    <input type="number" placeholder="ID" disabled value="${product.id}" style="text-align:center;">
    <textarea name="produto${product.id}" disabled>${product.product}</textarea>
    <input type="text" placeholder="DATA" disabled value="${product.moment}" style="text-align:center;">
    <input type="text" placeholder="FORMA PGT" disabled value="${product.payment}" style="text-align:center;">
    </li>`   
    mostrarVendaId.innerHTML = formatado;

    
    

    
  }
  const remover = document.querySelector('.remover')
  remover.addEventListener('click', ()=>{

    buscadorVenda.classList.remove('ativo', 'animacao');

  })
  
  
  // <input type="text" placeholder="ITEM" disabled value="${item.product}">
  buscarIdCompra.addEventListener('click', ()=>{
    findApiOrderSalesId(inputApagar.value);
  });
  
  function ativarClasslist(){
    vendasSalvas.classList.remove('ativo', 'animacao');
    buscadorVenda.classList.add('ativo', 'animacao');
  }
