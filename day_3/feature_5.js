let str = '';
for(let i = 0; i < 4; i++){
    str += Math.ceil(Math.random() * 9).toString()
}
let year = parseInt(str)

year % 4 === 0 && year % 100 !== 0 && year % 400 === 0 ? console.log('leap year', year) : console.log('not a leap year', year)