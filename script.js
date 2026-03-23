'use strict'

/* CHIEDO KM PER IL VIAGGIO */
const kmPassegero = prompt('quanti km vorresti percorrere?');

const kmPassegeroNumero = (parseInt(kmPassegero));

console.log(kmPassegeroNumero);

/* CHIEDO ETà PASSEGERO */
const etaPassegero = prompt('quanti anni hai?');

const etaPassegeroNumero = (parseInt(etaPassegero))

console.log(etaPassegeroNumero);

/* PREZZO BIGLIETTO PASSEGGERO */
const prezzoBiglietto = (kmPassegeroNumero * 0.21)

console.log(prezzoBiglietto);

/* SCONTO ETà PASSEGGERO */

