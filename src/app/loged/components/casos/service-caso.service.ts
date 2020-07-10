import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCasoService {

  constructor() { }

  getDatos(): any {
    const datos = [
      { titulo: `En ruta`, contenido: 'datos tabla 1' },
      { titulo: `En Muelle`, contenido: 'datos tabla 2' },
      { titulo: `En Taller`, contenido: 'datos tabla 3' },
      { titulo: `Fuera de servicio`, contenido: `datos tabla 4` },

    ];

    return datos;
  }
}
