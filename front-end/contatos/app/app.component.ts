import { Component } from '@angular/core';
import { Contato } from '../app/entitys/contato.entity'
import { ContatoService } from '../app/services/contato.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/listaContatos.html'
})
export class AppComponent { 
  nameApp : string = "Agenda - Contatos"
  contatos : Array<Contato>;

  constructor(){
    this.contatos = ContatoService.getContatos();
  }
}
