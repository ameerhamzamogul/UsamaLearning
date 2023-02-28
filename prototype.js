
//Prtotoype in javascript

var Mobile = function (model_no) {
    //Instance Member
    this.model = model_no;
    this.price = 5000;
};

var samsung = new Mobile('Galaxy');
var nokia = new Mobile('3310');
samsung.color = "white";
//className.prototype.key = 'value'
//ProtoType Member
Mobile.prototype.memory = "128GB";
console.log(samsung.memory)
nokia.Ram = "8GB";
console.log(samsung);
console.log(nokia);