//Objects in javascript

let object = {
    firstName: "Techi",
    lastName: "Lab",
    since: 2010,
    country: "Pakistan",

    //Arrays in objects
    services: ["Web development", " Application development", " Game development"],

    //Functions in objects
    charges: function () {
        return "500$";
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },

    //Objects in objects
    contact: {
        phoneNumber: +9233453234,
        Email: "info@techilab.com"
    }
}

console.log(`${object.firstName, object.lastName} since ${object.since} located in ${object.country} providing services of ${object.services} which charge per services ${object.charges()}. Kindly contact ${object.fullName()} ${object.contact.phoneNumber, object.contact.Email}`)



//Enhanced object properties

const pricePropName = "PRICE";

const calculator = (name, price) => {
    return {
        name,
        add(n1, n2) {
            return n1 + n2;
        },
        [pricePropName.toLowerCase()]: price
    }
}
const calc = calculator('casio', 19.99)
console.log(calc.name)
console.log(calc.add(10, 20));
console.log(calc.price);
