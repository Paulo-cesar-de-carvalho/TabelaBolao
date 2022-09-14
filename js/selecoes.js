let grupoA =['Catar','Equador','Senegal','Holanda']
let grupoB =['Inglaterra','Irã','Estados Unidos','País de Gales']
let grupoC =['Argentina','Arábia Saudita','México','Polônia']
let grupoD =['França','Austrália','Dinamarca','Tunísia']
let grupoE =['Espanha','Costa Rica','Alemanha','Japão']
let grupoF =['Bélgica','Canadá','Marrocos','Croácia']
let grupoG =['Brasil','Sérvia','Suíça','Camarões']
let grupoH =['Portugal','Gana','Uruguai','Coreia do Sul']

let selecoes = [grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH]
let ordem1 = [1,3,1,4,4,2]
let ordem2 = [2,4,3,2,1,3]
let grupoLetra = ["A","B","C","D","E","F","G","H"]

let opcao_campeao = document.querySelector("#campeao")
let opcao_vice = document.querySelector("#vice-campeao")
let opcao_terceiro = document.querySelector("#terceiro")

//reduzir esses três próxmidos códigos e ordenar por ordem alfabética
//criar uma função ordenando por odem alfabética

for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        let selecao = selecoes[grupos][time]
        let opcao = document.createElement("option")
        opcao.innerText = selecao
        opcao_campeao.appendChild(opcao)
       
    }    
}
for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        let selecao = selecoes[grupos][time]
        let opcao = document.createElement("option")
        opcao.innerText = selecao
        opcao_vice.appendChild(opcao)
    }    
}

for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        let selecao = selecoes[grupos][time]
        let opcao = document.createElement("option")
        opcao.innerText = selecao
        opcao_terceiro.appendChild(opcao)
    }    
}