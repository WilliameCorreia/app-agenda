import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { estacao } from 'src/app/modelo/Estacao';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EstacoesService {

  private message = new BehaviorSubject<string>(null);

  get isMessage() {
    return this.message.asObservable();
  }

  constructor(private routes: Router,
    private fireDb: AngularFireDatabase,
    private _snackBar: MatSnackBar) { }

  addEstacao(estacao: estacao) {
    this.fireDb.list('estacoes').push(estacao)
      .then((result: any) => {
        console.log(result);
        this.message.next("adicionado com sucesso !");
        this.openSnackBar(this.message);
      }).catch((error) => {
        console.log(error);
        this.message.next("Não foi possivel adicionar a estação " + error);
        this.openSnackBar(this.message);
      });
  }

  updateEstacao(estacao: estacao, key: string) {
    this.fireDb.list('estacoes').update(key, estacao)
      .then(() => {
        this.message.next("Dados atualizados com Sucesso !");
        this.openSnackBar(this.message);
      })
      .catch((error: any) => {
        this.message.next("Não possivel Atualizar os dados " + error);
        this.openSnackBar(this.message);
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
      console.log(error)
      this.routes.navigate(['estacao-nao-encontrada']);
    }

  }

  deleteEstacao(key: string) {
    this.fireDb.list('estacoes').remove(key)
      .then(() => {
        this.message.next("Estação excluída com sucesso !");
        this.openSnackBar(this.message);
      })
      .catch((error: any) => {
        this.message.next("Não foi possivel excluír a estação ! " + error);
        this.openSnackBar(this.message);
        console.error(error);
      });;
  }

  PesquisarEstacao(id: string) {
    //return this._http.get<estacao>(`${this.Api}/${id}`);
    return this.fireDb.object<estacao>(`estacoes/${id}`).valueChanges();
  }

  openSnackBar(message){
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: message.value,
      duration: 3000
    });
  }

}
