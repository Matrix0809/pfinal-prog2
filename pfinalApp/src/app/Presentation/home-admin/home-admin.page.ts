import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, NumericValueAccessor} from '@ionic/angular';
import {ProductsService} from '../../Services/products.service'

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  constructor(public router: Router,
    public menuController: MenuController,
    public productsService: ProductsService) {
      this.loadCantidad();
     }

  cantidad: number;


  pages: Array<any> =[
    {
      title: 'Lista de Inventario',
      url: './lista-inventario',
      icon: 'cube-outline'
    },
    {
      title: 'Agregar Productos',
      url: './agregar-inventario',
      icon: 'add-circle-outline'
    }
  ]

  ngOnInit() {
    this.loadCantidad();
  }

  loadCantidad(){
    this.productsService.getAllProducts().subscribe(
      productos =>{
        this.cantidad = productos.length;
      });
  }

  goToPage(p){
    this.router.navigate([p.url])
  }

  openFirst(){
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }

  goToList(){
    this.router.navigate(['./lista-inventario'])
  }

}
