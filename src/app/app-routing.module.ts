import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './Servicredito/Componentes/registro/registro.component';
import { ConsultaComponent } from './Servicredito/Componentes/consulta/consulta.component';
import { HomeComponent } from './Servicredito/Componentes/home/home.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path : '', component : HomeComponent},
      { path : 'registro', component : RegistroComponent},
      { path : 'consulta', component : ConsultaComponent},
    ]
    
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
