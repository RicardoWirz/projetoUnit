import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../clientes.model';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-deletar',
  templateUrl: './clientes-deletar.component.html',
  styleUrls: ['./clientes-deletar.component.css']
})
export class ClientesDeletarComponent implements OnInit {

  // Máscaras de formatação (Angular 2 Input Mask)
  cpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  telefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  cliente: Cliente

  constructor(private service: ClientesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.clientePorID(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  deletarCliente(): void {
    this.service.deletarCliente(this.cliente.id).subscribe(() => {
    })
    this.router.navigate(['/clientes'])
    alert("Cliente removido com sucesso!")
  }

}
