initAlta=function(){
	
	$("form[name=registrarse]").submit(function(e){

		var nombre = $("input[name='nombre']").val();
		var apellido = $("input[name='apellido']").val();
		var email = $("input[name='email']").val();
		var usuario = $("input[name='usuario']").val();
		var clave = $("input[name='clave']").val();
		var clave2 = $("input[name='clave2']").val();

		var key= app.getUserKey() + Date.now();

		if(clave===clave2){
			var obj = {
				nombre:nombre, 
				apellido:apellido, 
				email:email, 
				usuario:usuario,
				clave:clave
			};

			if(app.validateEmail(email) || app.validateUsuario(usuario)){
			alert("Datos incorrectos");
			}else{
				console.log("no existe")
				localStorage.setItem(key, JSON.stringify(obj));
				sessionStorage.setItem("Logged", key);
			};
		}else{
			alert("La contraseña debe ser la misma")
		};

		router.evalRoute();
	
		e.preventDefault();
	});
};