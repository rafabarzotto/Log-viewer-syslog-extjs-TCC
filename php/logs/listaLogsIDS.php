<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];


	$queryString = "SELECT DeviceReportedTime, FromHost, Message, substring_index(substring_index(Message, ' ', -3),' ', 1) AS IP, count(Message) AS Total FROM SystemEvents WHERE SysLogTag = 'critical:' GROUP BY Message having count(Message) > 10 ORDER BY DeviceReportedTime LIMIT $start,  $limit";


	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//echo $query;

	//faz um looping e cria um array com os campos da consulta
	$logs = array();
	while($log = mysql_fetch_assoc($query)) {
	    $logs[] = $log;
	}

	//echo $logs;

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM SystemEvents') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"logs" => $logs
	));
?>