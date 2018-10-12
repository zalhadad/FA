import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }
  add(product : Product) {
    console.log(product);
  }

}
