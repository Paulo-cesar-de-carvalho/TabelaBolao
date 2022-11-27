function montar_cabecalho (){
    let opcoes = document.querySelector("#jogosOpcoes")
    for (let i=0; i<48; i++){
        let opcao = document.createElement("option")
        opcao.value = `${i+1}`
        opcao.text = `Jogo ${i+1}`
        opcoes.appendChild(opcao)
    }
    opcoes.addEventListener("input", function(){

        listar_palpites_partida(opcoes.value)
    })
}

function listar_palpites_partida (jogo){
    let base = document.querySelector("#corpoTabela")
    base.innerText = ""
    for (aposta of apostas){
        let linha = document.createElement("tr")
        let celulaNome = document.createElement("td")
        celulaNome.innerText = aposta.nome
        let celulaPalpite = document.createElement("td")
        celulaPalpite.innerText = aposta[`Jogo-A-${jogo}`]+ " X " + aposta[`Jogo-B-${jogo}`]
        linha.appendChild(celulaNome)
        linha.appendChild(celulaPalpite)
        base.appendChild(linha)
    }
}
montar_cabecalho ()


//listar_palpites_partida(2,base)

//console.log (id_jogos[2])



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

console.log( pegarDadosReais())