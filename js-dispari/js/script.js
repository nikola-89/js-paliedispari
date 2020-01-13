var userPariDispari;
var userNumero = 0;

while (userPariDispari !== 'pari' && userPariDispari !== 'dispari') {
    userPariDispari = prompt('Scrivi "pari" per scegliere pari o "dispari" per scegliere dispari:');
}

while (userNumero >= 6 || userNumero == 0) {
    userNumero = parseInt(prompt('Scegli un numero da 1 a 5:'));
}

var cpu = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

if (isEvenAdd(userNumero, cpu) && userPariDispari == 'pari') {
    alert('TOTALE PARI! Hai vinto! [TUO_NUMERO=' + userNumero + ' | CPU=' + cpu + ']');
}
else if (isEvenAdd(userNumero, cpu) && userPariDispari == 'dispari') {
    alert('TOTALE PARI! Non hai vinto, hai scelto DISPARI! [TUO_NUMERO=' + userNumero + ' | CPU=' + cpu + ']');
}
else if (isEvenAdd(userNumero, cpu) == false && userPariDispari == 'dispari') {
    alert('TOTALE DISPARI! Hai vinto! [TUO_NUMERO=' + userNumero + ' | CPU=' + cpu + ']');
}
else if (isEvenAdd(userNumero, cpu) == false && userPariDispari == 'pari') {
    alert('TOTALE DISPARI! Non hai vinto, hai scelto PARI! [TUO_NUMERO=' + userNumero + ' | CPU=' + cpu + ']');
}

//*****************************************
function isEvenAdd(num1, num2) {
    if ((num1 + num2) % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
