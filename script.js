'use strict'

/* CHIEDO KM PER IL VIAGGIO */
const kmPassegero = prompt('DOMANDA: quanti km vorresti percorrere?');

const kmPassegeroNumero = (parseInt(kmPassegero));

console.log(kmPassegeroNumero);

/* CHIEDO ETà PASSEGERO */
const etaPassegero = prompt('DOMANDA: quanti anni hai?');

const etaPassegeroNumero = (parseInt(etaPassegero))

console.log(etaPassegeroNumero);

/* PREZZO BIGLIETTO PASSEGGERO */
const prezzoBiglietto = (kmPassegeroNumero * 0.21)

console.log(prezzoBiglietto);

/* SCONTO ETà PASSEGGERO */

if (etaPassegeroNumero <= 17) {
    console.log('prezzo finale:', (prezzoBiglietto * 0.8));

} else if(etaPassegeroNumero >= 65) {
    console.log('prezzo finale:', (prezzoBiglietto * 0.6));
    
} else {
    console.log(prezzoBiglietto);
    
}
