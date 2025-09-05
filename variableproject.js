const prompt = require('prompt-sync')(); 

const conversionRate = 0.621371; 

while (true) {
    const userInput = prompt("Enter the distance in kilometers (or type 'exit' to quit): ");

    
    if (userInput.toLowerCase() === "exit") {
        console.log("Exiting the converter. Goodbye!");
        break;
    }

    
    const kilometers = parseFloat(userInput);

    
    if (!isNaN(kilometers)) {
        const miles = kilometers * conversionRate;
        console.log(`Here is your conversion: ${miles.toFixed(2)} miles`);
    } else {
        console.log("Invalid input. Please enter a number or type 'exit'.");
    }
}
