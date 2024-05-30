// lista = []; array onde será feita uma copia dos objetos(sorvetes) para que consigamos realizar os calculos.
let lista = [];

// precoAtualizado = [] e precoAtualizadoAtacado = []; arrays onde os resultados das multiplicações feitas serão armazenadas, para que no final consigamos soma-las para saber o total da compra.
let descricaoProdutos = []
let precoAtualizado = []
let precoAtualizadoAtacado = []

// // #mostrar =  campo para mostrar a descrição dos iténs que estão sendo selecionados.
let mostrarHTML = document.querySelector('#mostrar');
let vendasSalvas = document.querySelector('.vendasSalvas');

// // #preco = campo onde será mostrado o total da compra.
let preco = document.querySelector('#preco');

// // #desconto = Mostra o valor total de desconto na compra no fluxo normal do programa.
let desconto = document.querySelector('#desconto');

// // #qtdDesconto = Mostra o valor total de desconto na parte inferior da página.
let qtdDesconto = document.querySelector('#qtd-desconto');

let btnAtacado = document.querySelector('#btn-atacado');

// // .finalizadores = campo para finalizar a compra, por padrão ela será display="none"; Ao ser acionada será adicionada a class="ativo" que mudará o display para "grid".
const finalizadores = document.querySelector('.finalizador');

// // #btnConfirmar = botão para quando todos os itens forem registrados, o usuário clicará neste botão para aparecer os finalizadores: DINHEIRO, DEBITO OU CRÉDITO.
const btnConfirmar = document.querySelector('#btn-confirmar');

// // #mostrarTroco = campo onde será exibido o valor de troco para o cliente.
const mostrarTroco = document.querySelector('#mostrarTroco');

// // #excluir-item = botão para excluir item unico durante uma compra.
const botaoExcluir = document.querySelector('#excluir-item');

const mostrarVendasSalvas = document.querySelector('.mostrar-vendas-salvas');



// somaTotalProdutos(arrayEscolhida) = funcão onde nós pegamos a array passada dentro do método e retornamos a soma de todos os itens que estão dentro.
function somaTotalProdutos(arrayEscolhida){
  let somaSorvetes = arrayEscolhida.reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);
  return somaSorvetes;
}

// // mostrarLista() = essa função mostrará quais itens estão sendo selecionados no campo #mostrar.

// // limparCampoQtd() = essa função ao ser acionada limpa o campo input digitado pelo usuario.

// // limparCampoMostrar() = essa função ao ser acionada limpa os iténs mostrados anteriormente no campo #mostrar para que não se repitam esponencialmente.

// // calculoAtualizado() = essa função soma todos os numeros que estão dentro da array precoAtualizado[].

// // somaSorvetesVarejo = chamamos o método somaTotalProdutos() com a array precoAtualizado para que nos seja retornado a soma.

// // somaSorvetesAtacado = chamamos o método somaTotalProdutos() com a array precoAtualizadoAtacado para que nos seja retornado a soma.

// // loop por todos os itens dentro da array lista[].

// // mult = variavel feita para armazenar o calculo do item do loop vezes a sua quantidade.

// // formatado = variavel que armazena a maneira como será formatada a lista de item na tela.

function desativarBotaoAtacado(){
    btnAtacado.classList.remove('virarAtacado');
    mostrarLista()
}

