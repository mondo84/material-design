import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCasoService {

  constructor() { }

  getDatos(): any {
    const datos = [
      { id: `100`, origen: 'Cali', destino: 'Barranquilla' },
      { id: `101`, origen: 'Barranquilla', destino: 'Cali' },
      { id: `104`, origen: 'Cartagena', destino: 'Bogota' },
      { id: `109`, origen: `Bogota`, destino: 'Cartagena' },
      { id: `114`, origen: `Bucaramanga`, destino: 'Medellin' },
      { id: `116`, origen: 'Medellin', destino: 'Bucaramanga' },
      { id: `200`, origen: 'Cienega', destino: 'Cucuta' },
      { id: `209`, origen: 'Cucuta', destino: 'Cienega' },
      { id: `212`, origen: `Maicao`, destino: 'Santa Marta' },
      { id: `250`, origen: `Santa Marta`, destino: 'Maicao' },
    ];

    return datos;
  }
}
