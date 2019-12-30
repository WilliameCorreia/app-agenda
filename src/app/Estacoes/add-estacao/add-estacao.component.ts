import { estacao } from './../../modelo/Estacao';
import { EstacoesService } from './../estacoes.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-estacao',
  templateUrl: './add-estacao.component.html',
  styleUrls: ['./add-estacao.component.css']
})
export class AddEstacaoComponent implements OnInit {

  durationInSeconds = 5;

  estacao: estacao;

  formulario: FormGroup;

  novaEstacao: estacao;

  constructor(private estacaoService: EstacoesService,
    private formbuilder: FormBuilder,
    private routes: Router) { }

  ngOnInit() {
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
  }

  Isvalidation?(teste: FormControl) {
    return (teste.hasError('required') && teste.touched);
  }

  verificaValidacoesForm(formgroup: FormGroup) {
    Object.keys(formgroup.controls).forEach(campo => {
      const controle = formgroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.estacao = this.formulario.value;
      this.estacaoService.addEstacao(this.estacao);
      this.formulario.reset();
      this.routes.navigate(['']);
    } else {
      this.verificaValidacoesForm(this.formulario);
    }

  }

  get formResendTipo() {
    return this.formulario.controls['tipo'] as FormControl;
  }
  get formResendNome() {
    return this.formulario.controls['nome'] as FormControl;
  }
  get formResendClasse() {
    let controle = this.formulario.get('dadosenel').get('classe');    
    return controle as FormControl;
  }
  get formResendEnd() {
    let controle = this.formulario.get('dadosenel').get('endereco');    
    return controle as FormControl;
  }
  get formResendUc() {
    let controle = this.formulario.get('dadosenel').get('uc');    
    return controle as FormControl;
  }

}
