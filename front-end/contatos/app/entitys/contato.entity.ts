import { Component } from '@angular/core';

export class Contato {
    private nome : string;
    private telefone : string;

    constructor(nome : string, telefone : string){
        this.nome = nome;
        this.telefone = telefone;
    }

    setNome(nome : string) : void {
        this.nome = nome;
    }
    getNome() : string {
        return this.nome;
    }
    setTelefone(telefone : string) : void {
        this.telefone = telefone;
    }
    getTelefone() : string {
        return this.telefone;
    }
}