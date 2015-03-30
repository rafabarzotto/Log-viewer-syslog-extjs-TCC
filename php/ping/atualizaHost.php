<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['ping'];

	$data = json_decode(stripslashes($info));

	$id = $data->id;
	$nome = $data->nome;
	$ip = $data->ip;

	//consulta sql
	$query = sprintf("UPDATE hosts SET nome = '%s', ip = '%s' WHERE id=%d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($ip),
		mysql_real_escape_string($id)
		);

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"ping" => array(
			"id" => $id,
			"nome" => $nome,
			"ip" => $ip
		)
	));
?>