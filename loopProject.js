const prompt = require('prompt-sync')(); 
let grandTotal = 0;
while (true) {

    
    const item = prompt("What items do you want to buy? example('bag', wallet') : ");
    let price = parseFloat(prompt(`What is the price of the ${item}  you chose? : `));
    while (isNaN(price)) {
        console.log("Please enter a valid number for the price");
        price = parseFloat(prompt("What is the price of the item you chose? : "));
    }

    let quantity = Number(prompt("How many items do you want to buy? : "));
    while(isNaN(quantity)) {
        console.log("Please enter how many items do you want: ");
    }

    const total = price * quantity;
    console.log(`Thank you for purchasing the total bill is: ${total}`);

    const buyAgain = prompt("Do you want to buy items again? (y/n)");
    if(buyAgain.toLowerCase() === 'y') {
        console.log("Ok, enjoy!");
    } else {
        console.log("OKAY BYEEE! \n");
        console.log("FINAL RECEIPT");
        console.log("------------------------------");
        console.log(`${item} - ${quantity} = ${price * quantity}`);
        break;
   
}

    console.log("HEREEEEE WEEE GOOOOOOOOOO \n");
}

        