function ativarBotaoAtacado(){
    let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
    let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
    let descontoCompra = somaSorvetesVarejo - somaSorvetesAtacado;
    
    preco.innerHTML = `R$ ${somaSorvetesVarejo.toFixed(2)}`
    
    
    let classAtacado = 'virarAtacado';
    let atributo = btnAtacado.getAttribute('class');
    if(atributo.includes(classAtacado)){
        desativarBotaoAtacado()
        somaSorvetesVarejo = somaSorvetesVarejo
        desconto.innerHTML = `R$ 0.00`
        qtdDesconto.innerHTML = ``
    } 
    else if(lista.length > 0){
        btnAtacado.classList.toggle('virarAtacado');
        if(somaSorvetesVarejo < 40){
            
            somaSorvetesVarejo = somaSorvetesAtacado
            
           quantidade.value = ''
            limparCampoMostrar();
            calculoAtualizado();
            
            lista.forEach((item, index)=>{        
                
                let formatado = `<li value="${index}" class="index-excluir" > ${item.nameProduct} ${precoAtualizadoAtacado[index].toFixed(2)} x ${item.quantityProduct} und.  <strong>R$ ${item.priceWholeSaleProduct.toFixed(2)}</strong></li>` 
                mostrarHTML.innerHTML += formatado;
            })
            preco.innerHTML = `R$ ${somaSorvetesAtacado.toFixed(2)}`
            desconto.innerHTML = `R$ ${descontoCompra.toFixed(2)}`

            qtdDesconto.innerHTML = `DE:${(somaSorvetesVarejo + descontoCompra).toFixed(2)} POR:R$${somaSorvetesAtacado.toFixed(2)}`
        } 
    } else{
        console.log('nenhum item selecionado')
    }  
}

btnAtacado.addEventListener('click', ativarBotaoAtacado)

function excluirItemLista(value){
    lista.splice(value, 1);
    precoAtualizado.splice(value, 1);
    precoAtualizadoAtacado.splice(value, 1);
    mostrarLista();
}

// // limparCampoBotao() = quando o botão Deletar for clicado, acionará essa função e sempre limpará os campos mostrar, preco e as arrays lista=[], e precoAtualizado.
function limparCampoBotao(){
        limparCampoMostrar();
        lista = [];
        precoAtualizado = [];
        precoAtualizadoAtacado = [];
        preco.innerHTML = `R$ 0.00`
        desconto.innerHTML = `R$ 0.00`
        qtdDesconto.innerHTML = ``
    }
    
    // limparCampoMostrar() = quando essa função for chamada, ela sempre limpará o campo mostrar.
    function limparCampoMostrar(){
        mostrarHTML.innerHTML = '';
    }

    function mostrarLista(){
        limparCampoMostrar();
        calculoAtualizado()
    
        let somaSorvetesVarejo = somaTotalProdutos(precoAtualizado);
        let somaSorvetesAtacado = somaTotalProdutos(precoAtualizadoAtacado);
        
        lista.forEach((item, index)=>{  
            if(somaSorvetesVarejo < 40){
                let formatado = `<li value="${index}" class="index-excluir">
                                    <p> ${item.nameProduct} ${precoAtualizado[index].toFixed(2)} x ${item.quantityProduct} und.</p> 
                                    <p><strong>R$ ${item.priceProduct.toFixed(2)}</strong></p>
                                 </li>` 
                mostrarHTML.innerHTML += formatado;    
            } 
            else{
                let formatado = `<li value="${index}" class="index-excluir">
                                    <p> ${item.nameProduct} ${precoAtualizadoAtacado[index].toFixed(2)} x ${item.quantityProduct} und.</p>
                                    <p><strong>R$ ${item.priceWholeSaleProduct.toFixed(2)}</strong></p>
                                </li>` 
                mostrarHTML.innerHTML += formatado; 

                qtdDesconto.innerHTML = `DE:${somaSorvetesVarejo.toFixed(2)} POR:R$${somaSorvetesAtacado.toFixed(2)} `
            }
 
            let indexExcluir = document.querySelectorAll('.index-excluir');
            
            indexExcluir.forEach((item)=>{
                item.addEventListener('click', ()=>{
                    if(item.style.background === "lightgrey"){
                        item.style.background = "white" 
                        
                    } else{
                        item.style.background = "lightgrey" 
                        botaoExcluir.addEventListener('click', ()=>{
                            excluirItemLista(item.value)
                        })
                    }})
                })
                
            }
        )
        }