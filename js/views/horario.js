VistaHorario = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        var template = _.template( $("#info-alumno").html(), {} ); 
        this.$el.html( template );
    }
});
var search_view = new InfoAlumno({ el: $("#search_container") });
