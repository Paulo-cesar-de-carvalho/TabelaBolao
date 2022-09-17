//Grupos da copa:
let grupoA =['Catar','Equador','Senegal','Holanda']
let grupoB =['Inglaterra','Irã','Estados Unidos','País de Gales']
let grupoC =['Argentina','Arábia Saudita','México','Polônia']
let grupoD =['França','Austrália','Dinamarca','Tunísia']
let grupoE =['Espanha','Costa Rica','Alemanha','Japão']
let grupoF =['Bélgica','Canadá','Marrocos','Croácia']
let grupoG =['Brasil','Sérvia','Suíça','Camarões']
let grupoH =['Portugal','Gana','Uruguai','Coreia do Sul']
let selecoes = [grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH]

//Ordem dos jogos:
let ordem1 = [1,3,1,4,4,2]
let ordem2 = [2,4,3,2,1,3]
let grupoLetra = ["A","B","C","D","E","F","G","H"]

//Ordem Alfabética:
let selecoesAlfabetica = []
for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        selecoesAlfabetica.push(selecoes[grupos][time])
    }
}
selecoesAlfabetica.sort()

//Estádios:
let estadios = ['Estádio 974','Estádio Ahmed Bin Ali, Al Rayyan','Estádio Al Bayt, Al Khor','Estádio Al Janoub, Al Wakrah',
    'Estádio Al Thumama, Doha','Estádio da Cidade da Educação','Estádio Internacional Khalifa','Estádio Nacional Lusail']

//Data, horário e estádios:
let ordemEstadios = [3,5,5,7,3,7,7,2,3,2,2,5,8,1,8,6,1,8,4,6,1,4,6,4,5,7,3,2,7,3,2,3,5,7,2,5,8,4,1,4,8,1,1,6,8,6,6,4]
let datas = ['20/11/22 13:00 dom','21/11/22 13:00 seg','25/11/22 10:00 sex','25/11/22 13:00 sex','29/11/22 12:00 ter',
    '29/11/22 12:00 ter','21/11/22 10:00 seg','21/11/22 16:00 seg','25/11/22 16:00 sex','25/11/22 07:00 sex','29/11/22 16:00 ter',
    '29/11/22 16:00 ter','22/11/22 07:00 ter','22/11/22 13:00 ter','26/11/22 16:00 sáb','26/11/22 10:00 sáb','30/11/22 16:00 qua',
    '30/11/22 16:00 qua','22/11/22 16:00 ter','22/11/22 10:00 ter','26/11/22 13:00 sáb','26/11/22 07:00 sáb','30/11/22 12:00 qua',
    '30/11/22 12:00 qua','23/11/22 13:00 qua','23/11/22 10:00 qua','27/11/22 16:00 dom','27/11/22 07:00 dom','01/12/22 16:00 qui',
    '01/12/22 16:00 qui','23/11/22 16:00 qua','23/11/22 07:00 qua','27/11/22 10:00 dom','27/11/22 13:00 dom','01/12/22 12:00 qui',
    '01/12/22 12:00 qui','24/11/22 16:00 qui','24/11/22 07:00 qui','28/11/22 13:00 seg','28/11/22 07:00 seg','02/12/22 16:00 sex',
    '02/12/22 16:00 sex','24/11/22 13:00 qui','24/11/22 10:00 qui','28/11/22 16:00 seg','28/11/22 10:00 seg','02/12/22 12:00 sex',
    '02/12/22 12:00 sex']

