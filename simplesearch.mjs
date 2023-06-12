// Remplissage d'un tableau de 1 à 100
const tableau = new Array(100).fill().map((x, i) => i + 1);

//Determination d'un nombre aleatoire compris entre 1 & 100 + arrondi a l'entier avec Math.Floor
const numberToGuess = Math.floor(Math.random() * 100);

// console.log('NumberToGuess : ', numberToGuess);
function simpleSearch(tableau, numberToGuess) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau = numberToGuess) {
        console.log(numberToGuess);
    }else{
        console.log('Tour',[i]);
    }
  }
}

const result = simpleSearch(tableau, numberToGuess);
console.log('result :', result);
