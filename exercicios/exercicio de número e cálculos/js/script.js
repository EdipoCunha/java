const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> É NAN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> arredondando para baixo é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p> arredondando para cima é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p> Com Duas Casas Decimais ${numero.toFixed(2)}.</p>`;


