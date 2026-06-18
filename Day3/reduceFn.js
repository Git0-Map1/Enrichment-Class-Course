const scores = [80, 95, 70, 100];

//reduce() gives the new array
const scores1 = scores.reduce((total,score)=>{return total + score})

console.log(scores1)