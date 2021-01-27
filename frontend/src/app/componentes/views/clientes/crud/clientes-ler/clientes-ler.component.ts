import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../../clientes.model';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-ler',
  templateUrl: './clientes-ler.component.html',
  styleUrls: ['./clientes-ler.component.css']
})
export class ClientesLerComponent implements OnInit {

  clientes: Cliente[]

  constructor(private service: ClientesService) { }

  // Sempre que a tela for carregada a função ngOnInit é acionada
  ngOnInit(): void {
    // Chama o método para listar todos os clientes
    this.service.listarClientes().subscribe(clientes => {
      this.clientes = clientes
    })
  }

}
