
// import mathConst, { sum as suma, minus as minusa } from "./math.js"

// import { sum } from "./math.js"

// // a b c d
// // 7000 line as minusa of code
// const compare = (a, b, c, d) => {
//     console.log(math)
//     const sumAb = sum(a, b)
//     const sumCd = sum(c, d)
//     // true false
//     // go
//     // if (sumAb > sumCd) return 'sumAb > sumCd'
//     // else {
//     //     if (sumAb == sumCd) return 'sumAb = sumCd'
//     //     else 'sumAb < sumCd'
//     // }
//     return sumAb > sumCd ? 'sumAb > sumCd' : (sumAb == sumCd ? 'sumAb = sumCd' : 'sumAb < sumCd')
// }


// console.log(compare(9, 4, 4, 9))


const student1 = {
    name: "Mindx 1",
    age: 18,
    level: 2
}
const student2 = {
    name: "Mindx 2",
    age: 22,
    level: 1
}

//destructuring
const {
    name,
    age,
    level
} = student1

const myClass = [student1, student2]

const [s1, s2] = myClass
// console.log(s2)

// rest operator, spread operator (...)
console.log(student1)

// reference value

// type value

// clone object
// spread
// const cpStudent1 = {
//     ...{ name: 'Mindx 1', age: 18, level: 2 }
// }

// const cpMyClass = [...myClass]

const a = {c:'Hello'}
const b = a

a.d= "Hi"

console.log(b)


// delete student1.age
// console.log(cpMyClass)





