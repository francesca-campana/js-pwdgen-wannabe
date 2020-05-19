var nome = prompt('Come ti chiami?');
console.log(nome);
var cognome = prompt('Qual è il tuo cogmome?');
console.log(cognome);
var colore = prompt('Qual è il tuo colore preferito?')
console.log(colore);
var stringaPsw = 'La tua password è ' + nome + cognome + colore + '19';
console.log(psw);
document.getElementById("psw").innerHTML = stringaPsw;
