function retornaHora(data) {
  if (data && !(data instanceof Date)) {
}

if (!data){
  data = new Date();
}


return data.toLocaleTimeString('pt-BR', {
 hour12: false
});
}

const hora = retornaHora();
console.log(hora);
