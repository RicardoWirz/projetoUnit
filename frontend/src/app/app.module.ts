import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabecalhoComponent } from './componentes/views/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';
import { ClientesComponent } from './componentes/views/clientes/clientes.component';
import { ClientesLerComponent } from './componentes/views/clientes/crud/clientes-ler/clientes-ler.component';
import {HttpClientModule} from '@angular/common/http';
import { ClientesCriarComponent } from './componentes/views/clientes/crud/clientes-criar/clientes-criar.component';

import { TextMaskModule } from 'angular2-text-mask';
import { ClientesAtualizarComponent } from './componentes/views/clientes/crud/clientes-atualizar/clientes-atualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
    ClientesComponent,
    ClientesLerComponent,
    ClientesCriarComponent,
    ClientesAtualizarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
