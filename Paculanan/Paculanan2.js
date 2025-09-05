const prompt = require('prompt-sync')()

while (true) {
    console.log("Choose from the Menu: ");
    console.log("1. Add");
    console.log("2. Substract");
    console.log("3. Average");
    console.log("4. Positive 0 or Negative");
    console.log("5. Exit");

    const choice  = prompt("Enter your choice: (1-5) ");

    switch (choice) {
        
        case '1': {
            while (true) {
            const num1 = parseFloat(prompt("Enter the First Number: "));
            const num2 = parseFloat(prompt("Enter the Second Number: "));
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Please enter valid numbers.");
            } else {
                const result = num1 + num2;
                console.log(`The result of ${num1} + ${num2} is: ${result}`);
                
            }

            const again = prompt("Do you want to continue? (y/n): ");
            if (again.toLowerCase() === 'y') {
                console.log("Enter 2 numbers again to add:")
                continue;
            } else {
                console.log("Thankyou! Exiting the program.");
                break;
            }
        }
        break;
    }
        case '2': {
            while(true) {
                const num1 = parseFloat(prompt("Enter the First Number: "));
                const num2 = parseFloat(prompt("Enter the Second Number: "));
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("Please enter valid numbers.");
                } else {
                    const result = num1 - num2;
                    console.log(`The result of ${num1} - ${num2} is: ${result}`);
                }

                const again = prompt("Do you want to continue? (y/n): ");
                if (again.toLowerCase() === 'y') {
                    console.log("Enter 2 numbers again to subtract");
                    continue;
                } else {
                    console.log("Thankyou! Exiting the program.");
                    break;
                }
                    
                }
                break;
            }
        

        case '3': {
            while (true) {
                const num1 = parseFloat(prompt("Enter the first Number: "));
                const num2 = parseFloat(prompt("Enter the second Number: "));
                if(isNaN(num1) || isNaN(num2)) {
                    console.log("Please enter valid numbers.");
                } else {
                    const average = (num1 + num2) / 2;
                    console.log(`The Average of ${num1} and ${num2} is: ${average}`);
                }

                const again = prompt("Do you want to continue? (y/n): ");
                if(again.toLowerCase() === 'y') {
                    console.log("Enter 2 numbers again to calculate average:");
                    continue;
                } else {
                    console.log("Thankyou! Exiting the program.");
                    break;
                }
            }
            break;
        }

        case '4': {
            while (true) {
                const number = prompt("Enter a number: ");
                if(isNaN(number)) {
                    console.log("Please enter a valid number.");
                } else if (number > 0) {
                    console.log(`${number} is a positive number.`);
                } else if (number < 0) {
                    console.log(`${number} is a negative number.`);
                } else {
                    console.log(`${number} is zero.`);
                }
                const again = prompt("Do you want to continue? (y/n): ");
                if(again.toLowerCase() === 'y') {
                    console.log("Enter another number to check if its positive or negative.");
                    continue;
                } else {
                    console.log("Thankyou! Exiting the program.");
                    break;
                }

                }
                break;
            }

            case '5': {
                console.log("Thank you for using the program. Goodbye!");
                
                process.exit(0);
            }
        }
    }


                
                
                    
                
                
            
        
    


    

    



            
        
            
            
        
    

            
              

    



            
    