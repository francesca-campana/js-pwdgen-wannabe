var nome = prompt('Come ti chiami?');
console.log(nome);
var cognome = prompt('Qual è il tuo cogmome?');
console.log(cognome);
var colore = prompt('Qual è il tuo colore preferito?')
console.log(colore);
var stringaPsw = 'La tua password è ' + nome + cognome + colore;
console.log(stringaPsw);
document.getElementById("psw").innerHTML = stringaPsw + Math.floor(Math.random(18) * 20);
console.log(psw);
