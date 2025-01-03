// // // // Global Scope


// // // // number ->  1, 2, 2.1
// // // // string -> '' "" ``
// // // // boolean -> true/false 0 -> false 1 -> true
// // // // array (object) -> []
// // // // object -> {}
// // // // function -> (){}

// // // // console.log(typeof 1)
// // // // console.log(typeof 1.1)
// // // // console.log(typeof '')
// // // // console.log(typeof 'satyam')
// // // // console.log(typeof true)
// // // // console.log(typeof false)
// // // // console.log(typeof [])
// // // // console.log(typeof {})

// // // // function abc() {

// // // // }

// // // // let a = 5;

// // // // a = 'satyam'

// // // // a = {}

// // // // a = false

// // // // let b = "abcd"

// // // // let/const/var -> variable declaration, b -> name of the variable, = assignment, "abcd" -> value

// // // // const c = false


// // // // var d = [1, 2,]



// // // // console.log(typeof a)


// // // // function getVowels(str) {
// // // //     const m = str.match(/[aeiou]/gi);
// // // //     if (m === null) {
// // // //         return m;
// // // //     }
// // // //     return m;
// // // // }

// // // // console.log(getVowels('ans'));

// // // // let a = "abc"
// // // // let b = "abc"

// // // // let c = Symbol("abc")
// // // // let d = Symbol("abc")

// // // // console.log(a == b)
// // // // console.log(c == d)


// // // // let biodata = {
// // // //     name: 'Pratap',
// // // //     address: "Pokhara",
// // // //     phone: 9869081517
// // // // }

// // // // console.log(biodata.address)


// // // // let arr = ["Pratap", { q: 1 }, 1, "Sandesh", false]
// // // // // 0 -> "Pratap", 1 -> { q: 1 }, 2 -> 1, 3 -> "", 4 -> false

// // // // // -> Position is represented by index
// // // // console.log(arr[3])

// // // // console.log(a + b) // 17
// // // // console.log(a - b) // 7
// // // // console.log(a * b) // 60
// // // // console.log(a / b) // 2.4
// // // // console.log(a % b) // 2
// // // // = -> Assignment
// // // // == -> comparison
// // // //  ! -> Not

// // // // == -> Compares values
// // // //  === -> COmpares values and data type

// // // // console.log(a == b)
// // // // console.log(a === b)

// // // // &&, ||, !

// // // // let a = null;

// // // // // a--

// // // // let b = 10;

// // // // console.log(!a)

// // // // // ++, --, &&, ||, !

// // // // console.log(a && "Pratap")

// // // // let a = 0;

// // // // let b = 10;

// // // // // true or not 0
// // // // console.log(a && b) // if a is 0 -> select a | if a is not 0 -> select b
// // // // console.log(a || b) // if a is 0 -> select b | if a is not 0 -> select a



// // // // let name = "Satyam";

// // // // let address = "";

// // // // // checks boolean -> comparison

// // // // if (name == "Dristi") {
// // // //     address = "nepaljung"
// // // // } else if (name == "Satyam") {
// // // //     address = "Chitwan"
// // // // } else {
// // // //     address = "Pokhara"
// // // // }

// // // // // Ternary operator
// // // // console.log(name == "Dristi" ? "Nepalgunj" : "Chitwan")

// // // // if (false) {
// // // //     console.log("6 is less than 8")
// // // // }

// // // // let label = "frIes"

// // // // const matcher = label.match(/[aeiou]/gi); // regex

// // // // console.log(matcher)

// // // // if ("") {
// // // //     console.log("This is a vowel")
// // // // } else {
// // // //     console.log("This is not a vowel")
// // // // }

// // // // Truthy values -> true, not 0, not null, not undefined, not "" string

// // // //These values are falsey ->  false, 0, "", null, undefined

// // // // for loop -> for keyword, variable initialization, comparison, variable increment/decrement , body

// // // // let i = 0;
// // // // i < 10;

// // // // i++
// // // //   variable Init        1         3     After 3 it will go to 1 again || If condition in 1 is false then the code will not enter the body
// // // // for (let satyam = 0; satyam < 10; satyam = satyam + 2) {
// // // //     // 2
// // // //     console.log(satyam)
// // // // }


