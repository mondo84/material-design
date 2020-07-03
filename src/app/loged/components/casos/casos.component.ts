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
  @ViewChildren('masonryContent') masonryContent: QueryList<any>;

  // @ViewChildren('item') item: QueryList<any>;

  panelOpenState = false;
  columna1: any [] = [1, 2, 3, 4, 5];
  // columna2: any [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private objMediaQuery: BreakpointObserver,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.objMediaQuery.observe([ Breakpoints.Small ]).subscribe({
      next: (res) => {
        console.log(res.matches);
      },
      error: (err) => { console.error(err.message); }
    });
  }

  ngAfterViewInit() {
    // console.log(this.masonryBrick);
    for (let x = 0; x < this.masonryBrick.length; x++){
      this.resizeGridItem(this.masonryBrick[`_results`][x][`nativeElement`]);  // Obtiene todos los elementos con referencia #item del grid.
    }
  }

  resizeGridItem(item: any) {
    // console.log(item[`children`][0]);

    // console.log(this.gridContainer.nativeElement);
    // tslint:disable-next-line: radix
    const rowGap = parseInt( window.getComputedStyle(this.gridContainer.nativeElement).getPropertyValue('grid-row-gap') );  // 10px
    // tslint:disable-next-line: radix
    const rowHeight = parseInt( window.getComputedStyle(this.gridContainer.nativeElement).getPropertyValue('grid-auto-rows') ); // 40px
    // const rowSpan = Math.ceil( (item.getBoundingClientRect().height + rowGap ) / (rowHeight + rowGap) );
    const rowSpan = Math.ceil( (item[`children`][0].getBoundingClientRect().height + rowGap ) / (rowHeight + rowGap) );
    // console.log(rowSpan);
    item.style.gridRowEnd = 'span ' + rowSpan;  // Ajusta el final de la fila en la grilla.
  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

}
