import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../clientes.model';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-atualizar',
  templateUrl: './clientes-atualizar.component.html',
  styleUrls: ['./clientes-atualizar.component.css']
})
export class ClientesAtualizarComponent implements OnInit {

  // Máscaras de formatação (Angular 2 Input Mask)
  cpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  telefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  cliente: Cliente

  constructor(private service: ClientesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    this.service.clientePorID(id).subscribe(cliente => {
      this.cliente = cliente
    })
  }

  atualizarCliente(): void {
    this.service.atualizarCliente(this.cliente).subscribe(() => {
    })
    this.router.navigate(['/clientes'])
    setTimeout(function () {
      alert("Cliente atualizado com sucesso!")
    }, 500);
  }

}
