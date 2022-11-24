

function criar_oitavas_de_final (selecoesMandantes,selecoesVisitante){
    
    let grupo = document.createElement("div")
    grupo.setAttribute("class", "grupo") 
    let tituloGrupo = document.createElement("h3")
    let tabela = document.querySelector("#tabela")
    
    tituloGrupo.innerText = "Oitavas-de-final"
    grupo.appendChild(tituloGrupo)
    
    for (i=0;i<8;i++){
        criar_placar(selecoesMandantes[i],selecoesVisitante[i],grupo)
    }

    tabela.appendChild(grupo)
    
}



//Dados oitavas de final:
let a1 = "Holanda"
let b1 = "Inglaterra"
let c1 = "Argentina"
let d1 = "França"
let e1 = "Alemanha"
let f1 = "Bélgica"
let g1 = "Brasil"
let h1 = "Uruguai"
let a2 = "Equador"
let b2 = "Estados Unidos"
let c2 = "México"
let d2 = "Dinamarca"
let e2 = "Espanha"
let f2 = "Croácia"
let g2 = "Suíça"
let h2 = "Portugal"

// ordem jogos:
let selecoesMandantes = [a1, c1, b1, d1, e1, g1, f1, h1]
let selecoesVisitante = [b2, d2, a2, c2, f2, h2, e2, g2]

criar_oitavas_de_final(selecoesMandantes,selecoesVisitante)
//Estádios:
const estadiosOitavas = ['Estádio 974, Doha','Estádio Ahmed Bin Ali, Al Rayyan','Estádio Al Bayt, Al Khor','Estádio Al Janoub, Al Wakrah',
    'Estádio Al Thumama, Doha','Est. Cidade da Educação, Al Rayyan','Estádio Inter. Khalifa, Al Rayyan','Estádio Nacional Lusail']



function criar_placar_oitavas(timeA,timeB,grupo){

    let dataLocal = document.createElement("div")
    dataLocal.setAttribute("class","data-local")
    dataLocal.innerText = datas[jogo].toUpperCase() +" - "+ estadios[ordemEstadios[jogo]-1]

    let bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src",`Imagens/Bandeiras/${timeA}.png`)
    bandeira1.setAttribute("alt","Imagem Bandeira "+ timeA)

    let bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src",`Imagens/Bandeiras/${timeB}.png`)
    bandeira2.setAttribute("alt","Imagem Bandeira "+ timeB)

    let selecao1 = document.createElement("span")
    selecao1.setAttribute("id","selecao1")
    selecao1.innerText = timeA

    let selecao2 = document.createElement("span")
    selecao2.setAttribute("id","selecao2")
    selecao2.innerText = timeB

    let placar1 = document.createElement("input")
    placar1.setAttribute("id","A-"+(jogo+1))
    placar1.setAttribute("class","placar")
    placar1.setAttribute("required","")
    placar1.setAttribute("type", "number")
    placar1.setAttribute("min", "0")
    placar1.setAttribute("name",`Jogo-A-${ordemJogos[jogo]}`)

    let x = document.createElement("span")
    x.innerText = "  X  "

    let placar2 = document.createElement("input")
    placar2.setAttribute("id","B-"+(jogo+1))
    placar2.setAttribute("class","placar")
    placar2.setAttribute("required","")
    placar2.setAttribute("type", "number")
    placar2.setAttribute("min", "0")
    placar2.setAttribute("name",`Jogo-B-${ordemJogos[jogo]}`)

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
    jogo++
}