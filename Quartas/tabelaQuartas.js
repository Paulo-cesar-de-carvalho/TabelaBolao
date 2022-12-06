
function criar_oitavas_de_final (selecoesMandantes,selecoesVisitante, dataHoraOitavas){
    
    let grupo = document.createElement("div")
    grupo.setAttribute("class", "grupo") 
    let tituloGrupo = document.createElement("h3")
    let tabela = document.querySelector("#tabela")
    
    tituloGrupo.innerText = "Quartas-de-final"
    grupo.appendChild(tituloGrupo)
    
    for (i=0;i<4;i++){
        criar_placar_oitavas(selecoesMandantes[i],selecoesVisitante[i],grupo,i,dataHoraOitavas[i])
    }
    tabela.appendChild(grupo)
}
function criar_placar_oitavas(timeA,timeB,grupo,jogo, dataHoraEstadio){

    let dataLocal = document.createElement("div")
    dataLocal.setAttribute("class","data-local")
    dataLocal.innerText = dataHoraEstadio

    let bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src",`../Imagens/Bandeiras/${timeA}.png`)
    bandeira1.setAttribute("alt","Imagem Bandeira "+ timeA)

    let bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src",`../Imagens/Bandeiras/${timeB}.png`)
    bandeira2.setAttribute("alt","Imagem Bandeira "+ timeB)

    let selecao1 = document.createElement("label")
    selecao1.setAttribute("id","selecao1")
    selecao1.setAttribute("for","A-"+(jogo+1))
    selecao1.innerText = timeA

    let selecao2 = document.createElement("label")
    selecao2.setAttribute("id","selecao2")
    selecao2.setAttribute("for","B-"+(jogo+1))
    selecao2.innerText = timeB

    let placar1 = document.createElement("input")
    placar1.setAttribute("id","A-"+(jogo+1))
    placar1.setAttribute("class","placar")
    placar1.setAttribute("required","")
    placar1.setAttribute("type", "number")
    placar1.setAttribute("min", "0")
    placar1.setAttribute("name",`Jogo-A-${jogo+1}`)

    let x = document.createElement("span")
    x.innerText = "  X  "

    let placar2 = document.createElement("input")
    placar2.setAttribute("id","B-"+(jogo+1))
    placar2.setAttribute("class","placar")
    placar2.setAttribute("required","")
    placar2.setAttribute("type", "number")
    placar2.setAttribute("min", "0")
    placar2.setAttribute("name",`Jogo-B-${jogo+1}`)

    let placarCompleto = document.createElement("div")
    let placarSemData = document.createElement("div")
    placarSemData.setAttribute("class", "placar-sem-data")
    placarCompleto.setAttribute("id","placar")
    placarCompleto.setAttribute("class","placar-completo")

    placarCompleto.appendChild(dataLocal)
    placarSemData.appendChild(selecao1)
    placarSemData.appendChild(bandeira1)
    placarSemData.appendChild(placar1)
    placarSemData.appendChild(x)
    placarSemData.appendChild(placar2)
    placarSemData.appendChild(bandeira2)
    placarSemData.appendChild(selecao2)
    placarCompleto.appendChild(placarSemData)

    grupo.appendChild(placarCompleto)
    
}

criar_oitavas_de_final(selecoesMandantes,selecoesVisitante, dataHoraOitavas)