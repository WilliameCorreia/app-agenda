import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEstacaoComponent } from './detalhe-estacao.component';

describe('DetalheEstacaoComponent', () => {
  let component: DetalheEstacaoComponent;
  let fixture: ComponentFixture<DetalheEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
