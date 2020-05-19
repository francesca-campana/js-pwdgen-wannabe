var nome = prompt('Come ti chiami?');
console.log(nome);
var cognome = prompt('Qual è il tuo cogmome?');
console.log(cognome);
var colore = prompt('Qual è il tuo colore preferito?')
console.log(colore);
//var stringaPsw = nome + cognome + colore + '19';
//console.log(stringaPsw);
//document.getElementById("psw").innerHTML = 'La tua password è: ' + stringaPsw;
//console.log(psw);

var stringaPsw = nome + cognome + colore + Math.floor(Math.random() * 20);
console.log('stringaPsw');
document.getElementById("psw").innerHTML = 'La tua password è: ' + stringaPsw;
console.log('psw');
