/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let arr2 = [
  { id: 4, name: "john", age: "22", profession: "developer" },
  { id: 5, name: "jack", age: "23", profession: "developer" },
  { id: 6, name: "karen", age: "234", profession: "hr" },
];


function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    arr.map((obj) => {
      if(obj.profession === "developer") console.log(obj);
    });

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach((obj) => {
    if(obj.profession === "developer") console.log(obj);
  })
}

function addData() {
  //Write your code here, just console.log
    let obj = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(obj);

    console.log(obj);

}

function removeAdmin() {
  //Write your code here, just console.log
  for(let i = 0; i < arr.length; i++){
    if(arr[i].profession === "admin") arr.splice(i, 1);
  }

  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  const combined = arr.concat(arr2);
  console.log(combined);
}
