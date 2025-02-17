import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../model/Product';
import { CarritoService } from '../carrito.service';
import { ProductApi } from '../model/ProductApi';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private carritoService: CarritoService){}
  @Input() product: ProductApi={
    title: '',
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
  };
  AvisoProducto: string='';
  @Input() btnAgregar: boolean=false;
  @Input() btnQuitar: boolean=true;
  @Output() productoSeleccionado: EventEmitter<ProductApi>= new EventEmitter<ProductApi>();
  @Output() agregarProductoSeleccionado:  EventEmitter<ProductApi>= new EventEmitter<ProductApi>();
  @Output() quitarProductoSeleccionado: EventEmitter<ProductApi>= new EventEmitter<ProductApi>();
   ProductoSeleccinado(){
    this.productoSeleccionado.emit(this.product);
   }
   AgregarAlCarritoSeleccinado(){
      this.btnAgregar=true;
      this.agregarProductoSeleccionado.emit(this.product);
      this.btnQuitar=false;
   }
   QuitarDelCarritoSeleccionado(){
    this.btnQuitar=true;
    this.quitarProductoSeleccionado.emit(this.product);
    this.btnAgregar=false;
 }
}
