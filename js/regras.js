let btnCopiar = document.querySelector("#btn-copiar")



btnCopiar.addEventListener("click", async function copiarTexto() {
   try {
    await navigator.clipboard.writeText("00020126330014br.gov.bcb.pix011100582793696520400005303986540540.005802BR5923PAULO CESAR DE CARVALHO6012POUSO ALEGRE62160512BolaoOitavas6304858B");
    alert("Código Pix Copiado com Sucesso");
  } catch (err) {
    console.error("Falha ao copiar: ", err);
  }
})
//aa