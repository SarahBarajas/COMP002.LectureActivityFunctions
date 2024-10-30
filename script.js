// Function to greet a person by name
function greet(name) {
    return `Hello, ${name}!`;
    //replaced some name with Sarah 
console.log(greet("Sarah"));

// Function to calculate the circumference of a circle 
function calculateCircumference(diameter) {
    return Math.PI * diameter;
}

// Call the calculateCircumference function and log results 
console.log(calculateCircumference(10));

// Define the first function
function firstFunction() {
    console.log("First function start"); // Log start of the first function

    secondFunction(); // Call second function

    console.log("First function end"); // Log end of the first function
}

// Define second function
function secondFunction() {
    console.log("Inside second function"); // Log inside second function
}

// Call the first function
console.log("Calling firstFunction()"); // Log before calling the first function
firstFunction();
console.log("Completed calling firstFunction()"); 

function stackOverflow() {
    stackOverflow(); 
}

console.log("Stack overflow example:");
}

//