
function hora_atual (){

    let data = new Date ()
    let ano = (data.getYear()-100).toString()
    let mes = (data.getMonth()+1).toString()
    mes = ((mes.length==1)? `0${mes}`: mes)
    let dia = data.getDate().toString()
    dia = ((dia.length==1)? `0${dia}`: dia)
    let hora = data.getHours().toString()
    hora = ((hora.length==1)? `0${hora}`: hora)
    let min = data.getMinutes().toString()
    min = ((min.length==1)? `0${min}`: min)
    let segundo = data.getSeconds().toString()
    segundo = ((segundo.length==1)? `0${segundo}`: segundo)
    return (`${ano}-${mes}-${dia} ${hora}-${min}-${segundo} `)

}

let divHora = document.querySelector("#data")
let btnEnviar = document.querySelector("#btn-enviar")

divHora.value = hora_atual()

btnEnviar.addEventListener("click", function() {
    divHora.value = hora_atual()
})

// function hora_atual_simplicifada(){
//     let data = new Date ()
//     let dados = [data.getYear()-100, data.getMonth()+1,data.getDate(),data.getHours(),data.getMinutes(),data.getSeconds() ]
//     let dadosTratados = ""
//     for (dado of dados){
//         dado = dado.toString()
//         dado = ((dado.length==1)? `0${dado}`: dado)
//         if (dadosTratados==""){
//             dadosTratados = dado
//         } else{
//             dadosTratados = dadosTratados + "-" + dado
//         }
//     }
//     return dadosTratados
// }


