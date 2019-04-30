import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Invotory} from "../models/Invotory";
import {Product} from "../models/product";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {


    baseURI = environment.api + 'products'

    constructor(public http: HttpClient) {
    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseURI);
    }

    get(code: string): Observable<Product> {
        return this.http.get<Product>(this.baseURI + "/" + code);
    }

    add(product: Product) {
        return this.http.post(this.baseURI, product)
    }

    invotory(data: Invotory) {
        return this.http.post(this.baseURI + '/' + data.code, data);
    }
}
