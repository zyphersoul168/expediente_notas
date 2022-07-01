var Profile = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function () {
        if (SignUp.check("name") == false) {
            return false;
        }
        if (SignUp.check("email") == false) {
            return false;
        }
        $("#profileForm")[0].submit();
    }
};

var SignUp = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function () {
        if (SignUp.check("lastname") == false) {
            return false;
        }
        if (SignUp.check("name") == false) {
            return false;
        }
        if (SignUp.check("nacimiento") == false) {
            return false;
        }
        if (SignUp.check("username") == false) {
            return false;
        }
        if (SignUp.check("email") == false) {
            return false;
        }
        if (SignUp.check("password") == false) {
            return false;
        }
        if ($("#password")[0].value != $("#repeatPassword")[0].value) {
            $("#repeatPassword")[0].focus();
            $("#repeatPassword_alert").show();

            return false;
        }
        $("#registerForm")[0].submit();
    }
};

var SignIn = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function () {
        if (SignIn.check("email") == false) {
            return false;
        }
        if (SignIn.check("password") == false) {
            return false;
        }
    }
};

var SignInBack = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function (url) {
        if (SignIn.check("email") == false) {
            return false;
        }
        if (SignIn.check("password") == false) {
            return false;
        }
        //$("#sigInForm")[0].submit();
        //ajaxForm('cuerpo', "#sigInForm", "/session/start")
        $.ajax({
            type: "POST",
            url: url,
            data: $("#sigInForm").serialize(), // serializes the form's elements.
            datatype: 'html',
            success: function (data) {
                $(this).html(data);
            }

        });
    }
};

var Reset = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }
        return true;
    },
    validate: function () {
        if (Reset.check("usuario") == false) {
            return false;
        }
        if (Reset.check("email") == false) {
            return false;
        }
        $("#resetForm")[0].submit();
    }
};

var CambiarClave = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function () {
        if (CambiarClave.check("actual") == false) {
            return false;
        }
        if (CambiarClave.check("nueva") == false) {
            return false;
        }
        if (CambiarClave.check("repite") == false) {
            return false;
        }
        $("#cambiarClaveForm")[0].submit();
    }
};

var ListarProyectos = {
    check: function (id) {
        if ($.trim($("#" + id)[0].value) == '') {
            $("#" + id)[0].focus();
            $("#" + id + "_alert").show();

            return false;
        }

        return true;
    },
    validate: function () {
        if (ListarProyectos.check("inicio") == false) {
            return false;
        }
        if (ListarProyectos.check("fin") == false) {
            return false;
        }
        /*
        $.ajax({
               type: "POST",
               url: "social/listarProyectos",
               data: $('#listarProyectosForm').serialize(), // serializes the form's elements.
               datatype: 'html',
               success: function(data)
               {
                   $('#social-resultado-listar').html(data);
               }

             });
       */
        $("#listarProyectosForm")[0].submit();
    }
};

$(document).ready(function () {
    $("#registerForm .alert").hide();
    $("div.profile .alert").hide();
    $("#nacimiento").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1940:2050",
    });
});

$(document).ready(function () {
    $("#resetForm .alert").hide();
    $("div.profile .alert").hide();
});

$(document).ready(function () {
    $("#sigInForm .alert").hide();
    $("div.profile .alert").hide();
});

$(document).ready(function () {
    $("#cambiarClaveForm .alert").hide();
    $("div.profile .alert").hide();
});

$(document).ready(function () {
    $("#listarProyectosForm .alert").hide();
    $("div.profile .alert").hide();
    $("#inicio").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1940:2050",
    });
    $("#fin").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1940:2050",
    });
});