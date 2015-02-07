

//Class for Employee object
function Employee(name, age, id){
	this.name = name;
	this.age = age;
	this.id = id;
	
	this.friends = ["Andrew", "Susan", "Daycia", "Ashley"];
}

Employee.prototype = {
	constructor : Employee, 
	
	sayName : function() {
		alert(this.name);
	}, 
	
	sayAge : function() {
		alert(this.age);
	}, 
	
	sayId : function() {
		alert(this.id);
	}, 
	
	sayFriends : function() {
		alert(this.friends);
	}
};


var person1 = new Employee("Besian", 30, 7);
var person2 = new Employee("John", 35, 9);

person1.sayName();
person1.sayAge();
person1.sayId();

person2.sayName();
person2.sayAge();
person2.sayId();

person1.sayFriends();
person2.friends.push("Alex");
person2.sayFriends();


