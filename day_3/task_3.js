let num1 = 10, num2 = 2, num3 = 5

if(num1 > num2){
    if(num1 > num3){
        console.log(num1) // num1 > (num3, num2)
    } else{
        console.log(num3)   // num3 > num1 > num2
    }
} else if(num2 > num3){
    console.log(num2)   // num2 > num3 > num1
} else{
    console.log(num3)   // num3 > num2 > num1
}