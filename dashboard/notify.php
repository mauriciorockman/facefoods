<?php
	require_once('../db.class.php');

	$objDb = new db();
	$link = $objDb->conecta_mysql();

	$sql = "SELECT count(*) as count FROM orders WHERE order_status = 'NEW_ORDER'";
	$qry = mysqli_query($link, $sql);
	$row = mysqli_fetch_assoc($qry);
	echo $row['count'];
?>