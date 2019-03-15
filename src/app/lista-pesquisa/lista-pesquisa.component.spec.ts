import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPesquisaComponent } from './lista-pesquisa.component';

describe('ListaPesquisaComponent', () => {
  let component: ListaPesquisaComponent;
  let fixture: ComponentFixture<ListaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
