const obj = {"name":"erik", "age":25, "gender":"male"}

console.log(obj)
console.log(obj.name)
console.log(obj.age)

const keys = Object.keys(obj)
console.log(keys)

keys.forEach(key => console.log(key))  //skriver alle keys ud

keys.forEach(key => console.log(obj[key]))  //skriver alle values ud


