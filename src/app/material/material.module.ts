import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======= Modulos de componentes material design
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';   // Boton.
import { MatDividerModule } from '@angular/material/divider'; // Barra divisora.
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidenav.
import { MatToolbarModule } from '@angular/material/toolbar'; // toolbar
import { MatIconModule } from '@angular/material/icon'; // Iconos de material design.
import { MatListModule } from '@angular/material/list';   // Listado de material.

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
