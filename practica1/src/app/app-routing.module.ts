import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juego1Component } from './juego1/juego1.component'; 
import { Juego2Component } from './juego2/juego2.component'; 
import {Juego3Component}  from './juego3/juego3.component'; 
import {InicioComponent}  from './inicio/inicio.component'; 

const routes: Routes = [
  {path: '', component: InicioComponent},
  { path: 'juegos/juego1', component: Juego1Component},
    { path: 'juegos/juego2', component: Juego2Component},
    { path: 'juegos/juego3', component: Juego3Component}

   ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
