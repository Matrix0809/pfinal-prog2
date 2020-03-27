import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ProductInfo} from './productInfo.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  

  constructor(private http: HttpClient) { }
  
  api = 'https://finalprog2api.azurewebsites.net/api';

  getAllProducts() {
    const path = `${this.api}/product`;
    return this.http.get<ProductInfo[]>(path);
  }

  getProduct(id: string) {
    const path = `${this.api}/product/${id}`;
    return this.http.get<ProductInfo>(path);
  }

  updateProduct(product: ProductInfo) {

    const path = `${this.api}/product`;
    return this.http.put<ProductInfo>(path, product);
  }

  deleteProduct(id: string) {
    const path = `${this.api}/product/${id}`;
    return this.http.delete(path);
  }

  createProduct(product: ProductInfo) {
    const path = `${this.api}/product`;
    return this.http.post(path, product);
  }


}

