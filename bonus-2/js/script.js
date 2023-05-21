"use strict";
// DICHIARAZIONE E INIZIALIZZAZIONE CONSTANTE RIFERITA AL TAG HTML CON ID "OUTPUT"
const output = document.getElementById('output');

// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILE CON TAG DIV E CLASSE "ROW", DA INSERIRE ALL'INTERNO CONSTANTE "OUTPUT"
let output_row = document.createElement('div');
output_row.classList.add('row', 'justify-content-center', 'm-auto');

// DICHIARAZIONE E INIZIALIZZAZIONE VARIABILE CONTATORE CELLE
let cell = 1;

// DICHIARAZIONE E INIZIALIZZAZIONE CONSTANTE SIZE MASSIMA CELLE
const cell_size = 7;

// CICLO FOR CHE STAMPA NUMERI DA 1 A 100
for(let i = 1; i <= 100; i++){    

    // DICHIARAZIONE E INIZIALIZZAZIONE CONSTANTE CON TAG DIV, DA INSERIRE ALL'INTERNO DELLA VARIABILE "OUTPUT_ROW"
    const output_number = document.createElement('div');
    output_number.classList.add('output_number_col', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold');

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO SIA DI 3 CHE DI 5
    if (i % 3 === 0 && i % 5 === 0){
        let number = "FizzBuzz";
        output_number.classList.add('bgcolor_fizzbuzz');
        output_number.append(number);
    }

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 3
    else if (i % 3 === 0){
        let number = "Fizz";
        output_number.classList.add('bgcolor_fizz');
        output_number.append(number);
    } 

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 5
    else if (i % 5 === 0){
        let number = "Buzz";
        output_number.classList.add('bgcolor_buzz');
        output_number.append(number);
    } 
    
    // IL NUMERO STAMPATO NON È MULTIPLO NÈ DI 3, NÈ DI 5, NÈ DI ENTRAMBI, QUINDI STAMPO IL NUMERO
    else{
        let number = i;
        output_number.classList.add('bgcolor_number');
        output_number.append(number);
    }

    // INSERIMENTO CONTENUTO CONSTANTE "OUTPUT_NUMBER" ALL'INTERNO DELLA VARIABILE "OUTPUT_ROW"
    output_row.append(output_number);
    
    // INSERIMENTO CONTENUTO VARIABILE "OUTPUT_ROW" ALL'INTERNO DELLA COSTANTE "OUTPUT"
    output.append(output_row);

    // CONTROLLO CHE I NUMERI INSERITI NELLA ROW SIANO MASSIMO 7
    if (cell < cell_size){

        // INCREMENTO VARIABILE CONTATORE CELLE
        cell++;

    } else{

        // RESET VARIABILE CONTATORE CELLE
        cell = 1;

        // RESET VARIABILE CON TAG DIV E CLASSE "ROW"
        output_row = document.createElement('div');
        output_row.classList.add('row', 'justify-content-center', 'm-auto');
    }
}
