const prices = [100,200,300];
const newPrices = prices.map((price)=>{
    return price + price * 0.13
})
console.log(newPrices)