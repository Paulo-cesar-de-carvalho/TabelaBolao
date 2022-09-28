/*let btnEnviar = document.querySelector("#btn-enviar")
btnEnviar.addEventListener("click",function(){
    alert("Em contrução")
    //criar valida dados
    
    extrair_dados()
    //criar enviar dados
    console.log(dadosCabecalho)
    let teste = document.querySelector("#Sim-whatsapp")
    console.log(teste)

})

let dadosCabecalho = []
function extrair_dados(){
    dadosCabecalho.push(document.querySelector("#nome-completo").value)
    dadosCabecalho.push(document.querySelector("#cidade").value)
    dadosCabecalho.push(document.querySelector("#celular").value)
    dadosCabecalho.push(document.querySelector("#email").value)
    dadosCabecalho.push(document.querySelector("#Sim-whatsapp").value)
    dadosCabecalho.push(document.querySelector("#concordo").value)
}
*/
//validar dados:
let btnValidar = document.querySelector("#btn-validar")
btnValidar.addEventListener("click",validar)

function validar(){
    console.log ("validei")

}

//inçluir erros em uma variável