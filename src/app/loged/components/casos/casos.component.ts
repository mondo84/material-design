import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';

// Arrastrar y soltar.
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// Media query.
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit, AfterViewInit {

  @ViewChild('gridContainer', {static: true}) gridContainer: ElementRef;
  @ViewChildren('masonryBrick') masonryBrick: QueryList<any>;

  panelOpenState = false;
  datos = [
    { titulo: `En Ruta`, contenido: 'tabla' },
    { titulo: `En Muelle`, contenido: 'tabla' },
    { titulo: `En mantenimiento`, contenido: 'tabla' },
    { titulo: `Fuera de servicio`, contenido: 'tabla' }
  ];

  constructor(private objMediaQuery: BreakpointObserver,
              private r2: Renderer2) {
  }

  ngOnInit(): void {
    /*
    this.objMediaQuery.observe([ Breakpoints.Small ]).subscribe({
      next: (res) => {
        // console.log(res.matches);
      },
      error: (err) => { console.error(err.message); }
    });*/
  }

  ngAfterViewInit() {
    const arregloNuevo = [];
    for (let c = 0; c < this.masonryBrick[`_results`].length; c++) {        // itera sobre los items del grid
      arregloNuevo[c] = this.masonryBrick[`_results`][c][`nativeElement`];  // Pasa los items a un array.
    }
    this.mansory(this.gridContainer.nativeElement, arregloNuevo, 2);  // Pasa el grid, los items y la cantidad de comulas.
  }

  mansory(grid: any, itemsElemet: string | any[], columns: number) {
  //  mansory(grid: any, itemsElemet: any, columns: number) {

    this.r2.addClass(grid, 'gridCss');
    this.r2.addClass(grid, `columns-${columns}`);

    const columnsElements: Array<HTMLElement> = []; // Seran las columnas que se crearan en el array.

    for (let i = 1; i <= columns; i++) {            // Crea n columnas como sea pasadas por el parametro "columns"
      const column = this.r2.createElement('div');  // Crea los div que haran de columna.
      this.r2.addClass(column, 'masonry-column');   // Se agrega la clase a las columnas creadas.
      this.r2.addClass(column,  `column-${i}`);     // Se agrega la clase de las columnas creadas.
      this.r2.appendChild(grid, column);            // Se agregan las columnas creadas al la Grilla.
      columnsElements.push(column);                 // se agregan las columnas al arreglo de los elementos.
    }

    // cantidad de filas a recorrer internamente = cantidad de items / columnas
    for (let column = 0; column < Math.ceil( itemsElemet.length / columns); column++ ) {  // Recorre columnas
      for (let row = 0; row < columns; row++) {  // recorre cada fila en cada iteracion de columna.
        // const item = itemsElemet[(column * columns) + row][`nativeElement`];  // Se obtiene cada item hijo.
        const item = itemsElemet[(column * columns) + row]; // 1 Se recupera el ultimo hijo de cada fila.
        // console.log(item);
        if (item === undefined) { // Si el item viene indefinido por no hay mas items hijos, termina el for.
          break;
        } else {  // Si no esta indefinido entonces agregas el item como hijo del indice, al array.
          columnsElements[row].appendChild(item);
        }
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    // moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

}