// // // // let momBuyMeALaptop = true;
// // // // let momBuyMeAMobile = true;

// // // // if (momBuyMeALaptop && momBuyMeAMobile) {
// // // //     console.log("Very Very Happy")
// // // // } else if (momBuyMeALaptop || momBuyMeAMobile) {
// // // //     console.log("Happy")
// // // // } else {
// // // //     console.log("Sad for not getting anything :(")
// // // // }

// // // // While loop

// // // // infinite loop
// // // // keyword , (condition) -> body(arithmetic)

// // // // let satyam = 0;
// // // // while (satyam < 10) {
// // // //     console.log(satyam)

// // // //     satyam++
// // // // }

// // // // For loop -> If the number of iteration is known

// // // // while loop -> if the number of iteration is not known

// // // // let satyam1 = 11;
// // // // while (satyam1 < 10) {
// // // //     console.log(satyam1)

// // // //     satyam1++
// // // // }

// // // // let satyam = 11;
// // // // do {
// // // //     console.log(satyam)
// // // //     satyam++
// // // // } while (satyam < 10)

// // // // const upto = 20;

// // // // for (let firstNum = 2; firstNum <= upto; firstNum++) {
// // // //     // firstNum = 7
// // // //     let isPrime = true;

// // // //     for (let secondNum = 2; secondNum < firstNum; secondNum++) {
// // // //         // secondNum = 2
// // // //         if (firstNum % secondNum === 0) {
// // // //             isPrime = false;
// // // //             break;
// // // //         }
// // // //     }

// // // //     if (isPrime) {
// // // //         console.log(firstNum)
// // // //     }
// // // // }
// // // // 2, 3, 5, 7

// // // // First loop -> 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

// // // // if, else, loop

// // // // let name = "Dristi"

// // // // // 1. keyword  2. value
// // // // switch (name) {
// // // //     case "Pratap":
// // // //         console.log(name)
// // // //         break;
// // // //     case "Ayusha":
// // // //         console.log(name)
// // // //         break;
// // // //     case "Satyam":
// // // //         console.log(name)
// // // //         break;
// // // //     case "Sandesh":
// // // //         console.log(name)
// // // //         break;
// // // //     case "Dristi":
// // // //         console.log(name)
// // // //         break;
// // // //     default:
// // // //         console.log(name + " not known")

// // // // }

// // // // if (name === "Pratap") {
// // // //     console.log(name)
// // // // } else if (name === "Ayusha") {
// // // //     console.log(name)
// // // // } else if (name === "Satyam") {
// // // //     console.log(name)
// // // // } else if (name === "Sandesh") {
// // // //     console.log(name)
// // // // } else if (name === "Dristi") {
// // // //     console.log(name)
// // // // } else {
// // // //     console.log(name + " not known")
// // // // }

// // // // console.log(2 + parseInt("1.000"))
// // // // console.log(2 - "1")

// // // // console.log(typeof (2 + "1"))

// // // // Array, Object, Tree, Stack, Queue, LinkedList, Heap, Trie

// // // // let students = new Array("Sandesh", "Sandesh", "Dristi", "Ayusha", "Satyam", 1, false, { name: "pratap" }, null, undefined)

// // // // let students1 = ["Sandesh", "Sandesh", "Dristi", "Ayusha", "Satyam", 1, false, { name: "pratap" }, null, undefined]

// // // // console.log(students[3])

// // // // let studentObj = {
// // // //     first: "Sandesh",
// // // //     second: "Dristi",
// // // //     third: "Ayusha",
// // // //     fourth: "Satyam"
// // // // }

// // // // console.log(studentObj.fourth)
// // // // console.log(students)
// // // // console.log(students1)

// // // // let arr1 = ['Sandesh', 'Dristi', 'Ayusha', 'Satyam', 1, false, 'Sandesh', 'Dristi', 'Ayusha', 'Satyam', 1, false,];

// // // // console.log(arr1)

