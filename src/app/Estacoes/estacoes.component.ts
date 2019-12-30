import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { EstacoesService } from '../Estacoes/estacoes.service';
import { estacao } from '../modelo/Estacao';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Subject, empty, Subscription, Subscriber } from 'rxjs';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-estacoes',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.css']
})
export class EstacoesComponent implements OnInit, OnDestroy {

  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
   }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[];

  pagina: number = 5;
  estacao: estacao[];
  dataSource = new MatTableDataSource();
  error$ = new Subject<boolean>();
  subcriber = new Subscription();

  constructor(private estacoesService: EstacoesService) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      return data.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.tipo.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.supervisor.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.supervisor.area.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.supervisor.area.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1
        || data.operador1.nome.trim().toLocaleLowerCase().indexOf(filter.trim().toLocaleLowerCase()) !== -1;
    };
    console.log(this.dataSource)
  }

  ngOnInit() {
    this.subcriber = this.estacoesService.getEstacoes()
      .subscribe(dados => {
        this.dataSource.data = dados;
        this.displayedColumns = ['tipo', 'nome', 'operador1', 'supervisor', 'area', 'detalhes'];
        this.dataSource.paginator = this.paginator;  
      },
        error => {
          console.log(error);
          this.error$.next(true);
          return empty();
        },
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy(): void {
    this.subcriber.unsubscribe();    
  }

}
