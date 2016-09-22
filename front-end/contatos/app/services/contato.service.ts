import { Component } from '@angular/core';
import { Contato } from '../../app/entitys/contato.entity'

export class ContatoService{

    public static getContatos() : Array<Contato>{
        return [new Contato("Andre", "85-99751-3122"), new Contato("Marta", "85-99131-1245")];
    }

}