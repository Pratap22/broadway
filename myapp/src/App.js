import { useState } from "react"

// props -> property of a component
const Name = (props) => {
  return <div>My name is {props.name}</div>
}


const Age = ({ age }) => {
  return <div>I am {age} years old</div>
}


const Occupation = ({ occupation }) => {
  return <div>I am a {occupation}</div>
}

const Card = (props) => {
  return <div className="bg-slate-500 my-2">
    <Name name={props.name} />
    <Age age={props.age} />
    <Occupation occupation={props.occupation} />
  </div>
}

// Benefits
// 1. Re-useable

const occupations = [
  "All",
  "Student",
  "Engineer",
  "Doctor",
  "Lawyer",
  "Architect",
  "Teacher",
  "Artist",
  "Scientist",
  "Software Developer",
  "Nurse",
  "Chef",
  "Pharmacist",
  "Veterinarian",
  "Photographer",
  "Fashion Designer",
  "Writer"
];

const students = [
  { name: "Satyam", age: 20, occupation: "Student" },
  { name: "Dinesh", age: 20, occupation: "Engineer" },
  { name: "Sandesh", age: 20, occupation: "Doctor" },
  { name: "Dristi", age: 20, occupation: "Lawyer" },
  { name: "Ravi", age: 21, occupation: "Architect" },
  { name: "Priya", age: 20, occupation: "Teacher" },
  { name: "Amit", age: 20, occupation: "Artist" },
  { name: "Riya", age: 19, occupation: "Scientist" },
  { name: "Shiv", age: 20, occupation: "Software Developer" },
  { name: "Neha", age: 21, occupation: "Nurse" },
  { name: "Karan", age: 20, occupation: "Student" },
  { name: "Pooja", age: 22, occupation: "Engineer" },
  { name: "Manish", age: 20, occupation: "Chef" },
  { name: "Anjali", age: 20, occupation: "Pharmacist" },
  { name: "Vikas", age: 23, occupation: "Scientist" },
  { name: "Sneha", age: 20, occupation: "Veterinarian" },
  { name: "Aakash", age: 20, occupation: "Photographer" },
  { name: "Ankur", age: 21, occupation: "Doctor" },
  { name: "Simran", age: 20, occupation: "Lawyer" },
  { name: "Vishal", age: 19, occupation: "Student" },
  { name: "Tanu", age: 20, occupation: "Fashion Designer" },
  { name: "Suman", age: 20, occupation: "Teacher" },
  { name: "Deepak", age: 20, occupation: "Engineer" },
  { name: "Radhika", age: 20, occupation: "Writer" },
  { name: "Harsh", age: 22, occupation: "Doctor" },
  { name: "Kriti", age: 20, occupation: "Artist" },
  { name: "Ravindra", age: 21, occupation: "Student" },
  { name: "Shweta", age: 20, occupation: "Chef" },
  { name: "Manoj", age: 20, occupation: "Lawyer" },
  { name: "Neel", age: 20, occupation: "Teacher" },
  { name: "Aarav", age: 19, occupation: "Scientist" },
  { name: "Meera", age: 20, occupation: "Software Developer" },
  { name: "Kunal", age: 20, occupation: "Nurse" },
  { name: "Pranjal", age: 20, occupation: "Artist" },
  { name: "Isha", age: 22, occupation: "Engineer" },
  { name: "Sahil", age: 20, occupation: "Photographer" },
  { name: "Shivani", age: 20, occupation: "Veterinarian" },
  { name: "Rajesh", age: 21, occupation: "Scientist" },
  { name: "Aarushi", age: 20, occupation: "Doctor" },
  { name: "Kavita", age: 20, occupation: "Fashion Designer" },
  { name: "Aditya", age: 20, occupation: "Architect" },
  { name: "Vinay", age: 19, occupation: "Chef" },
  { name: "Divya", age: 21, occupation: "Teacher" },
  { name: "Uday", age: 20, occupation: "Artist" },
  { name: "Sahil", age: 21, occupation: "Software Developer" },
  { name: "Alok", age: 20, occupation: "Engineer" },
  { name: "Kiran", age: 20, occupation: "Writer" },
  { name: "Vineet", age: 20, occupation: "Student" },
  { name: "Bharat", age: 20, occupation: "Artist" },
  { name: "Sonali", age: 20, occupation: "Nurse" },
  { name: "Nishant", age: 20, occupation: "Scientist" },
  { name: "Madhuri", age: 20, occupation: "Teacher" }
];


function App() {
  // 1st element (selectedOccupation) -> current value of the state
  // 2nd element (setSelectedOccupation) -> a function to update the value of the state
  const [selectedOccupation, setSelectedOccupation] = useState("All") // React hooks to maintain state or data

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2">
      <button></button>
      <div className="flex justify-between"><p>Students</p> <div>
        <select value={selectedOccupation} onChange={(event) => setSelectedOccupation(event.target.value)}>
          {occupations.map((occ, index) => <option key={index} value={occ}>{occ}</option>)}
        </select>
      </div></div>
      {students.filter(student => {
        if (selectedOccupation === "All") {
          return true
        } else {
          return selectedOccupation === student.occupation
        }
      }).map((student, index) => <Card key={index} name={student.name} age={student.age} occupation={student.occupation} />)}
    </div>
  );
}

export default App;
