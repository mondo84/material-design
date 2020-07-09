import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';

// Arrastrar y soltar.
import { CdkDragDrop } from '@angular/cdk/drag-drop';
// Media query.
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ServiceCasoService } from './service-caso.service';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit, AfterViewInit {

  // @ViewChild('grilla', {static: true}) grilla: ElementRef;
  // @ViewChildren('columnas') columnas: QueryList<any>;

  columna: number;
  panelOpenState = false;
  datos = [];
  lista1 = [];
  lista2 = [];
  lista3 = [];

  constructor(private objMediaQuery: BreakpointObserver,
              private r2: Renderer2, private route: Router,
              private sC: ServiceCasoService) {
  }

  ngOnInit(): void {
    /*
    this.objMediaQuery.observe([ Breakpoints.Small ]).subscribe({
      next: (res) => {
        // console.log(res.matches);
      },
      error: (err) => { console.error(err.message); }
    });*/
    this.cargaLista();
  }

  cargaLista(){
    this.datos = this.sC.getDatos();  // 4 Registros
  }

  ngAfterViewInit() {

    this.objMediaQuery.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe({
      next: async (res) => {
        const xs = res[`breakpoints`][`(max-width: 599.99px) and (orientation: portrait)`];
        const sm = res[`breakpoints`][`(min-width: 600px) and (max-width: 959.99px)`];
        const md = res[`breakpoints`][`(min-width: 960px) and (max-width: 1279.99px)`];
        const aux = await this.sC.getDatos();

        if ( xs ) {
          // const aux = this.sC.getDatos();
          this.lista2 = [];
          this.lista3 = [];
          this.lista1 = aux;

        } else if (sm) {
          const itemsPorColumna = await Math.ceil( this.sC.getDatos().length / 2 );  // Divide registros entre 2 columnas.
          this.lista3 = [];
          this.lista1 = await aux.slice(0, itemsPorColumna);
          this.lista2 = await aux.slice(itemsPorColumna);

        } else if (md){
          const itemsPorColumna = await Math.ceil( this.sC.getDatos().length / 3 );  // Divide registros entre 3 columnas.
          this.lista1 = await aux.slice(0, itemsPorColumna);  // primer listado. 0 a 3
          this.lista2 = await aux.slice(itemsPorColumna, itemsPorColumna + itemsPorColumna); // del medio
          this.lista3 = await aux.slice(itemsPorColumna + itemsPorColumna); // tercer listado. del resto al final
        }
      },
      error: (err) => { console.error(err.message); }
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    // moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

}
