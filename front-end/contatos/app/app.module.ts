import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ContatoService } from '../app/services/contato.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [ContatoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
