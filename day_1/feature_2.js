let number = 2
const num = 2

try{
    number = 5
} catch(error){
    console.log('error in let reassignment')
    console.log(error)
}


try{
    num = 3
} catch(error){
    console.log('error in const reassignment')
    console.log(error)
}