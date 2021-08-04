<?php
error_reporting(0);
function dell_element($string,$id){
	error_reporting(0);
	$res="";
	$aux =$string;
	for ($i=0; $i <strlen($string) ; $i++) { 
	$po=strpos($aux,$id);
	if($aux[$po-1]=="u" AND $aux[$po+strlen($id)]=="u"){
		try {
			$aux=substr($aux, $po+strlen($id)+1);
			$res=substr($string,0,strpos($string,$aux)-1-strlen($id))."".$aux;
		} catch (Exception $e) {}		
		break;
	}else{
		$aux=substr($aux, $po+strlen($id));
		$res=substr($string,0,strpos($string,$aux));
		
	}
}
return $res;
}

?>


