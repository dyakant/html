'use strict'

console.log('Hello World');

const fac = (n) => {
    if (n == 1) {
        return n;
    } else {
        return (n * fac(n - 1))
    }
}


// const cntSymbol = (symbol = 'e') => {
//     const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci sunt velit qui voluptatem molestias amet fuga modi voluptates? Illum ullam, tenetur quis recusandae magnam quae dolor! Libero, et dolores!';
//     let countSymbol = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === symbol) {
//             countSymbol++;
//         }
//     }
//     return countSymbol;
// }
// console.log(cntSymbol());

// const min = (a, b) => {
//     return a < b ? a : b;
// }

// const func = (a, b) => {
//     const arr = [];
//     for (let i = a; i <= b; i++) {
//         if (i % 3 === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(func(1,21));