const prompt = require('prompt-sync')();

const fruitInventory = [
    { Name: "Banana", Price: 150, quantity: 3, Status: "Ripe", Expiry: "2030-01-10" },
    { Name: "Apple", Price: 300, quantity: 5, Status: "Ripe", Expiry: "2031-01-10" },
    { Name: "Grapes", Price: 190, quantity: 10, Status: "Ripe", Expiry: "2032-01-10" },
    { Name: "Blueberry", Price: 240, quantity: 3, Status: "Ripe", Expiry: "2030-01-10" }
];

function viewInventory() {
    console.log("\nAvailable Fruits:");
    fruitInventory.forEach((item, index) => {
        console.log(`${index +1}. ${item.Name}, Price: ₱${item.Price}, Stock: ${item.quantity}, Status: ${item.Status}, Expiration Date: ${item.Expiry}`);
    });
};


let grandTotal = 0;
let userCart = [];

while (true) {
    viewInventory();

    const userBuyer = prompt("What fruit do you want sir/mam? ");
    const item = fruitInventory.find(fruit => fruit.Name.toLowerCase() === userBuyer.toLowerCase());

    if (item) {
        console.log(`The price of ${item.Name} is ₱${item.Price}`);

        const quantity = parseInt(prompt(`How many ${item.Name} do you want: `));
        if (quantity > 0 && quantity <= item.quantity) {
            const total = quantity * item.Price;
            grandTotal += total;
            item.quantity -= quantity;

            // Add to userCart
            userCart.push({
                Name: item.Name,
                Price: item.Price,
                quantity: quantity,
                Status: item.Status,
                Expiry: item.Expiry,
                total: total
            });

            console.log(`Added ${quantity} ${item.Name}(s) for ₱${total}`);
        } else {
            console.log("We don't have enough stock.");
        }

        const again = prompt("Do you want to buy another fruit? (yes/no): ");
        if (again.toLowerCase() !== "yes") {
            break;
        }
    } else {
        console.log("Fruit not found.");
    }
}

// Calculate Discount and Tax
const discountRate = grandTotal > 150 ? 0.10 : 0;
const discountUser = grandTotal * discountRate;
const discountedTotal = grandTotal - discountUser;
const taxRate = 0.12;
const tax = discountedTotal * taxRate;
const finalTotal = discountedTotal + tax;

// Display Receipt
console.log("\n--- RECEIPT ---");
userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.Name} - Price: ₱${item.Price}, Quantity: ${item.quantity}, Total: ₱${item.total}`);
});
console.log(`\nSubtotal: ₱${grandTotal.toFixed(2)}`);
console.log(`Discount (10%): -₱${discountUser.toFixed(2)}`);
console.log(`Tax (12%): +₱${tax.toFixed(2)}`);
console.log(`Total: ₱${finalTotal.toFixed(2)}`);
console.log("Thank you for shopping!");
