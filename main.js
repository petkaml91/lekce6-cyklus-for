// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');

//TADY NAPIS CYKLUS

//for (let i=0; i<=10; i=i+1) {
//   console.log(i);
//}

let a = 0;
while (a <= 10) {
    console.log(a);
    a++;
}



// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

//for (let i=0; i<10; i=i+1) {
//    console.log(i);
//}

let b=0;
while (b < 10) {
    console.log(b);
    b++;
}

// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

//for (let i=10; i>=0; i=i-1) {
//    console.log(i);
//}

let c = 10;
while (c >= 0) {
    console.log(c);
    c--;
}