// console.log('hello world');

// var myName = 'prince';
// var myAge = 22;

// console.log(myage);
// console.log(myName);

// console.log( 10 + "20");
// console.log( "Java "+ "Script");
// console.log( " " + 0);

// console.log("prince " - "makadiya");

// console.log(5+20);

// console.log(23+31);
// console.log(105-5);
// console.log(250/5);
// console.log(25*6);
// console.log(27%4);

// var num = 155;
// console.log(num);
// var newNum = --num + 5; 
// console.log(newNum);

//console.log(!true);

// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "prince";

// console.log(myName + " prince");

// console.log(9**2); 

// console.log(5 + "abcd");


// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2 );

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2 );

// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }

// var year = 2020;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }

// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }


// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   

// for(var num = 1; num<= 10; num++){
//     var tableOf = 12;  
//   console.log(tableOf + " * " + num + " = " + tableOf * num);
// }


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum(20,30);



// var myName = "prince";
// console.log(myName);

// let myName = "prince";
// console.log(myName);

// myName = "prince";
// console.log(myName);


// const myName = "prince";
// console.log(myName);

// myName = "prince";
// console.log(myName);


// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 

// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// var myFriends = ['a','b','c','d'];

// console.log(myFriends.length);


// for(let elements of myFriends){
//   console.log(elements);
// }

// var myFriends = ['a','b','c','d'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });


// var myFriendNames = ["a","b","c","d"];

// console.log(myFriendNames.includes("e"));


// const prices = [200,300,350,400,450,500,600];

// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 400;
// })
// console.log(newPriceTag);

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());








// array.sort(function(a,b){
//     console.log(a,b);
//     if(a>b){
//         return 1;
//     }
//     if(a<b){
//         return -1;
//     }
//     if(a==b){
//         return 0;
//     }
// });
// console.log(array);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let sortedFruits = fruits.sort();
// // let reversedFruits = sortedFruits.reverse();

// console.log(sortedFruits)
// // console.log(reversedFruits)

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);


// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);


// const plants = ['onion', 'cucumber',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);
// console.log(plants.shift());



// const months = ['Jan', 'march', 'April', 'June', 'July'];
// const newMonth = months.splice(months.length,0,"Dec");
// console.log(months);


// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,1,'june');
//   console.log(months);
// }else{
//   console.log('No data found');
// // }
//  const array1 = [41, 44, 29, 1, 51];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);


// let array = [25, 36, 49, 64, 81];

// let arrSqr = array.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);


// const arr = [
//         ['a_1', 'a_2'],
//         ['a_3', 'a_4'],
//         ['a_5', 'a_6'],
//         ['a_7', ['a_7', ['a_7', 'a_8']]]
//     ];

// let flatArr = arr.reduce((accum, currVal)  => { 
//           return accum.concat(currVal);
// })

// console.log(arr.flat(Infinity));

// console.log(flatArr);


// let myName = "prince makadiya";

// console.log(myName);
// console.log(myName.length);


// const myBioData =  'I am prince makadiya';
// console.log(myBioData.lastIndexOf("p"));


// var str = "Apple, Bananaa, Kiwi, mango";

// // let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8,-2);
// console.log(res);


// let str = "prince makadiya";

// console.log(str.charAt(9));

// let myName = "michal jackson";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());

// var str = "              Hello         World!            ";
// console.log(str.trim());

// let currDate = new Date(); 
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); 
// console.log(new Date().toString()); 

// console.log(Date.now());

// const curDate = new Date();

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// const curTime = new Date();

// console.log(curTime.getTime());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());





// console.log(Math.PI);

// let num = 10.501;
// console.log(Math.round(num));


// console.log(Math.pow(2,3));
// console.log(2**3);


// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

// console.log(Math.round(69.1));

// console.log(Math.floor(259.1)); 

// console.log(Math.min(0, 150, 30, 20, -8, -200));


// console.log(Math.max(0, 150, 30, 20, -8, -200));

// console.log(Math.floor(Math.random()*10));


// console.log(Math.trunc(-356.1));


  // let bioData = { 
  //     myName : "prince makadiya",
  //     myAge : 22,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// let bioData = { 
//   myName : "prince makadiya",
//   myAge : 22,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// let bioData = { 
//   myName : {
//     realName : "prince",
//   },
//   myAge : 22,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.realName );


 
// console.log(this.alert('This is alert....'));


// function myName() {
//     console.log(this);
// }


// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// ----



// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calcy = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calcy(5,2,subs)
// console.log(calcy(5,2,subs));
// console.log(calcy(2,3,add));
// console.log(calcy(5,4,subs));
// console.log(calcy(10,6,mult));



// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again `);
// }

// fun1();

// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again `);
// }

// fun1();



// let a = "Hello..."; 

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " bye bye .....";
//       console.log(a+b+c);
//     }
//     second();
    
// }

// first();



// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);


// setTimeout(()=>{
//     console.log(`1️ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4 works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6 works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



// var object = { key_1: "some text", key_2: true, key_3: 10 };

// var object_as_string = JSON.stringify(object);  
// // "{"key_1":"some text","key_2":true,"key_3":10}"  

// console.log(object_as_string);

// typeof(object_as_string);  



// var object_as_string_as_object = JSON.parse(object_as_string);
// // {key_1: "text", key_2: true, key_3: 10} 

// typeof(object_as_string_as_object);  



// --------------------  Finished the Tutorial Part (14:36) ------------