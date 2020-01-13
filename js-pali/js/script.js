var parolaUser = prompt('Inserisci una parola (non una frase, senza punteggiatura, spazi e numeri!):');

if (is_pali(parolaUser)) {
    alert('La parola è palindroma.');
}
else {
    alert('La parola non è palindroma.');
}

// parola di partenza, finchè la prima dell'indice è uguale all'ultima(facendo la lunghezza della parola supponiamo 5 sottrai 1 quindi 4 e sottrai la lunghezza della parola per andare in negativo con l'indice quindi al contrario) il loop andrà avanti e restituisce vero, come una lettera è diversa si interrompe ed è false.
// / ***********************************************

function is_pali(str) {
 for (var i = 0; i < str.length; i++) {
   if (str[i] !== str[str.length - 1 - i]) {
        console.log(str[i] + ' --> diverso da --> ' + str[str.length - 1 - i]);
        return false;
   }
 }
 return true;
}