// // // // let myset = new Set(["sandesh", "sandesh", "sandesh", "sandesh", "pratap", "pratap"]);

// // // // console.log(myset)

// // // // myset.

// // // // // console.log(students[2])

// // // // console.log(myset.values())


// // // // class Human {
// // // //     constructor() {
// // // //         this.name = '';
// // // //         this.age = 0;
// // // //         this.gender = '';
// // // //     }

// // // //     greet() {
// // // //         console.log(this)
// // // //         console.log("Hello :: ", this.name)
// // // //     }
// // // // }

// // // // instance === object
// // // // const anjali = new Human();
// // // // const satyam = new Human();
// // // // const dristi = new Human();

// // // // console.log(sandesh)
// // // // console.log(anjali)
// // // // console.log(satyam)

// // // // const dristi = new Student();
// // // // dristi.name = "Dristi"
// // // // dristi.age = 20;
// // // // dristi.gender = "F"
// // // // dristi.standard = "+2"

// // // // const ayusha = new Student();
// // // // ayusha.age = 22
// // // // ayusha.setName("Ayusha")

// // // // const pratap = new Student();
// // // // pratap.age = 25
// // // // pratap.setName("Pratap")


// // // // class Student {
// // // //     constructor(name, age, gender) {
// // // //         this.age = age;
// // // //         this.gender = gender;
// // // //         this.name = name;
// // // //     }
// // // // }

// // // // const sandesh = new Human();
// // // // const satyam = new Student("Satyam", 20, "M")

// // // // console.log(satyam)

// // // // object | instance | this(current object or current instance) -> same

// // // // Stack properties -> size
// // // // Stack methods -> push, pop, peek, isEmpty, top

// // // // [1,2,3]   <----- Last In First Out

// // // // class Stack {
// // // //     constructor() {
// // // //         this.items = []
// // // //     }

// // // //     push(item) {
// // // //         this.items.push(item)
// // // //     }

// // // //     pop() {
// // // //         this.items.pop()
// // // //     }

// // // //     isEmpty() {
// // // //         return this.items.length === 0
// // // //     }

// // // //     peek() {
// // // //         if (this.isEmpty()) {
// // // //             throw new Error("Empty Stack")
// // // //         } else {
// // // //             return this.items[this.items.length - 1]
// // // //         }
// // // //     }
// // // //     peek2ndTop() {
// // // //         if (this.isEmpty()) {
// // // //             throw new Error("Empty Stack")
// // // //         } else {
// // // //             return this.items[this.items.length - 2]
// // // //         }
// // // //     }

// // // // }

// // // // let stack = new Stack();
// // // // stack.push("Anjali")
// // // // stack.pop()
// // // // stack.push("Anjali")
// // // // stack.push("Anjali")
// // // // stack.push("Anjali")
// // // // stack.push("Dristi")
// // // // stack.push("Pratap")
// // // // stack.push("Sandesh")
// // // // stack.push("Satyam")

// // // // stack.pop()
// // // // stack.pop()

// // // // console.log(stack)
// // // // console.log(stack.peek())
// // // // console.log(stack.peek2ndTop())

// // // // class Stack {

// // // //     constructor() {
// // // //         this.items = []
// // // //     }

// // // //     push(item) {
// // // //         this.items.push(item)
// // // //     }

// // // //     pop() {
// // // //         if (this.isEmpty()) {
// // // //             throw "Stack is empty"
// // // //         } else {
// // // //             this.items.pop();
// // // //         }
// // // //     }
// // // //     peek() {
// // // //         return this.items[this.items.length - 1]
// // // //     }

// // // //     isEmpty() {
// // // //         return this.items.length === 0
// // // //     }

// // // // }

// // // // const s1 = new Stack();
// // // // s1.push("Ayusha");
// // // // s1.push("Satyam")
// // // // s1.push("Nepal")

// // // // console.log(s1.peek())


// // // // Queue -> [A,D,S,P]


// // // // let name = "Dristi"
// // // // let age = 20

// // // // console.log(`My name is ${name}`) // `` -> String Literals

// // console.log(
// //     `Hello, my name is ${name} and I am ${age} years old.`
// // );

