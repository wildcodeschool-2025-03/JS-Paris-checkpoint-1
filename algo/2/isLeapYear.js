/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

function isLeapYear(year) {
  // Your code here !
}

module.exports = isLeapYear;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

module.exports = isLeapYear;


console.log(isLeapYear(2004)); // true
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false (divisible par 100 mais pas par 400)
console.log(isLeapYear(2000)); // true (divisible par 400)
console.log(isLeapYear(2023)); // false
