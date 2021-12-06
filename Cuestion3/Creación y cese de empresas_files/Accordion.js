
// Acción de expandir y comprimir todo el accordion

$('document').ready(function () {

    var culture = _spPageContextInfo.currentCultureName;
    var btn_Expandir;
    var btn_Comprimir;

    switch (culture) {
        case "es-ES":
            btn_Expandir = "EXPANDIR TODO";
            btn_Comprimir = "COMPRIMIR TODO";
            break;
        case "ca-ES":
            btn_Expandir = "COMPRIMIR TOT";
            btn_Comprimir = "EXPANDIR TOT";
            break;
        case "eu-ES":
            btn_Expandir = "ZABALDU GUZTIAK";
            btn_Comprimir = "DENA KONPRIMITU";
            break;
        case "gl-ES":
            btn_Expandir = "EXPANDIR TODO";
            btn_Comprimir = "COMPRIMIR TODO";
            break;
        default:
            btn_Expandir = "EXPAND ALL";
            btn_Comprimir = "COMPRESS EVERYTHING";
    }

    $('.muestraTodo').on('click', function () {
        $('.collapse:not(.in)').each(function (index) {
            if ($('.muestraTodo').text() == btn_Expandir) {
                if ($(this).attr('class') == 'panel-collapse collapse') {
                    $("[data-target='#" + $(this).attr('id') + "']").children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-on.png'); background-repeat: no-repeat;");
                    $(this).collapse("toggle");
                }

            }
            else if ($('.muestraTodo').text() == btn_Comprimir) {
                if ($(this).attr('class') == 'panel-collapse collapse show') {
                    $("[data-target='#" + $(this).attr('id') + "']").children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-off.png'); background-repeat: no-repeat;");
                    $(this).collapse("toggle");
                }
            }
            else {
                return false;
            }
        });
        if ($('.muestraTodo').text() == btn_Expandir) {
            $('.muestraTodo').text(btn_Comprimir);
            $('.muestraTodo').attr("title", btn_Comprimir);
        }
        else if ($('.muestraTodo').text() == btn_Comprimir) {
            $('.muestraTodo').text(btn_Expandir);
            $('.muestraTodo').attr("title", btn_Expandir);
        }
        else {
            return false;
        }
    });
});
$('document').ready(function () {

    var culture = _spPageContextInfo.currentCultureName;
    var btn_Expandir;
    var btn_Comprimir;

    switch (culture) {
        case "es-ES":
            btn_Expandir = "EXPANDIR TODO";
            btn_Comprimir = "COMPRIMIR TODO";
            break;
        case "ca-ES":
            btn_Expandir = "COMPRIMIR TOT";
            btn_Comprimir = "EXPANDIR TOT";
            break;
        case "eu-ES":
            btn_Expandir = "ZABALDU GUZTIAK";
            btn_Comprimir = "DENA KONPRIMITU";
            break;
        case "gl-ES":
            btn_Expandir = "EXPANDIR TODO";
            btn_Comprimir = "COMPRIMIR TODO";
            break;
        default:
            btn_Expandir = "EXPAND ALL";
            btn_Comprimir = "COMPRESS EVERYTHING";
    }

    $('.muestraTodoWhite').on('click', function () {
        $('.collapse:not(.in)').each(function (index) {
            if ($('.muestraTodoWhite').text() == btn_Expandir) {
                if ($(this).attr('class') == 'panel-collapse collapse') {
                    $("[data-target='#" + $(this).attr('id') + "']").children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-white-on.png'); background-repeat: no-repeat; margin: 0px 1px 1em 0px; padding: 6px 0.4em 0.4em 1.6em;");
                    $(this).collapse("toggle");
                }

            }
            else if ($('.muestraTodoWhite').text() == btn_Comprimir) {
                if ($(this).attr('class') == 'panel-collapse collapse show') {
                    $("[data-target='#" + $(this).attr('id') + "']").children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-white-off.png'); background-repeat: no-repeat;");
                    $(this).collapse("toggle");
                }
            }
            else {
                return false;
            }
        });
        if ($('.muestraTodoWhite').text() == btn_Expandir) {
            $('.muestraTodoWhite').text(btn_Comprimir);
            $('.muestraTodoWhite').attr("title", btn_Comprimir);
        }
        else if ($('.muestraTodoWhite').text() == btn_Comprimir) {
            $('.muestraTodoWhite').text(btn_Expandir);
            $('.muestraTodoWhite').attr("title", btn_Expandir);
        }
        else {
            return false;
        }
    });
});

$('document').ready(function () {
    $('#contenedorgeneralEjercicio > a').on('click', function () {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-off.png'); background-repeat: no-repeat;");
            
        }
        else {
            $(this).children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-on.png'); background-repeat: no-repeat;");

        }
    });
});
$('document').ready(function () {
    $('#contenedorgeneralEjercicioWhite > a').on('click', function () {
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-white-off.png'); background-repeat: no-repeat;");

        }
        else {
            $(this).children('p').children('span').attr("style", "background:url('/Style%20Library/img/acordeon-white-on.png'); background-repeat: no-repeat; margin: 0 0 1em 0;padding: 9px 0.6em 0.4em 1.6em;");

        }
    });
});