
let grupoA =['Catar','Equador','Senegal','Holanda']
let grupoB =['Inglaterra','Irã','Estados Unidos','País de Gales']
let grupoC =['Argentina','Arábia Saudita','México','Polônia']
let grupoD =['França','Austrália','Dinamarca','Tunísia']
let grupoE =['Espanha','Costa Rica','Alemanha','Japão']
let grupoF =['Bélgica','Canadá','Marrocos','Croácia']
let grupoG =['Brasil','Sérvia','Suíça','Camarões']
let grupoH =['Portugal','Gana','Uruguai','Coreia do Sul']

let selecoes = [grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH]
let ordem1 = [1,3,1,4,4,2]
let ordem2 = [2,4,3,2,1,3]
let grupoLetra = ["A","B","C","D","E","F","G","H"]

function criar_placar(timeA,timeB){

    let tabela = document.querySelector("#tabela")

    let dataLocal = document.createElement("div")
    dataLocal.setAttribute("class","data-local")
    dataLocal.innerText = "Data - Horário - Estádio"

    let bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src","Imagens/Bandeiras/"+ timeA +".png")

    let bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src","Imagens/Bandeiras/"+ timeB +".png")

    let selecao1 = document.createElement("span")
    selecao1.setAttribute("id","selecao1")
    selecao1.innerText = timeA

    let selecao2 = document.createElement("span")
    selecao2.setAttribute("id","selecao2")
    selecao2.innerText = timeB

    let placar1 = document.createElement("input")
    placar1.setAttribute("id","placar1")
    placar1.setAttribute("class","placar")

    let x = document.createElement("span")
    x.innerText = "  X  "

    let placar2 = document.createElement("input")
    placar2.setAttribute("id","placar2")
    placar2.setAttribute("class","placar")

    let placarCompleto = document.createElement("div")
    placarCompleto.setAttribute("id","placar")
    placarCompleto.setAttribute("class","placar-completo")

    placarCompleto.appendChild(dataLocal)
    placarCompleto.appendChild(selecao1)
    placarCompleto.appendChild(bandeira1)
    placarCompleto.appendChild(placar1)
    placarCompleto.appendChild(x)
    placarCompleto.appendChild(placar2)
    placarCompleto.appendChild(bandeira2)
    placarCompleto.appendChild(selecao2)

    tabela.appendChild(placarCompleto)
}

function criar_grupos (grupoNum){
    
    let grupo= document.createElement("h3")
    
    grupo.innerText = "Grupo " + grupoLetra[grupoNum-1]
    tabela.appendChild(grupo)
    for (i=0;i<6;i++){
        criar_placar(selecoes[grupoNum-1][ordem1[i]-1],selecoes[grupoNum-1][ordem2[i]-1])
    }
    
}

for(a=1;a<9;a++){
    criar_grupos(a)
}





