let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((e)=>{
        if(e.profession==='developer'){
            console.log(e.name);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((e)=>{
        if(e.profession==='developer'){
            console.log(e.name);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let newArr={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newArr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    newArr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].professional!='admin'){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let brr=[ 
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
    {id:4,name:"susan",age:"20",profession:"intern"}
    ]
    console.log(arr.concat(brr));
  }