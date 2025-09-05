const prompt = require('prompt-sync')();

function calculate(num1, num2, operation) {
    if (operation === '+')
         return num1 + num2;
    if (operation === '-')
         return num1 - num2;
    if (operation === '*') 
        return num1 * num2;
    if (operation === '/') 
        return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
}

while (true) {
    
    let num1;
    while (true) {
        num1 = Number(prompt("Enter the first number: "));
        if (!isNaN(num1)) 
            break;
        console.log("Invalid input. Please enter a valid number.");
    }

    let operation;
    while (true) {
        operation = prompt("Choose an operation (+, -, *, /): ");
        if (['+', '-', '*', '/'].includes(operation)) 
            break;
        console.log("Invalid operation. Please choose +, -, *, or /.");
    }

    
    let num2;
    while (true) {
        num2 = Number(prompt("Enter the second number: "));
        if (!isNaN(num2)) 
            break;
        console.log("Invalid input. Please enter a valid number.");
    }
    
    const result = calculate(num1, num2, operation);
    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);

    
    const again = prompt("Do you want to calculate again? (y/n): ");
    if (again.toLowerCase() === 'y') {
        console.log("okay lets do it again!.");
    } else {
        console.log("Thanks for using the calculator");
        break;
    }
}
  
    



