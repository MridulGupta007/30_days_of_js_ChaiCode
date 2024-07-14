let num1 = 6
let num2 = 5

const add = (num1, num2) => {
    return num1 + num2
}
const subtract = (num1, num2) => {
    return num1 - num2
}
const multiply = (num1, num2) => {
    return num1 * num2
}
const divide = (num1, num2) => {
    return num1 / num2
}
const remainder = (num1, num2) => num1 % num2

const operations = [add, subtract, multiply, divide, remainder]

operations.forEach(elem => {
    console.log(elem(num1, num2))
})