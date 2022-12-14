//máscara do campo celular:
let celular = document.querySelector("#celular")


celular.addEventListener("keyup",mascara_celular)
celular.addEventListener("focus",function (){
    if (celular.value == ""){
        celular.value +="("
    }
})

celular.addEventListener("blur",function (){
    if (celular.value == "("){
        celular.value = ""
    }
})

function mascara_celular(){
    if (celular.value == ""){
        celular.value +="("
    }else if (celular.value.length == 3){
        celular.value +=") "
    }else if (celular.value.length == 10){
        celular.value +=" - "
    }
}


//Carregar seleções nas opçoes em ordem alfabética:
function carregar_opcoes(campo){
    for (selecao in selecoesAlfabetica){
        let opcao = document.createElement("option")
        opcao.innerText = selecoesAlfabetica[selecao]
        campo.appendChild(opcao)
    }
}

let opcao_campeao = document.querySelector("#campeao")
let opcao_vice = document.querySelector("#vice-campeao")
let opcao_terceiro = document.querySelector("#terceiro")
let opcao_quarto = document.querySelector("#quarto")

carregar_opcoes(opcao_campeao)
carregar_opcoes(opcao_vice)
carregar_opcoes(opcao_terceiro)
carregar_opcoes(opcao_quarto)

//Exibir a bandeira da seleção selecionada:

function selecionar_bandeira(indice){
    let paisSelecionado = document.querySelectorAll(".opcao-pais")[indice]
    let bandeiraSelecionada = document.querySelectorAll(".bandeira-selecionada")[indice]
    bandeiraSelecionada.innerText = ""
    let bandeiraCampeao = document.createElement("img")
    bandeiraCampeao.setAttribute("src","Imagens/Bandeiras/"+ paisSelecionado.value +".png")
    bandeiraCampeao.setAttribute("class", "bandeira")
    bandeiraSelecionada.appendChild(bandeiraCampeao)
}

opcao_campeao.addEventListener("change",function (){
    selecionar_bandeira(0)
})

opcao_vice.addEventListener("change",function (){
    selecionar_bandeira(1)
})

opcao_terceiro.addEventListener("change",function (){
    selecionar_bandeira(2)
})

opcao_quarto.addEventListener("change",function (){
    selecionar_bandeira(3)
}) 

//mensagem de encerramento:
// let diaEncerramento = new Date(2022,10,19).getTime()
// let dataHoje = new Date().getTime()
// let diasRestantes = ((diaEncerramento-dataHoje)/1000/3600).toFixed(0)

// document.querySelector("#encerramento").innerText = `Atenção!!! Faltam  ${diasRestantes} horas para o encerramento das apostas`
