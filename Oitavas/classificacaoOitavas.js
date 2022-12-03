function preConstruirTabela() {
    const tbodyClassificacao = document.getElementById("tbodyClassificacao")

    // Pré-construir a tabela, para que a página não fique vazia até ter um retorno da API
    for (let i = 0; i < apostas.length; i++) {
        const row = document.createElement("tr")
        const tds = ["", "", apostas[i].nome, "", "", ""]
        const aligns = ["center", "center", "left", "center", "center", "center"]
        for (let j = 0; j < tds.length; j++) {
            const tdObj = document.createElement("td")
            tdObj.innerHTML = tds[j]
            tdObj.style = `text-align: ${aligns[j]}`
            row.appendChild(tdObj)
        }
        tbodyClassificacao.appendChild(row)
    }
}

function construirTabela(placaresReais) {
    const tbodyClassificacao = document.getElementById("tbodyClassificacao")

    const {classificacaoAtual} = calcularClassificacao(placaresReais)

    console.log("Apostas")
    console.log(apostas)
    console.log("Classificação")
    console.log(classificacaoAtual)
	
	for (let i = 0; i < classificacaoAtual.length; i++) {
		const row = tbodyClassificacao.children[i]
		const td = []
        let v = ""
        if (classificacaoAtual[i]["var"] != 0) {
            if (classificacaoAtual[i]["var"] > 0) {
                v = "<span class='var-vermelho'>" + classificacaoAtual[i]["var"] + "↓</span>"
            }
            else {
                v = "<span class='var-verde'>" + (-classificacaoAtual[i]["var"]) + "↑</span>"
            }
        }
		td[0] = v
        td[1] = classificacaoAtual[i]["pos"] + "º"
        if (i > 0) {
            if (classificacaoAtual[i]["pos"] == classificacaoAtual[i-1]["pos"]) { 
                td[1] = ""
            }
        }
		td[2] = classificacaoAtual[i]["nome"]
		td[3] = classificacaoAtual[i]["pontos"]
		td[4] = classificacaoAtual[i]["placares"]
		td[5] = classificacaoAtual[i]["resultados"]
		for (let j = 0; j < td.length; j++) {
			row.children[j].innerHTML = td[j]
		}
	}
}

function criarPlacar(dataLocal, timeA, timeB, placarA, placarB) {
    const dataLocalDiv = document.createElement("div")
    dataLocalDiv.setAttribute("class","data-local")
    dataLocalDiv.innerText = dataLocal

    const bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src",`/Imagens/Bandeiras/${timeA}.png`)
    bandeira1.setAttribute("alt","Imagem Bandeira "+ timeA)

    const bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src",`/Imagens/Bandeiras/${timeB}.png`)
    bandeira2.setAttribute("alt","Imagem Bandeira "+ timeB)

    const selecao1 = document.createElement("span")
    selecao1.setAttribute("id","selecao1")
    selecao1.innerText = timeA

    const selecao2 = document.createElement("span")
    selecao2.setAttribute("id","selecao2")
    selecao2.innerText = timeB

    const x = document.createElement("span")
    x.innerText = "  X  "

    const placar1 = document.createElement("input")
    placar1.setAttribute("class","placar")
    placar1.setAttribute("disabled", true)
    placar1.value = placarA

    const placar2 = document.createElement("input")
    placar2.setAttribute("class","placar")
    placar2.setAttribute("disabled", true)
    placar2.value = placarB

    const placarSemData = document.createElement("div")
    placarSemData.setAttribute("class", "placar-sem-data")
    placarSemData.appendChild(selecao1)
    placarSemData.appendChild(bandeira1)
    placarSemData.appendChild(placar1)
    placarSemData.appendChild(x)
    placarSemData.appendChild(placar2)
    placarSemData.appendChild(bandeira2)
    placarSemData.appendChild(selecao2)

    const placarCompleto = document.createElement("div")
    placarCompleto.setAttribute("class","placar-completo")
    placarCompleto.appendChild(dataLocalDiv)
    placarCompleto.appendChild(placarSemData)

    return placarCompleto
}

function construirPlacares(placaresReais) {
    const resultadosOficiais = document.getElementById("resultados-oficiais")

    for (let i = 0; i < 8; i++) {
        const placar = criarPlacar(
            dataHoraOitavas[i],
            selecoesMandantes[i],
            selecoesVisitante[i],
            placaresReais[i].placar1,
            placaresReais[i].placar2
        )
        resultadosOficiais.appendChild(placar)
    }
}

async function construirPagina() {
    preConstruirTabela()
    const placaresReais = await pegarDadosReais()
    construirTabela(placaresReais)
    construirPlacares(placaresReais)
}

window.onload = () => construirPagina()