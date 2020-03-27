import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarInventarioPageRoutingModule } from './modificar-inventario-routing.module';

import { ModificarInventarioPage } from './modificar-inventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarInventarioPageRoutingModule
  ],
  declarations: [ModificarInventarioPage]
})
export class ModificarInventarioPageModule {}
