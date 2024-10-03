const num: number = 11
let define:  number = 0

for (let i = 1; i <= num; i++){
    if (num % 1 == 0 ){
        define++
    }
}
console.log(define == 2 ? `${num} is a prime number` : `${num} is not a prime number`)

// console.log(
//     num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0 ?
//     `${num } is a prime number` :
//     `${num } is not a prime number`
// )