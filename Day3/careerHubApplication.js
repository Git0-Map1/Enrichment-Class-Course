const applicant = {
  name: "Delish",
  role: "Frontend Developer",
  coverLetter: ""
};
function sendConfirmation(applicant){
    console.log(`Confirmation sent to ${applicant.name}`)
}
function applyToJob(applicant,onSuccess){
    console.log(`${applicant.name} applied for ${applicant.role}`)

    if(!applicant.coverLetter?.trim()){
        console.log("No CoverLetter provided")
    }
    else{
        onSuccess(applicant)
    }
}
applyToJob(applicant,sendConfirmation)