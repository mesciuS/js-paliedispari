// Palindroma

// Chiedere all’utente di inserire una parola
let palindroma = prompt("inserisci una parola");

// Creare una funzione per capire se la parola inserita è palindroma

function palindromaFN(palindroma) {

    let len = palindroma.length;

    for(let i = 0; i < len / 2; i++) {
        if(palindroma[i] !== palindroma[len -1 - i] ) {
            return "Non è un palindromo"
        }
    }
    return "è un palindromo"
}

let esito = palindromaFN(palindroma);

console.log(esito);



// Pari e Dispari
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let oddOrEvenW = prompt("scegli pari o dispari");

let oddOrEvenN = prompt("scegli un muero tra 1 e 5");

console.log(oddOrEvenN);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomNumberBetween(min, max) {
    
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    
    console.log(random);
    
}

console.log(randomNumberBetween(1,5));

// Sommiamo i due numeri


  
