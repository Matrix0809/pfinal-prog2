import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaInventarioPage } from './lista-inventario.page';

const routes: Routes = [
  {
    path: '',
    component: ListaInventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaInventarioPageRoutingModule {}
