// .fecharVendaSalvas = class para fechar campo que mostra as vendas salvas
const fecharVendasSalvas = document.querySelector('.fecharVendasSalvas');

// findApiOrderSales() = Quando o usuario clicar no botão "VENDAS SALVAS" essa função será acionada.

// Adicionamos as classes 'ativo' e 'animacao' no campo vendasSalvas deixando o campo visivel.

// Em seguida listamos todos os itens dentro do campo ordem de compra(`http://localhost:8080/orders`)

// Como utilizaremos varias vezes a function findApiOrderSales() e o retorno desta função é uma string, antes de listar os itens precisamos limpa-la para que ela não concactene na proxima vez que a chamarmos.

// Por ultimo, removemos a class que adicionamos anteriormente ao campo vendasSalvas deixando ela invisivel novamente.

async function findApiOrderSales() {
  vendasSalvas.classList.add('ativo', 'animacao');
  let response = await fetch(`http://localhost:8080/orders`);
  let product = await response.json();

  mostrarVendasSalvas.innerHTML = '';
  
  product.forEach((item)=>{

    let formatado = `
    <li>
      <input type="number" placeholder="ID" disabled value="${item.id}" style="text-align:center;">

      <textarea name="produto${item.id}" disabled>${item.product}</textarea>

      <input type="text" placeholder="R$" disabled value="${item.total.toFixed(2)}" style="text-align:center;">

      <input type="text" placeholder="DATA" disabled value="${item.moment}" style="text-align:center;">
      
      <input type="text" placeholder="FORMA PGT" disabled value="${item.payment}" style="text-align:center;">
    </li>`   

    mostrarVendasSalvas.innerHTML += formatado;
  })
  
  fecharVendasSalvas.addEventListener('click', ()=>{
    vendasSalvas.classList.remove('ativo', 'animacao');
  })
}

// Como no bloco acima listamos o item puxado.

// #buscadorVenda = Campo que busca um item expecifico para que seja possivel fazer a exclusão.

// #buscarIdCompra = Botão para acionar a busca do item para exclusão.

// #mostrarVendaId = Mostra venda pega pelo #mostrarVenda.

// findApiOrderSalesId(value) = Pega o (`http://localhost:8080/orders/${value}`) o value é o #inputApagar.

// .remover = botão para fechar buscador de vendas.

// ativarClasslist() = Função ativada pelo botão 'APAGAR VENDAS' no HTML. Ele remove as classes "ativo" e "animacao" do campo "vendasSalvas".

const buscadorVenda = document.querySelector('#buscadorVenda');
const buscarIdCompra = document.querySelector('#buscarIdCompra');
const mostrarVendaId = document.querySelector('#mostrarVenda');

async function findApiOrderSalesId(value) {
  let response = await fetch(`http://localhost:8080/orders/${value}`);
  let product = await response.json();

    let formatado = `
    <li style="width:95%;">
      <input type="number" placeholder="ID" disabled value="${product.id}" style="text-align:center;">

      <textarea name="produto${product.id}" disabled>${product.product}</textarea>

      <input type="text" placeholder="R$" disabled value="${product.total}" style="text-align:center;">

      <input type="text" placeholder="DATA" disabled value="${product.moment}" style="text-align:center;">

      <input type="text" placeholder="FORMA PGT" disabled value="${product.payment}" style="text-align:center;">
    </li>`   

    mostrarVendaId.innerHTML = formatado;  
  }

  const remover = document.querySelector('.remover')
  remover.addEventListener('click', ()=>{
    buscadorVenda.classList.remove('ativo', 'animacao');
  })
  
  function ativarClasslist(){
    vendasSalvas.classList.remove('ativo', 'animacao');
    buscadorVenda.classList.add('ativo', 'animacao');
  }
