

class StatisticsMod {

private double sum = 0;
private char gradeChar;
private int nums;
private double avg;
private String charCollection = "";

private int sizeofarr; //variable used to set size of the Array 

int[] grades;

public StatisticsMod (int[] list, int arraysize) {
	sizeofarr = arraysize;
	grades = new int[sizeofarr];
	
	for (int index=0; index<list.length; index++){
		grades[index] = list[index];
	}
}

public char highest (){
	for (int index = 0; index<grades.length; index++){
		if ((grades[index] > 89) && (grades[index] < 100)){
			gradeChar = 'A';
		}
	}
	return gradeChar;

}

public char lowest (){
	for (int index = 0; index<grades.length; index++){
		if (grades[index] < 60){
			gradeChar = 'F';
		}
	}
	return gradeChar;
}

public int numLength() {
	nums = grades.length;
	return nums;
}

public char average() {
	for (int index =0; index<grades.length; index++){
		sum = sum + grades[index];
	}
	nums = grades.length;
	avg = sum/nums;
	
	if ((avg > 89) && (avg < 100))
		gradeChar = 'A';
	else if ((avg > 79) && (avg < 90))
		gradeChar = 'B';
	if ((avg > 69) && (avg < 80))
		gradeChar = 'C';
	if ((avg > 59) && (avg < 70))
		gradeChar = 'D';
	if (avg < 60)
		gradeChar = 'F';

	return gradeChar;
}

public String printNums () {
	for (int index = 0; index < grades.length; index++){
		if ((grades[index] > 89) && (grades[index] < 100)){
			gradeChar = 'A';
		}

		else if ((grades[index] > 79) && (grades[index] < 90)){
			gradeChar = 'B';
		}

		else if ((grades[index] > 69) && (grades[index] < 80)){
			gradeChar = 'C';
		}

		else if ((grades[index] > 59) && (grades[index] < 70)){
			gradeChar = 'D';
		}	

		else if (grades[index] < 60){
			gradeChar = 'F';		
		}

		charCollection = charCollection + " " + gradeChar;
	}
	return charCollection;
}

}