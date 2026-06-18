function tenPercentOff(price){
    return price * 0.9
}

const applyDiscount = function (price, callback){
    return callback(price)
}
console.log(applyDiscount(1000,tenPercentOff))