import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'products', redirectTo: ''},
    {path: 'product/:id', component: ProductDetailComponent},
    {path: 'usuario', component: UsuarioComponent},
];
