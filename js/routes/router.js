Alumnos.AluRouter = Backbone.Router.extend(
{
	routes:{
		"help"		:"ayuda"
	},
	initialize: function(){
		
	},
	ayuda: function(){
		$("body").append("<section ><div ><div ><h3><span ></span>Datos del usuario</h3></div></div></section>");
	}
}
);
Alumnos.application = new Alumnos.AluRouter();