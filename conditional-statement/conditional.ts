// Perkondisian if dan else
// let age: number = 21;

// if (age >= 22){
//     console.log("you can now create an ID card")
// } else{
//     console.log("you are not old enough to create an ID Card")
// }

// else if statement
// let grade: string = "B";

// // jika "==" itu berarti cuma hitung sama dengan 2 nya aja, jika "==" itu berarti ngehitung juga sama menentuka tipe data nya
// if (grade === "A"){
//     console.log("you got Excellent Result")
// } else if (grade === "B"){
//     console.log("You got Greate Result")
// }

// Switch Cash statement
// const date: Date = new Date("2024-12-15")
// const hasil: number = date.getDay()

// switch (hasil){
//     case 0:
//         console.log("Minggu")
//         break
//     case 1:
//         console.log("Senin")
//         break
//     case 2:
//         console.log("Selasa")
//         break
//     case 3:
//         console.log("Rabu")
//         break
//     case 4:
//         console.log("Kamis")
//         break
//     case 5:
//         console.log("Jumat")
//         break
//     case 6:
//         console.log("Sabtu")
//         break
//     // ini menentukan jika perkondisian tidak sesuai perintah
//     default:
//         console.log("Invalid Day")
// }

//boolean
// const x: number = 6
// const y: number = 3

// console.log(x < 1 && y > 2) // and (ini harus kedua dua nya harus sama hasil nya jika itu benar, misal salah satunya tidak sama hasilnya berarti dia salah)
// console.log(x > 8 || y < 2) // or (jika salah satu nya aja yang benar itu hasil nya tetap false)
// console.log(!(x >= 8)) // not

//logical Operator
// const str: string = "Mirza"

// if (str == "Apalah"){
//     console.log("Hello Mirza")
// } else {
//     console.log("Not indicate Mirza")
// }

// // ternary (berfungsi kondisi persingkat dari di atas)
// console.log(str == "Mirza" ? "Hello Mirza" : "Not indicate Mirza")

//COndition For Operators
const value: string = ""

const result: string = value && "Purwadhika"
const result2: string = value || "Purwadhika"

console.log(result)
console.log(result2) // ini akan menampilkan Purwadhika karena value kosong maka tidak