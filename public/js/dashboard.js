dashboardInit = function(){
	//Barra--> botones y nombre de usuario loggeado
	$("#logout").removeClass("hidden");
	$("#edit").removeClass("hidden");
	$(".brand-name").removeClass("hidden");
	

	$("#logout").click(function(){
		sessionStorage.removeItem("Logged");
		$("#logout").addClass("hidden");
		$("#edit").addClass("hidden");
		$(".brand-name").addClass("hidden");
		app.setEstado("login");
		router.evalRoute();
	});	

	$("#edit").click(function(){
		router.goTo("perfil");		
	});		

	var key= sessionStorage.getItem("Logged")
	var usuario= app.getUserByKey(key);
	
	$(".brand-name").text(usuario.usuario);
	
	//llamado ajax api starwars
	$.ajax({
		url: "http://swapi.co/api/people",
		success: function(data){
			data.results.forEach(function(elemento){
				console.log(elemento.name)
				$(".personas").append(
					'<tr><td>'+elemento.name+'</td>'+
					'<td>'+elemento.birth_year+'</td>'+
					'<td>'+elemento.gender+'</td>'+
					'<td><a>'+elemento.homeworld+'</a></td></tr>');
			});			
		},
		error: function(err){
			console.log(err);
		}
	});
};

