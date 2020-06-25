import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogedRoutingModule } from './loged-routing.module';  // Archivo de rutas del componente.
import { MaterialModule } from './../material/material.module'; // Modulo material independiente.

// ====== Componentes
import { SidenavComponent } from './components/sidenav/sidenav.component';  // Componente Sidenav.
import { ToolbarComponent } from './components/toolbar/toolbar.component';  // Toolbar
import { HomeComponent } from './components/home/home.component';
import { CasosComponent } from './components/casos/casos.component';


@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    CasosComponent],
  imports: [
    CommonModule,
    LogedRoutingModule,
    MaterialModule
  ]
})
export class LogedModule { }
