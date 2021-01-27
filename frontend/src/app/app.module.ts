import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabecalhoComponent } from './componentes/views/cabecalho/cabecalho.component';
import { PaginaInicialComponent } from './componentes/views/pagina-inicial/pagina-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    PaginaInicialComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }