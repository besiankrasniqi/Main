<!DOCTYPE html>
<!-- 
	Author: Besian Krasniqi
	email: bksoftengineer@gmail.com 
	website: bksofteng.com
 -->
<html lang="en">
	<head>
		<?php echo '<title>This is a Test Site</title>'; ?> 
		<link href="style.css" rel="stylesheet" type="text/css">
	</head>
	
	<body>
<?php
	/*Connecting to MySQL Database*/
	$host = 'localhost';
	$user = 'dbusertwo';
	$password = 'somepasstwo';
	$database = 'dbsometwo';
	$db_cnt = mysqli_connect($host, $user, $password, $database);

	//Throw an error if connection to database cannot be made
	if(mysql_errno()) {
		echo 'Could not connect to the database';
	}
	/*End of Connecting to MySQL Database*/	
	
	//Golbal counter variables to be used in incrementing Functions 
	global $counter1, $counter2, $counter3, $counter4, $counter5;
	
	//Assigning existing MySQL values to global counter variables
	$result = mysqli_query($db_cnt, 'SELECT * FROM Movies WHERE FormType="Poll"');
	while ($row = mysqli_fetch_array($result)){
		$counter1 = $row['Movie1'] ;
		$counter2 = $row['Movie2'] ;
		$counter3 = $row['Movie3'] ;
		$counter4 = $row['Movie4'] ;
		$counter5 = $row['Movie5'] ;
	}
	?>
	<!--  Start of form -->
		<form id="form1" method="POST" action="">
	<div class="main_wrapper">
		<div class="header"><h1>Movie Reviews</h1></div>
		<div class="current_votes">The Gladiator:</div> 
		<div class="votes_descr"><?php retrData('Movie1'); ?></div>
		<div class="vote_container"><button id="gladiator" name="gladiator">VOTE</button></div>
		
		<div class="current_votes">Hercules:</div> 
		<div class="votes_descr"><?php retrData('Movie2'); ?></div>
		<div class="vote_container"><button id="hercules" name="hercules">VOTE</button></div>
		
		<div class="current_votes">Lucy:</div> 
		<div class="votes_descr"><?php retrData('Movie3'); ?></div>	
		<div class="vote_container"><button id="lucy" name="lucy">VOTE</button></div>	
		
		<div class="current_votes">Anarchy</div> 
		<div class="votes_descr"><?php retrData('Movie4'); ?></div>	
		<div class="vote_container"><button id="anarchy" name="anarchy">VOTE</button></div>	
			
		<div class="current_votes">Get On Up:</div> 
		<div class="votes_descr"><?php retrData('Movie5'); ?></div>		
		<div class="vote_container"><button id="getonup" name="getonup">VOTE</button></div>		
		</form>
		<!-- End of form -->
<?php

	if(isset($_POST['gladiator'])) {
		incrCountOne();
		echo '<div class="tkyou">Thank You for Voting!
				<br><a href="#" id="btn1">Refresh</a> to see your vote			
			 </div>';
	}	
	
	if(isset($_POST['hercules'])) {
		incrCountTwo();
		echo '<div class="tkyou">Thank You for Voting!
				<br><a href="#" id="btn1">Refresh</a> to see your vote
			 </div>';
	}	

	if(isset($_POST['lucy'])) {
		incrCountThree();
		echo '<div class="tkyou">Thank You for Voting!
				<br><a href="#" id="btn1">Refresh</a> to see your vote
			 </div>';
	}
	
	if(isset($_POST['anarchy'])) {
		incrCountFour();
		echo '<div class="tkyou">Thank You for Voting! 
				<br><a href="#" id="btn1">Refresh</a> to see your vote
			 </div>';
	}	
	
	if(isset($_POST['getonup'])) {
		incrCountFive();
		echo '<div class="tkyou">Thank You for Voting!
				<br><a href="#" id="btn1">Refresh</a> to see your vote
			 </div>';
	}	
	
	//Incrementing vote count for Movie 1
	function incrCountOne() {
		global $counter1, $db_cnt;
		$counter1 += 1;
		mysqli_query($db_cnt, "UPDATE Movies SET Movie1=$counter1 WHERE FormType='Poll'");
	}
	
	//Incrementing vote count for Movie 2
	function incrCountTwo() {
		global $counter2, $db_cnt;
		$counter2 += 1;
		mysqli_query($db_cnt, "UPDATE Movies SET Movie2=$counter2 WHERE FormType='Poll'");
	}	
	
	//Incrementing vote count for Movie 3
	function incrCountThree() {
		global $counter3, $db_cnt;
		$counter3 += 1;
		mysqli_query($db_cnt, "UPDATE Movies SET Movie3=$counter3 WHERE FormType='Poll'");
	}	
	
	//Incrementing vote count for Movie 4
	function incrCountFour() {
		global $counter4, $db_cnt;
		$counter4 += 1;
		mysqli_query($db_cnt, "UPDATE Movies SET Movie4=$counter4 WHERE FormType='Poll'");
	}	
	
	//Incrementing vote count for Movie 5
	function incrCountFive() {
		global $counter5, $db_cnt;
		$counter5 += 1;
		mysqli_query($db_cnt, "UPDATE Movies SET Movie5=$counter5 WHERE FormType='Poll'");
	}	
	
	//Retrieving data from MySQL Database
	function retrData($column) {
		global $db_cnt;
		$result = mysqli_query($db_cnt, 'SELECT * FROM Movies WHERE FormType="Poll"');
		while ($row = mysqli_fetch_array($result)){
			echo  $row[$column] ;
		}		
	}
?>
	</div>
		<script src="behavior.js" type="text/javascript"></script>
	</body>
</html>