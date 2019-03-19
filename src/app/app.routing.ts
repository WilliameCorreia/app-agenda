import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EstacaoNaoEncontradaComponent } from './Estacoes/estacao-nao-encontrada/estacao-nao-encontrada.component';
import { DetalheEstacaoComponent } from './Estacoes/detalhe-estacao/detalhe-estacao.component';
import { ContatosComponent } from './contatos/contatos.component';
import { EstacoesComponent } from './Estacoes/estacoes.component';

const APP_Routes: Routes = [
    {path: '', component: EstacoesComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: 'detalhe-estacao/:id', component: DetalheEstacaoComponent},
    {path: 'estacao-nao-encontrada', component: EstacaoNaoEncontradaComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);