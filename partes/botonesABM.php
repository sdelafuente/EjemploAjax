<?php 
session_start();
if(isset($_SESSION['registrado']))
{
	echo "<section class='widget'><h2> Bienvenido: ". $_SESSION['registrado']."</h2>";

 ?>
		
			<h4 class="widgettitle">Botones ABM</h4>
			<ul>
				<li><a class="MiBotonUTN" href="#">Grilla</a></li>
				<li><a class="MiBotonUTN" >Alta</a></li>
				<li><a class="MiBotonUTN">otro </a></li>
			</ul>
		</section>
	<?php 
	}else
	{
		echo "<section class='widget'>
			<h4 class='widgettitle'>No estas registrado</h4></section>";
	}

	 ?>