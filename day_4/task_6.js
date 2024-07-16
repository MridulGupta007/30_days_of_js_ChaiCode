let i = Math.floor(Math.random() * 100)

let fact = 1
let num = 2;
if(i !== 0 && i !== 1){
    do{
        
        fact *= num
        num++
    } while(num <= i)
}

console.log(fact, i)