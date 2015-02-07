

var MyArray = [10, 25, 60, 80, 120, 5, 15, 2, 200, 1500, 220, 400, 30, 45];

var currvaluehighest = 0;
var currvaluelowest = 0;


for (var i=0; i<MyArray.length; i++){
	if (MyArray[currvaluehighest] < MyArray[i]){
		currvaluehighest = i;
	}
}

for (var j=0; j<MyArray.length; j++){
	if (MyArray[currvaluelowest] > MyArray[j]){
		currvaluelowest = j;
	}
}


alert("The highest value in the Array is: " + MyArray[currvaluehighest]);
alert("The lowest value in the Array is: " + MyArray[currvaluelowest]);
