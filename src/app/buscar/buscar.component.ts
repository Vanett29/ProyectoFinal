import { Component, ImportProvidersSource, Input, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../product.service';
import { Product } from '../model/Product';
import { ProductosTenis } from '../model/ProductosTenis';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css',

})
export class BuscarComponent {
   bcategoria= new FormControl('');
   listaBuscados:Product[]=[];
   listaTenis: Product[]=ProductosTenis;

    buscarXcategoria(): void
    {   
         console.log('Buscar por categoria:'+ this.bcategoria.value);
         this.listaBuscados=this.listaTenis.filter(t=> t.genero===this.bcategoria.value);
         console.log('Lista de Tenis Buscar',this.listaBuscados);
         
    }

}
