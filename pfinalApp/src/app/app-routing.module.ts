import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Presentation/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'home-admin',
    loadChildren: () => import('./Presentation/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'lista-inventario',
    loadChildren: () => import('./Presentation/lista-inventario/lista-inventario.module').then( m => m.ListaInventarioPageModule)
  },
  {
    path: 'agregar-inventario',
    loadChildren: () => import('./Presentation/agregar-inventario/agregar-inventario.module').then( m => m.AgregarInventarioPageModule)
  },
  {
    path: 'modificar-inventario',
    loadChildren: () => import('./Presentation/modificar-inventario/modificar-inventario.module').then( m => m.ModificarInventarioPageModule)
  },
  {
    path: 'modificar-inventario/:id',
    loadChildren: () => import('./Presentation/modificar-inventario/modificar-inventario.module').then( m => m.ModificarInventarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
