import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter<void>(); // Ejecuta funcion sin enviar parametros (void)

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebarAction() {
    this.toggleSidebar.emit();
  }
}
