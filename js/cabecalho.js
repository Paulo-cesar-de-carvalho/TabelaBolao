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

