function square(num){
    return num * num
}
const processNumber = (number, callback) =>{
    return callback(number)
}

console.log(processNumber(5,square))