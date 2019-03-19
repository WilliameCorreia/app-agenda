import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EstacoesComponent } from './Estacoes/estacoes.component';
import { AppService } from './app.service';
import { ContainerComponent } from './container/container.component';
import { ContatosComponent } from './contatos/contatos.component';
import { routing } from './app.routing';
import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada/estacao-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContatosComponent,
    DetalheEstacaoComponent,
    EstacaoNaoEncontradaComponent,
    EstacoesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
