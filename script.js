/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  // Using map to print students with marks over 50
  arr.map(student => {
    if (student.marks > 50) {
      console.log(`Name: ${student.name}, Marks: ${student.marks}`);
    }
  });
}

function PrintStudentsbyForEach() {
  // Using forEach to print students with marks over 50
  arr.forEach(student => {
    if(student.marks > 50){
      console.log(student.name);
    }
  });
}

function addData() {
  // Adding a new student to the array and logging it
  const newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(newStudent);
  console.log(newStudent);
}

function removeFailedStudent() {
  // Filtering out failed students and logging the remaining ones
  const passedStudents = arr.filter(student => student.marks >= 50);
  console.log(passedStudents);
}

function concatenateArray() {
  // Creating another array with additional students and concatenating it with the existing one
  const additionalStudents = [
    { id: 4, name: "emma", age: "21", marks: 70 },
    { id: 5, name: "peter", age: "22", marks: 65 },
    { id: 6, name: "lisa", age: "20", marks: 55 }
  ];

  const concatenatedArray = arr.concat(additionalStudents);
  console.log(concatenatedArray);
}
