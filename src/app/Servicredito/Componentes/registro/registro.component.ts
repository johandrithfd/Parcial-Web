import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Models/persona/persona';
import { CreditoService } from '../../../servicios/CreditoService/credito.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private creditoService : CreditoService) { }
  persona = new Persona();
  ngOnInit(): void {
  }
  addPersona ()
  {
    this.persona.calcularCapitalFinal();
    this.creditoService.post(this.persona);
    alert("Credito registrado con exito");
  }
  onSubmit ()
  {

  }
}
