import { Component, Input, Output} from '@angular/core';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../model/Product';
import { CommonModule } from '@angular/common';
import { ProductApi } from '../model/ProductApi';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
   product: ProductApi| undefined;
    constructor(private ApiService: ApiService, private router: Router, private activeRoute: ActivatedRoute){
    const id=Number(this.activeRoute.snapshot.paramMap.get('id'));
    console.log('numero de la ruta: ',id);
    this.ApiService.getProductById(id).subscribe(product=> this.product= product);
    console.log('producto getproductbyid: ',this.product);
  }
  goToListProduct()
  {
       window.history.back();
  }
}
