<?php

require_once('../tcpdf/config/lang/eng.php');
require_once('../tcpdf/tcpdf.php');
require_once("../conectar.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$tag = "SysLogTag";
	$host = "FromHost";
	$evento = "Message";
	$inicio = " undefined";
	$fim = " undefined";

// extend TCPF with custom functions
class MYPDF extends TCPDF {

	// Load table data from file
	public function LoadData($file) {
		// Read file lines
		$lines = file($file);
		$data = array();
		foreach($lines as $line) {
			$data[] = explode(';', chop($line));
		}
		return $data;
	}

	// Colored table
	public function ColoredTable($header,$data) {
		// Colors, line width and bold font
		$this->SetFillColor(71, 71, 71);
		$this->SetTextColor(255);
		$this->SetDrawColor(210, 210, 210);
		$this->SetLineWidth(0.3);
		$this->SetFont('', 'B');
		// Header
		$w = array(15, 40, 35, 15, 35, 127);
		$num_headers = count($header);
		for($i = 0; $i < $num_headers; ++$i) {
			$this->Cell($w[$i], 7, $header[$i], 1, 0, 'C', 1);
		}
		$this->Ln();
		// Color and font restoration
		$this->SetFillColor(240, 240, 240);
		$this->SetTextColor(0);
		$this->SetFont('');
		// Data
		$fill = 0;
		foreach($data as $row) {
			$this->Cell($w[0], 6, $row['ID'], 'LR', 0, 'C', $fill);
			$this->Cell($w[1], 6, $row['DeviceReportedTime'], 'LR', 0, 'L', $fill);
			$this->Cell($w[2], 6, $row['SysLogTag'], 'LR', 0, 'C', $fill);
			$this->Cell($w[3], 6, $row['Priority'], 'LR', 0, 'C', $fill);
			$this->Cell($w[4], 6, $row['FromHost'], 'LR', 0, 'C', $fill);
			$this->Cell($w[5], 6, $row['Message'], 'LR', 0, 'C', $fill);
			//$this->Cell($w[6], 6, $row[''] . ' LR', 'LR', 0, 'C', $fill);
			//$this->Cell($w[7], 6, $row['rental_rate'], 'LR', 0, 'C', $fill);
			//$this->Cell($w[8], 6, $row['last_update'], 'LR', 0, 'C', $fill);
			$this->Ln();
			$fill=!$fill;
		}
		$this->Cell(array_sum($w), 0, '', 'T');
	}
}


//load data
//$sql = "SELECT ID, DeviceReportedTime, SysLogTag, Priority, FromHost, Message FROM SystemEvents order by ID desc LIMIT 0,  100";

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
			SysLogTag, Priority, FromHost, Message 
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

		$queryString = "SELECT ID, DeviceReportedTime, SysLogTag, Priority, FromHost, Message 
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

$result = array();
if ($resultdb = $mysqli->query($queryString)) {

	while($record = $resultdb->fetch_assoc()) {

		array_push($result, $record);
	}	

	$resultdb->close();
}


// create new PDF document
$pdf = new MYPDF('L', PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Rafael Barzotto');
$pdf->SetTitle('Export Chart');
$pdf->SetSubject('Mastering Ext JS Book');

$pdf->SetHeaderData(PDF_HEADER_LOGO, 40, 'SYSLOG ANALYSER', 'by Rafael Barzotto', array(0,64,255), array(0,64,128));
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

//set margins
//$pdf->SetMargins(PDF_MARGIN_LEFT, 10, PDF_MARGIN_RIGHT);
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(20);

//set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

//set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

//set some language-dependent strings
$pdf->setLanguageArray($l);

// ---------------------------------------------------------

// set font
$pdf->SetFont('helvetica', '', 10);

// add a page
$pdf->AddPage();

//Column titles
$header = array('ID', 'DeviceReportedTime', 'SysLogTag', 'Priority', 'FromHost', 'Message');

// print colored table
$pdf->ColoredTable($header, $result);

// ---------------------------------------------------------

//Close and output PDF document
$pdf->Output('log_pdf.pdf', 'I');

//============================================================+
// END OF FILE                                                
//============================================================+
