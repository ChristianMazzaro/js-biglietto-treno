const KM = prompt('Inserire il numero di chilometri da percorrere:');

console.log(KM, typeof KM, 'KM');

const age = prompt("inserire l'età del passseggero");
console.log(age, typeof age, 'age');
let Prezzo = (KM * 0.21);
console.log(Prezzo);

if (age < 18) {

    let Sconto = 0;
    Sconto = (Prezzo * 20) / 100;
    console.log(Sconto, typeof Sconto, 'Sconto');

    let Prezzo_Finale = 0;
    Prezzo_Finale = (Prezzo - Sconto);
    console.log(Prezzo_Finale, typeof Prezzo_Finale, 'Prezzo_Finale');

}

else if (age > 65) {

    let Sconto = 0;
    Sconto = (Prezzo * 40) / 100;
    console.log(Sconto);

    let Prezzo_Finale = 0;
    Prezzo_Finale = (Prezzo - Sconto);
    console.log(Prezzo_Finale, typeof Prezzo_Finale, 'Prezzo_Finale');
}

else if (18 > age < 65) {

    let Sconto = 0;
    console.log(Sconto);

    let Prezzo_Finale = 0;
    Prezzo_Finale = (Prezzo - Sconto);
    console.log(Prezzo_Finale, typeof Prezzo_Finale, 'Prezzo_Finale');
}


Math. floor(Prezzo_Finale);



