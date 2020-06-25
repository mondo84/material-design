import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  // Interface Media query de angular. (escuchador de ancho pantalla)
  public mediaQuery: MediaQueryList = matchMedia('(max-width: 720px)');

  constructor() { }

  ngOnInit(): void {
  }

  // Retorna validacion del ancho de la pantalla actual con el maximo ancho indicado (720px).
  pantallaSmall(): boolean {
    return this.mediaQuery.matches;
  }
}
