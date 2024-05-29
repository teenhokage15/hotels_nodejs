// function add(a,b){
//     return a+b;
// }

// var add = function (a,b){
//     return a + b;
// }

// var add = (a,b)=>{
//     return a +b;
// }

// var add =  (a , b)=> a+b;

// these were 4 ways to write a funciton



// var result = add(24,5);
// console.log(result);


// writing a fucntion which runs in itself

// (function() {
//     console.log('pratham');
// })();

// function callback(){
//     console.log('prince is callinga callback')
// // }
// const add  = function(a, b, pratham){
//     var result = a+b;
//     console.log('result is '+ result);
//     pratham(); 
// }

// // add(3, 4, function(){
// //     console.log('add completed');
// // });

// add(2,3, ()=> console.log('hello'));
 
var _ = require("lodash");
  

var fs = require("fs");

var os = require("os");

// var user = os.userInfo();

// console.log( user.username);

// fs.appendFile('greeting.txt', 'hi' + user.username + "!" ,()=>{
//     console.log('file is created');
    
// });

var data = ["person", "person",1,2,3,3,2,1, 'name', 'age', '2'];
var filter = _.uniq(data);

console.log(filter);

 