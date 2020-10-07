import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Servicredito/Componentes/registro/registro.component';
import { ConsultaComponent } from './Servicredito/Componentes/consulta/consulta.component';
import { HeaderComponent } from './Servicredito/Componentes/header/header.component';
import { FooterComponent } from './Servicredito/Componentes/footer/footer.component';
import { HomeComponent } from './Servicredito/Componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    ConsultaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
