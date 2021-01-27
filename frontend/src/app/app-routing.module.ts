import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ClientesComponent } from './componentes/views/clientes/clientes.component';
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
