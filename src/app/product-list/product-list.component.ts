import { Component, Output , EventEmitter, Input, OnInit} from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ProductService } from '../product.service';
import { FormsModule, ReactiveFormsModule , FormControl} from '@angular/forms';
import { BuscarComponent } from "../buscar/buscar.component";
import { UsuarioComponent } from "../usuario/usuario.component";
import { Product } from '../model/Product';
import { ProductosTenis } from '../model/ProductosTenis';
import { Router, RouterModule } from '@angular/router';
import { CarritoService } from '../carrito.service';
import { ApiService } from '../service/api.service';
import { ProductApi } from '../model/ProductApi';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule, FormsModule, RouterModule, NgxPaginationModule, FormsModule, ReactiveFormsModule], 
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  bcategoria= new FormControl('');
  botoncategoria: boolean=false;
  usuariob:boolean =false;
  keyProductoCarrito: number=0;
  public page: number=1;
  listaBuscados:ProductApi[]=[];
  @Output() AvisarSeleccionadoUsuario =new EventEmitter<string>();
  listProducts: ProductApi []=[];
  constructor(private carritoService: CarritoService, private apiService: ApiService, private route:Router){
    this.llenarProductosApi();
  }
  llenarProductosApi(){
    this.apiService.getProducts().subscribe(listProducts=>this.listProducts=listProducts);
  }
  buscarXcategoria(): void
      {   
           console.log('Buscar por categoria:'+ this.bcategoria.value);
           this.listaBuscados=this.listProducts.filter(t=> t.category===this.bcategoria.value);
           console.log('Lista de categoria buscada',this.listaBuscados);
           
      }
  IrDetalles(productApi: ProductApi){
    console.log('Detalles: ', productApi);
    this.route.navigate(['/product', productApi.id]);
  }
  AgregarAlCarrito(productApi: ProductApi){
      this.carritoService.AñadirItem(String(productApi.id), productApi);
  } 
  QuitarDelCarrito(productApi: ProductApi){
    this.carritoService.EliminarItem(String(productApi.id));
  } 
   MostrarCarrito(){
       this.carritoService.ContadorItems();
   }
   VaciarCarrito()
   {
      this.carritoService.LimpiarItems();
   }
   MostrarUsuario(){
         this.route.navigate(['/usuario']);
   }
}


