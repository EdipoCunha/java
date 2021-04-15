 
 falaOi();
 function falaOi() {
   console.log('Oie')
 };

//  first-clas objects (Objetos de primeira classe)
// function expression
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();
// Dentro de um objeto 
const obj = {
  falar(){
    console.log('Estou falando...');
  }
};
obj.falar();
