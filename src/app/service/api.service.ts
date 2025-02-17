import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { Product } from '../model/Product';
import { ProductApi } from '../model/ProductApi';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 urlApi: string ='https://fakestoreapi.com/products';
  listaProductos: ProductApi[]=[];
  constructor( private http: HttpClient) { 
  }
  public getProducts(): Observable<ProductApi[]>{
    return this.http.get<any>(this.urlApi).pipe(res=>res);
  }
  getProductById(id: number): Observable<ProductApi| undefined>
  {
      return this.http.get<any>(this.urlApi+'/'+id).pipe(res=>res);
  }
}
