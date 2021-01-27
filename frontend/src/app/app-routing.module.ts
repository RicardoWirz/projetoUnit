import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }