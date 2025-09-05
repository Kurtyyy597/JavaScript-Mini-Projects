const prompt = require('prompt-sync')();

let expenses = [];
while(true) {
    expenseName = prompt("What is your expense for? ");
    let expenseAmount;
    while(true) {
        expenseAmount = parseFloat(prompt(`What is the amount of the ${expenseName}: `));
        if(!isNaN(expenseAmount)) {
            break;
        }
        console.log("Please enter valid amount: ");
    }



expenses.push({
        name: expenseName,
        amount: expenseAmount
    });

    const again = prompt("Do you want to add another expense? (y/n): ");
    if (again.toLowerCase() === 'y') {
    } else {
        console.log("Thankyou for purchasing!");
        break;
    }
}

console.log("This is all your expenses");
expenses.forEach((expense,index) => {
    console.log(`${index + 1}. ${expense.name} - ${expense.amount}`);

});

let grandtotal = 0;
expenses.forEach((expense) => {
    grandtotal+= expense.amount;
   
});

const itemList = expenses.map(expense => expense.name).join(", ");

console.log(`\n🛒 Items you bought: ${itemList}`);
console.log(`💰 Grand total is = ₱${grandtotal}`);



       

    


