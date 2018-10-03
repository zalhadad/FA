import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/*
  Generated class for the BrandsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrandsProvider {
  brands: BehaviorSubject<any>;
  baseURI = 'https://fa-intercontinental.herokuapp.com/brands'

  constructor(public http: HttpClient) {
    this.brands = new BehaviorSubject(null);
    this.update();
  }

  get() : BehaviorSubject<Array<any>>{
    return this.brands;
  }

  update(){
    this.http.get(this.baseURI).subscribe(e => this.brands.next(e),(e) => console.log(e.message));
  }
  add(name){
    this.http.post(this.baseURI, {name,}).subscribe(() => {
      this.update();
    })
  }

}
