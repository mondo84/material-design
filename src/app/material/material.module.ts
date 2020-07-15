import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ======= Modulos de componentes material design
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';   // Boton.
import { MatDividerModule } from '@angular/material/divider'; // Barra divisora.
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidenav.
import { MatToolbarModule } from '@angular/material/toolbar'; // toolbar Navbar.
import { MatIconModule } from '@angular/material/icon';       // Iconos de material design.
import { MatListModule } from '@angular/material/list';       // Listado de material.
import { MatCardModule } from '@angular/material/card';       // Card.
import { MatGridListModule } from '@angular/material/grid-list';  // grid.
import { MatMenuModule } from '@angular/material/menu';           // Menu.
import { MatExpansionModule } from '@angular/material/expansion'; // Collapse.
import { MatTableModule } from '@angular/material/table';         // Tabla.
import { MatDialogModule } from '@angular/material/dialog';       // Modal.
import { MatTabsModule } from '@angular/material/tabs';           // Tabs.
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Spinner.
import { MatPaginatorModule } from '@angular/material/paginator'; // Paginador.
import { MatTooltipModule } from '@angular/material/tooltip';     // Tooltip.

// ====== Importaciones de CDK material design
import { CdkScrollableModule } from '@angular/cdk/scrolling'; // Contenedor con scroll
import { DragDropModule } from '@angular/cdk/drag-drop';  // Arrastrar y soltar componentes dentro de un contenedor.

// ====== Importacion de layout breakpoint (no es de materia design). (Recomendado)
// import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

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
    MatMenuModule,
    CdkScrollableModule,
    DragDropModule,
    MatExpansionModule,
    LayoutModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTooltipModule
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
    MatMenuModule,
    CdkScrollableModule,
    DragDropModule,
    MatExpansionModule,
    LayoutModule,
    MatTableModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
