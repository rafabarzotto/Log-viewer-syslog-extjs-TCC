<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['ping'];

	$data = json_decode(stripslashes($info));

	$nome = $data->nome;
	$ip = $data->ip;

	//consulta sql
	$query = sprintf("INSERT INTO hosts (nome, ip) values ('%s', '%s')",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($ip)
		);

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"ping" => array(
			"id" => mysql_insert_id(),
			"nome" => $nome,
			"ip" => $ip
		)
	));
?>