<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	session_start();

	$_SESSION['url'] = $_SERVER ['QUERY_STRING'];

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$tag = "SysLogTag";
	$host = "FromHost";
	$evento = "Message";
	$inicio = " undefined";
	$fim = " undefined";

		if(!empty($_REQUEST['tag'])){
			$tag = "'".$_REQUEST['tag']."'";
		}

		if(!empty($_REQUEST['host'])){
			$host = "'".$_REQUEST['host']."'";
		}			

		if(!empty($_REQUEST['evento'])){
			$evento = "'%".$_REQUEST['evento']."%'";
		}

		if(($_REQUEST['inicio']) != " undefined"){
			$inicio = "'".$_REQUEST['inicio']."'";
			$fim = "'".$_REQUEST['fim']."'";

			$queryString = "SELECT ID, DATE_FORMAT(DeviceReportedTime,'%Y-%m-%d %H:%i') AS DeviceReportedTime, 
			SysLogTag, Facility, Priority, FromHost, Message 
			FROM SystemEvents 
			WHERE DATE_FORMAT(DeviceReportedTime,'%Y-%m-%d %H:%i') >= $inicio AND
			DATE_FORMAT(DeviceReportedTime,'%Y-%m-%d %H:%i') <= $fim AND SysLogTag = $tag AND
			FromHost = $host AND 
			Message LIKE $evento order by ID LIMIT $start,  $limit";

			$queryTotal = mysql_query("SELECT count(*) as num FROM SystemEvents 
			WHERE DATE_FORMAT(DeviceReportedTime,'%Y-%m-%d %H:%i') >= $inicio AND
			DATE_FORMAT(DeviceReportedTime,'%Y-%m-%d %H:%i') <= $fim AND SysLogTag = $tag AND
			FromHost = $host AND 
			Message LIKE $evento") or die(mysql_error());

		} else {

		$queryString = "SELECT ID, DeviceReportedTime, SysLogTag, Facility, Priority, FromHost, Message 
			FROM SystemEvents 
			WHERE SysLogTag = $tag AND
				FromHost = $host AND 
				Message LIKE $evento order by ID desc LIMIT $start,  $limit";

		//consulta total de linhas na tabela
		$queryTotal = mysql_query("SELECT count(*) as num FROM SystemEvents 
			WHERE SysLogTag = $tag AND
				FromHost = $host AND 
				Message LIKE $evento") or die(mysql_error());
	}

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$logs = array();
	while($log = mysql_fetch_assoc($query)) {
	    $logs[] = $log;
	}

	//echo $logs;

	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"logs" => $logs
	));


?>