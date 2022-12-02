
function criar_oitavas_de_final (selecoesMandantes,selecoesVisitante, dataHoraOitavas){
    
    let grupo = document.createElement("div")
    grupo.setAttribute("class", "grupo") 
    let tituloGrupo = document.createElement("h3")
    let tabela = document.querySelector("#tabela")
    
    tituloGrupo.innerText = "Oitavas-de-final"
    grupo.appendChild(tituloGrupo)
    
    for (i=0;i<8;i++){
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

//Dados oitavas de final:
let a1 = "Holanda"
let b1 = "Inglaterra"
let c1 = "Argentina"
let d1 = "França"
let e1 = "Japão"
let f1 = "Marrocos"
let g1 = "Brasil"
let h1 = "Portugal"
let a2 = "Senegal"
let b2 = "Estados Unidos"
let c2 = "Polônia"
let d2 = "Austrália"
let e2 = "Espanha"
let f2 = "Croácia"
let g2 = "Suíça"
let h2 = "Coreia do Sul"

// ordem jogos:
let selecoesMandantes = [a1, c1, d1, b1, e1, g1, f1, h1]
let selecoesVisitante = [b2, d2, c2, a2, f2, h2, e2, g2]

const dataHoraOitavas = ["03/12/22 sáb 12:00 - Estádio Inter. Khalifa, Al Rayyan","03/12/22 sáb 16:00 - Estádio Ahmed Bin Ali, Al Rayyan",
    "04/12/22 dom 12:00 - Estádio Al Thumama, Doha","04/12/22 dom 16:00 - Estádio Al Bayt, Al Khor","05/12/22 seg 12:00 - Estádio Al Janoub, Al Wakrah",
    "05/12/22 seg 16:00 - Estádio 974, Doha","06/12/22 ter 12:00 - Est. Cidade da Educação, Al Rayyan","06/12/22 ter 16:00 - Estádio Nacional Lusail"]

criar_oitavas_de_final(selecoesMandantes,selecoesVisitante, dataHoraOitavas)