import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, LoadingController, NavController} from '@ionic/angular'
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.page.html',
  styleUrls: ['./lista-inventario.page.scss'],
})
export class ListaInventarioPage implements OnInit {

  items: any[];

  temporalItems: any[];


  textobuscar: '';

  constructor(public router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public productsService: ProductsService,
    public nav: NavController) { 
      this.productsService.getAllProducts().subscribe(
        productos => {this.items = productos
        });
    }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(
      productos => {this.temporalItems = productos});
    this.updatelist();
  }

  updatelist() {
    this.items = this.temporalItems;
  }

  filterItemsData(ev: any) {
    this.updatelist();
    const val = ev.target.value.toLowerCase();
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {

        return (item.nombre.toLowerCase().includes(val.toLowerCase()))
          || (item.idReferencia.toLowerCase().includes(val.toLowerCase()))
          || (item.id.toLowerCase().includes(val.toLowerCase()));
      })
    }

  }

  async delete(id) {
    const alert = await this.alertController.create({
      header: 'Eliminar!',
      message: '¿Está seguro de que desea eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmacion de cancelacion');
          }
        }, {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirmacion de eliminacion');
            this.deleteConfirmed(id);
          }
        }
      ]
    });

    await alert.present();

  }

  async deleteConfirmed(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando....'
    })
    loading.present();
    this.productsService.deleteProduct(id).subscribe(
      error =>{
        console.log(error);
      }
    );
    loading.dismiss().then(()=>{
      this.nav.navigateForward('/home-admin');
    });
    
  }

}
