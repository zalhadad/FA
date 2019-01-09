import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  baseURI = 'http://localhost:3000/products'
  products: BehaviorSubject<Array<Product>>;

  constructor(public http: HttpClient) {
    this.products = new BehaviorSubject(null);
    this.update();
  }

  get() : BehaviorSubject<Array<Product>>{
    return this.products;
  }

  update(){
    this.http.get<Array<Product>>(this.baseURI).subscribe(e => this.products.next(e),(e) => console.log(e.message));
  }
  add(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseURI, product)
  }

}