// // // // console.log(
// // // //     "Hello, my name is " + name + " and I am " + age + " years old."
// // // // );

// // // // class Queue {

// // // //     constructor() {
// // // //         this._items = []
// // // //     }

// // // //     enqueue(element) {
// // // //         this.items.push(element)
// // // //     }

// // // //     dequeue() {
// // // //         if (this.isEmpty()) {
// // // //             throw new Error("Queue is empty")
// // // //         }
// // // //         this.items.shift()
// // // //     }

// // // //     peek() {
// // // //         if (this.isEmpty()) {
// // // //             throw new Error("Queue is empty")
// // // //         }

// // // //         return this.items[0]

// // // //     }

// // // //     isEmpty() {
// // // //         return this.items.length === 0
// // // //     }
// // // // }

// // // // const queue = new Queue();
// // // // queue.enqueue("Sandesh")
// // // // queue.dequeue()

// // // // console.log(queue)


// // // // camelCase
// // // // snake_case
// // // // PascalCase


// // // // function - keyword
// // // // name of the function
// // // // () bracket
// // // // {} -> body of function body

// // // // The below is called: Defining a function
// // // function functionName() {

// // // }

// // // // Calling a function
// // // functionName()

// // // function add() {
// // //     // function scope -> scope inside of the function
// // //     let a = 5;

// // //     let b = 10;

// // //     console.log(a + b)
// // // }

// // // // add()

// // // // function that accepts arguments/parameter
// // // function addTwoNum(num, numm) {
// // //     // function scope -> scope inside of the function

// // //     console.log("a", num)
// // //     console.log("b", numm)

// // //     console.log(num + numm)
// // // }

// // // // addTwoNum(5, 10)

// // // function addThreeNumbers(num1, num2, num3) {
// // //     let total = num1 + num2 + num3

// // //     return total;

// // // }

// // // // console.log(addThreeNumbers(10, 20, 30))

// // // // let result = addThreeNumbers(10, 20, 30)

// // // // console.log(result)
// // // // console.log(result)

// // // // Normal -> No parameters, no return
// // // // function abc() {
// // // //     console.log("My name is Pratap")
// // // // }

// // // // // Function accepting parameters -> 1 or more parameters but no return

// // // // function abcd(a) {
// // // //     console.log("the value of a is " + a)
// // // // }

// // // // // Function returning value -> No paramater but returns value

// // // // function abcd() {
// // // //     return "My name is Pratap"
// // // // }

// // // // // Function accepting parameter and returning value -> 1 or more paramater also return value
// // // // function abcd(name) {
// // // //     return "My name is " + name
// // // // }

// // // // 10 mins
// // // // console.log("My name is Satyam and I am Male also I am 20 years old")
// // // // console.log("My name is Dinesh and I am Male also I am 20 years old")
// // // // console.log("My name is Dristi")
// // // // console.log("My name is Sandesh")
// // // // console.log("My name is Anjali")
// // // // console.log("My name is Pratap")

// // // function printName(name, gender, age) {
// // //     // parameter
// // //     console.log(`I am ${age} years old and my name is ${name}. And my gender is ${gender}`)
// // // }

// // // // printName("Satyam", "Male", 20)
// // // // printName("Dinesh", "Male", 22)
// // // // printName("Dristi", "Female", 21)
// // // // printName("Sandesh", "Male", 20)
// // // // printName("Anjali", "Female", 20)
// // // // Argument pass garxam
// // // // printName("Pratap", "Male", 25)

// // // // 1st way
// // // function abc() {
// // //     // console.log("ABC: ", this)
// // // }


// // // // 2nd way -> Function Expression
// // // let abcd = function () {  // function () -> () =>
// // //     return "ABCD"
// // // }

// // // // Arrow function
// // // let abcde = () => {
// // //     console.log("ABCDE: ", this)
// // // }

// // // console.log(abc()) // undefined
// // // console.log(abcd()) // ABCD

// // // function chatpatDidi(bhuja, tamatar, chauchau, khursani) {
// // //     //    Parameters ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// // // }


