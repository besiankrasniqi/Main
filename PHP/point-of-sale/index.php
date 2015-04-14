<!DOCTYPE html>
<html>
<head>
  <title>Point of Sale</title>
  
  <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>


<?php 
//*******************************************************************************************
//Author: Besian Krasniqi - created on 02/24/14
//*******************************************************************************************

//declaring products and setting the base price of each product 
$A = 2.00;
$B = 12.00;
$C = 1.25;
$D = 0.15;

//declaring sub totals of products so that I can used them when calculating prices based on packages or sets 
$A_subtotal = 0;
$B_subtotal = 0;
$C_subtotal = 0;
$D_subtotal = 0;


if(isset($_POST['submit'])) {
	$product_scan = $_POST['product_txt']; 
	
	//counting occurrences of each product	
	$A_count = substr_count($product_scan,'A');
	$B_count = substr_count($product_scan,'B');
	$C_count = substr_count($product_scan,'C');
	$D_count = substr_count($product_scan,'D');

	if ($A_count <4){
		$A_subtotal = $A_count * $A;
	}

	else if ($A_count == 4){
		$A = 1.75;
		$A_subtotal = $A_count * $A;
	}

	else if ($A_count > 4) {
		$four_set = 4;
		$set_price = 7;
		$set_recurrence = floor($A_count / $four_set);
		$set_count = $A_count % 4;
		$A_subtotal = ($set_recurrence * $set_price) + ($set_count * $A);
	}
	
	if ($C_count <6){
		$C_subtotal = $C_count * $C;
	}
	
	else if ($C_count == 6){
		$C = 1.00;
		$C_subtotal = $C_count * $C;
	}
	
	else if ($C_count > 6){
		$six_pack = 6;
		$six_pack_price = 6;
		$pack_recurrence = floor($C_count / $six_pack);
		$pack_count = $C_count % 6;
		$C_subtotal = ($pack_recurrence * $six_pack_price) + ($pack_count * $C);
	}
	
	$total_price = ($A_subtotal) + ($B_count * $B) + ($C_subtotal) + ($D_count * $D);
}?>
	
	<div id="mndiv">
		<h2>Scan Items</h2>
		<h3>Scan items i.e: ABCDABAA, CCCCCCC, ABCD</h3>
		
		<form method="post" id="prodform" action="">
	
			<div class="scan_container">
			 	<input type="text" name="product_txt" size="40"/>
			 	<button class="submitbtn" type="submit" name="submit" id="submit">Submit</button>
		 	</div>	
		
	 	<div id="display_results">
	 		
 		<?php
 		 		
 		if(isset($_POST['submit'])) {
 			if ($product_scan == '') {
				echo ("<p id='scanfield'>*Scan field cannot be empty</p>");
			}
			
			else if (!ctype_upper($product_scan)){
				echo ("<p id='scanfield'>*Please enter only Uppercase Letters</p>");
			}
	
			else {
				echo ("<b>The Total Price of " . $product_scan . " is:</b> $" . $total_price);
				echo "<br>";
				echo "<br>";
				
				if ($A_count > 0){
					echo ("Product A was scanned: " . $A_count . " times" . "<br>");
				};
				
				if ($B_count > 0){
					echo ("Product B was scanned: " . $B_count . " times" . "<br>");
				};
				
				if ($C_count > 0){
					echo ("Product C was scanned: " . $C_count . " times" . "<br>");
				};				
				
				if ($D_count > 0){
					echo ("Product D was scanned: " . $D_count . " times" . "<br>");
				};					

				echo "<br>";		
				echo ("<b>Based on the last scan and the products entered, here is the price per product: </b>" . "<br>");
				echo ("Price of product A is: $" . $A . "<br>");
				echo ("Price of product B is: $" . $B . "<br>");
				echo ("Price of product C is: $" . $C . "<br>");
				echo ("Price of product D is: $" . $D . "<br>");
				}
			}

			//*******************************************************************************************
			//updating product prices - product variables 
		    //*******************************************************************************************
			
			//updating price A
			else if(isset($_POST['submit_new_price_a'])) {
				$new_price_A = $_POST['price_a']; 
				if ($new_price_A == '') {
					echo ("<p id='scanfield'>*Price field A: cannot be empty</p>");
				}	
				else if (!ctype_digit($new_price_A)) {
					echo ("<p id='scanfield'>*Price field A: enter a numerical value</p>");
				}
				else {
					$A = $new_price_A;
					echo ("Price of product A is now: $" . $A . "<br>");
				} 
			}	
			
			//updating price B
			else if(isset($_POST['submit_new_price_b'])) {
				$new_price_B = $_POST['price_b']; 
				if ($new_price_B == '') {
					echo ("<p id='scanfield'>*Price field B: cannot be empty</p>");
				}	
				else if (!ctype_digit($new_price_B)) {
					echo ("<p id='scanfield'>*Price field B: enter a numerical value</p>");
				}
				else {
					$B = $new_price_B;
					echo ("Price of product B is now: $" . $B . "<br>");
				} 
			}	
			
			//updating price C
			else if(isset($_POST['submit_new_price_c'])) {
				$new_price_C = $_POST['price_c']; 
				if ($new_price_C == '') {
					echo ("<p id='scanfield'>*Price field C: cannot be empty</p>");
				}	
				else if (!ctype_digit($new_price_C)) {
					echo ("<p id='scanfield'>*Price field C: enter a numerical value</p>");
				}
				else {
					$C = $new_price_C;
					echo ("Price of product C is now: $" . $C . "<br>");
				} 
			}	
			
			//updating price D
			else if(isset($_POST['submit_new_price_d'])) {
				$new_price_D = $_POST['price_d']; 
				if ($new_price_D == '') {
					echo ("<p id='scanfield'>*Price field D: cannot be empty</p>");
				}	
				else if (!ctype_digit($new_price_D)) {
					echo ("<p id='scanfield'>*Price field D: enter a numerical value</p>");
				}
				else {
					$D = $new_price_D;
					echo ("Price of product D is now: $" . $D . "<br>");
				} 
			}	
			
			//*******************************************************************************************
			//Please note that the update is done to the variables, however it cannot be computed
			// or tested because I am not using a database to store the values of the product variables. 
			//This is just to show how a product price update would occur 
			//*******************************************************************************************
										
	 		?>
	 		
	 	</div>
	 	
	 	<div id="set_price_button"><a href="#">Set New Pricing</a></div>
	 		<div id="setpricing_interface">
				<h1>Set New Pricing</h1>
					<div class="product_col">Product A</div>
					<div class="product_col"><input type="text" name="price_a" placeholder="Enter New Price"/></div>
					<div class="product_col"><button class="submitbtnsprice" type="submit" name="submit_new_price_a" id="submit_new_price_a">Submit</button></div>
					
					<div class="product_col">Product B</div>
					<div class="product_col"><input type="text" name="price_b" placeholder="Enter New Price"/></div>
					<div class="product_col"><button class="submitbtnsprice" type="submit" name="submit_new_price_b" id="submit_new_price_b">Submit</button></div>
					
					<div class="product_col">Product C</div>
					<div class="product_col"><input type="text" name="price_c" placeholder="Enter New Price"/></div>
					<div class="product_col"><button class="submitbtnsprice" type="submit" name="submit_new_price_c" id="submit_new_price_c">Submit</button></div>	 		
				
					<div class="product_col">Product D</div>
					<div class="product_col"><input type="text" name="price_d" placeholder="Enter New Price"/></div>
					<div class="product_col"><button class="submitbtnsprice" type="submit" name="submit_new_price_d" id="submit_new_price_d">Submit</button></div>
				</form> <!-- form for all submit operations ends here --> 		
			</div>
	</div>

	<script src="jquery-1.11.0.js"></script>
	<script type="text/javascript" src="mnscript.js"></script>
	
</body>
</html>