import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ======= Componentes para este modulo.
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CasosComponent } from './components/casos/casos.component';

// Rutas componentes del modulo
const routes: Routes = [
  // rutas hijas de sidenav component
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'casos', component: CasosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogedRoutingModule { }
