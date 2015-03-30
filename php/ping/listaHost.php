<?php
    
    include("../conectar.php");

    $start = $_REQUEST['start'];
    $limit = $_REQUEST['limit'];

    $sql = "SELECT id, nome, ip FROM hosts LIMIT $start,  $limit";

    //consulta sql
    $query = mysql_query($sql) or die(mysql_error());

    //faz um looping e cria um array com os campos da consulta
    $hosts = array();
    while($host = mysql_fetch_assoc($query)) {
        $hosts[] = $host;
    }  


    /* our simple php ping function */
    function ping($host)
    {
            exec(sprintf('ping -c 1 -W 5 %s', escapeshellarg($host)), $res, $rval);
            return $rval === 0;
    }

    $ping = array();
    foreach ($hosts as $key) {
        $ping[] = $arr = array("id" => $key['id'], "nome" => $key['nome'], "ip" => $key['ip'], "result" => ping($key['ip']));
    }


    /* optionally display either a red or green image to signify the server status */
    //$resultado = $up ? 'up' : 'down';
    //$resultado2 = $up2 ? 'up' : 'down';


        //encoda para formato JSON
        echo json_encode(array(
            "success" => mysql_errno() == 0,
            "ping" => $ping
        ));


?>