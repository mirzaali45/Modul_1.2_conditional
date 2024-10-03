
//a code to check whether the number is odd or even
let num: number = 25;
let num1: number = 2;

if (num % 2 == 0) {
    console.log(`${num} → even number`);
} else {
    console.log(`${num} → odd number`);
}

if (num1 % 2 == 0) {
    console.log(`${num1} → even number`);
} else {
    console.log(`${num1} → odd number`);
}

// a code to check whether the number is prime number or not (Opsi 1)
// let num: number = 7;
// let num1: number = 6
// let isprime1: boolean = num1 > 1;
// let isPrime: boolean = num > 1;

// for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// for (let i = 2; i < num1; i++) {
//     if (num1 % i === 0) {
//         isprime1 = false;
//         break;
//     }
// }


// console.log(`${num} → ${isPrime ? 'is a prime number' : 'is not a prime number'}`);
// console.log(`${num1} → ${isprime1 ? 'is a prime number' : 'is not a prime number'}`);

// a code to check whether the number is prime number or not (Opsi 2)
// let num: number = 7;
// let isPrime: boolean = num > 1;
// let i: number = 2;

// do {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
//     i++;
// } while (i < num);

// console.log(`${num} → ${isPrime ? 'is a prime number' : 'is not a prime number'}`);


// let num1: number = 6;
// let isPrime1: boolean = num > 1;
// let i1: number = 2;

// do {
//     if (num1 % i1 === 0) {
//         isPrime1 = false;
//         break;
//     }
//     i++;
// } while (i1 < num1);

// console.log(`${num1} → ${isPrime1 ? 'is a prime number' : 'is not a prime number'}`);

// a code to find the sum of the numbers 1 to N 
let N: number = 5;
let sum: number = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log(`Sum of numbers from 1 to ${N} = ${sum}`);

let N1: number = 3;
let sum1: number = 0;

for (let u = 1; u <= N1; u++) {
    sum1 += u;
}

console.log(`Sum of numbers from 1 to ${N1} = ${sum1}`);

// //factorial
// let n: number = 4;
// let n2: number = 6;
// let hasil: number = 1;
// let hasil2: number = 1;

// for (let l = n; l > 0; l--) {
//     hasil *= l;
// }
// for (let o = n2; o > 0; o--) {
//     hasil2 *= o;
// }

// console.log(`factorial of number ${n} = ${hasil}`);
// console.log(`factorial of number ${n2} = ${hasil2}`);




