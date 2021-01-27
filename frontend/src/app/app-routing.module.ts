import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ClientesComponent } from './componentes/views/clientes/clientes.component';
import { ClientesAtualizarComponent } from './componentes/views/clientes/crud/clientes-atualizar/clientes-atualizar.component';
import { ClientesCriarComponent } from './componentes/views/clientes/crud/clientes-criar/clientes-criar.component';
import { ClientesDeletarComponent } from './componentes/views/clientes/crud/clientes-deletar/clientes-deletar.component';
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientes/criar',
    component: ClientesCriarComponent
  },
  {
    path: 'clientes/atualizar/:id',
    component: ClientesAtualizarComponent
  },
  {
    path: 'clientes/deletar/:id',
    component: ClientesDeletarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
