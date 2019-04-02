import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstacaoComponent } from './add-estacao.component';

describe('AddEstacaoComponent', () => {
  let component: AddEstacaoComponent;
  let fixture: ComponentFixture<AddEstacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
