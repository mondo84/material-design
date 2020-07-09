import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCasoService {

  constructor() { }

  getDatos(): any {
    const datos = [
      { titulo: `1`, contenido: 'nnsndajsndjandjandjasnd' },
      { titulo: `2`, contenido: 'nnsndajsndjandjandjasndnnsndajsndjandjandjasnd' },
      { titulo: `3`, contenido: 'nnsndajsndjandjandjasndnnsndajsndjandjandjasndadasdasdadada' },
      { titulo: `4`, contenido: `nnsndajsndjandjandjasndnnsndajsndjandjandjasndadasdasdadada
      nnsndajsndjandjandjasndnnsndajsndjandjandjasndadasdasdadada
      nnsndajsndjandjandjasndnnsndajsndjandjandjasndadasdasdadada` },
      { titulo: `5`, contenido: 'sdsdsdsdsdsdsdsdsd' },
      { titulo: `6`, contenido: `nnsndajsndjandjandjasndnnsndajsndjandjandjasndadasdasdadada` },
    ];

    return datos;
  }
}