// // // chatpatDidi("bhuja", "tamatar", "chauchau", "khursani")
// // // //Arguments  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// // let person = {
// //     firstName: "Pratap",
// //     lastName: "Sharma",
// //     fullName: function () {
// //         console.log(this)
// //         return this;
// //     },
// //     printName: () => {
// //       console.log(this)
// //     }
// // }

// // // person.fullName(); // Here 'this' will be the whole object or the person object

// // person.fullName(); 
// // person.printName(); 
// // function abc() {
// //     console.log("ABC")
// // }
// // abc()

// // Array.prototype.has = () => {console.log()}


// // let array = []

// // array.includes()

// // for (var i = 0; i < 10; i++) {
// //     // console.log(i);
// // }

// // function counter() {
// //     for (var i = 0; i < 10; i++) {
// //         console.log(i);
// //     }
// // }
// // counter();
// // console.log("After loop ", i);

// // const i = 9999;

// // i = 20;
// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }
// // console.log("After for loop", i); 


// // console.log("I am A")

// // var a = 10;

// // var b = 20;


// // for(var i = 0; i < 10; i++){
// //   // 
// // }

// // function abc() {
// //   console.log("I am A")

// //   var a = 10;

// //   var b = 20;


// //   for (var i = 0; i < 10; i++) {
// //     // 
// //   }
// // }

// // abc()

// // function abc() {
// //   var a
// //   var b
// //   var i

// //   console.log("I am A", a)

// //   a = 10;

// //   b = 20;


// //   for (i = 0; i < 10; i++) {
// //     // 
// //   }
// // }

// // let i =10;

// // function abc() {
// //   var a
// //   var b
// //   var i

// //   let i = 10;

// //   console.log("I am A", a)

// //   a = 10;

// //   b = 20;


// //   for (i = 0; i < 10; i++) {
// //     // 
// //   }
// // }

// // abc()

// // console.log(`ABCD



// //   ok multiline
// //   ${10+12}
// //   `)

// // Array destructuring
// // let [a, b, c, d, e] = [11, 22, 33, 44] 

// // console.log(a) // 11
// // console.log(b) //22
// // console.log(c) //33
// // console.log(d) //44
// // console.log(e) // 

// // ... -> rest
// // let [a, b, ...c] = [11, 22, 33] 

// // console.log(a) // 11
// // console.log(b) // 22
// // console.log(c) // [33]

// // Object destructuring
// // let { firstName, ...b } = {
// //   firstName: "Pratap",
// //   lastName: "Sharma",
// //   age: 25
// // }

// // console.log(firstName)
// // console.log(b)


// // function add(a, b, ...c) {
// //   console.log(a)
// //   console.log(b)
// //   console.log(c)
// // }

// // // add(2, 20, 22, 30)

// // let details = {
// //   firstName: "Pratap",
// //   lastName: "Sharma",
// //   age: 25
// // }

// // add({...details})


// // const { Configuration, OpenAIApi } = require('openai');
// // const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
// // const openai = new OpenAIApi(configuration);

// // let handler = () => {
// //   console.log("handler")
// // }

// // setTimeout(handler, 1000) // 1 sec = 1000ms

// // let a = 10; // number
// // let b = "10"; // string
// // let c = false; // boolean
// // let d = {}; // object
// // let e = []; // object


// // let f = () => console.log("I am func F") // function

// // function g() {
// //   console.log("I am func G")
// // }

// // let h = function () {
// //   console.log("I am func H")
// // }

// // let i = () => {
// //   console.log("I am func I")
// // }

// // let funcC = (anjali) => {
// //   console.log(anjali) // 
// //   console.log(typeof anjali) // 
// //   // if the parameter we received is of type "function" then we can call the function -> ()
// //   anjali()
// // }

// // funcC(f)
// // funcC(g)
// // funcC(h)
// // funcC(i)

// // funcC(function () {
// //   console.log("Normal callback function")
// // })

// // funcC(() => {
// //   console.log("Arrow callback function")
// // })

// // let funcB = (passMeAFunction) => {
// //   console.log("Before calling passMeAFunction") // 1
// //   passMeAFunction() // 2
// //   console.log("After calling passMeAFunction") // 4
// // }

