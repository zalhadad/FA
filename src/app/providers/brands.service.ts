import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Brand} from "../models/brand";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BrandsService {

    baseURI = environment.api + 'brands'

    constructor(private http: HttpClient) {
    }

    get(): Observable<Brand[]> {
        return this.http.get<Brand[]>(this.baseURI)
    }

    add(name) {
        return this.http.post(this.baseURI, {name,});
    }
}
