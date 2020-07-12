import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit, Renderer2 } from '@angular/core';

// Arrastrar y soltar.
import { CdkDragDrop } from '@angular/cdk/drag-drop';
// Media query.
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ServiceCasoService } from './service-caso.service';

// Modal de material design
import { MatDialog } from '@angular/material/dialog';
import { ModalNewComponent } from '../modales/modal-new/modal-new.component';
import { Observable, Observer } from 'rxjs';

// Paginador Material design
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface TabsI {
  label: string;
  content: string;
}

@Component({
  selector: 'app-casos',
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.scss']
})
export class CasosComponent implements OnInit, AfterViewInit {

  columna: number;
  panelOpenState = false;

  // displayedColumns: string[] = ['ID', 'Nombre'];
  displayedColumns: string[] = ['titulo', 'contenido'];
  columnas = [
    { titulo: 'ID', name: 'titulo'},
    { titulo: 'Nombre', name: 'contenido'}
  ];

  datos: any [] = [];
  /*
  collectionData: any [] = [
    { columna1: 1, columna2: 'Yesid'},
    { columna1: 2, columna2: 'Enrique'},
    { columna1: 3, columna2: 'Davila'},
    { columna1: 4, columna2: 'Sierra'},
    { columna1: 1, columna2: 'Yesid'},
    { columna1: 2, columna2: 'Enrique'},
    { columna1: 3, columna2: 'Davila'},
    { columna1: 4, columna2: 'Sierra'},
    { columna1: 1, columna2: 'Yesid'},
    { columna1: 2, columna2: 'Enrique'}
  ];*/

  // dataSource = new MatTableDataSource<any>(this.datos);
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  listaTabs: Observable<TabsI[]>; // Listado de tabs.

  constructor(private objMediaQuery: BreakpointObserver,
              private r2: Renderer2, private route: Router,
              private sC: ServiceCasoService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cargaTabs();
    this.cargaLista();
    this.dataSource = new MatTableDataSource<any>(this.datos); // Se instancia el data source y se cargan los datos.
    this.dataSource.paginator = this.paginator; // Se relaciona el paginador con los datos de la tabla
    // this.dataSource.sort() = this.sort;      // Se agrega el sort a la tabla.
  }

  cargaTabs() {
    this.listaTabs = new Observable((observer: Observer<TabsI[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'En Ruta',   content: 'Vehiculos circulando'},
          { label: 'En Muelle', content: 'Vehiculos en planta'},
          { label: 'En Taller', content: 'Vehiculos en reparacion'},
        ]);
      }, 3000);
    });
  }

  cargaLista(){
    // = new MatTableDataSource<any>(this.datos)
    this.datos = this.sC.getDatos();  // 4 Registros
  }

  ngAfterViewInit() {
  }

  // Hace seguimiento a los items iterados del ngFor,
  // para no cargar todos los items, sino solo aquel que sea modificado o eliminado
  trackByFn1(index: number, item: any) {
    return index;
  }

  // Hace seguimiento a los items iterados del ngFor,
  // para no cargar todos los items, sino solo aquel que sea modificado o eliminado
  trackByFn2(index: number, item: any) {
    return index;
  }

  // Hace seguimiento a los items iterados del ngFor,
  // para no cargar todos los items, sino solo aquel que sea modificado o eliminado
  trackByFn3(index: number, item: any) {
    return index;
  }

  // Hace seguimiento a los items iterados del ngFor,
  // para no cargar todos los items, sino solo aquel que sea modificado o eliminado
  trackByFn4(index: number, item: any) {
    return index;
  }

  drop(event: CdkDragDrop<string[]>) {
    // Mueve un elemento de un indice en un array. // Indice seleccionado, // indice actua indicado
    // moveItemInArray(this.columna1, event.previousIndex, event.currentIndex);
  }

  msj(): void {
    alert(`Accion`);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalNewComponent);

    setInterval( () => {
      // this.dialog.closeAll();
      dialogRef.close();
    }, 3000);
  }
}
