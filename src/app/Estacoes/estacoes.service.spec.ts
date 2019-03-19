import { TestBed } from '@angular/core/testing';

import { EstacoesService } from './estacoes.service';

describe('EstacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacoesService = TestBed.get(EstacoesService);
    expect(service).toBeTruthy();
  });
});
