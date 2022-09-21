let btnEnviar = document.querySelector("#btn-enviar")
btnEnviar.addEventListener("click",function(){
    alert("Em contrução")
    //criar valida dados
    
    extrair_dados()
    //criar enviar dados
    console.log(dadosCabecalho)
    let teste = document.querySelector("#Sim-whatsapp")
    console.log(teste)

})

let dadosCabecalho = []
function extrair_dados(){
    dadosCabecalho.push(document.querySelector("#nome-completo").value)
    dadosCabecalho.push(document.querySelector("#cidade").value)
    dadosCabecalho.push(document.querySelector("#celular").value)
    dadosCabecalho.push(document.querySelector("#email").value)
    dadosCabecalho.push(document.querySelector("#Sim-whatsapp").value)
    dadosCabecalho.push(document.querySelector("#concordo").value)
}

//extrair_dados()
//console.log(dadosCabecalho)
/*function escreverArquivo() {  

    var fso  = new ActiveXObject("Scripting.FileSystemObject");
    var fh = fso.CreateTextFile("C:\Users\paulo\OneDrive\FUTEBOL\Bolão Copa 2022\tesste1.txt", true); 
    fh.WriteLine("Coloque todo o conteudo que voce deseja nesse trecho...");
    fh.Close(); 

}
escreverArquivo()*/

//Cria Objeto ActiveX

/*var dados = new ActiveXObject("Scripting.FileSystemObject")

//Função para gravar o arquivo
function GravaArquivo(arq , texto){
    //pasta a ser salvo o arquivo
    let pasta = "C:/Users/paulo/OneDrive/FUTEBOL/Bolão Copa 2022/"

    if ( arq == "") {
        arq= "Sem Titulo"
    }
    
    //carrega o txt
    var esc = dados.CreateTextFile( pasta + arq + ".txt", false)
    //escreve o que foi passado no parametro texto que é o texto contido no TextArea
    esc.WriteLine(texto)
    //fecha o txt
    esc.Close()
}

GravaArquivo("tesste1","Este é um teste sendo escrito")
*/

/*
//Função para abrir o arquivo
function AbreArquivo(arq){
//o parametro arq é o endereço do txt
//carrega o txt
var arquivo = dados.OpenTextFile(arq, 1, true);
//varre o arquivo
while(!arquivo.AtEndOfStream){
//escreve o txt no TextArea
document.getElementById(“texto”).value = arquivo.ReadAll();
}
//fecha o txt
arquivo.Close();
}
*/