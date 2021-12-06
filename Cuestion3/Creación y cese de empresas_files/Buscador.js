

function Buscador () {

    var culture = _spPageContextInfo.currentCultureName;
    var btn_Texto;

    switch (culture) {
        case "es-ES":
            btn_Texto = "-texto-";
            break;
        case "ca-ES":
            btn_Texto = "-text-";
            break;
        case "eu-ES":
            btn_Texto = "-testua-";
            break;
        case "gl-ES":
            btn_Texto = "-texto-";
            break;
        default:
            btn_Texto = "-text-";
    }


    var searchKeyword = document.getElementById("ctl00_cabecera_buscar").value;
    if (searchKeyword != '' || searchKeyword != btn_Texto) {

        window.open('/sites/buscador/Paginas/Paginas.aspx?k=' + searchKeyword);
    }
};


$(document).ready(function () {
    var input = document.getElementById("ctl00_cabecera_buscar");
    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("ctl00_cabecera_botonBuscar").click();
        }
    });
});