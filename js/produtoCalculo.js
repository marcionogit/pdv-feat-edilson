// .btn-escolha = class que está em cada produto do HTML.
const btnClicado = document.querySelectorAll('.btn-escolha');

// #qtd = campo input para multiplicao.
let quantidade = document.querySelector('#qtd');

// findApi(idProduct) = function que busca um produto expecifico do banco de dados.

// Fiz uma codição que verifica se a quantidade for igual a zero ou igual a vazio, a quantidade se torna um.

// Para ficar melho o entendimento separei cada propriedade recebida pelo banco de dados em variaveis.

// nameProduct = nome do item.

// priceProduct = preço varejo do item.

// priceWholeSaleProduct = preço atacado do item.

// quantityProduct = quantidade para salvarmos nas listas.

// Depois adicionamos esses valores em algumas listas:
// lista: Adicionamos o nome, preço varejo, preço atacado, e a quantidade.
// precoAtualizado: Adicionamos preco varejo.
// precoAtualizadoAtacado : Adicionamos preco atacado.
// descricaoProdutos : Adicionamos já formatado para exibição da tela nome, quantidade para enviarmos para o banco de dados no campo descrição.

// Depois de tudo limpamos o valor do campo quantidade e chamamos a função mostrarLista() para exibir na tela.

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

  lista.push({nameProduct, priceProduct, priceWholeSaleProduct, quantityProduct})
  precoAtualizado.push(priceProduct);
  precoAtualizadoAtacado.push(priceWholeSaleProduct);

  let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
  descricaoProdutos.push(`${nameProduct} ${quantityProduct} x R$${(somaSorvetesVarejo <= 39 ? priceProduct : priceWholeSaleProduct).toFixed(2)}`);
  
  quantidade.value = ''

  mostrarLista()
 }

 // calculoAtualizado() = Sempre que for chamada irá atualizar os campos preço e desconto do HTML.

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

// Loop por todos os itens que contenha a class ".btn-escolha". Em seguida adicionando um escutador de eventos de click em cada botão.

// idProduct = Pegamos o atributo value do botão e aciona a função findApi() puxando o item no banco de dados.

btnClicado.forEach((item)=>{
  item.addEventListener('click', ()=>{
    let idProduct = item.getAttribute('value');

    findApi(idProduct)    
  })
})
