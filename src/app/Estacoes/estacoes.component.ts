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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[];

  pagina: number = 5;
  estacao: Object[];
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
  }

  ngOnInit() {
    this.subcriber = this.estacoesService.getEstacoes()
      .subscribe(dados => {
        this.dataSource.data = dados;
        this.estacao = dados;
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


  generatePdf() {
    let docDefinition = {
      info: {
        title: 'Cecoe Estações Elevatórias',
        author: 'williame',
        subject: 'subject of document',
        keywords: 'keywords for document',
      },
      content: [
        { text: 'Lista das Estações Elevatórias', style: 'header' },

        this.getEstacaoObject(this.dataSource.filteredData),
      ],
      styles: {
        header: {
          alignment: 'center',
          fontSize: 22,
          bold: true,
          color: 'blue'
        },
        anotherStyle: {
          italics: true,
          alignment: 'left'
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();

  }

  getEstacaoObject(estacao: Object[]) {
    const estacoes = [];

    estacao.map(x => {
      var {tipo: tipo,
             nome: nome, 
              operador1:{nome: op1Nome, fone1: op1Fone1, fone2: op1Fone2 },
              operador2:{nome:op2Nome, fone1: op2Fone1, fone2: op2Fone2},
              supervisor:{area: area ,nome: supNome, fone1: supFone1, fone2: supFone2 },
              dadosenel:{classe: classe, endereco: endereco, uc: uc}
            } = Object.assign(x);

      estacoes.push(

        [{text:'Dados da Estação', colSpan: 4, alignment:'center', color: 'blue', fillColor: '#eeeeee'}, {}, {}, {}],
        [{text: 'Tipo', colSpan: 2, bold: 'true'},{}, {text: 'Nome', colSpan: 2, bold: 'true'},{}],
        [{text: tipo, colSpan: 2,},{}, {text: nome, colSpan: 2,},{}],
        [{text: 'Area', bold: 'true'}, {text: 'Supervisor', bold: 'true'}, {text: 'Fone', bold: 'true'}, {text: 'Fone', bold: 'true'}],
        [{text: area}, {text: supNome}, {text: supFone1}, {text: supFone2}],
        [{text: 'Operador', colSpan: 2, bold: 'true'}, {}, {text: 'Fone', bold: 'true'}, {text: 'Fone', bold: 'true'}],
        [{text: op1Nome, colSpan: 2}, {}, {text: op1Fone1}, {text: op1Fone2}],
        [{text: 'Operador', colSpan: 2, bold: 'true'}, {}, {text: 'Fone', bold: 'true'}, {text: 'Fone', bold: 'true'}],
        [{text: op2Nome, colSpan: 2}, {}, {text: op2Fone1}, {text: op2Fone2}],
        [{text: 'Classe', bold: 'true'}, {text: 'Endereço', colSpan: 2, bold: 'true'},{}, {text: 'Uc', bold: 'true'}],
        [{text: classe}, {text: endereco, colSpan: 2},{}, {text: uc}],
      );    
    });

    return {
      table: {
        layout: 'headerLineOnly', // optional
        widths: ['auto', '*', 'auto', '*'],
        body: [
          ...estacoes
        ]
      }
    }
  }

}
