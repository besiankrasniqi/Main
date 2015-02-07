


class Triangle {

	int side1;
	int side2;
	int side3;

	boolean is_equilateral (){
		boolean result;

		if ((side1 == side2) && (side2 == side3))
			result = true;
		else 
			result = false;
		return result;
	}

	boolean is_isosceles (){
		boolean result = false;

		if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
			if (  (((side1 + side2)/2)!=side3) &&  (((side1 + side3)/2)!=side2) ){
			result = true;
			}
		}
	    else 
	    	result = false;
	    return result;
	}

	boolean is_scalene (){
		boolean result;
		
		if ((side1 != side2) && (side2 != side3))
			result = true;
		else 
			result = false;
		return result;
	}




}