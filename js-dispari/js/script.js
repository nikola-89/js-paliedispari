var parolaUser = prompt('Inserisci una parola (non una frase):');

if (is_pali(parolaUser)) {
    alert('La parola è palindroma.');
}
else {
    alert('La parola non è palindroma.');
}

// parola di partenza, array dello spelling, reverse, unisci e controlli se è uguale a alla porola di partenza.
// / ***********************************************
function is_pali(parola) {
    if (parola.toLowerCase().split("").reverse().join("") === parola) {
        return true;
    }
    else {
        return false;
    }
}
