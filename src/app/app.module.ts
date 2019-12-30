import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { estacoesModule } from './Estacoes/estacoes.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { ContatosComponent } from './contatos/contatos.component';
import { AppRoutingModule } from './app.routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { SnackBarComponent } from './snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContatosComponent,
    MapsComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    estacoesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.keys.gmap,
      libraries: ["places", "geometry"]
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
    })
  ],
  entryComponents:[SnackBarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
