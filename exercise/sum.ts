const num: number = 5

let res: number = 0
let desc: string = ""

for (let i = 1; i <= num; i++){
    res += i
    if (i == 1){
        desc += "1"
    } else {
        desc += ` + ${i}`
    }
}

console.log(`${desc} = ${res}`)