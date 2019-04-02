import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { estacao } from 'src/app/modelo/Estacao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstacoesService {

  //private _url = 'https://localhost:5001/api/estacao';
  private readonly Api = 'http://localhost:3000/estacoes';

  constructor(private _http: HttpClient,
              private fireDb: AngularFireDatabase) { }


  addEstacao(estacao: estacao) {
    this.fireDb.list('estacoes').push(estacao)
    .then((result: any) => {
      console.log(result);
    })
  }

  updateEstacao(estacao: estacao, key: string ){
    this.fireDb.list('estacoes').update(key, estacao)
    .catch((error: any) => {
      console.error(error);
    });
  }

  getEstacoes() {
    //return this._http.get<estacao[]>(this.Api);
    return this.fireDb.list('estacoes')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  deleteEstacao(key: string){
    this.fireDb.list(`contato/${key}`).remove();
  }


  PesquisarEstacao(id: Number) {
    //return this._http.get<estacao>(`${this.Api}/${id}`);
    return this.fireDb.object(`estacoes/${id}`).valueChanges();
  }

}
