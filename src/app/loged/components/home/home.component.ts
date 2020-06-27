import { Component, OnInit, OnDestroy } from '@angular/core';

// media query material design.
import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  layoutChanges$: Subscription; // Contiene la suscripcion de un observable.
  public columns = 4;

  constructor( private breakpointObserver: BreakpointObserver ) {
  }

  ngOnInit(): void {
    this.breakpointsGrid();
  }

  ngOnDestroy(): void {
    this.layoutChanges$.unsubscribe();
  }

  // ====== Puntos de ruptura del grid
  breakpointsGrid() {
     // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
     this.layoutChanges$ = this.breakpointObserver.observe([
      Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium // Mobile, Mobile, Table
    ]).subscribe({
      next: (res) => {
        // console.log(res);
        const extrasmall = res[`breakpoints`][`(max-width: 599.99px)`];
        const small = res[`breakpoints`][`(min-width: 600px) and (max-width: 959.99px)`];
        const medium = res[`breakpoints`][`(min-width: 960px) and (max-width: 1279.99px)`];

        if (extrasmall) {
          this.columns = 1;
        } else if (small) {
          this.columns = 2;
        } else if (medium){
          this.columns = 3;
        } else {
          this.columns = 4;
        }
        // this.isMobile ? this.columns = 1 : this.columns = 4;
      },
      error: (err) => console.error(err.message),
      complete: () => { }
    });
  }
}

