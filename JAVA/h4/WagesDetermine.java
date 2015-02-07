
import java.text.NumberFormat;

public class WagesDetermine {
	public static void main (String[] args){
		int numhours1=0, numhours2=0;
		double wage1 = 10, wage2 = 0.05, opt1total=0, opt2total=0;

		NumberFormat fmt1 = NumberFormat.getCurrencyInstance();

			System.out.println(" ");
			System.out.println(" ");
			System.out.println("****************************************************");
			System.out.println("\t\t\tMenu");
			System.out.println("****************************************************");
			System.out.println("1) Calculate earnings at $10.00/hr");
			System.out.println("2) Calculate earnings at $.10 doubled each hour");
			System.out.println("****************************************************");

			for (int i=1; i<=10; i++) 
			{
			numhours1++;
			opt1total = numhours1 * wage1;

			numhours2++;
			wage2 = (wage2 * 2);
			opt2total = (wage2 * 2) - 0.10;

			if (opt2total>opt1total){
				System.out.println("It takes " + numhours2 + " hours before Option#2 becomes more beneficial than Option#1");
			}

		}

		System.out.println(" ");
		System.out.println("See the explanation below:");
		System.out.println ("OPTION #1: For working " + numhours1 + " hours you will earn: " + fmt1.format(opt1total));
		System.out.println ("OPTION #2: For working " + numhours2 + " hours you will earn: " + fmt1.format(opt2total));

		}

}