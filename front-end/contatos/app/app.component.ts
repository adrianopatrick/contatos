import { Component } from '@angular/core';
import { Contato } from '../app/entitys/contato.entity'
import { ContatoService } from '../app/services/contato.service'

@Component({
  selector: 'my-app',
  providers: [ContatoService],
  templateUrl: 'app/templates/listaContatos.html'
})
export class AppComponent { 
  nameApp : string = "Agenda - Contatos"
  contatos : Array<Contato>;
  contatoService : ContatoService;

  constructor(contatoService : ContatoService){
    this.contatoService = contatoService;
    this.contatos = this.contatoService.getContatos();
  }
}
