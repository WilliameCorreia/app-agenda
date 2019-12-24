import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { EstacoesService } from 'src/app/Estacoes/estacoes.service';
import { estacao } from 'src/app/modelo/Estacao';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-detalhe-estacao',
  templateUrl: './detalhe-estacao.component.html',
  styleUrls: ['./detalhe-estacao.component.css']
})

export class DetalheEstacaoComponent implements OnInit {

  id: string;
  estacao: estacao;
  inscricao: Subscription;
  enableCampos: boolean = false;
  detalhesEstacao: any;
  editCancel: string = "Editar";
  formulario: FormGroup;

  constructor(private route: ActivatedRoute,
    private estacaoService: EstacoesService,
    private routes: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.estacaoService.PesquisarEstacao(this.id).subscribe(dados => {
        this.detalhesEstacao = dados;

        Object.keys(this.formulario.controls).forEach(campo => {
          this.formulario.get(campo).setValue(this.detalhesEstacao[campo]);
        });
      });
    });

    this.formulario = this.formbuilder.group({
      tipo: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      id: [""],
      operador1: this.formbuilder.group({
        nome: [""],
        fone1: [""],
        fone2: [""]
      }),
      operador2: this.formbuilder.group({
        nome: [""],
        fone1: [""],
        fone2: [""]
      }),
      supervisor: this.formbuilder.group({
        area: [""],
        nome: [""],
        fone1: [""],
        fone2: [""]
      }),
      dadosenel: this.formbuilder.group({
        classe: ["", [Validators.required]],
        endereco: ["", [Validators.required]],
        uc: ["", [Validators.required]]
      })
    });
    this.enable();
  }

  enable() {
    this.enableCampos = !this.enableCampos;
    if (this.enableCampos) {
      this.formulario.disable();
      this.editCancel = "Editar"
    } else {
      this.formulario.enable();
      this.editCancel = "Cancelar"
    }
  }

  onSubmit() {
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  update(estacao: estacao) {
    if(this.formulario.valid){
      this.estacao = this.formulario.value;
      this.estacaoService.updateEstacao(this.estacao, this.id);
      this.routes.navigate(['']);
    }
  }

  delete(estacao: estacao) {
    this.estacaoService.deleteEstacao(this.id);
    this.routes.navigate(['']);
  }

  Isvalidation?(teste: FormControl) {
    return (teste.hasError('required') && teste.touched);
  }

}
