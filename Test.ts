/// <reference path="validarformularios/correos.ts" />
/// <reference path="validarformularios/fechas.ts" />
/// <reference path="validarformularios/nombres.ts" />
console.log(ValidarFormularios.correos("correo@test.com") ? "Correo válido" : "Correo inválido");
console.log(ValidarFormularios.fechas("correo@test.com") ? "Fecha válida" : "Fecha inválida");
console.log(ValidarFormularios.nombres("juanito") ? "Nombre válido" : "Nombre inválido");