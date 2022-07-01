/* 
 * Conjunto de funciones que cambian el comportamiento de las pantallas del sistema en general
 */



/**
 * Cambia todos los elementos <a> de del contenedor para que al darles click puedan ser abiertos en la misma uri
 * 
 * @param {type} id El ID unico de la tab (md5)
 * @returns {undefined} elementos 'a' modificados
 */
function changeHref(content) {
    var $listalinks = content.find('a');
    var selector = '.page-link,.chosen-single,.no-tab,.search-choice-close,.close,.dropdown-toggle ';
    $listalinks.not(selector).each(function (index) {
        var url = $(this).attr('href');
        if($(this).attr('value') == undefined){
            $(this).attr('value', url);
            $(this).attr('href', '#' + url);
        }
    });
    $listalinks.not(selector).unbind( "click" );
    $listalinks.not(selector).click(function () {
        var title = $(this).attr("title") ? $(this).attr("title") : $(this).text();
        var url = $(this).attr('value');
        $("#global-container").data('url', url);
        $("#global-container").load(url, function(){
            adjustContent($("#global-container"));
        });
    });
}

/**
 * Ajusta el comportamiento de el contendor de la pantalla
 * @param {type} content
 * @returns {undefined}
 */
function adjustContent(content){
    changeHref(content);
    var url = $("#global-container").data('url');
    ajaxSubmit(content, url);
}


/**
 * Hace que todos los fomularios de una tab específica se ejecuten via ajax
 * 
 * @param {type} id El ID unico de la tab (md5)
 * @param {type} url URL que generó el tab
 * @returns {undefined} Formularios modificados
 */
function ajaxSubmit(container, url) {
    var forms = container.find("form").not('.no-submit');
    forms.submit(function (e) {
        e.preventDefault();
        var form = $(this);
        var type = "POST";
        if (form.attr("action") != null) {
            url = form.attr("action");
        }
        if (form.prop("method")) {
            type = form.attr("method");
        }
        $.ajax({
            type: type,
            url: url,
            data: formToJSON($(this)), // serializes the form's elements.
            success: function (data, textStatus, xhr)
            {
                container.html(data);
                adjustContent(container);
            }
        });
    });
}


