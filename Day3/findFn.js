const applicants = [
  { name: "Asha", experience: 1 },
  { name: "Ravi", experience: 4 },
  { name: "Sita", experience: 2 },
];

const updatedApplicants = applicants.find((applicant)=>applicant.name == "Sita")
console.log(updatedApplicants.name)