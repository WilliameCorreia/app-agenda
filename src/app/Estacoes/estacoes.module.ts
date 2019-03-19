import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada/estacao-nao-encontrada.component';
import { EstacoesComponent } from './estacoes.component';
import { EstacoesService } from './estacoes.service';
import { routing } from '../app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';

@NgModule({
    declarations: [
        DetalheEstacaoComponent,
        EstacaoNaoEncontradaComponent,
        EstacoesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule
    ],
    exports: [],
    providers: [EstacoesService]
})

export class estacoesModule { }