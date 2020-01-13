var parolaUser = prompt('Inserisci una parola (non una frase):');

if (is_pali(parolaUser)) {
    alert('La parola è palindroma');
}
else {
    alert('La parola non è palindroma');
}

// / ***********************************************
function is_pali(parola) {
    if (parola.toLowerCase().split("").reverse().join("") === parola) {
        return true;
    }
    else {
        return false;
    }
}
