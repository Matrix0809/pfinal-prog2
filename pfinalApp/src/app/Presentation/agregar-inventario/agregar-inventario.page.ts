import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
import {ProductsService} from '../../Services/products.service';
import {ProductInfo} from '../../Services/productInfo.class';
import { empty } from 'rxjs';

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.page.html',
  styleUrls: ['./agregar-inventario.page.scss'],
})
export class AgregarInventarioPage implements OnInit {

  producto: ProductInfo={
    id: '',
    nombre: '',
    cantidad: 0,
    precio: 0.00,
    categoria: '',
    descripcion: '',
    idReferencia: ''
  }

  

  constructor(public router: Router,
    public nav: NavController,
    public loading: LoadingController,
    public productsService: ProductsService) { }

  ngOnInit() {
  }

  async addProduct(){
    const loading = await this.loading.create({
      message: 'Cargando...'
    });
    loading.present;
    this.productsService.createProduct(this.producto).subscribe(
      error =>{ 
        console.log(error);
        if(error)
        {
          loading.dismiss();
          this.nav.navigateForward('/home-admin')
        }
      });
    
    
  }

}
