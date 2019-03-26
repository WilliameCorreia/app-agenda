import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada/estacao-nao-encontrada.component';
import { DetalheEstacaoComponent } from './detalhe-estacao/detalhe-estacao.component';
import { EstacoesComponent } from './estacoes.component';

const appRoutes: Routes = [
    {path: '', component: EstacoesComponent},
    {path: 'detalhe-estacao/:id', component: DetalheEstacaoComponent},
    {path: 'estacao-nao-encontrada', component: EstacaoNaoEncontradaComponent}
]

@NgModule({
    imports:[RouterModule.forChild(appRoutes)],
    exports:[RouterModule]
})

export class EstacoesRoutingModule {}