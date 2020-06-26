import { TestBed } from '@angular/core/testing';

import { ListadoAlumnosService } from './listado-alumnos.service';

describe('ListadoAlumnosService', () => {
  let service: ListadoAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
