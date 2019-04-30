import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AutocompleteResponse} from "../models/autocompleteProduct";
import { environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AutocompleteService {

    baseURI = environment.api + 'autocomplete'

    constructor(public http: HttpClient) {
    }

    findProduct(code: string):  Observable<AutocompleteResponse>{
        return this.http.get<AutocompleteResponse>(this.baseURI + 'product', {params: {code}});
    }
}
