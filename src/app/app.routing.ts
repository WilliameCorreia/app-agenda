import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ListaPesquisaComponent } from './lista-pesquisa/lista-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_Routes: Routes = [
    {path: '', component: ListaPesquisaComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: 'detalhe-estacao/:id', component: DetalheEstacaoComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);