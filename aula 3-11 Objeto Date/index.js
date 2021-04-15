//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 *60 * 24 * 1000;

//const data = new Date(0 + tresHoras + umDia);
 // const data = new Date(2019, 3); //ano, mês, dia, hora, Minutos, Segundos, Milesegundos,

 const data = new Date('2019-4-20 20:15:59.1000');  
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours);
console.log('Min', data.getMinutes);
console.log('Seg', data.getSeconds);
console.log('ms', data.getMilliseconds);
console.log('Dia semana', data.getDay());
console.log(data.toString());



