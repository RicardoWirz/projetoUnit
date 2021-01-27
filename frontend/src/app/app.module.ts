import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabecalhoComponent } from './componentes/views/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';
import { ClientesComponent } from './componentes/views/clientes/clientes.component';
import { ClientesLerComponent } from './componentes/views/clientes/crud/clientes-ler/clientes-ler.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    ClientesComponent,
    ClientesLerComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
