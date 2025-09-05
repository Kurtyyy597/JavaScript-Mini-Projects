const prompt = require('prompt-sync')()


console.log("------------Welcome to the Grading System----------------.");

let ctr = 0
while(true) {

    
        const userName = (prompt("Enter your Name: "));

        const userGrade = Number(prompt("Enter your Grade: (60/100) "));
        if (isNaN(userGrade)) {
            console.log("Please enter valid number");
            continue;
        } else if (userGrade >= 60 && (userGrade <= 70)) {
            console.log(`Hello ${userName} your grade is 5, Failed.`);
            
        } else if (userGrade >= 70 && (userGrade <= 80)) {
            console.log(`Hello ${userName}, your grade is 3. Fair.` );
           
        } else if (userGrade >= 80 && (userGrade <= 90)) {
            console.log(`Hello ${userName}, your grade is 2, Satisfactory`);
           
        } else if (userGrade >= 90 && (userGrade <= 100)) {
            console.log(`Congrats ${userName}, Your grade is 1, Well Done!`);
            
        } else {
            console.log("Invalid Grade")
            continue;
        }
        ctr++

        const again = prompt("Do you want to continue? (y/n)");
        if (again.toLowerCase() !== 'y') {
            console.log(`Thankyou for using this program!`);
            console.log(`The total number of students is: ${ctr}`);
            break;
        }
    }