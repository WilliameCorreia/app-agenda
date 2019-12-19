import { EstacoesRoutingModule } from './estacoes.routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada/estacao-nao-encontrada.component';
import { EstacoesComponent } from './estacoes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { AddEstacaoComponent } from './add-estacao/add-estacao.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    declarations: [
        DetalheEstacaoComponent,
        EstacaoNaoEncontradaComponent,
        EstacoesComponent,
        AddEstacaoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        EstacoesRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatDividerModule
    ],
    exports: [],
    providers: []
})

export class estacoesModule { }