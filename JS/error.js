// compile time error
// syntax error
// console.log(1;

// Runtime error 
// Reference error
// console.log(x); x is not defined

// Error handling Try catch finally block



// try {
//     console.log("Pranav");
// } catch (e) {
//     console.log("Error Pranav :" , e);
    
// } finally { ----------> Always executes
//     console.log("Finally block executed");
    
// }

try {
    console.log(x);
    
} catch (error) {
    throw new Error("Bhai pehle declare kr");
}


