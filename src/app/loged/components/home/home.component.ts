import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, Renderer2 } from '@angular/core';

// media query material design.
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('grid') grid: ElementRef;
  @ViewChildren('hijos') hijos: QueryList<any>;

  // col = 3;

  collectionCards = [
    { titulo: 'En muelle',    imagen: 'Grafico estadistico', dato: 80 },
    { titulo: 'En ruta',      imagen: '', dato: 89 },
    { titulo: 'En taller',    imagen: '', dato: 200 },
    { titulo: 'Ingreso Mes',  imagen: '', dato: 250 },
    { titulo: 'En taller',    imagen: '', dato: 45 },
    { titulo: 'En muelle',    imagen: '', dato: 70 }
  ];

  collectionCardsHorizontalScroll: any [] = [
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 },
    { titulo: 'En muelle',    imagen: '', dato: 70 }
  ];

  layoutChanges$: Subscription; // Contiene la suscripcion de un observable.

  // 1
  constructor( private breakpointObserver: BreakpointObserver, private r2: Renderer2 ) {
  }

  // 2
  ngOnInit(): void {
    // this.breakpointsGrid();
  }

  // 3
  ngAfterViewInit() {
  }

  ngOnDestroy(): void {
    // this.layoutChanges$.unsubscribe();
  }

// ====== Puntos de ruptura del grid
  breakpointsGrid() {

    /*
     // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
     this.layoutChanges$ = this.breakpointObserver.observe([
      Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium // Mobile, Mobile, Table
    ]).subscribe({
      next: (res) => {
        console.log(res);
        const extrasmall = res[`breakpoints`][`(max-width: 599.99px)`];
        const small = res[`breakpoints`][`(min-width: 600px) and (max-width: 959.99px)`];
        const medium = res[`breakpoints`][`(min-width: 960px) and (max-width: 1279.99px)`];

        if (extrasmall) {
          console.log(extrasmall, this.col);
          this.col = 1;
          this.xs = true;
          this.md = false;
          this.lg = false;
        } else if (small) {
          console.log(smal, this.coll);
          this.col = 2;
          this.md = true;
          this.xs = false;
          this.lg = false;

        } else if (medium){
          console.log(medium, this.col);
          this.col = 3;
          this.lg = true;
          this.md = false;
          this.xs = false;
        } else {
          // this.columns = 4;
        }
        // this.isMobile ? this.columns = 1 : this.columns = 4;
      },
      error: (err) => console.error(err.message),
      complete: () => { }
    });
  } */
  }

}
