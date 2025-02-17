import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ProductApi } from '../model/ProductApi';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listProducts: ProductApi[]=[];
  constructor(private apiService: ApiService){
    this.llenarData();
  }
  llenarData(){
    this.apiService.getProducts().subscribe(listProducts=>this.listProducts=listProducts);
  }
  
}
 