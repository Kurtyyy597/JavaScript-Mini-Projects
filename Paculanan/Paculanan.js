const promptSync = require('prompt-sync');
const Database = require('better-sqlite3');

const prompt = promptSync();
const db = new Database('students.db');
db.exec(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        grade INTEGER NOT NULL,
        grade_status TEXT NOT NULL
    );
`);
console.log("Welcome to the Grade Processing System!");
console.log("The limit of the Students is up to 40");
const insert = db.prepare('INSERT INTO students (name, grade, grade_status) VALUES (?, ?, ?)');
let ctr = 0; 
while (true) {
    const Name = prompt("What is your Name? : ");

    let Grade;
    while (true) {
        const input = prompt("What is your grade? (60-100): ");
        Grade = Number(input);

        if (isNaN(Grade)) {
            console.log(`Please enter a valid number, ${Name}`);
        } else if (Grade >= 60 && Grade <= 100) {
            break;
        } else {
            console.log("Invalid grade. Please enter a number between 60 and 100.");
        }
    }

    let gradeStatus; 

    
    if (Grade >= 60 && Grade <= 74) {
        gradeStatus = `Your grade is 5, better luck next time ${Name}`;
    } else if (Grade >= 75 && Grade <= 80) {
        gradeStatus = `Your grade is 3, congrats you pass ${Name}`;
    } else if (Grade >= 81 && Grade <= 90) {
        gradeStatus = `Your grade is 2, congrats you pass ${Name}`;
    } else if (Grade >= 91 && Grade <= 100) {
        gradeStatus = `Your grade is 1, congrats you are high honors ${Name}`;
    }

    
    insert.run(Name, Grade, gradeStatus);
    ctr = ctr + 1;

    
    console.log(gradeStatus);
    
    
    const again = prompt("Do you want to enter another Name and Grade? (y/n): ");
    if (again.toLowerCase() === 'y') {
        console.log("Okay, enter another Name and Grade.");
        continue; 
    } else {
        console.log(`Thank you for using the system, ${Name}`);
        break; 
    }
}


const allStudents = db.prepare('SELECT * FROM students').all();
console.log(`A total of ${allStudents.length} students used the system.`);
console.log("Here are all the records from the database:");
console.table(allStudents);


db.close();
