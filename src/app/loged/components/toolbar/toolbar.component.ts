import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

// Media query grilla material design
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @Output() toggleSidebar = new EventEmitter<void>(); // Ejecuta funcion sin enviar parametros (void)
  layoutChanges$: Subscription;

  public extrasmall: boolean;
  public small: boolean;
  public medium: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointsGrid();
  }

  ngOnDestroy(): void {

  }

  toggleSidebarAction() {
    this.toggleSidebar.emit();
  }

  // Puntos de ruptura del grid
  breakpointsGrid() {

    // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    this.layoutChanges$ = this.breakpointObserver.observe([
     Breakpoints.XSmall, // Mobile
     Breakpoints.Small,  // Mobile
     Breakpoints.Medium  // Table
   ]).subscribe({
     next: (res) => {
       // console.log(res);
       this.extrasmall = res[`breakpoints`][`(max-width: 599.99px)`];
       this.small = res[`breakpoints`][`(min-width: 600px) and (max-width: 959.99px)`];
       this.medium = res[`breakpoints`][`(min-width: 960px) and (max-width: 1279.99px)`];

       // this.isMobile ? this.columns = 1 : this.columns = 4;
     },
     error: (err) => console.error(err.message),
     complete: () => { }
   });
 }
}
