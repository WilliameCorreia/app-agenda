import { Injectable } from '@angular/core';
import { estacao } from 'src/app/modelo/Estacao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class EstacoesService {

  //private _url = 'https://localhost:5001/api/estacao';

  _estacao: estacao[] = [{
    "estacaoid": 1,
    "tipo": "1",
    "nome": "EPC",
    "operadores": [
      {
        "operadorid": 1,
        "nome": "Manoel",
        "telefones": [
          {
            "telefoneid": null,
            "tipo": 2,
            "fone": "xxxxxxxxx"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "123413241342"
          }
        ]
      },{
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": null,
            "tipo": 2,
            "fone": "kkkkkkkkk"
          },
          {
            "telefoneid": 1,
            "tipo": 1,
            "fone": "kkkkkkkkkkk"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 1,
      "area": "Vertente",
      "nome": "Abraão",
      "telefones": [
        {
          "telefoneid": 1,
          "tipo": 1,
          "fone": "xxxxxxxxx"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 1,
      "nome_cliente": "Cagece",
      "endereco": "Av. Presidente Castelo Branco nº 1200",
      "classe": "nao sei",
      "uc": 2
    }
  },
  {
    "estacaoid": 2,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  },
  {
    "estacaoid": 3,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 4,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 5,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 6,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 7,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 8,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 9,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }, {
    "estacaoid": 10,
    "tipo": "2",
    "nome": "Pajeú",
    "operadores": [
      {
        "operadorid": 2,
        "nome": "williame",
        "telefones": [
          {
            "telefoneid": 1,
            "tipo": 2,
            "fone": "yyyyyyyyy"
          },
          {
            "telefoneid": 2,
            "tipo": 1,
            "fone": "987654321"
          }
        ]
      }
    ],
    "supervisor": {
      "supervisorid": 2,
      "area": "Isolado",
      "nome": "Joel",
      "telefones": [
        {
          "telefoneid": 2,
          "tipo": 1,
          "fone": "yyyyyyyyyy"
        }
      ]
    },
    "dadosenel": {
      "dadosenelid": 2,
      "nome_cliente": "Cagece",
      "endereco": "Av. Dom Manoel",
      "classe": "nao sei",
      "uc": 2
    }
  }
  ]

  constructor(private _http: HttpClient) { }

  /* getEstacao() : Observable<estacao[]>{
    return this._http.get<estacao[]>(this._url);
  } */

  getEstacao() {
    return this._estacao;
  }

  PesquisarEstacao(id: Number){
    
    let est = this.getEstacao();

    for (let i = 0; i < est.length; i++) {
      let obj = est[i];
      if(obj.estacaoid == id){
        return obj;
      }              
    }
    return null;
  }
}
