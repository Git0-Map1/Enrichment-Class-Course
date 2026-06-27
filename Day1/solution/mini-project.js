let balance = 1000;

const action = "deposit";
const amount = 300;

// Requirements:
//
// - Deposit money
// - Withdraw money
// - Prevent overdraft
// - Print updated balance
// - Handle invalid actions
//
// Challenge:
// - Reject negative amounts
// - Add transfer option
// - Add PIN verification

if(action === "deposit"){
    console.log("depositing...")
    if(amount>0){
        balance += amount
        console.log("remaining amt:", balance)
    }
    else{
        console.log("invalid amount")
    }
    
}
else if(action === "withdraw"){
    console.log("withdrawing...")
    if(amount<balance && amount>0){
        balance -= amount
        console.log("remaining amt:", balance)
    }
    else{
        console.log("insufficient fund")
    }
   
}