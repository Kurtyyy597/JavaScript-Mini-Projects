const prompt = require('prompt-sync')();
let cart = [];

while (true) {
    const itemName = prompt("What is the name of the item? ");
    
    let priceItem;
    while (true) {
        priceItem = parseFloat(prompt("Enter the price of the item: "));
        if (!isNaN(priceItem)) 
            break;
        console.log(" Please enter a valid price. ");
    }

    let itemQuantity;
    while (true) {
        itemQuantity = parseFloat(prompt(`How many ${itemName} do you want to buy? `));
        if (!isNaN(itemQuantity)) 
            break;
        console.log(`Please enter a valid quantity.`);
    }

    cart.push({
        itemName,
        priceItem,
        itemQuantity
    });

    const buyAgain = prompt("Do you want to add more items? (y/n): ");
    if (buyAgain.toLowerCase() !== 'y') break;
}

// ✅ RECEIPT
console.log("\n🧾 Here is your receipt!");
let grandTotal = 0;

cart.forEach((item, index) => {
    const total = item.priceItem * item.itemQuantity;
    grandTotal += total;
    console.log(`${index + 1}. ${item.itemName} - ₱${item.priceItem} x ${item.itemQuantity} = ₱${total.toFixed(2)}`);
});

console.log(`\n🧮 Total of all items: ₱${grandTotal.toFixed(2)}`);

// ✅ DISCOUNT
const discountRate = grandTotal > 500 ? 0.10 : 0;
const discountTotal = grandTotal * discountRate;

// ✅ TAX
const taxRate = 0.12;
const tax = (grandTotal - discountTotal) * taxRate;

// ✅ FINAL TOTAL
const finalTotal = (grandTotal - discountTotal) + tax;

console.log(`\n💸 Grand Total: ₱${grandTotal.toFixed(2)}`);
console.log(`🔻 Discount: ₱${discountTotal.toFixed(2)} (${discountRate * 100}%)`);
console.log(`🧾 VAT (12%): ₱${tax.toFixed(2)}`);
console.log(`🟢 Final Total: ₱${finalTotal.toFixed(2)}`);
console.log("\n✅ Thank you for shopping with us!\n");
