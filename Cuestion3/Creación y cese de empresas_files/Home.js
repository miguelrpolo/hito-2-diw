// Calcula la altura del footer //

$("#contenido_central").removeProp("height");
$("#contenido_buscador").removeProp("height");
$(window).on('load', function () {
    var footer = $("footer").outerHeight();
    var ribbon = $("#suiteBar").parent().outerHeight() == undefined ? -3 : $("#suiteBar").parent().outerHeight();
    var header = $("header").outerHeight();
    //Cuando se carga todo el contenido.
    $("#contenido_central").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
    $("#contenido_buscador").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
}).resize(function () {
    var footer = $("footer").outerHeight();
    var ribbon = $("#suiteBar").parent().outerHeight() == undefined ? -3 : $("#suiteBar").parent().outerHeight();
    var header = $("header").outerHeight();
    //Cuando se escala la pantalla.
    $("#contenido_central").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
    $("#contenido_buscador").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
});
$(document).ready(function () {
    var footer = $("footer").outerHeight();
    var ribbon = $("#suiteBar").parent().outerHeight() == undefined ? -3 : $("#suiteBar").parent().outerHeight();
    var header = $("header").outerHeight();
    //Cuando el DOM está disponible.
    $("#contenido_central").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
    $("#contenido_buscador").css("min-height", ($(window).height() - footer - (header + ribbon) + "px"));
})

// Función que construye un enlace a una página
function CrearEnlace(pagina, site) {
    var auxSite = document.getElementById('auxSite').value;
    var auxPagina = document.getElementById('auxPagina').value;
    var enlace;

    if (site === null || site === "") {
        enlace = auxSite + auxPagina + pagina + ".aspx";
    }
    else {
        enlace = auxSite + site + "/" + auxPagina + pagina + ".aspx";
    }

    window.location.assign(enlace);
}
