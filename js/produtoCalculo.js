
async function findApi(idProduct) {
  let response = await fetch(`http://localhost:8080/products/${idProduct}`);
  let product = await response.json();
  
  if(quantidade.value === 0 || quantidade.value === ''){
    quantidade.value = 1;
  }
  
  const nameProduct = product.name;
  const priceProduct = +product.price * +quantidade.value;
  const priceWholeSaleProduct = +product.wholesaleprice * +quantidade.value;
  let quantityProduct = +quantidade.value;
  
  console.log(`Descrição: ${nameProduct}`);
  console.log(`Preço: ${priceProduct}`);
  console.log(`Preço Atacado: ${priceWholeSaleProduct}`);

  lista.push({nameProduct, priceProduct, priceWholeSaleProduct, quantityProduct})
  precoAtualizado.push(priceProduct);
  precoAtualizadoAtacado.push(priceWholeSaleProduct);

  let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
  descricaoProdutos.push(`${nameProduct} ${quantidade.value} x R$${(somaSorvetesVarejo <= 39 ? priceProduct : priceWholeSaleProduct).toFixed(2)}`);
  

  quantidade.value = ''
  mostrarLista()
 }

 function calculoAtualizado(){
  let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
  let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
  let descontoCompra = somaSorvetesVarejo - somaSorvetesAtacado;


  if(somaSorvetesVarejo < 40){
    preco.innerHTML = `R$ ${somaSorvetesVarejo.toFixed(2)}`
    desconto.innerHTML = `R$ 0.00`
  } else{
      preco.innerHTML = `R$ ${somaSorvetesAtacado.toFixed(2)}`
      desconto.innerHTML = `R$ ${descontoCompra.toFixed(2)}`
  }
}


const btnClicado = document.querySelectorAll('.btn-escolha');

btnClicado.forEach((item)=>{
  item.addEventListener('click', ()=>{
    let idProduct = item.getAttribute('value');

    findApi(idProduct)    
  })
})
