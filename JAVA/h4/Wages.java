
import java.util.Scanner; 
import java.text.NumberFormat;

public class Wages {
	public static void main (String[] args){
		int numhoursopt1, numhoursopt2, optionselect =1, hrslist;
		double wage1 = 10, wage2 = 0.05, totalopt1, wagesum, wagesumtotal=0;

		Scanner scan = new Scanner(System.in);
		NumberFormat fmt2 = NumberFormat.getCurrencyInstance();

		while (optionselect != 3){

			System.out.println(" ");
			System.out.println(" ");
			System.out.println("****************************************************");
			System.out.println("\t\t\tMenu");
			System.out.println("****************************************************");
			System.out.println("1) Calculate earnings at $10.00/hr");
			System.out.println("2) Calculate earnings at $.10 doubled each hour");
			System.out.println("3) Exit");
			System.out.println("****************************************************");

			System.out.println("Choose an option: ");
			optionselect = scan.nextInt();


			if (optionselect == 1) {
				System.out.println ("OPTION1: How many hours? ");
				numhoursopt1 = scan.nextInt();

				totalopt1 = numhoursopt1 * wage1;

				System.out.println ("ANSWER: You will earn: " + fmt2.format(totalopt1));

			}

			if (optionselect == 2) {
				System.out.println ("OPTION2: How many hours? ");
				numhoursopt2 = scan.nextInt();

				for (int i=1; i<=numhoursopt2; i++) {
					
					wage2 = (wage2 * 2);
					
				}

				wagesumtotal = (wage2 * 2) - 0.10;
				System.out.println ("ANSWER: You will earn: " + fmt2.format(wagesumtotal));
				wage2 = 0.05;
			}

			if (optionselect == 3){
			System.out.println("Goodbye!");
			}

			if ((optionselect > 3) || (optionselect < 1)){
				System.out.println(optionselect + " is not a valid option, please try again:");
			}
		}
			

		}



}