// // // funcB(funcA)

// // funcB(() => {
// //   //3
// //   console.log("I am a callback function")
// // })



// // function addTwoNumbers(callback, a, b) {
// //   callback(`The sum of two numbers is ${a + b}`);
// // }

// // function addManyNumbers(callback, ...numbers) {
// //   console.log(numbers)
// //   callback(`The sum of all the numbers is ${numbers.reduce((prev, curr) => prev + curr)}`);
// // }

// // function print(message) {
// //   console.log(message);
// // }

// // addTwoNumbers(print, 2, 3);

// // addManyNumbers(print, 2, 3, 4, 5);
// // addManyNumbers(print, 2, 3);

// // const division = "1st"
// // // resolve     // reject
// // let promise = new Promise((getComputer, noComputer) => {
// //   if (division === "1st") {
// //     getComputer(division)
// //   } else {
// //     noComputer("You did not get 1st division")
// //   }
// // })

// // console.log(promise)

// // // If promise is fulfilled -> go to then block
// // // if promise is rejected => go to catch block
// // let resolve = (div) => {
// //   console.log("I am resolve ", div)
// // }

// // let reject = (reason) => {
// //   console.log("I am reject ", reason)
// // }
// // promise.then(resolve).catch(reject)

// // promise.then((div) => {
// //   console.log("I am resolve arrow ", div)
// // }).catch((reason) => {
// //   console.log("I am reject arrow ", reason)
// // })

// // let division = "2nd"

// // let promise = new Promise((res, rej) => {
// //   setTimeout(() => {
// //     if (division === "1st") {
// //       res(division)
// //     } else {
// //       rej("You did not get 1st division")
// //     }
// //   }, 0)
// // })

// // console.log("Before promise block") // 1

// // console.log(promise) // 2

// // promise.then((div) => {
// //   console.log("I am resolve arrow ", div) // 3
// // }).catch((reason) => {
// //   console.log("I am reject arrow ", reason)
// // })

// // console.log("After promise block") // 4


// // async function asyncFunc() {
// //   try {
// //     let response = await promise;
// //     console.log("async", response)
// //   } catch (error) {
// //     console.log("err", error)
// //   }
// // }

// // asyncFunc()


// // 1. Call Stack
// // 2. WebAPI
// // 3. Queue
// // 3. Event loop


// // [] <- Call Stack | WEB API []  | [] <- Queue

// // Event Loop

// const a = () => console.log("a")
// const b = () => setTimeout(() => console.log("b"), 0)
// const c = () => setTimeout(() => console.log("c"), 0)
// const d = () => setTimeout(() => console.log("d"), 0)
// const e = () => console.log("e")
// const f = () => console.log("f")
// const g = () => setTimeout(() => console.log("g"), 0)
// const h = () => console.log("h")

// a()
// b()
// d()
// c()
// h()
// c()
// e()
// f()

// // Queue -> b, d, c, c, 
// // Output a -> h -> e -> f -> b -> d -> c -> c

// // Output a -> e -> f -> h -> b -> c -> d -> g  | Dinesh
// // Output a -> e -> f -> h -> b -> c -> d -> g  | Sandesh
// // Output a -> e -> f -> h -> b -> c -> d -> g  | Ayusha
// // Output a -> e -> f -> h -> b -> c -> d -> g  | Anjali
// // Output a -> e -> f -> h -> b -> c -> d -> g  | Sandesh

// function addTwoNum(a, b) {
//     const sum = a + b;
//     return sum
// }

// // [Ayusha]   ------->    [Satyam]       ------>    [Dinesh]

// //         Detail of Id              Payment Detail of ID

// // Client                  Server
// //                         Client                   Server



const a = () => setTimeout(() => console.log("a"), 98)
const b = () => setTimeout(() => console.log("b"), 99)
const c = () => setTimeout(() => console.log("c"), 99)
const d = () => {
    for(let i = 0; i < 100_100_000; i++){
        // some long execution
    }
    console.log("d")
}
a()
d()
b()
c()