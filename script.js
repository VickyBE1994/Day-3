//how to compare two JSON have the sameproperties without order
//QUESTION 1

let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
let JSON1= JSON.stringify(obj1);
console.log(JSON1)
let JSON2=JSON.stringify(obj2)
console.log(JSON2)
if(JSON1===JSON2)
{
   console.log("both or equal")}
   

else{
   console.log("both or not equal")
}

//
//QUESTION  2//Display all countries flags
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload= function(){
   var data= request.response;
  // console.log(data);
   var result = JSON.parse(data);
   //console.log(result)
   for(let i = 0 ; i< result.length ; i++){
      console.log(result[i].flags.png);
   }   

}

//QUESTION 3 :all countries nam ,region,subregion,population
var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all","true");
request1.send();
request1.onload= function(){
   var data= request1.response;
  // console.log(data);
   var result = JSON.parse(data);
   //console.log(result)
   for(let i = 0 ; i< result.length ; i++){
      console.log(result[i].name);
      console.log(result[i].region);
      console.log(result[i].subregion);
      console.log(result[i].population);
   }
}


