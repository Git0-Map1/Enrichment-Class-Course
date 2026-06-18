function addTen(num){
    return num + 100;
}
const processNumber = function (Number, callback){
    return callback(Number)
}

console.log(processNumber(10,addTen))