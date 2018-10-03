import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the FamiliesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FamiliesProvider {

  families: BehaviorSubject<any>;
  baseURI = 'https://fa-intercontinental.herokuapp.com/families'
  constructor(public http: HttpClient) {
    this.families = new BehaviorSubject(null);
    this.update();
  }

  get() : Observable<Array<any>>{
    return this.families;
  }

  update(){
    this.http.get(this.baseURI).subscribe(e => this.families.next(e));
  }

}
