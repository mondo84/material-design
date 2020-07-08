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
    { titulo: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.` },
    { titulo:  `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.` },
    { titulo: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.` },
    { titulo: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.` },
    { titulo: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, doloremque.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel.` }
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
    for (let c = 0; c < this.masonryBrick[`_results`].length; c++) {
      arregloNuevo [c] = this.masonryBrick[`_results`][c][`nativeElement`];
    }
    this.mansory(this.gridContainer.nativeElement, arregloNuevo, 2);
  }

  mansory(grid: any, itemsElemet: string | any[], columns: number) {
  //  mansory(grid: any, itemsElemet: any, columns: number) {

    this.r2.addClass(grid, 'box');
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
        columnsElements[row].appendChild(item);             // 2 Se coloca cada item como hijo de cada columna.
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    // moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

}
