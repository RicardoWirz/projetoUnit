import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../clientes.model';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-criar',
  templateUrl: './clientes-criar.component.html',
  styleUrls: ['./clientes-criar.component.css']
})
export class ClientesCriarComponent implements OnInit {

  // Máscaras de formatação (Angular 2 Input Mask)
  cpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  telefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  cliente: Cliente = {
    cpf: '',
    nome: '',
    email: '',
    dataNascimento: null,
    sexo: null,
    nomeSocial: null,
    apelido: null,
    telefone: null
  }

  constructor(private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
  }

  inserirCliente(): void {
    this.service.inserirCliente(this.cliente).subscribe(() => {
    })
    this.router.navigate(['/clientes'])
    alert("Cliente cadastrado com sucesso!")
  }

}
