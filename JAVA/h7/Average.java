

class Average {
	public static void main (String[] args){

		double averageNum;
		double sum = 0;

		int[] myValues = {12, 56, 42, 38, 77, 69, 34, 10, 90, 93};

		for (int index = 0; index<myValues.length; index++){
			sum = sum + myValues[index];
		}


		System.out.println ("There are a total of " + myValues.length + " numbers in the Array");
		System.out.println ("The sum of all numbers is: " + sum);

		averageNum = sum / myValues.length;

		System.out.println ("The average of all numbers in the Array is: " + averageNum);




	}
		
}