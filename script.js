/* @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee) =>{
        if(employee.profession=="developer"){
            console.log(employee);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee)=>{
        if(employee.profession=="developer"){
            console.log(employee);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newData={id: 4, name: "Raju", age: "25", profession: "engineer"};
    arr.push(newData);
    console.log(newData);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr =arr.filter((employee) => employee.profession!="admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray=[
        { id: 4, name: "raj", age: "18", profession: "quality" },
        { id: 5, name: "kiran", age: "20", profession: "developer" },
        { id: 6, name: "karan", age: "19", profession: "data analyst" },

    ];
    const concatenateArray=arr.concat(newArray);
    console.log(concatenateArray);
  }