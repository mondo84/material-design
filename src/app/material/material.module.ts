import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======= Modulos de componentes material design
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';   // Boton.
import { MatDividerModule } from '@angular/material/divider'; // Barra divisora.
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidenav.
import { MatToolbarModule } from '@angular/material/toolbar'; // toolbar Navbar
import { MatIconModule } from '@angular/material/icon'; // Iconos de material design.
import { MatListModule } from '@angular/material/list';   // Listado de material.
import { MatCardModule } from '@angular/material/card'; // Card.
import { MatGridListModule } from '@angular/material/grid-list'; // grid.
import { MatMenuModule } from '@angular/material/menu'; // Menu

// ====== Importacion de layout breakpoint (no es de materia design). (Recomendado)
// import { FlexLayoutModule } from '@angular/flex-layout';

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
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
