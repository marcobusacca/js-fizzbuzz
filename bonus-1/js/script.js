"use strict";
// CICLO FOR CHE STAMPA NUMERI DA 1 A 100
for(let i= 1; i<=100; i++){

    // DICHIARAZIONE E INIZIALIZZAZIONE CONSTANTE CON TAG DIV, DA INSERIRE ALL'INTERNO CONSTANTE "OUTPUT"
    const output_number = document.createElement('div');

    // DICHIARAZIONE E INIZIALIZZAZIONE CONSTANTE RIFERITA AL TAG HTML CON ID "OUTPUT"
    const output = document.getElementById('output');

    // INSERIMENTO CONTENUTO CONSTANTE "OUTPUT_NUMBER" ALL'INTERNO DELLA COSTANTE "OUTPUT"
    output.append(output_number);

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO SIA DI 3 CHE DI 5
    if (i % 3 === 0 && i % 5 === 0){
        let number = "FizzBuzz";
        output_number.append(number);
    }

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 3
    else if (i % 3 === 0){
        let number = "Fizz";
        output_number.append(number);
    } 

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 5
    else if (i % 5 === 0){
        let number = "Buzz";
        output_number.append(number);
    } 
    
    // IL NUMERO STAMPATO NON È MULTIPLO NÈ DI 3, NÈ DI 5, NÈ DI ENTRAMBI, QUINDI STAMPO IL NUMERO
    else{
        let number = i;
        output_number.append(number);
    }
}
