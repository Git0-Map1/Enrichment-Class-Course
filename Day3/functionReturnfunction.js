function createGreeting(word) {
    return function (pName) {
        return `${word},${pName}`
    }
}

const sayHello = createGreeting("Hello")

console.log(sayHello("Delish"));