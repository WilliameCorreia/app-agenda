import { EstacoesService } from './../estacoes.service';
import { estacao } from 'src/app/modelo/Estacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-estacao',
  templateUrl: './add-estacao.component.html',
  styleUrls: ['./add-estacao.component.css']
})
export class AddEstacaoComponent implements OnInit {

  estacao = new estacao();

  constructor(private fireService: EstacoesService) { }

  ngOnInit() {

  }

  onSubmit(form){
    this.estacao = form.value;
    this.fireService.addEstacao(this.estacao);
    console.log(this.estacao);
    console.log(form.value);
  }

}
