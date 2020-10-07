import { Component, OnInit } from '@angular/core';
import { CreditoService } from 'src/app/servicios/CreditoService/credito.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private creditoService : CreditoService) { }
  personas = [];
  ngOnInit(): void {
    this.personas = this.creditoService.get();
  }

}
