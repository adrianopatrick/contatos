"use strict";
var Contato = (function () {
    function Contato(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Contato.prototype.getTelefone = function () {
        return this.telefone;
    };
    return Contato;
}());
exports.Contato = Contato;
//# sourceMappingURL=contato.entity.js.map