//DO NOT CHANGE CODE HERE
var customers = require('./customers.json');
//DO NOT CHANGE CODE HERE
console.log(customers)



/*
1. Oldest Customer

Write a function that will find the oldest customer 
and return their name.
function Person (name, age) {
 this.name = name;
 this.age = age;
 }

var allPersons = [];
allPersons[0] = new Person("Alice", 30);
allPersons[1] = new Person("Billy", 25);
allPersons[2] = new Person("Hjorth", 20);
allPersons[3] = new Person("Leon", 50);
console.log( allPersons );
var arr = allPersons;
var max = arr[0].age;
var maxIndex = 0;
var maxName = "";

for (var i = 1; i < arr.length; i++) {
    if (arr[i].age > max) {
        maxIndex = i;
        max = arr[i].age;
        maxName = arr[i].name;
    }
}
**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?
for loop
* What data type occupies each element of the 
customers array? What type of loop should be used 
then?
the data type that should be used is booleans and the loop you should use is loop for in.

*/


function oldestCustomer(array){


};



/*
2. Youngest Customer

Write a function that will find the youngest customer and return their name.
function Person (name, age) {
 this.name = name;
 this.age = age;
 }
var allPersons = [];
allPersons[0] = new Person("sky", 12);
allPersons[1] = new Person("charles", 5);
allPersons[2] = new Person("earl", 15);
allPersons[3] = new Person("kiara", 3);
console.log( allPersons );
var arr = allPersons;
var max = arr[0].age;
var maxIndex = 0;
var maxName = "";
**HINT: Look at the data in the customer.json file. 

* What kind of loop should you use to iterate over 
the customers array?
in loop
* What data type occupies each element of the 
customers array? What type of loop should be used 
then?
numbers and the loop is loop for off
*/

function youngestCustomer(array){

};

