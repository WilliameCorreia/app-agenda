import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { estacoesModule } from './Estacoes/estacoes.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContatosComponent } from './contatos/contatos.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContatosComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    estacoesModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
