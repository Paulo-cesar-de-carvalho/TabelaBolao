// Esta função pega os dados usando a API da FIFA e transforma uma lista de {'placar1', 'placar2'},
// e converte os IDs para a ordem que a gente tá usando (pela ordem em id_jogos.js)
async function pegarDadosReais() {
    // Esse link da FIFA está funcionando bem para pegar os resultados. Vamos torcer para que
    // funcione bem durante a copa! Qualquer coisa a gente pode mudar o endereço depois
    const FIFA_API_URL = "https://api.fifa.com/api/v3/calendar/matches?from=2022-11-19T00%3A00%3A00Z&to=2022-12-02T23%3A59%3A59Z&language=en&count=500&idCompetition=17"
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
                'time1': placar.Home.Abbreviation,
                'time2': placar.Away.Abbreviation,
                'placar1': null,
                'placar2': null
            })
        }
        else {
            dadosFiltrados.push({
                'data': horaPlacar,
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

function calcularPontuacaoPalpite(placarPalpite1, placarPalpite2, placarReal1, placarReal2) {
    let pontos = 0
    pontos += (placarPalpite1 == placarReal1 || placarPalpite2 == placarReal2) * 2;
    pontos += (Math.sign(placarPalpite1 - placarPalpite2) == Math.sign(placarReal1 - placarReal2)) * 5;
    pontos += (placarPalpite1 == placarReal1 && placarPalpite2 == placarReal2) * 3;
    return pontos
}

function calcularClassificacao(placaresReais) {
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
    return classificacao
}