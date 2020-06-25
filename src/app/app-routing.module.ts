import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ====== Lazy load
const routes: Routes = [
  {
    path: 'loged',
    loadChildren: async () => {
      const objModLoged = await import ('./loged/loged.module');
      return  objModLoged.LogedModule;
    }
  },
  {
    path: '**', redirectTo: 'loged', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
