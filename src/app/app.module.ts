import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import { NgxQRCodeModule, instascan} from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { ListaPesquisaComponent } from './lista-pesquisa/lista-pesquisa.component';
import { AppService } from './app.service';
import { ContainerComponent } from './container/container.component';
import { ContatosComponent } from './contatos/contatos.component';
import { routing } from './app.routing';
import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPesquisaComponent,
    ContainerComponent,
    ContatosComponent,
    DetalheEstacaoComponent
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
    MatButtonModule,
    NgxQRCodeModule,
    instascan
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
