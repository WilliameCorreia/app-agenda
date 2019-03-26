import { Injectable } from '@angular/core';
import { estacao } from 'src/app/modelo/Estacao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstacoesService {

  //private _url = 'https://localhost:5001/api/estacao';
  private readonly Api = 'http://localhost:3000/estacoes';

  /* _estacao: estacao[] = [
  ] */

  constructor(private _http: HttpClient) { }

 getEstacoes(){
   return this._http.get<estacao[]>(this.Api);
 } 

  PesquisarEstacao(id: Number){
    
    let est = this.getEstacoes();

    /* for (let i = 0; i < est.length; i++) {
      let obj = est[i];
      if(obj.estacaoid == id){
        return obj;
      }              
    } 
    return null;*/
  }

}
