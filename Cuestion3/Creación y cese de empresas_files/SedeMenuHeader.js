$(document).ready(function () {   
     Sede.main.init();
});

//Avoid overwrite namespace
var Sede = Sede || {};

//Declare Ministerio.main
Sede.main = Sede.main || {};

//Declare namespace
Sede.main = (function() {
    //Declare variables
    var self = Sede.main;

    //Init function
    self.init = function () {
        this.loadbtnhome();
        this.loadclaseslimmenu();
        this.loadslimmenu();
        this.loadbuscartoogle();
        this.loadidiomastoogle();
    };
    
    
    //Load icono Inicio Home
    self.loadbtnhome = function () {
        
        $("ul.root ul.static a:first").html('<div class="btn-home" title="Inicio"><span style="display: none;">Ir al inicio</span><em class="fa fa-home" aria-hidden="true" title="Ir a inicio"></em></div>');

    };
    
    //Load Class slimmenu
    
    self.loadclaseslimmenu = function () {
        
        $("ul.root ul.static ul.static").addClass("slimmenu");

    };       


    //Load slimmmenu
    self.loadslimmenu = function () {
        //Configuración del menú como Slimmenu (Menú responsive)
        $("ul.slimmenu").slimmenu({
            resizeWidth: '1024',
            collapserTitle: '',
            easingEffect: 'easeInOutQuint',
            animSpeed: 'medium',
            indentChildren: true,
            childrenIndenter: ''
        });
    };


    //Load Buscar toogle    
    
    self.loadbuscartoogle = function () {
        
        $(".btn-search").click(function() {
                $(".buscador").slideToggle();
            });
        };

    
    //Load Idiomas toogle -->

    self.loadidiomastoogle = function () {        
            $(".btn-idiomas").click(function() {
                $(".listIdiomas").slideToggle();
            });
        };


    return self;
})();