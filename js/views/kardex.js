var search_view = new InfoAlumno({ el: $("#search_container") });
VistaKardex = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        var template = _.template( $("#kardex").html(), {} ); 
        this.$el.html( template );
    }
});
var search_view = new InfoAlumno({ el: $("#horario") });
