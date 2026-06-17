const color = ["red", "blue", "yellow", "green"]
console.log(color)
//accessing elements
const first = color[0]
console.log(first)
//accessing last elements
const last = color[-1]
console.log(last)

// replacing "green" with "purple"
color[3] = "purple"
console.log(color)

//finding the length of array
const countries = ["Nepal", "Japan", "Canada", "Brazil"]
const total = countries.length
console.log("total countries", total)

//add elements
const tasks = ["Learn HTML", "Learn CSS"]
tasks.push("Learn Javascript")
tasks.unshift("Set up VS Code")
console.log(tasks)

//includes check the presence of elements in array
const stationary = ["pen", "pencil", "eraser", "sharpener"]
stationary.pop()
stationary.shift(0)
console.log(stationary)

//check for a value
const arr = ["cat", "dog", "rabbit", "bird"]
const isExist = arr.includes("dog")
const isExist1 = arr.includes("fish")
console.log(isExist)
console.log(isExist1)

//find a index

const lang = ["React", "Next.js", "Node.js", "PostgreSQL"]
console.log(lang.indexOf("Node.js"))
console.log(lang.indexOf("Express"))


//copy an Array
const Original = ["apple", "banana"]
const originalCopy = [...Original]
originalCopy.push("orange")
console.log(Original)
console.log(originalCopy)

//combine Arrays
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "PostgreSQL"];
const skills = [...frontend,...backend]
console.log(skills)

//use Slice()
const sl = ["January", "February", "March", "April", "May"]
const sl2 = sl.slice(1,4)
console.log(sl2)

//use Splice()
const language = ["HTML", "CSS", "Java"]
language[2] = "JavaScript"
language.splice(2,0,"Git")
console.log(language)
// const update = language.splice()

//loop through an array
const accessories = ["keyboard", "mouse", "monitor"]

for(let i = 0; i<accessories.length; i++){
    console.log(accessories[i])
}
for(const i of accessories){
    console.log(i)
}

//arrays of objects
const obj = [
  { id: 1, name: "Sara" },
  { id: 2, name: "John" },
  { id: 3, name: "Ava" }
]
console.log(obj[0].name)
console.log(obj[2].id)

//challenge Exercise
const fruits = ["apple", "banana", "orange"]

//adding "grapes" in the last 
fruits.push("grapes")

//removing the index value of 1
fruits.splice(1,1)
console.log(fruits)

//replacing the fruits index of 1 with "mango"
fruits[1] = "mango"
console.log(fruits)

//adding "kiwi" as the first element of fruits array
fruits.unshift("kiwi")
console.log(fruits)
console.log(fruits)
