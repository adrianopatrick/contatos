"use strict";
var contato_entity_1 = require('../../app/entitys/contato.entity');
var ContatoService = (function () {
    function ContatoService() {
    }
    ContatoService.getContatos = function () {
        return [new contato_entity_1.Contato("Andre", "85-99751-3122"), new contato_entity_1.Contato("Marta", "85-99131-1245")];
    };
    return ContatoService;
}());
exports.ContatoService = ContatoService;
//# sourceMappingURL=contato.service.js.map