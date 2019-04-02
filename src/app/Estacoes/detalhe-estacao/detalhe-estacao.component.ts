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

  id: number;
  inscricao: Subscription;
  detalhesEstacao: estacao;
  enableCampos: boolean = true;

  constructor(private route: ActivatedRoute,
    private estacaoService: EstacoesService,
    private routes: Router
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id);
      this.estacaoService.PesquisarEstacao(this.id).subscribe(dados => {
        this.detalhesEstacao = dados;
        console.log(dados);
        if (this.detalhesEstacao == null) {
          this.routes.navigate(['/estacao-nao-encontrada']);
        }
      });
    });
  }

  enable() {
    this.enableCampos = !this.enableCampos;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
