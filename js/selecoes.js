//Grupos da copa:
let grupoA =['Catar','Equador','Senegal','Holanda']
let grupoB =['Inglaterra','Irã','Estados Unidos','País de Gales']
let grupoC =['Argentina','Arábia Saudita','México','Polônia']
let grupoD =['França','Austrália','Dinamarca','Tunísia']
let grupoE =['Espanha','Costa Rica','Alemanha','Japão']
let grupoF =['Bélgica','Canadá','Marrocos','Croácia']
let grupoG =['Brasil','Sérvia','Suíça','Camarões']
let grupoH =['Portugal','Gana','Uruguai','Coreia do Sul']
let selecoes = [grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH]

//Ordem dos jogos:
let ordem1 = [1,3,1,4,4,2]
let ordem2 = [2,4,3,2,1,3]
let grupoLetra = ["A","B","C","D","E","F","G","H"]

//Ordem Alfabética:
let selecoesAlfabetica = []
for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        selecoesAlfabetica.push(selecoes[grupos][time])
    }
}
selecoesAlfabetica.sort()

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
