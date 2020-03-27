import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaInventarioPageRoutingModule } from './lista-inventario-routing.module';

import { ListaInventarioPage } from './lista-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaInventarioPageRoutingModule
  ],
  declarations: [ListaInventarioPage]
})
export class ListaInventarioPageModule {}
