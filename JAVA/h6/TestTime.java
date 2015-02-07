class TestTime {
	
	public static void main (String[] args){
		

		Time clockOne = new Time();

		clockOne.setTime(16, 20, 28);
		clockOne.tick();
		clockOne.printTime();

		//incrementing the time object by 60 seconds
		clockOne.setTime(16, 21, 8);
		clockOne.tick();
		clockOne.printTime();

		//incrementing the time object by 1 minute
		clockOne.setTime(16, 22, 8);
		clockOne.tick();
		clockOne.printTime();

		//incrementing the time object by 1 hour
		clockOne.setTime(17, 22, 8);
		clockOne.tick();
		clockOne.printTime();

		//incrementing the time object by 20 minutes
		clockOne.setTime(17, 42, 8);
		clockOne.tick();
		clockOne.printTime();

		//incrementing the time object by 40 seconds
		clockOne.setTime(17, 42, 48);
		clockOne.tick();
		clockOne.printTime();


	}
}