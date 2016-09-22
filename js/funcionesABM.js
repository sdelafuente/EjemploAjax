function BorrarCD(idParametro)
{
		
	$.ajax({
				url:"nexo.php",
				type:"post",	
				data:{ 
						queHacer:"BorrarCD",
						id:idParametro 
					}
			}).then( function ok(exito){
				Mostrar("MostrarGrilla");
				$("#informe").html("cantidad de eliminados "+ exito);	
			}, function fail(error){
				alert(error);
				$("#informe").html(error.responseText);	
			});
	/*
	//alert(idParametro);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);			
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
	 */
	 
}

function EditarCD(idParametro)
{
	
	$.ajax({
				url:"nexo.php",
				type:"post",
				data:{
					queHacer:"TraerCD",
					id:idParametro	
				}				
			}).then(function ok(exito){
				
				Mostrar("MostrarFormAlta");
				setTimeout(function(){
					var cd =JSON.parse(retorno);	
					$("#idCD").val(cd.id);
					$("#cantante").val(cd.cantante);
					$("#titulo").val(cd.titulo);
					$("#anio").val(cd.año);			
				},1000);				

			}, function fail(error){
				alert(error.responseText);
				//$("#informe").html(error.responseText);	
		});
	/*
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	});

	funcionAjax.done(function(retorno){
		
		Mostrar("MostrarFormAlta");

		var cd =JSON.parse(exito);	
		$("#idCD").val(cd.id);
		$("#cantante").val(cd.cantante);
		$("#titulo").val(cd.titulo);
		$("#anio").val(cd.año);

	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
	*/
}

function GuardarCD()
{
	var id=$("#idCD").val();
	var cantante=$("#cantante").val();
	var titulo=$("#titulo").val();
	var anio=$("#anio").val();

	$.ajax({
				url:"nexo.php",
				type:"post",
				data:{
					queHacer:"GuardarCD",
					id:id,
					cantante:cantante,
					titulo:titulo,
					anio:anio	
				}
			}).then(function ok(exito){
				Mostrar("MostrarGrilla");
				$("#informe").html("cantidad de agregados "+ retorno);	
			}, function fail(error){
				$("#informe").html(retorno.responseText);	
		});
	/*
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarCD",
			id:id,
			cantante:cantante,
			titulo:titulo,
			anio:anio	
		}
	});
	funcionAjax.done(function(retorno){
			Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de agregados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
	 */
}