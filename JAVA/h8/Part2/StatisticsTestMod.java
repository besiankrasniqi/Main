import java.util.Scanner;

class StatisticsTestMod {
	public static void main (String[] args){

		int current = 0;
		int[] finalGrades; 
		int question = 1; // used to increment when asking "Enter Grade 1"
		int fGsize; // used to set size of Array or number of elements within an array

		Scanner scan = new Scanner(System.in);

		System.out.println("Enter the number of grades to input: ");
		fGsize = scan.nextInt();

		//setting size of elements in array finalGrades
		finalGrades = new int [fGsize];

		for (int index=0; index<finalGrades.length; index++){
			System.out.println("Enter grade " + question++ + ": ");
			current = scan.nextInt();

			if ((current >100) || (current < 55)){
				System.out.println ("Please enter a number between 55 and 100");
				current = scan.nextInt();
			}

			else {
				finalGrades[index] = current;
			}
		}

		StatisticsMod obj1 = new StatisticsMod(finalGrades, fGsize);

		System.out.println("The highest grade is: " + obj1.highest());
		System.out.println("The lowest grade is: " + obj1.lowest());
		System.out.println("Total number of grades is: " + obj1.numLength());
		System.out.println("The average of the grades is: " + obj1.average());
		System.out.println("Printing out grades: " + obj1.printNums());

	}
	
}