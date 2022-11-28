
let divHora = document.querySelector("#data")
let btnEnviar = document.querySelector("#btn-enviar")


//divHora.value = hora_atual()

btnEnviar.addEventListener("click", function() {
    divHora.value = new Date().toISOString().replaceAll(':','').replaceAll('.','').replaceAll('-','')
})



