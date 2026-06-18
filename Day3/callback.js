const processApplication = (name, fn)=>{
    console.log(name)
    fn(name);
}
function sendEmail(name){
    console.log("email sent to", name)
}
processApplication("delish", sendEmail)