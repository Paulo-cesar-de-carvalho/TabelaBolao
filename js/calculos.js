// Esta função pega os dados usando a API da FIFA e transforma uma lista de {'placar1', 'placar2'},
// e converte os IDs para a ordem que a gente tá usando (pela ordem em id_jogos.js)
async function pegarDadosReais() {
    // Esse link da FIFA está funcionando bem para pegar os resultados. Vamos torcer para que
    // funcione bem durante a copa! Qualquer coisa a gente pode mudar o endereço depois
    const FIFA_API_URL = "https://api.fifa.com/api/v3/calendar/matches?from=2022-11-19T00%3A00%3A00Z&to=2022-12-06T23%3A59%3A59Z&language=en&count=500&idCompetition=17"
    const placares = await (await fetch(FIFA_API_URL)).json()
    const dadosFiltrados = []
    const horaAtual = new Date()
    // id_jogos vem de id_jogos.js
    for (const id of id_jogos) {
        const placar = placares.Results.find(obj => obj.IdMatch == id)
        const horaPlacar = new Date(placar.Date)
        // Placar só aparece se faltar 15 minutos para a partida
        if (horaAtual.getTime() < (horaPlacar.getTime() - 15*60*1000)) {
            dadosFiltrados.push({
                'data': horaPlacar,
                'dia': new Date(horaPlacar.getFullYear(), horaPlacar.getMonth(), horaPlacar.getDate()),
                'time1': placar.Home.Abbreviation,
                'time2': placar.Away.Abbreviation,
                'placar1': null,
                'placar2': null
            })
        }
        else {
            dadosFiltrados.push({
                'data': horaPlacar,
                'dia': new Date(horaPlacar.getFullYear(), horaPlacar.getMonth(), horaPlacar.getDate()),
                'time1': placar.Home.Abbreviation,
                'time2': placar.Away.Abbreviation,
                'placar1': placar.Home.Score,
                'placar2': placar.Away.Score
            })
        }
    }
    // Eu coloquei esse console.log para ver se os dados estão vindo corretamente, mas pode tirar
    console.log("Placares reais")
    console.log(dadosFiltrados)
    return dadosFiltrados
}

function calcularPontuacaoPalpite(placarPalpite1, placarPalpite2, placarReal1, placarReal2, multiplicador) {
    const umPlacarCorreto = (placarPalpite1 == placarReal1 || placarPalpite2 == placarReal2)
    const resultadoCorreto = (Math.sign(placarPalpite1 - placarPalpite2) == Math.sign(placarReal1 - placarReal2))
    const todoPlacarCorreto = (placarPalpite1 == placarReal1 && placarPalpite2 == placarReal2)
    let pontos = umPlacarCorreto * 2 + resultadoCorreto * 5 + todoPlacarCorreto * 3
    if (todoPlacarCorreto && placarReal1 + placarReal2 >= 6)
        pontos *= 2
    return pontos * multiplicador
}

function calcularClassificacao(placaresReais) {
    // Datas únicas que já passaram
    const datas = []
    for (const placar of placaresReais) {
        if (placar.placar1 === null || placar.placar2 === null) {
            continue
        }
        if (!datas.find(d => d.getTime() === placar.dia.getTime()))
            datas.push(placar.dia)
    }
    const classificacaoPorData = []
    for (const data of datas) {
        const placaresReaisFiltrados = placaresReais.filter(
            p => (p.dia.getTime() <= data.getTime())
        )
        const classificacao = []
        // apostas vem de apostas.js
        for (const aposta of apostas) {
            const jogador = {"pos": 1, "var": 0, "nome": aposta.nome, "placares": 0, "resultados": 0, "pontos": 0}
            for (let i = 0; i < placaresReaisFiltrados.length; i++) {
                const placarReal = placaresReaisFiltrados[i]
                // Se não tiver resultado disponível, ignora essa iteração
                if (placarReal.placar1 === null || placarReal.placar2 === null) {
                    continue
                }
                const apostaPlacar1 = aposta[`Jogo-A-${i+1}`]
                const apostaPlacar2 = aposta[`Jogo-B-${i+1}`]
                const multiplicador = (placarReal.time1 == "BRA" || placarReal.time2 == "BRA") ? 2 : 1
                jogador["pontos"] += calcularPontuacaoPalpite(
                    apostaPlacar1, apostaPlacar2, placarReal.placar1, placarReal.placar2, multiplicador
                )
                if (apostaPlacar1 == placarReal.placar1 && apostaPlacar2 == placarReal.placar2) {
                    jogador["placares"]++
                }
                if (Math.sign(apostaPlacar1 - apostaPlacar2) == Math.sign(placarReal.placar1 - placarReal.placar2)) {
                    jogador["resultados"]++
                }
            }
            classificacao.push(jogador)

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
                    atual.pos = anterior.pos
                }
                else {
                    atual.pos = i+1
                }
            }
        }
        classificacaoPorData.push({data: data, classificacao: classificacao})
    }

    const classificacaoAtual = classificacaoPorData[classificacaoPorData.length - 1].classificacao
    if (classificacaoPorData.length > 1) {
        const classificacaoAnterior = classificacaoPorData[classificacaoPorData.length - 2].classificacao
        for (const jogador of classificacaoAtual) {
            const posAnterior = classificacaoAnterior.find(j => j.nome === jogador.nome).pos
            const posAtual = jogador.pos
            jogador.var = posAtual - posAnterior
        }
    }
    
    return { classificacaoPorData: classificacaoPorData, classificacaoAtual: classificacaoAtual }
}