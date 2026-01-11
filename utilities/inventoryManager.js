const inventory = [];

function findProductIndex (productName) {
    for (const item of inventory) {
        if (item.name === productName.toLowerCase())
        return inventory.indexOf(item);
    }
    return -1;
}

function addProduct (product) {
    const name = product.name.toLowerCase();

    for (const item of inventory) {
        if (item.name === name) {
            item.quantity += product.quantity;
            console.log(`${name} quantity updated`);    
            return;
        }
    }
    inventory.push({
        name,
        quantity: product.quantity
    });
    console.log(`${name} added to inventory`);
}

function removeProduct (productName, quantity) {
    const name = productName.toLowerCase();

    for (const item of inventory) {
        if (item.name === name) {
            if (item.quantity < quantity) {
                console.log(`Not enough ${item.name} available, remaining pieces: ${item.quantity}`);
                return;
            } else {
                item.quantity -= quantity;
                if (item.quantity === 0) {
                    let getIndex = findProductIndex(item.name);
                    inventory.splice(getIndex, 1);
                    console.log(`${name} is removed from the inventory`);
                } else {
                    console.log(`Remaining ${item.name} pieces: ${item.quantity}`);
                }
            }
            return;
        }
        }
    console.log(`${name} not found`);
}


addProduct({name: "FLOUR", quantity: 5})
removeProduct("FLOUR", 5);
console.log(inventory)