
//Global Variable
var i = "This is global variable"; //Global Variable
function show() {
    console.log(i);
}

function display() {
    console.log(i)
}

show();
display();


//  Block Scope

{
    let a = "This is Block scope"
    console.log(a)
}
function block() {
    let b = "This is Function scope";
    console.log(b)
}
block();
//console.log(a)   It can't be used outside a block
//console.log(b)   /        /       / 

