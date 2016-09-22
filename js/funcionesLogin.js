function validarLogin()
{
		var varUsuario=$("#correo").val();
		var varClave=$("#clave").val();
		var recordar=$("#recordarme").is(':checked');
		
	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	
	$.ajax({
				url:"php/validarUsuario.php",
				type:"post",
				data:{
					recordarme:recordar,
					usuario:varUsuario,
					clave:varClave
				}			
			}).then(function ok(exito){
					if(exito!="No-esta"){	
						MostarBotones();
						MostarLogin();

						$("#BotonLogin").html("Ir a salir<br>-Sesión-");
						$("#BotonLogin").addClass("btn btn-danger");				
						$("#usuario").val("usuario: "+exito);
					}else
					{
						$("#informe").html("usuario o clave incorrecta");	
						$("#formLogin").addClass("animated bounceInLeft");
					}
				}, function fail(error){
					$("#botonesABM").html(":(");
					$("#informe").html(error.responseText);						
				});
	/*
	var funcionAjax=$.ajax({
		url:"php/validarUsuario.php",
		type:"post",
		data:{
			recordarme:recordar,
			usuario:varUsuario,
			clave:varClave
		}
	});

	funcionAjax.done(function(retorno){
		//alert(retorno);
			if(retorno!="No-esta"){	
				MostarBotones();
				MostarLogin();

				$("#BotonLogin").html("Ir a salir<br>-Sesión-");
				$("#BotonLogin").addClass("btn btn-danger");				
				$("#usuario").val("usuario: "+retorno);
			}else
			{
				$("#informe").html("usuario o clave incorrecta");	
				$("#formLogin").addClass("animated bounceInLeft");
			}
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	 */
	
}

function deslogear()
{	
	$.ajax({
				url:"php/deslogearUsuario.php",
				type:"post"
			}).then(function(exito){
				MostarBotones();
				MostarLogin();
				$("#usuario").val("Sin usuario.");
				$("#BotonLogin").html("Login<br>-Sesión-");
				$("#BotonLogin").removeClass("btn-danger");
				$("#BotonLogin").addClass("btn-primary");
			});
	/*
	var funcionAjax=$.ajax({
		url:"php/deslogearUsuario.php",
		type:"post"
	});
	funcionAjax.done(function(retorno){
			MostarBotones();
			MostarLogin();
			$("#usuario").val("Sin usuario.");
			$("#BotonLogin").html("Login<br>-Sesión-");
			$("#BotonLogin").removeClass("btn-danger");
			$("#BotonLogin").addClass("btn-primary");			
	});	
	 */
}


function MostarBotones()
{	

	$.ajax({
				url:"nexo.php",
				type:"post",
				data:{queHacer:"MostarBotones"}
			 }).then(function ok(exito){
				$("#botonesABM").html(exito);	 	
		});
	/*
	//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarBotones"}
	});
	funcionAjax.done(function(retorno){
		$("#botonesABM").html(retorno);
		//$("#informe").html("Correcto BOTONES!!!");	
	});
	*/
}
