class Time {
	 
	 private int hour;
	 private int minute;
	 private int second;
	 private int loopcheck;

	 public Time () {
	 	hour = 0; 
	 	minute = 0;
	 	second = 0;
	 }

	 public void setTime (int hr, int min, int sec){
	 	hour = hr;
	 	minute = min;
	 	second = sec;

	 }

	 public void printTime() {
	 	System.out.println(hour + ":" + minute + ":" + second);

	 }

	 public void tick() {
	 	while (second != loopcheck) {
	 		second = second + 1;

	 		if (second == 60){
	 			minute = minute +1;
	 			second = -1;
	 			second = second + 1;
	 		}

	 		if (minute == 60){
	 			hour = hour + 1;
	 			minute = -1;
	 			minute = minute + 1;
	 		}
	 		
	 		loopcheck = second;		
	 	}
	 }
}