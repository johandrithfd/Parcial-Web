import { Injectable } from '@angular/core';
import { Persona } from '../../Servicredito/Models/persona/persona';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor() { }

  get(): Persona[] {
      return JSON.parse(localStorage.getItem('credito'));
  }

  post(persona: Persona) {
      let personas: Persona[] = [];
      if (this.get() != null) {
        personas = this.get();
      }
      personas.push(persona);
      localStorage.setItem('credito', JSON.stringify(personas));
  }
}
