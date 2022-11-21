// Esta função pega os dados usando a API da FIFA e transforma uma lista de {'placar1', 'placar2'},
// e converte os IDs para a ordem que a gente tá usando (pela ordem em id_jogos.js)
async function pegarDadosReais() {
    // Esse link da FIFA está funcionando bem para pegar os resultados. Vamos torcer para que
    // funcione bem durante a copa! Qualquer coisa a gente pode mudar o endereço depois
    const FIFA_API_URL = "https://api.fifa.com/api/v3/calendar/matches?from=2022-11-19T00%3A00%3A00Z&to=2022-12-02T23%3A59%3A59Z&language=en&count=500&idCompetition=17"
    const placares = await (await fetch(FIFA_API_URL)).json()
    const dadosFiltrados = []
    // id_jogos vem de id_jogos.js
    for (const id of id_jogos) {
        const placar = placares.Results.find(obj => obj.IdMatch == id)
        dadosFiltrados.push({
            'time1': placar.Home.Abbreviation,
            'time2': placar.Away.Abbreviation,
            'placar1': placar.Home.Score,
            'placar2': placar.Away.Score
        })
    }
    // Eu coloquei esse console.log para ver se os dados estão vindo corretamente, mas pode tirar
    console.log("Placares reais")
    console.log(dadosFiltrados)
    return dadosFiltrados
}

function calcularPontuacaoPalpite(placarPalpite1, placarPalpite2, placarReal1, placarReal2) {
    let pontos = 0
    pontos += (placarPalpite1 == placarReal1 || placarPalpite2 == placarReal2) * 2;
    pontos += (Math.sign(placarPalpite1 - placarPalpite2) == Math.sign(placarReal1 - placarReal2)) * 5;
    pontos += (placarPalpite1 == placarReal1 && placarPalpite2 == placarReal2) * 3;
    return pontos
}

function calcularClassificacao(placaresReais) {
    // const placaresReais = await pegarDadosReais()
    // Essas quatro linhas a seguir é só pra testar um resultado qualquer nos primeiros jogos.
    // Lembre de tirar antes de subir a página!
    // placaresReais[0].placar1 = 0
    // placaresReais[0].placar2 = 2
    // placaresReais[1].placar1 = 1
    // placaresReais[1].placar2 = 0
    const classificacao = []
    // apostas vem de apostas.js
    for (const aposta of apostas) {
        const jogador = {"pos": 1, "nome": aposta.nome, "placares": 0, "resultados": 0, "pontos": 0}
        for (let i = 0; i < 48; i++) {
            const placarReal = placaresReais[i]
            // Se não tiver resultado disponível, ignora essa iteração
            if (placarReal.placar1 === null || placarReal.placar2 === null) {
                continue
            }
            const apostaPlacar1 = aposta[`Jogo-A-${i+1}`]
            const apostaPlacar2 = aposta[`Jogo-B-${i+1}`]
            jogador["pontos"] += calcularPontuacaoPalpite(
                apostaPlacar1, apostaPlacar2, placarReal.placar1, placarReal.placar2
            )
            if (apostaPlacar1 == placarReal.placar1 && apostaPlacar2 == placarReal.placar2) {
                jogador["placares"]++
            }
            if (Math.sign(apostaPlacar1 - apostaPlacar2) == Math.sign(placarReal.placar1 - placarReal.placar2)) {
                jogador["resultados"]++
            }
        }
        classificacao.push(jogador)
    }
    // Critérios de desempate
    classificacao.sort((a,b) => (a.nome.localeCompare(b.nome))) // Ordem alfabética
    classificacao.sort((a,b) => (a.resultados <= b.resultados) ? 1 : -1)
    classificacao.sort((a,b) => (a.placares <= b.placares) ? 1 : -1)
    classificacao.sort((a,b) => (a.pontos <= b.pontos) ? 1 : -1)
    // Cálculo das posições
    for (let i = 1; i < classificacao.length; i++) {
        const atual = classificacao[i]
        const anterior = classificacao[i-1]
        if (
            atual.pontos == anterior.pontos &&
            atual.placares == anterior.placares &&
            atual.resultados == anterior.resultados
        ) {
            atual.pos = null
        }
        else {
            atual.pos = i+1
        }
    }
    // Eu coloquei esses console.log para ver se tudo está sendo calculado corretamente
    console.log("Apostas")
    console.log(apostas)
    console.log("Classificação")
    console.log(classificacao)
    return classificacao
}

function preConstruirTabela() {
    const tbodyClassificacao = document.getElementById("tbodyClassificacao")

    // Pré-construir a tabela, para que a página não fique vazia até ter um retorno da API
    for (let i = 0; i < apostas.length; i++) {
        const row = document.createElement("tr")
        const tds = ["", apostas[i].nome, "", "", ""]
        const aligns = ["center", "left", "center", "center", "center"]
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

    const classificacao = calcularClassificacao(placaresReais)
	
	for (let i = 0; i < classificacao.length; i++) {
		const row = tbodyClassificacao.children[i]
		const td = []
		td[0] = classificacao[i]["pos"] == null ? "" : classificacao[i]["pos"] + "º"
		td[1] = classificacao[i]["nome"]
		td[2] = classificacao[i]["pontos"]
		td[3] = classificacao[i]["placares"]
		td[4] = classificacao[i]["resultados"]
		for (let j = 0; j < td.length; j++) {
			row.children[j].innerHTML = td[j]
		}
	}
}

function criarPlacar(estadio, data, timeA, timeB, placarA, placarB) {
    const dataLocal = document.createElement("div")
    dataLocal.setAttribute("class","data-local")
    dataLocal.innerText = data.toUpperCase() +" - "+ estadio

    const bandeira1 = document.createElement("img")
    bandeira1.setAttribute("id","bandeira1")
    bandeira1.setAttribute("class","bandeira")
    bandeira1.setAttribute("src",`Imagens/Bandeiras/${timeA}.png`)
    bandeira1.setAttribute("alt","Imagem Bandeira "+ timeA)

    const bandeira2 = document.createElement("img")
    bandeira2.setAttribute("id","bandeira2")
    bandeira2.setAttribute("class","bandeira")
    bandeira2.setAttribute("src",`Imagens/Bandeiras/${timeB}.png`)
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
    placarCompleto.appendChild(dataLocal)
    placarCompleto.appendChild(placarSemData)

    return placarCompleto
}

function construirPlacares(placaresReais) {
    const resultadosOficiais = document.getElementById("resultados-oficiais")

    const jogos = []
    const estadiosJogos = []
    const datasJogos = []
    const ordem = []

    let jogo = 0
    for (let a = 1; a < 9; a++) {
        for (let i = 0; i < 6; i++) {
            jogos.push([
                selecoes[a-1][ordem1[i]-1],
                selecoes[a-1][ordem2[i]-1]
            ])
            estadiosJogos.push(estadios[ordemEstadios[jogo]-1])
            datasJogos.push(datas[jogo])
            ordem[ordemJogos[jogo]-1] = jogo
            jogo++
        }
    }

    for (let i = 0; i < 48; i++) {
        const placar = criarPlacar(
            estadiosJogos[ordem[i]],
            datasJogos[ordem[i]],
            jogos[ordem[i]][0],
            jogos[ordem[i]][1],
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