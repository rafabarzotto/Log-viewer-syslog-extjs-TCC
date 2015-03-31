<?php

session_start();

header("Location: exportGridPdf.php?".$_SESSION['url']);


?>