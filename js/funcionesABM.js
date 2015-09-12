function BorrarCD(idParametro)
{
		var funcionAjax=$.ajax({
		url:"php/validarUsuario.php",
		type:"post",
		data:{
			usuario:varUsuario,
			clave:varClave
		}
	});
	funcionAjax.done(function(retorno){
			MostarBotones();
			MostarLogin();
			
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	
}

function MostrarGrilla()
{		
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostrarGrilla"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto grilla!!!");	
	});
}