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

  inserirCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.backend, cliente)
  }

  clientePorID(id: string): Observable <Cliente>{
    return this.http.get<Cliente>(`${this.backend}/${id}`)
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.backend}/${cliente.id}`, cliente)
  }

  deletarCliente(id: number): Observable <Cliente>{
    return this.http.delete<Cliente>(`${this.backend}/${id}`)
  }

}
