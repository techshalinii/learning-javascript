//Ways to print in JavaScript
alert("Hi there, I am learninng JavaScript");
console.log("Hello World");
document.write("document.write is used for displaying it.");

// show warning
console.warn("This is warning!!");
// show error 
console.error("This is an error!!");

//JavaScript Variables
var number1 = 32;
var number2 = 13626.6565;
console.log(number1 + number2);

//Data types in JavaScript
// Numbers
var num1 = 55;
var num2 = 3556.276;
// String
var str1 = "This is a string";
var str2 = 'This is also a string';
// Objects
var marks = {
    Shalini: 34,
    Ritu: 78,
    Nidhi: 89.9,
    Sunaina :98
    }
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2.66, "Neha", 4.1561, 5]
console.log(arr)

// Operators in JavaScript
// Arithmetic Operators
var num1 = 162;
var num2= 15;
console.log("The value of num1 + num2 is ", num1+num2);
console.log("The value of num1 - num2 is ", num1-num2);
console.log("The value of num1 * num2 is ", num1*num2);
console.log("The value of num1 / num2 is ", num1/num2);
// Assignment Operators
var num3 = num2;
num3 += 2;
console.log(num3);
num3 -= 2;
console.log(num3);
num3 = num3 - 2;
console.log(num3);
num3 *= 2;
console.log(num3);
num3 /= 2;
console.log(num3);

// Comparison Operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

// Logical Operators
// Logical and
console.log(true && false)
console.log(true && true)
console.log(false && true)
console.log(false && false)
// Logical or
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
// Logical not
console.log(!false);
console.log(!true);

// Function in JavaScript
function avg(n1, n2) {
    n3 = (n1 + n2) / 2;
    return n3;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// Conditionals in JavaScript
age = 16;
if(age > 38){
    console.log("You will be in your fortys soon");
}
else if(age >26){
    console.log("You got much more to learn");
}
else if(age >18){
    console.log("Yay! you are no more a kid");
}
else{
    console.log("You are a kid");
}

// Array and use of continue
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for(var i=0;i<arr.length;i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}
// String Methods in JavaScript
let String = "Divya is a good student and scores good marks.";
console.log(String.length)
console.log(String.indexOf("good"))
console.log(String.lastIndexOf("good"))
console.log(String.slice(1,3))
rep = String.replace("Divya", "Shalini");
rep = rep.replace("good", "excellent");
console.log(rep, String);

// Date and Time
let todaysDate = new Date();
console.log("Year:",todaysDate.getFullYear());
console.log("Day of Week:",todaysDate.getDay());
console.log("hours:",todaysDate.getHours());
console.log("Minutes:",todaysDate.getMinutes());