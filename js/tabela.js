function criar_placar(){

    let tabela = document.querySelector("#tabela")

    let bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src","Imagens/Bandeiras/Time A.png")

    let bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src","Imagens/Bandeiras/Time B.png")

    let selecao1 = document.createElement("span")
    selecao1.setAttribute("id","selecao1")
    selecao1.innerText = "Time A"

    let selecao2 = document.createElement("span")
    selecao2.setAttribute("id","selecao2")
    selecao2.innerText = "Time B"

    let placar1 = document.createElement("input")
    placar1.setAttribute("id","placar1")
    placar1.setAttribute("class","placar")

    let x = document.createElement("span")
    x.innerText = "  X  "

    let placar2 = document.createElement("input")
    placar2.setAttribute("id","placar1")
    placar2.setAttribute("class","placar")

    let placarCompleto = document.createElement("div")
    placarCompleto.setAttribute("id","placar")
    placarCompleto.setAttribute("class","placar-completo")

    placarCompleto.appendChild(selecao1)
    placarCompleto.appendChild(bandeira1)
    placarCompleto.appendChild(placar1)
    placarCompleto.appendChild(x)
    placarCompleto.appendChild(placar2)
    placarCompleto.appendChild(bandeira2)
    placarCompleto.appendChild(selecao2)

    tabela.appendChild(placarCompleto)
}
for (i=0;i<6;i++){
    criar_placar()

}
