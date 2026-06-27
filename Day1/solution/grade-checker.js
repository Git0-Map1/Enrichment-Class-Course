const score = 90;

// Rules:
// 90-100 => A
// 80-89 => B
// 70-79 => C
// Below 70 => Fail
if(score>=90){
    console.log("A")
}
else if(score>=80 && score<90){
    console.log("B")
}
else if(score>=70 && score<80){
    console.log("C")
}
else{
    console.log("Fail")
}