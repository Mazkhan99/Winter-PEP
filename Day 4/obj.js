var name1 = "Maz Zama";
var color = "Black";
var age = 20;

var msg = function(){              
    console.log(this.name1 + " Welcome");
}

var person = {name1, color, age, msg}
person.msg()

