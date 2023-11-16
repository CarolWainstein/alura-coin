var precoEmDolar = prompt('Qual é o valor em dolares?');
var cotacaodoDolar = 5.32;

var precoEmReal = (precoEmDolar * cotacaodoDolar).toFixed(2);

nome = prompt('Qual é o seu nome?');

alert(`Oi ${nome}, o preço é R$ ${precoEmReal}`);
