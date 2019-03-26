import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';


const appRoutes: Routes = [
    {path: 'contatos', component: ContatosComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}