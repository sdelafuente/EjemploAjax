
function MostrarError()
{
	/*	
	var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});
	*/
	/* Mi Funcion Ajax */
	$.ajax({url:"nexoNoExiste.php"}).then(function(datosCorrectos){
		alert("primero");
	}, function(error){
		console.info("Objeto respuesta",error);
		$("#informe").html(error.responseText);
	});
}
function MostrarSinParametros()
{
	//nexoTexto.php
	$.ajax({url:"nexoTexto.php"}).then(function ok(respuesta){
		//alert(respuesta);
		$("#principal").html(respuesta);
	}, function mal(error){
		console.info("Objeto respuesta",error);
		//alert(error);
	});
	/*
	var funcionAjax=$.ajax({url:"nexoTexto.php"});

	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
	*/
}

function Mostrar(queMostrar)
{
	//alert(queMostrar);
	/* funcion Ajax 
		trabaja con parametros a modo array {clave:valor}
			- url
			- type
			- data
		Puede pasarsele como valor, otro objeto Json	
	*/
	$.ajax({url:"nexo.php", type:"post", data:{queHacer:queMostrar}}).then(function (exito){
		$('#principal').html(exito);
	}, function (error){});
	/*
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
	*/
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}