import { Component, OnInit } from '@angular/core';

// Arrastrar y soltar.
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// Media query.
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit {

  panelOpenState = false;
  columna1: any [] = [1, 2, 3, 4, 5];
  // columna2: any [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private objMediaQuery: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.objMediaQuery.observe([ Breakpoints.Small ]).subscribe({
      next: (res) => {
        console.log(res.matches);
      },
      error: (err) => { console.error(err.message); }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

}
