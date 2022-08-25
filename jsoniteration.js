
// //for of -->It is similar to for but doesnot include the increament condition.it works only in arrays
//iteration is also possible with strings
var personObj = [{
    firstName : 'Yashika',
    lastName : 'U',
    role : 'developer',
    nationality : 'india',
    city : 'bangalore',
    skills :'Javascript',
    salary: 90000,
  }]
 
for(var val of personObj)
{
    console.log(personObj);
}
var name = "Yashika";
for(var element of name)
{
    console.log(element)
}

//forin --> used with both array and object..dont use for when the order of array is necessary
var carObj = {
      carBrand :'tesla',
      carPrice : 90000,
      feature :'self-driving',
      model : 'model1',
      skills : ["js","ml","python","AI"],
      color : 'white',
  }
for(var key in carObj)
{
    console.log(key,carObj[key]);
}
var personObjone = ['Yashika','developer',90000,'Bangalore']

for(var elem in personObjone)
{
console.log(elem,personObjone[elem]);
}

//forEach --> used only in arrays

var personObjtwo = ['Yashika','developer',90000,'Bangalore']
  personObjtwo.forEach(function(x ,index,param)
 {
     console.log(x);
     console.log("Index:",index)
     console.log("complete array",param)
      //console.log(arr);
    })
//object iteration
var employee = 
{
    id : 100 ,
    name : "Xyz",
    designation :"teamlead",
    experience : 5,
    age : 29 ,
    salary : 100000,
}
//it prints keys and values seperately
console.log(Object.keys(employee));
console.log(Object.values(employee));
 
//itearting and printing the entire object
Object.keys(employee).forEach((y) =>console.log(y,employee[y]));


//for:
var arr = [10,20,30,40,50]
for(let i =0 ;i<arr.length;i++)
{
    console.log(arr[i]);
}