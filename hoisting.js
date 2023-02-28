
//Hoisting in javascript

sum(10, 20);
function sum(a, b) {
    add = a + b;
    console.log(add)

}


// addding(20, 20);     It will throw an error
var sum = function (a, b) {
    c = a + b;
    console.log(c);
}
sum(20, 20);