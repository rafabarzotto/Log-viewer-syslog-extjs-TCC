<?php
	
require("../conectar.php");

session_start();

//select the information
$sql = "SELECT count(DeviceReportedTime) AS Total, DATE_FORMAT(DeviceReportedTime,'%d-%m-%Y') AS Dia 
FROM SystemEvents GROUP BY Dia ORDER BY DeviceReportedTime DESC LIMIT 0, 6";

$result = array();
//$film_categories = array();

if ($resultdb = $mysqli->query($sql)) {

	while($record = $resultdb->fetch_assoc()) {

		array_push($result, $record);
	}	

	$resultdb->close();
}

//send back information to extjs
echo json_encode(array(
	"success" => $mysqli->connect_errno == 0,
	"data" => $result
));	

/* close connection */
$mysqli->close();

?>