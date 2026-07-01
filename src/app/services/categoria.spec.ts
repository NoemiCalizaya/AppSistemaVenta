import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CategoriaService } from './categoria';
import { environment } from '../environments/environment';
import { ResponseApi } from '../interfaces/response-api';

describe('CategoriaService', () => {

  let service: CategoriaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CategoriaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CategoriaService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return category list', () => {

    const responseMock: ResponseApi= {
      status: true,
      msg: "Consulta realizada correctamente",
      value: [
        {
          idCategoria: 1,
          nombre: 'Lácteos'
        }
      ]
    };

    service.lista().subscribe(resp => {

      expect(resp.status).toBe(true);
      expect(resp.msg).toBe("Consulta realizada correctamente");
      expect(resp.value.length).toBe(1);
      expect(resp.value[0].nombre).toBe("Lácteos");

    });

    const req = httpMock.expectOne(
      environment.endpoint + 'Categoria/Lista'
    );

    expect(req.request.method).toBe('GET');

    req.flush(responseMock);

  });

});
