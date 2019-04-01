import { EstacoesRoutingModule } from './estacoes.routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada/estacao-nao-encontrada.component';
import { EstacoesComponent } from './estacoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
        EstacoesRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [],
    providers: []
})

export class estacoesModule { }