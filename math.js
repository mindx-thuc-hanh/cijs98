//rest
const sum = (...rest) => {
    const result = rest.reduce((prev, cur) => prev + cur, 0)
    return result
}
console.log(sum(3,4))

const minus = (a, b) => a - b
// * :

// default 


// export {
//     sum,
//     minus
// }
// const math = {
//     PI: 3.14,
//     r: 1000
// }
// export default math