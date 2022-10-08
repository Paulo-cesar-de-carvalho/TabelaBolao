
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
divHora.value = hora_atual()

let diatesete = "7"
diatesete = (diatesete.length==1)? `0${diatesete}`: diatesete
console.log(diatesete)