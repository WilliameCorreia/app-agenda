import { Telefone } from './../../modelo/Telefone';
import { DadosEnel } from './../../modelo/DadosEnel';
import { Operador } from './../../modelo/Operador';
import { estacao } from './../../modelo/Estacao';
import { EstacoesService } from './../estacoes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-estacao',
  templateUrl: './add-estacao.component.html',
  styleUrls: ['./add-estacao.component.css']
})
export class AddEstacaoComponent implements OnInit {

  estacao: estacao;

  formulario: FormGroup;

  novaEstacao: estacao;

  constructor(private fireService: EstacoesService,
    private formbuilder: FormBuilder,
    private routes: Router) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      tipo: ["", [Validators.required],],
      nome: ["", [Validators.required]],
      id: [1],
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
        classe: [""],
        endereco: [""],
        uc: [""]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.estacao = this.formulario.value;
    this.fireService.addEstacao(this.estacao);
    this.formulario.reset();
    this.routes.navigate(['']);
  }

}
