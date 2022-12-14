//Grupos da copa:
const grupoA =['Catar','Equador','Senegal','Holanda']
const grupoB =['Inglaterra','Irã','Estados Unidos','País de Gales']
const grupoC =['Argentina','Arábia Saudita','México','Polônia']
const grupoD =['França','Austrália','Dinamarca','Tunísia']
const grupoE =['Espanha','Costa Rica','Alemanha','Japão']
const grupoF =['Bélgica','Canadá','Marrocos','Croácia']
const grupoG =['Brasil','Sérvia','Suíça','Camarões']
const grupoH =['Portugal','Gana','Uruguai','Coreia do Sul']
const selecoes = [grupoA,grupoB,grupoC,grupoD,grupoE,grupoF,grupoG,grupoH]

//Ordem dos jogos:
const ordem1 = [1,3,1,4,4,2]
const ordem2 = [2,4,3,2,1,3]
const grupoLetra = ["A","B","C","D","E","F","G","H"]

//Ordem Alfabética:
let selecoesAlfabetica = []
for (time=0;time<4;time++){
    for (grupos=0;grupos<8;grupos++){        
        selecoesAlfabetica.push(selecoes[grupos][time])
    }
}
selecoesAlfabetica.sort()

//Estádios:
const estadios = ['Estádio 974, Doha','Estádio Ahmed Bin Ali, Al Rayyan','Estádio Al Bayt, Al Khor','Estádio Al Janoub, Al Wakrah',
    'Estádio Al Thumama, Doha','Est. Cidade da Educação, Al Rayyan','Estádio Inter. Khalifa, Al Rayyan','Estádio Nacional Lusail']

//Data, horário e estádios:
const ordemJogos = [01,03,18,19,33,34,02,04,20,17,35,36,05,07,24,22,39,40,08,06,23,21,37,38,11,10,28,25,43,44,12,09,26,27,41,42,16,13,31,29,47,48,15,14,32,30,45,46]
const ordemEstadios = [3,5,5,7,3,7,7,2,3,2,2,5,8,1,8,6,1,8,4,6,1,4,6,4,5,7,3,2,7,3,2,3,5,7,2,5,8,4,1,4,8,1,1,6,8,6,6,4]
const datas = ['20/11/22 13:00 dom','21/11/22 13:00 seg','25/11/22 10:00 sex','25/11/22 13:00 sex','29/11/22 12:00 ter',
    '29/11/22 12:00 ter','21/11/22 10:00 seg','21/11/22 16:00 seg','25/11/22 16:00 sex','25/11/22 07:00 sex','29/11/22 16:00 ter',
    '29/11/22 16:00 ter','22/11/22 07:00 ter','22/11/22 13:00 ter','26/11/22 16:00 sáb','26/11/22 10:00 sáb','30/11/22 16:00 qua',
    '30/11/22 16:00 qua','22/11/22 16:00 ter','22/11/22 10:00 ter','26/11/22 13:00 sáb','26/11/22 07:00 sáb','30/11/22 12:00 qua',
    '30/11/22 12:00 qua','23/11/22 13:00 qua','23/11/22 10:00 qua','27/11/22 16:00 dom','27/11/22 07:00 dom','01/12/22 16:00 qui',
    '01/12/22 16:00 qui','23/11/22 16:00 qua','23/11/22 07:00 qua','27/11/22 10:00 dom','27/11/22 13:00 dom','01/12/22 12:00 qui',
    '01/12/22 12:00 qui','24/11/22 16:00 qui','24/11/22 07:00 qui','28/11/22 13:00 seg','28/11/22 07:00 seg','02/12/22 16:00 sex',
    '02/12/22 16:00 sex','24/11/22 13:00 qui','24/11/22 10:00 qui','28/11/22 16:00 seg','28/11/22 10:00 seg','02/12/22 12:00 sex',
    '02/12/22 12:00 sex']

