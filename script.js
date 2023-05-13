/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(student => {
      if(student.marks>50) console.log(student);
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if(student.marks>50) console.log(student);
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i=0; i<arr.length; i++) {
    if(arr[i].marks<50) {
      arr.splice(i,1);
    }
  }

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "alice", age: "16", marks: 70 },
    { id: 6, name: "bob", age: "25", marks: 90 },
    { id: 7, name: "shan", age: "30", marks: 30 },
  ];

  let concatenated_arr = arr.concat(arr2);
  console.log(concatenated_arr);
}


PrintStudentswithMap();
PrintStudentsbyForEach();
addData();
removeFailedStudent();
concatenateArray();