var ValidarFormularios;
(function (ValidarFormularios) {
    function correos(correo) {
        var exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (exp.test(correo)) {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.correos = correos;
})(ValidarFormularios || (ValidarFormularios = {}));
var ValidarFormularios;
(function (ValidarFormularios) {
    function fechas(fecha) {
        var exp = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
        if (fecha.match(exp) && fecha != '') {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.fechas = fechas;
})(ValidarFormularios || (ValidarFormularios = {}));
var ValidarFormularios;
(function (ValidarFormularios) {
    function nombres(nombre) {
        if (typeof nombre == 'undefined' || nombre.length > 3 || nombre === '') {
            return true;
        }
        else {
            return false;
        }
    }
    ValidarFormularios.nombres = nombres;
})(ValidarFormularios || (ValidarFormularios = {}));
/// <reference path="validarformularios/correos.ts" />
/// <reference path="validarformularios/fechas.ts" />
/// <reference path="validarformularios/nombres.ts" />
console.log(ValidarFormularios.correos("correo@test.com") ? "Correo válido" : "Correo inválido");
console.log(ValidarFormularios.fechas("correo@test.com") ? "Fecha válida" : "Fecha inválida");
console.log(ValidarFormularios.nombres("juanito") ? "Nombre válido" : "Nombre inválido");
