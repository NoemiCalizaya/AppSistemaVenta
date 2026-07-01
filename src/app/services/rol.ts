import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs'; //answer the APIs
import { environment } from '../environments/environment';
import { ResponseApi } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  private urlApi: string = environment.endpoint + "Rol/";

  constructor(private http:HttpClient){}
  
  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }

}
