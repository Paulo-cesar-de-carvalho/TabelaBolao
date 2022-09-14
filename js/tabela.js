
//Tabala.js é responsável por criar a tabela: jogos, grupos

function criar_placar(timeA,timeB,grupo){

    let dataLocal = document.createElement("div")
    dataLocal.setAttribute("class","data-local")
    dataLocal.innerText = "Data - Horário - Estádio"

    let bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src","Imagens/Bandeiras/"+ timeA +".png")
    bandeira1.setAttribute("alt","Imagem Bandeira "+ timeA)

    let bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src","Imagens/Bandeiras/"+ timeB +".png")
    bandeira2.setAttribute("alt","Imagem Bandeira "+ timeB)

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

    grupo.appendChild(placarCompleto)
}

function criar_grupos (grupoNum){
    
    let grupo = document.createElement("div")
    grupo.setAttribute("class", "grupo") 
    let tituloGrupo = document.createElement("h3")
    let tabela = document.querySelector("#tabela")
    
    tituloGrupo.innerText = "Grupo " + grupoLetra[grupoNum-1]
    grupo.appendChild(tituloGrupo)
    
    for (i=0;i<6;i++){
        criar_placar(selecoes[grupoNum-1][ordem1[i]-1],selecoes[grupoNum-1][ordem2[i]-1],grupo)
    }

    tabela.appendChild(grupo)
    
}
for(a=1;a<9;a++){
    criar_grupos(a)
}


