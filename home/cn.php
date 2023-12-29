<?php 

$c =mysqli_connect("localhost","root","","modelos");
if($c);
else echo "100";

function set_sql($sql,$s=null){

	$r=mysqli_query($GLOBALS["c"],$sql);
	if($s==null)return mysqli_fetch_assoc($r);
	if($s==1)return $r;
}

function encode($value=''){
	return base64_encode(bin2hex($value));
}
function decode($value=''){
return hex2bin(base64_decode($value));
}

 ?>
