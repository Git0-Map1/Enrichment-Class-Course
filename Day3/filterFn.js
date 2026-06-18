const applicants = [
  { name: "Asha", experience: 1 },
  { name: "Ravi", experience: 4 },
  { name: "Sita", experience: 2 },
];

function checkExp(applicant){
    if(applicant.experience>2){
        return applicant
    }
}
const updatedApplicants = applicants.filter(checkExp).map((applicant)=> applicant.name)
console.log(updatedApplicants)