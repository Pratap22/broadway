const students = [{ name: "Anjali", age: 20 }, { name: "Satyam", age: 22 }, { name: "Dinesh", age: 22 }]

// Converts JS array or object to JSON String
console.log(JSON.stringify(students))

// JSON String -> Converts JS array or Object 
console.log(JSON.parse(`[{"name":"Anjali","age":20},{"name":"Satyam","age":22},{"name":"Dinesh","age":22}]`)) 