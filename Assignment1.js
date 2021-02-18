const coffeeOrder = {
    customerName: ['Anmol', 'Sharma'],
    typeOfCoffee: ['dark roast'],
    sizeOfCoffee: ['large'],
    drizzle: ['yes'],
    whippedCream: ['yes'],
    sweetner: ['yes'],
    coldFoam: ['no'],
    dairy: ['triple cream'],

    orderReceived: function () {
        // if-else for drizzle
        if (this.drizzle === 'yes') {
            alert('Add Drizzle!');
        } else {}
        // if-else for whipp cream
        if (this.whipped_cream === "yes") {
            alert('Add Whippped Cream!');

        } else {}
        // if-else for sweetner
        if (this.sweetener === "yes") {
            alert('Add Sweetener!');


        } else {}
        // if-else for cold foam
        if (this.cold_foam === "yes") {
            alert('Add Cold Foam!');
        } else {}


        alert('Hi, there is new coffee order, lets make it special' + '\n' +
            'Order details!' + '\n' +
            'Name: ' + this.customerName + '\n' +
            'Type:' + this.typeOfCoffee + '\n' +
            'Size: ' + this.sizeOfCoffee + '\n' +
            'Drizzle:' + this.drizzle + '\n' +
            'Whipped Cream:' + this.whippedCream + '\n' +
            'Sweetner:' + this.sweetner + '\n' +
            'Cold Foam:' + this.coldFoam + '\n' +
            'Dairy:' + this.dairy);
    }
};

coffeeOrder.orderReceived();

const coffeeOrder2 = {
    customerName: ['Harsh'],
    typeOfCoffee: ['latte'],
    sizeOfCoffee: ['large'],
    drizzle: ['no'],
    whippedCream: ['no'],
    sweetner: ['yes'],
    coldFoam: ['no'],
    dairy: ['almond milk'],

    orderReceived2: function () {
        // if-else for drizzle
        if (this.drizzle === 'yes') {
            alert('Add Drizzle!');
        } else {}
        // if-else for whipp cream
        if (this.whipped_cream === "yes") {
            alert('Add Whippped Cream!');

        } else {}
        // if-else for sweetner
        if (this.sweetener === "yes") {
            alert('Add Sweetener!');


        } else {}
        // if-else for cold foam
        if (this.cold_foam === "yes") {
            alert('Add Cold Foam!');
        } else {}


        alert('Hi, there is new coffee order, lets make it special' + '\n' +
            'Order details!' + '\n' +
            'Name: ' + this.customerName + '\n' +
            'Type:' + this.typeOfCoffee + '\n' +
            'Size: ' + this.sizeOfCoffee + '\n' +
            'Drizzle:' + this.drizzle + '\n' +
            'Whipped Cream:' + this.whippedCream + '\n' +
            'Sweetner:' + this.sweetner + '\n' +
            'Cold Foam:' + this.coldFoam + '\n' +
            'Dairy:' + this.dairy);
    }
};

coffeeOrder2.orderReceived2();