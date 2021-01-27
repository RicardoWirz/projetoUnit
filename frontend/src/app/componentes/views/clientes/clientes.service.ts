import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  backend ='http://localhost:8080/clientes'

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.backend)
  }

}
