//máscara do campo celular:
let celular = document.querySelector("#celular")
let btnApagarCelular = document.querySelector("#btn-apagar-celular")

celular.addEventListener("keyup",mascara_celular)
celular.addEventListener("focus",function (){
    if (celular.value == ""){
        celular.value +="("
    }
    btnApagarCelular.setAttribute("class", "botao")
})

celular.addEventListener("blur",function (){
    if (celular.value == "("){
        celular.value = ""
        
    }
    btnApagarCelular.setAttribute("class", "invisivel")
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

btnApagarCelular.addEventListener("click", function(){
    celular.value = ""
})

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
function selecionar_bandeira(pais,campo){
    
    let bandeiraCampeao = document.createElement("img")
    bandeiraCampeao.setAttribute("src","Imagens/Bandeiras/"+ pais +".png")
    bandeiraCampeao.setAttribute("class", "bandeira")
    let opcao_campeao_pai = campo.parentElement
    opcao_campeao_pai.appendChild(bandeiraCampeao)
}

opcao_campeao.addEventListener("change",function (){
    let paisSelecionado = document.getElementsByTagName("select")[0]
    selecionar_bandeira(paisSelecionado.value,opcao_campeao)
})

opcao_vice.addEventListener("change",function (){
    let paisSelecionado = document.getElementsByTagName("select")[1]
    selecionar_bandeira(paisSelecionado.value,opcao_vice)
})
opcao_terceiro.addEventListener("change",function (){
    let paisSelecionado = document.getElementsByTagName("select")[2]
    selecionar_bandeira(paisSelecionado.value,opcao_terceiro)
})
opcao_quarto.addEventListener("change",function (){
    let paisSelecionado = document.getElementsByTagName("select")[3]
    selecionar_bandeira(paisSelecionado.value,opcao_quarto)
})

