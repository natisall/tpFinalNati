//Perfil
initDatos=function(){
	(function getLastLoggedUser(){
		var user= null;
		var myKey= sessionStorage.getItem("Logged");
		console.log("getLastLoggedUser",myKey);
		user = app.getUserByKey(myKey);
		pushUserInForm(user);
	})();

	
	function pushUserInForm(user){
		$("input[name='nombre']").val(user.nombre);
		$("input[name='apellido']").val(user.apellido);
		$("input[name='usuario']").val(user.usuario);
		$("input[name='email']").val(user.email);
		$("input[name='clave']").val(user.clave);
		$("input[name='clave2']").val(user.clave)
	};

	

	$("form[name=dashboard]").submit(function(e){

		var nombre = $("input[name='nombre']").val();
		var apellido = $("input[name='apellido']").val();
		var email = $("input[name='email']").val();
		var usuario = $("input[name='usuario']").val();
		var clave = $("input[name='clave']").val();
		var myKey= sessionStorage.getItem("Logged");

		var obj = {
			nombre:nombre, 
			apellido:apellido, 
			email:email, 
			usuario:usuario,
			clave:clave
		};

		localStorage.setItem(myKey, JSON.stringify(obj));

		router.goTo("dashboard");
	
		e.preventDefault();
	});

};
