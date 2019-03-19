import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacoesComponent } from './estacoes.component';

describe('ListaPesquisaComponent', () => {
  let component: EstacoesComponent;
  let fixture: ComponentFixture<EstacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
