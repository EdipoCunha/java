const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiasemanaTexto (diaSemana){
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
       return diasSemana[diaSemana];
     }
     
function getNomeMes (numeroMes){
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            return meses [numeroMes];
}
        function zeroAEsquerda (num) {
          return num >= 10 ? num : `0${num}`;
        }

        function criaData(data){
            const diaSemana = data.getDay();
            const numeroMes = data.getMonth();

            const nomeDia = getDiasemanaTexto(diaSemana);
            const nomeMes = getNomeMes(numeroMes);
            return (
                `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
                ` de ${data.getFullYear()} ` +
                `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
            );
        }
        h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });