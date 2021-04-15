const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backhroundColorBody = estilosBody.backgroundColor;
console.log (backhroundColorBody);
for (let p of ps) {
  p.style.backgroundColor = backhroundColorBody; 
  p.style.color = '#FFFFFF'; 
}
