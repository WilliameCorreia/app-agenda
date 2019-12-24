import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { estacao } from 'src/app/modelo/Estacao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EstacoesService {

  constructor(private routes: Router,
              private fireDb: AngularFireDatabase) { }

  addEstacao(estacao: estacao) {
    try {
      this.fireDb.list('estacoes').push(estacao)
    .then((result: any) => {
      console.log(result);
    })
    } catch (error) {
      this.routes.navigate(['estacao-nao-encontrada']);
    }
    
  }

  updateEstacao(estacao: estacao, key: string ){
    this.fireDb.list('estacoes').update(key, estacao)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getEstacoes() {
    try {
      return this.fireDb.list('estacoes')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
    } catch (error) {
      this.routes.navigate(['estacao-nao-encontrada']);
    }
    
  }

  deleteEstacao(key: string){
    this.fireDb.list('estacoes').remove(key)
    .catch((error: any) => {
      console.error(error);
    });;
  }


  PesquisarEstacao(id: string) {
    //return this._http.get<estacao>(`${this.Api}/${id}`);
    return this.fireDb.object<estacao>(`estacoes/${id}`).valueChanges();
  }

}
