const secret = 7;
const guess = 7;

// Print:
// "Correct!"
// "Too high!"
// "Too low!"
if(guess>secret){
    console.log("Too high")
}
else if(guess<secret){
    console.log("Too low!")
}
else{
    console.log("Correct!")
}