// let n: number = 5;
// let a: string = "*";

// for (let i = 0; i <= n; i++){
//     console.log(a.repeat(i));
// }
// for (let i = n; i >= 0; i--){
//     console.log(a.repeat(i));
// }
// for (let i = 0; i <= n; i++){
//     a += "*"
//     console.log(a);
// }
// let rows: number = 4;

// for (let i = 1; i <= rows; i++) {
//     let pattern: string = '';

//     // Tambahkan spasi sebelum bintang
//     for (let j = 1; j <= rows - i; j++) {
//         pattern += '  ';
//     }

//     // Tambahkan bintang
//     for (let k = 1; k <= i; k++) {
//         pattern += '* ';
//     }

//     console.log(pattern);
// }
let rows: number = 4;
let bintang: string = "*";
let space: string = " ";

for (let i = 1; i <= rows; i++) {
    let spaces: string = ' '.repeat((rows - i) * 2);
    let stars: string = '* '.repeat(i);
    console.log(`${spaces}${stars}`);
}

/*
Atau cara ke-2
*/

for (let u = 1; u <= rows; u++){
    console.log(space.repeat(rows - u) + bintang.repeat(u))
}


//       *   
//     *   *
//   *   *   *
// *   *   *   *
// *   *   *   *
//   *   *   *
//     *   *
//       *
// let rows: number = 4;

// for (let i = 1; i <= rows; i++) {                                     
//     let spaces: string = ' '.repeat((rows - i) * 2);
//     let stars: string = '*   '.repeat(i);
//     console.log(`${spaces}${stars}`);
// }
// for (let u = rows; u >= 0; u--) {
//     let spaces1: string = ' '.repeat((rows - u) * 2);
//     let stars1: string = '*   '.repeat(u);
//     console.log(`${spaces1}${stars1}`);
// }
//       *
//     * * *
//   * * * * *
// * * * * * * * 
//   * * * * *
//     * * * 
//       *
// let rows: number = 7;

// // Bagian atas piramida
// for (let i = 1; i <= rows; i++) {
//     let spaces: string = ' '.repeat((rows - i) * 2);
//     let stars: string = '* '.repeat(2 * i - 1);
//     console.log(`${spaces}${stars}`);
// }

// // Bagian bawah piramida
// for (let i = rows - 1; i >= 1; i--) {
//     let spaces: string = ' '.repeat((rows - i) * 2);
//     let stars: string = '* '.repeat(2 * i - 1);
//     console.log(`${spaces}${stars}`);
// }

