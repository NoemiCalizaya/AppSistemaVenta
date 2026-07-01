import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs'; //answer the APIs
import { environment } from '../environments/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private urlApi: string = environment.endpoint + "Menu/";

  constructor(private http:HttpClient){}
  
  lista(idUsuario:number):Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista?idUsuario=${idUsuario}`)
  }
}
