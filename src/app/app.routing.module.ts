import { AddEstacaoComponent } from './Estacoes/add-estacao/add-estacao.component';
import { NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';


const appRoutes: Routes = [
    {path: 'contatos', component: ContatosComponent},
    {path: 'addstacao', component: AddEstacaoComponent} 
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}