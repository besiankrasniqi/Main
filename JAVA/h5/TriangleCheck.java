
public class TriangleCheck {

	public static void main (String[] args){
		boolean tr_verify;
		
		Triangle triangle1 = new Triangle();
		Triangle triangle2 = new Triangle();
		Triangle triangle3 = new Triangle();

		triangle1.side1 = 8;
		triangle1.side2 = 8;
		triangle1.side3 = 8;

		tr_verify = triangle1.is_equilateral();

		if (tr_verify == true)
			System.out.println ("Triangle #1 with sides: " + triangle1.side1 + ", " + triangle1.side2 + ", " + triangle1.side3 + " is Equilateral");
		else
			System.out.println ("Triangle #1 with sides: " + triangle1.side1 + ", " + triangle1.side2 + ", " + triangle1.side3 + " is not Equilateral");

		triangle2.side1 = 3;
		triangle2.side2 = 3;
		triangle2.side3 = 3;

		tr_verify = triangle2.is_isosceles();

		if (tr_verify == true)
			System.out.println ("Triangle #2 with sides: " + triangle2.side1 + ", " + triangle2.side2 + ", " + triangle2.side3 + " is Isosceles");
		else
			System.out.println ("Triangle #2 with sides: " + triangle2.side1 + ", " + triangle2.side2 + ", " + triangle2.side3 + " is not Isosceles");


		triangle3.side1 = 5;
		triangle3.side2 = 1;
		triangle3.side3 = 6;

		tr_verify = triangle3.is_scalene();

		if (tr_verify == true)
			System.out.println ("Triangle #3 with sides: " + triangle3.side1 + ", " + triangle3.side2 + ", " + triangle3.side3 + " is Scalene");
		else
			System.out.println ("Triangle #3 with sides: " + triangle3.side1 + ", " + triangle3.side2 + ", " + triangle3.side3 + " is Scalene");



	}
}