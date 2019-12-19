import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { EstacoesService } from 'src/app/Estacoes/estacoes.service';
import { estacao } from 'src/app/modelo/Estacao';


@Component({
  selector: 'app-detalhe-estacao',
  templateUrl: './detalhe-estacao.component.html',
  styleUrls: ['./detalhe-estacao.component.css']
})

export class DetalheEstacaoComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  detalhesEstacao: any;
  enableCampos: boolean = true;
  editCancel: string = "Editar";

  constructor(private route: ActivatedRoute,
    private estacaoService: EstacoesService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.estacaoService.PesquisarEstacao(this.id).subscribe(dados => {
        this.detalhesEstacao = dados;
      });
    });
  }

  enable() {
    this.enableCampos = !this.enableCampos;
    if(this.enableCampos){
      this.editCancel = "Editar"
    }else{
      this.editCancel = "Cancelar"
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  update(estacao: estacao){
    this.estacaoService.updateEstacao(estacao, this.id);
    this.routes.navigate(['']);
  }

  delete(estacao: estacao){
    this.estacaoService.deleteEstacao(this.id);
    this.routes.navigate(['']);
  }

}