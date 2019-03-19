import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacaoNaoEncontradaComponent } from './estacao-nao-encontrada.component';

describe('EstacaoNaoEncontradaComponent', () => {
  let component: EstacaoNaoEncontradaComponent;
  let fixture: ComponentFixture<EstacaoNaoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacaoNaoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacaoNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
