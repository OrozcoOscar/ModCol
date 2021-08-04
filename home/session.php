<?php 
error_reporting(0);
 if(empty($_POST)){
 	echo "404";
 }else{
session_start();
include "cn.php";
$id=$_SESSION['user_code'];
if (empty($id)) {
	echo "<script>window.location.href='../';</script>";
}
$idM=$_POST["m"];
$idM=str_replace("'","",$idM);

$row=set_sql("SELECT id,usuario FROM modelo WHERE id='$idM' AND usuario REGEXP '[u]?".$id."[u]'");
if($row){
	$_SESSION['model_code']=$idM;
	echo "200";
}

}

 ?>