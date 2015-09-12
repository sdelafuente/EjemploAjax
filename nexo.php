<?php 



$queHago=$_POST['queHacer'];

switch ($queHago) {
	case 'foto':
		include("partes/imagen.php");
		break;
	case 'video':
			include("partes/video.html");
		break;
	case 'MostarLogin':
			include("partes/login.php");
		break;
	case 'MostarBotones':
			include("partes/botonesABM.php");
		break;
	default:
		# code...
		break;
}

 ?>