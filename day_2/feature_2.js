let num1 = 6, num2 = 7

const comparison = (num1, num2) => {
    console.log(num1 < num2)
    console.log(num1 > num2)
    console.log(num1 >= num2)
    console.log(num1 <= num2)
    console.log(num1 == num2)
    console.log(num1 === num2)
}

const conditions = (num1, num2) => {
    if(num1 > num2 && num1 > 0){
        console.log(num1)
    } else {
        if(num2 > 0 && num2 % 2 == 0){
            console.log(num2)
        }
    }
}