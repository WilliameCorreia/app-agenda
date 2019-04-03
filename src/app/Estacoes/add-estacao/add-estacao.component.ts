import { Telefone } from './../../modelo/Telefone';
import { DadosEnel } from './../../modelo/DadosEnel';
import { Operador } from './../../modelo/Operador';
import { estacao } from './../../modelo/Estacao';
import { EstacoesService } from './../estacoes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      tipo: ["1", [Validators.required]],
      nome: ["williame", [Validators.required]],
      id: [1],
      operador1: this.formbuilder.group({
        nome: ["williame"],
        fone1: ["8888-8888"],
        fone2: ["9999-9999"]
      }),
      operador2: this.formbuilder.group({
        nome: ["williame"],
        fone1: ["8888-8888"],
        fone2: ["9999-9999"]
      }),
      supervisor: this.formbuilder.group({
        area: ["vertente"],
        nome: ["joel"],
        fone1: ["9999-9999"],
        fone2: ["8888-9999"]
      }),
      dadosenel: this.formbuilder.group({
        classe: ["BT"],
        endereco: ["av. presidente castelo branco nº 1200"],
        uc: ["432123"]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.estacao = this.formulario.value;
    this.fireService.addEstacao(this.estacao);
    //this.formulario.reset();
  }

}
