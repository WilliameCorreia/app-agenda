import { estacao } from './../modelo/Estacao';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detalhe-estacao',
  templateUrl: './detalhe-estacao.component.html',
  styleUrls: ['./detalhe-estacao.component.css']
})

export class DetalheEstacaoComponent implements OnInit {

  id: number;
  inscricao : Subscription;
  detalhesEstacao: any;
  enableCampos: boolean = true;

  constructor(private route: ActivatedRoute,
              private estacaoService: AppService,
              private routes: Router
              ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) =>{
      this.id = params['id'];
      this.detalhesEstacao = this.estacaoService.PesquisarEstacao(this.id);

      if(this.detalhesEstacao == null){
        this.routes.navigate(['/estacao-nao-encontrada']);
      }
      } 
    );
  } 

  enable(){
    this.enableCampos = !this.enableCampos;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
