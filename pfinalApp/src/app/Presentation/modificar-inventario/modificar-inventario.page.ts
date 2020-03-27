import { Component, OnInit } from '@angular/core';
import { ProductInfo } from '../../Services/productInfo.class';
import { ProductsService } from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modificar-inventario',
  templateUrl: './modificar-inventario.page.html',
  styleUrls: ['./modificar-inventario.page.scss'],
})
export class ModificarInventarioPage implements OnInit {

  producto: ProductInfo = {
    id: '',
    nombre: '',
    cantidad: 0,
    precio: 0,
    categoria: '',
    descripcion: '',
    idReferencia: ''
  }


  productoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
    private productsService: ProductsService, private loadingController: LoadingController) {

  }

  ngOnInit() {
    this.productoId = this.route.snapshot.params['id'];
    if (this.productoId) {
      this.loadProduct();
    }
  }

  async loadProduct() {
    const loading = await this.loadingController.create({
      message: 'Cargando....'
    });
    await loading.present();
    this.productsService.getProduct(this.productoId).subscribe(
      productos => {
        this.producto = productos;
        loading.dismiss();
      });

  }

  async modifyProducto() {
    const loading = await this.loadingController.create({
      message: 'Actualizando....'
    });
    await loading.present();

    this.productsService.updateProduct(this.producto).subscribe(
      error => {
        
        if (error) {
          
          this.nav.navigateForward('/lista-inventario');
        }
      });
      loading.dismiss();
  }

}
