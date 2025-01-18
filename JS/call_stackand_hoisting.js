// sayMyName("Pranav");

// function sayMyName(finalName) {
//     console.log(finalName);
// }

// console.log(age);
// let age = 36;

// abc("pranav"); not working as function expression is used

// var abc = function(name) {
//     console.log(name); 
// }

function A() {
    B();
    console.log("1");
    
}

function B() {
    C();
    console.log("2");
    
}

function C() {
    console.log("3");
    
}

A();




