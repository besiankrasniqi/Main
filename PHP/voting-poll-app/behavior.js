/**
 * Author: Besian Krasniqi
 * email: email: bksoftengineer@gmail.com
 * website: bksofteng.com
 */

var button1 = document.getElementById("btn1");

//Reloading the page once the user clicks on the "Refresh" button in order to see the incremented vote count 
button1.addEventListener("click", function() {
	location.reload(false);
});