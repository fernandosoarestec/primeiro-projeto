import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroProjetoComponent } from './primeiro-projeto/primeiro-projeto.component';
import { PrimeiroProjeto2Component } from './primeiro-projeto2/primeiro-projeto2.component';
import { CursosModule } from './cursos/cursos.module';





@NgModule({
  declarations: [
    AppComponent,
    PrimeiroProjetoComponent,
    PrimeiroProjeto2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
