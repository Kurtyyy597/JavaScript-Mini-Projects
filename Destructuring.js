const prompt = require('prompt-sync')(); // import prompt-sync

const family = {
    Mother: { name: "Lorna", age: 45 },
    Father: { name: "Lord", age: 43 },
    children: [
        { name: "Kurt", age: 21 },
        { name: "Ais", age: 20 }
    ],
    location: "MANILA"
};

// destructuring part
const { Mother, Father, children, location } = family;

console.log("\nHello, welcome to the Marquez family!");
console.log(`My father's name is ${Father.name} and his age is ${Father.age}`);
console.log(`My mother's name is ${Mother.name} and her age is ${Mother.age}`);
console.log("\nTheir kids are:");
children.forEach(({ name, age }, index) => {
    console.log(`${index + 1}. Name: ${name}, Age: ${age}`);
});

console.log(`\nOur location is: ${location}`);

const addedFamily = {
    Mother,
    Father,
    children: [...family.children, { name: "Bill", age: 45 }, { name: "Iya", age: 21 }],
    location
};

console.log(`\nUpdated family:`);
addedFamily.children.forEach(({ name, age }, index) => {
    console.log(`${index + 1}. ${name}, ${age}`);
});

// ✅ Introduce everyone
function introduceFamily(title, ...members) {
    console.log(title);
    members.forEach(({ name, age }) => {
        console.log(`- ${name}, ${age} years old`);
    });
}

introduceFamily("\nMeet the Family:", addedFamily.Father, addedFamily.Mother, ...addedFamily.children);

function uniqueMembers(partial) {
    const allMembers = [addedFamily.Father, addedFamily.Mother, ...addedFamily.children];
    const results = allMembers.filter(({ name }) =>
        name.toLowerCase().includes(partial.toLowerCase())
    );

    if (results.length) {
        console.log(`\nMatching members:`);
        results.forEach(({ name, age }) => {
            console.log(`- ${name}, ${age} years old`);
        });
    } else {
        console.log("No matches found.");
    }
}

let userPartial;
do {
    userPartial = prompt("Enter part of a name to search (or type 'exit'): ");
    if (userPartial.toLowerCase() !== "exit") {
        console.log("Looking for matches...");
        uniqueMembers(userPartial);
    }
} while (userPartial.toLowerCase() !== "exit");

console.log("\nDone searching for partial matches!");

function roleFamily(familyObj) {
    console.log(`\nHere is their role:`);
    console.log(`Name: ${familyObj.Father.name}, Age: ${familyObj.Father.age} Role: Father `);
    console.log(`Name: ${familyObj.Mother.name}, Age: ${familyObj.Mother.age} Role: Mother `);
    familyObj.children.forEach(({name, age}) => {
        console.log(`Name: ${name}, Age: ${age}, Role: Children`);
    });
}
roleFamily(addedFamily);

    

    


