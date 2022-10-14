// function numberPrinter() {
//     for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0) {
//         console.log('fizz');
//       }
//      else if (i % 5 === 0 ) {
//         console.log('buzz');
//       }
//      else if (i % 15 === 0) {
//         console.log('fizzbuzz');
//       } else {
//         console.log(i);
//       }
//     }
//   }
function printWords() {
    for (let i = 1; i <= 100; i++) {
        (((i % 3 === 0 ? console.log('fizz')
        : i % 5 === 0)  ? console.log('buzz')
        : i % 15 === 0) ? console.log('fizzbuzz')
        : console.log(i));
    }
}
printWords();

