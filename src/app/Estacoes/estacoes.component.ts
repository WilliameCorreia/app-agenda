import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { estacao } from '../modelo/Estacao';
import { error } from 'util';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { query } from '@angular/core/src/render3';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-estacoes',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.css']
})
export class EstacoesComponent implements OnInit {

  pagina: number = 5;
  estacao : estacao[];  
  dataSource;

  @ViewChild (MatPaginator) paginator: MatPaginator;


  constructor(private usuarioService : AppService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {

    this.estacao = this.usuarioService.getEstacao();
    this.dataSource = new MatTableDataSource(this.estacao);
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: estacao, filter: string) => {
      return data.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
          || data.tipo.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
          || data.supervisor.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
          || data.supervisor.area.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
          || data.operadores[0].nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1;
    };

    /* this.usuarioService.getEstacao()
      .subscribe(clienteApi => this.estacao = clienteApi),
        error => console.error(error); */
  }  
  
  displayedColumns: string[] = ['tipo', 'nome', 'operador', 'supervisor', 'area', 'detalhes'];
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
    estacao
  }

}
