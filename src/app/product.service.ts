import { Injectable } from '@angular/core';
import {Product} from './model/Product';
import { Observable, of } from 'rxjs';
import { ProductosTenis } from './model/ProductosTenis';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  nItems: number=0;
  productL: any;
  listaProductos: Product[]=ProductosTenis;
  
  constructor(){
  }
      saveProduct(product: Product): Observable<Product>{
          return of(this.listaProductos[0]);
      }
       getProducts(): Observable<Product[]>
       {
          return of(this.listaProductos);
       }
       getProductById(key: number): Observable<Product| undefined>
       {
           return of(this.listaProductos.find(product=> product.key==key));
       }
       updateProduct(product: Product): Observable<Product>{
        return of(product);
        }
       delateProduct(key: number): Observable<boolean>{
          return of(true);
        }
 
}
