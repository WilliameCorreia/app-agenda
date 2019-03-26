import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EstacoesService } from '../Estacoes/estacoes.service';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['tipo', 'nome', 'operador', 'supervisor', 'area', 'detalhes'];

  pagina: number = 5;
  estacao: estacao[];
  dataSource = new MatTableDataSource();

  constructor(private estacoesService: EstacoesService) {
    this.dataSource.filterPredicate = (data: estacao, filter: string) => {
      return data.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.tipo.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.supervisor.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.supervisor.area.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.operadores[0].nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1;
    };
  }

  ngOnInit() {

    this.estacoesService.getEstacoes()
      .subscribe(dados => {
        this.dataSource.data = dados;
      });
    this.dataSource.paginator = this.paginator;

  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

}
