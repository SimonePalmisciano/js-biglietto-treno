'use strict'

/* CHIEDO KM PER IL VIAGGIO */
const kmPassegero = prompt('DOMANDA: quanti km vorresti percorrere?');

const kmPassegeroNumero = parseInt(kmPassegero);

console.log(kmPassegeroNumero);

/* CHIEDO ETà PASSEGERO */
const etaPassegero = prompt('DOMANDA: quanti anni hai?');

const etaPassegeroNumero = parseInt(etaPassegero);

console.log(etaPassegeroNumero);

/* PREZZO BIGLIETTO PASSEGGERO */
const prezzoBiglietto = kmPassegeroNumero * 0.21;

console.log(prezzoBiglietto);

/* SCONTO ETà PASSEGGERO */

const prezzoFinaleJunior = prezzoBiglietto * 0.8;

console.log(prezzoFinaleJunior);

const prezzoFinaleSenior = prezzoBiglietto * 0.6;

console.log(prezzoFinaleSenior);


if (etaPassegeroNumero <= 17) {
    console.log('prezzo finale Junior:', prezzoBiglietto * 0.8);

} else if(etaPassegeroNumero >= 65) {
    console.log('prezzo finale Senior:', prezzoBiglietto * 0.6);
    
} else {
    console.log('prezzo finale Normale:', prezzoBiglietto);
    
}
