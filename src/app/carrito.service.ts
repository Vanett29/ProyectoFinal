import { Injectable } from '@angular/core';
import {Product} from './model/Product';
import { ProductApi } from './model/ProductApi';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  title='localStorage';
  nItems: number=0;
  constructor() { }
    AñadirItem(id: string, item: ProductApi): void {
        localStorage.setItem(id, JSON.stringify(item));
        console.log('Se añadió el producto al carrito:', item);
    }
    EliminarItem(key: string): void{
      localStorage.removeItem(key);
      console.log('Se eliminó el producto del carrito', key);
    }
    VerItems(key: string){
      return localStorage.getItem(key); 
      console.log('Se muestra el producto '+ key +'del carrito');      
    }
    LimpiarItems(): void{
      localStorage.clear();
      console.log('Se eliminaron todos los productos del carrito');
    }
    ContadorItems(): void{
      this.nItems=localStorage.length;
      console.log('Tiene '+this.nItems +' Productos agregados al carrito');             
    }


}
