router = function(){
	var Router = {};

	Router.evalRoute = function(){
		//evaluo que vista tengo que cargar
		if(app.isLogged()){
			app.loadTemplate("dashboard", dashboardInit);
		}
		else{
			if(app.getEstado()=="alta"){
				app.loadTemplate("alta", initAlta);
			}else{
				app.loadTemplate("login", initLogin);
			}
		};
	};

	Router.goTo=function(vista){
		switch (vista){
			case "perfil":
				app.loadTemplate("perfil", initDatos);
			break;
			case "dashboard":
				app.loadTemplate("dashboard",dashboardInit);
			break;
		};
	};

	return Router;
}();

app = function(router){

	var MyApp = {};

	var userKey = "chloigin";

	var estado= "login";

	MyApp.setEstado=function(est){
		estado=est;
	};

	MyApp.getEstado= function(){
		return estado;

	};

	MyApp.getUserKey= function(){
		return userKey
	};

	MyApp.init = function(){
		$(document).ready(function(){
		    console.log('--init app function--');
		    router.evalRoute();
		});
	}();

	MyApp.loadTemplate = function(partialName, cbk){
		$( "#main-container" ).load( "partials/"+partialName+".html", cbk);
	};

	MyApp.isLogged=function(){
		return sessionStorage.getItem("Logged");
	};

	MyApp.validateEmail= function(email){
		var found= false;
		for(var i=0;i<localStorage.length; i++){
			
			var myobj = JSON.parse(localStorage.getItem(localStorage.key(i)));
						
			if(email=== myobj.email){
				found= true;
				break;
			};
		};
		return found;
	};

	MyApp.validateUsuario=function(usuario){
		var found=false;
		for(var i=0;i<localStorage.length; i++){
			var myobj = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(usuario=== myobj.usuario){
				found= true;
				break;
			};
		};
		return found;
	};

	
	MyApp.validateLogin= function(usuario, clave){
		for(var i=0;i<localStorage.length; i++){
			var myobj = JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(usuario=== myobj.usuario && clave=== myobj.clave){
				return localStorage.key(i);
			};
		};
		return false;
	};


	MyApp.getUserByKey = function(myKey){
		var user= null;
		for(i=0; i<localStorage.length; i++){
			user= JSON.parse(localStorage.getItem(localStorage.key(i)));
			if(myKey == localStorage.key(i) ){
				break;
			};
		};
		return user;
	};

	return MyApp;
}(router);


//router y app son singleton, estan instanciados una unica vez. mantienen su estado. 