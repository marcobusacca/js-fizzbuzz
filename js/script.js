// CICLO FOR CHE STAMPA NUMERI DA 1 A 100
for(let i= 1; i<=100; i++){

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO SIA DI 3 CHE DI 5
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 3
    else if (i % 3 === 0){
        console.log("Fizz");
    } 

    // CONTROLLO CHE IL NUMERO STAMPATO È MULTIPLO DI 5
    else if (i % 5 === 0){
        console.log("Buzz");
    } 
    
    // IL NUMERO STAMPATO NON È MULTIPLO NÈ DI 3, NÈ DI 5, NÈ DI ENTRAMBI, QUINDI STAMPO IL NUMERO
    else{
        console.log(i);
    }
}
