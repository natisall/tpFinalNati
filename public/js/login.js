initLogin = function(){
	
	  $("form[name='login']").submit(function(evt){
		console.log("escuchando submit");

		var user = $("input[name='usuario']").val();
		var pwd = $("input[name='clave']").val();

		var key = app.validateLogin(user, pwd);

		if(key){
			sessionStorage.setItem("Logged", key);
		}else{
			alert("Datos incorrectos");
		};

		router.evalRoute();

		evt.preventDefault();
		//que detenga el listener, evita que sincronicamente se actualice la
	});

	

	$("#btn-registrar").click(function(){
		app.setEstado("alta");
		router.evalRoute();
	});
};