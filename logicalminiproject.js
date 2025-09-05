 const prompt = require('prompt-sync')(); 
// console.log("⚡ Quiz is starting...");

const quiz1 = "What is the wildest animal on earth? \nA. Lion\nB. Cat\nC. Dog\nD. Tiger";
const quiz2 = "What is the largest planet? \nA. Jupiter\nB. Venus\nC. Mercury\nD. Pluto";
const quiz3 = "Who is the goat of Basketball? \nA. Michael Jordan\nB. Lebron James\nC. Allen Iverson\nD. Vince Carter";

const answer1 = "A";
const answer2 = "A";
const answer3 = "A";

let score = 0;

const userAnswer1 = prompt(`Hello, ${quiz1}, What is your answer? : `);
if (userAnswer1.toUpperCase() === answer1) {
    score++;
    console.log("You are right, proceed!");
} else {
    console.log("You are wrong, proceed to next question");
    
}

const userAnswer2 = prompt(`Hello, ${quiz2}, What is your answer? : `);
if (userAnswer2.toUpperCase() === answer2) {
   score++;
   console.log("You are right, proceed!");
} else {
    console.log("You are wrong, proceed to next question");
}

const userAnswer3 = prompt(`Hello, ${quiz3}, What is your answer? : `);
if (userAnswer3.toUpperCase() === answer3) {
    score++;
    console.log("You are right, you will know your score now!");
} else {
    console.log("You are wrong!");
}

console.log(`Your final score is ${score}`);






 

    
    
    

 



