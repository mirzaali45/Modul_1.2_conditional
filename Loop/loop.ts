//perkondisian pakai for
// for (let i = 1; i <= 5; i++){ 
//     console.log(`Hello ke-${i}`); //hasil nya itu akan berulang sebanyak 5 kali
// }

//perkondisian for memakai if
// for (let i = 1; i <= 5; i++){
//     if (i == 6) continue
//     console.log(`Hello ke-${i}`); //hasil nya itu akan berulang sebanyak 5 kali
// }

// perkondisian memakai while
// let i: number = 1

// // ini perkondisian while saja 
// // while (i <= 5){
// //     console.log(`Hello ke-${i}`); //hasilnya akan berulang sebanyak perkondisian while nya
// //     i++ //ini untuk menambahkan nilai i agar tidak terus berulang
// // }

// // ini perkondisian jika memakai perkondisian yang lain yaitu memakai if
// while (true){
//     console.log(`Hello ke-${i}`);
//     if (i == 10) break // ini hasil nya bakalan berulang sebanyak 10 kali (sesuai dengan kondisi nilainya)
//     i++
// }

// do while
let i: number = 1
do {
    console.log(`Hello ke-${i}`)
    i++
}while (i <= 5)