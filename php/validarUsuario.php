<?php 
session_start();
$usuario=$_POST['usuario'];
$clave=$_POST['clave'];

if($usuario=="octavio@admin.com.ar" && $clave==1234){
	$_SESSION['registrado']="octavio";
	echo"esta";
}else
{
echo"No esta";
}

 ?>