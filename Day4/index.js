const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    remote: true,
    salary: 60000,
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "Cloud Inc",
    remote: false,
    salary: 75000,
  },
  {
    id: 3,
    title: "UI Designer",
    company: "Creative Labs",
    remote: true,
    salary: 50000,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Scale Labs",
    remote: false,
    salary: 80000,
  },
];

// //exercise 1
// console.log(jobs[0]["title"])


// // jobs[0]["gender"] = "male"
// // console.log(jobs)

// // // destructing - syntax simplicity
// // const {id, title, company, remote, salary} = jobs[0]
// // console.log(`Id: ${id}`)
// // console.log(`title: ${title}`)


// // // arr destructing 
// // arr = [1,2,3,4,5]
// // const [first, ...second] = arr;

// // console.log(first, second)

// //exercise 2 
// console.log(jobs[2]["company"])

// //exercise 3
// // updating the first salary
// jobs[0]["salary"] = 65000
// console.log(jobs)

// //exercise 4
// // Add a new property called location with the value "Nepal" to the second job.
// jobs[1]["Location"] = "Nepal"
// console.log(jobs)

// // part2
// jobs.forEach((job)=>{
//     console.log(job.title)
// })

//part3
// Exercise 6
//create a new array containing only job title

// const newArr = jobs.map((job)=>{
//     return (job.title)
// })
// console.log(newArr)

// //Exercise 7
// // creating a new array containing only company names
// const companyName = jobs.map((name)=>{
//     return name.company
// })
// console.log(companyName)

//part 4 filter()
// create a new array containing only remote jobs
// const newRemote = jobs.filter((job)=>{
//     return job.remote
// })
// console.log(newRemote)

//Exercise 9
// creating an array containing jobs with salaries greater than 65000
// const greaterSalary = jobs.filter((job)=>{
//     return job.salary>65000
// })
// console.log(greaterSalary)

// part 5 find()
// Exercise 10
// find the job with an id of 3
// const job3 = jobs.find((job)=>{
//     return job.id == 3
// })
// console.log(job3)

//finding the job with a salary greater than 70000
// const salaryGreat70k = jobs.find((job)=>{
//     return job.salary > 70000;
// })
// console.log(salaryGreat70k)

// part 6 some() and every()
// Exercise 12
// const remoteJob = jobs.some((job)=>{
//     return job.remote
// })
// console.log(remoteJob)

// // Exercise 13
// const remoteJob1 = jobs.every((job)=>{
//     return job.remote
// })
// console.log(remoteJob1)

// Exercise 14
// const greatSal = jobs.every((job)=>{
//     return job.salary>40000
// })
// console.log(greatSal)

// part 7: Destructuring
// Exercise 15

// this will give the title of first object, to find from 2nd object you can give comma like[, {title, company}]
// const [{title, company}] = jobs
// console.log(title)
//console.log(company)

//Exercise 16
// Use array destructuring to store the first two jobs in 2 variables
// const[jobOne, jobTwo] = jobs
// console.log(jobOne)
// console.log(jobTwo)


// part 8: Spread Operator
// Exercise 17
//creating a copy of the jobs array using the spread operator

// const jobsCopy = [...jobs]
// console.log(jobsCopy)

// Exercise 18
// const updateArr = {
//   id: 5,
//   title: "QA Engineer",
//   company: "Quality First",
//   remote: true,
//   salary: 55000
// }
// jobs.push(updateArr)
// console.log(jobs)

// part 9: challenge exercise
const jobRemote = jobs.filter((job)=>{
  return job.remote
})
const remoteTitle = jobs.map((job)=>job.title);

const updateArr = {
  id: 5,
  title: "QA Engineer",
  company: "Quality First",
  remote: true,
  salary: 55000
}
jobRemote.push(updateArr)
// console.log(jobRemote)
// console.log(jobs)

const checkRemote = jobRemote.every((job)=>{
  return job.remote
})

console.log(jobRemote)
console.log(remoteTitle)
console.log(jobs)
console.log(checkRemote)