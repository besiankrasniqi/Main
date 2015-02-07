
import java.util.Scanner;

public class PurchaseChange {
	
	public static void main(String[] args) {
	
	//variable declaration
	int purchaseValue, moneychangeValue;
	final int QUARTERS_EQUAL, DIMES_EQUAL, NICKELS_EQUAL, PENNIES_EQUAL; 
	int quartersChange, dimesChange, nickelsChange, penniesChange;
	//end of variable declaration

	//assigning values to variables (CONSTANTS - values never change) 
	QUARTERS_EQUAL = 25;
	DIMES_EQUAL = 10;
	NICKELS_EQUAL = 5;
	PENNIES_EQUAL = 1;
	//end of value assignment to variables
	
	//declaring a "scan" object type variable so that we can use it to read user's input
	Scanner scan = new Scanner(System.in);
	//end of "scan" object type variable
	
	System.out.println("Enter the purchase amount [0-100] cents: ");
	//reading user input and assigning it to the purchaseValue variable
	purchaseValue = scan.nextInt();
	//end of reading user input

	moneychangeValue = 100 - purchaseValue;
	
	quartersChange = moneychangeValue / QUARTERS_EQUAL;
	dimesChange = (moneychangeValue % QUARTERS_EQUAL) / DIMES_EQUAL;
	nickelsChange = ((moneychangeValue % QUARTERS_EQUAL) % DIMES_EQUAL)/NICKELS_EQUAL;
	penniesChange = (((moneychangeValue % QUARTERS_EQUAL) % DIMES_EQUAL) % NICKELS_EQUAL) / PENNIES_EQUAL;

	if ((purchaseValue < 0) || (purchaseValue >100)) {
	System.out.println("Range not correct please enter numbers between 0-100");
	}

	else if (purchaseValue == 100) {
	System.out.println("There is no change, Thank You for shopping with us!");
	}

	else if (purchaseValue == 0) {
	System.out.println("You haven't purchased anything, spend at least 1 Cent!");
	}
	
	else {
	System.out.println("Your change of "+ moneychangeValue + " cents is given as:");
	System.out.println(quartersChange + " Quarters");
	System.out.println(dimesChange + " Dimes");
	System.out.println(nickelsChange + " Nickels");
	System.out.println(penniesChange + " Pennies");

	}

	
	
}	


}
