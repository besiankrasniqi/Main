
import java.util.Scanner;

class Occurrences{

	public static void main (String[] args){

		int current=0;

		Scanner scan = new Scanner(System.in);

		//this is where the occurrences are stored 
		int[] occurrNums = new int[51]; 

		//this is where input from the user is stored 
		int[] userArray = new int[51];

		//populating the Array with numbers
		for (int index = 0; index<userArray.length; index++){
			
			System.out.println ("Please enter a value between 0 and 50 [-1 to end]: ");
			current= scan.nextInt();
			
			if (current > 50){
				System.out.println("Out of range, please enter a number between 0-50:");
				current = scan.nextInt();
			}

			else if (current < 0){
				index = 51;
			}
			userArray[index] = current;
		}

		for (int repeat : userArray)
		    occurrNums[repeat]++;
		
		for (int i = 0; i < occurrNums.length; i++) {
		    System.out.println("The value of " + i + " has " + occurrNums[i] + " occurrences");
		}

	}

}