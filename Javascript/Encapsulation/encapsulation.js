

function Ball(initialsize) { //initialsize is the constructor of the class 
    var size = initialsize; //private data, this cannot be changed by calling ballone.size and setting a value

    this.setSize = function(nsize) { //setter method for the private size variable 
        size = nsize; 
    };

    this.showSize = function() { //getter method for the private size variable 
        console.log("The current size is: " + size);
    };
}

var ballone = new Ball(5); // instantiating an object and assigning value 5 to private variable 


ballone.showSize(); //showing current value of private variable 
ballone.setSize(10); //changing private variable value to 10
ballone.showSize(); 
console.log("-----------");
console.log(ballone.size); //proving that it doesnt work to change the value of private variable without using the setter method 

