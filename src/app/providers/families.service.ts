import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Family, SubFamily} from "../models/Family";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class FamiliesService {

    families: BehaviorSubject<Family[]>;
    baseURI = environment.api + 'families'

    constructor(public http: HttpClient) {
        this.families = new BehaviorSubject(null);
        this.update();
    }

    get(): Observable<Family[]> {
        return this.families;
    }

    update() {
        this.http.get<Family[]>(this.baseURI).pipe(map(families => {
            families.sort((a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'}));
            families.forEach(f => f.subFamilies.sort((a, b) => a.name.localeCompare(b.name, undefined, {sensitivity: 'base'})));
            return families;
        })).subscribe(e => this.families.next(e));
    }

    getSub(id): Observable<SubFamily[]> {
        return this.get().pipe(map(families => {
            if (!id) {
                return [];
            }
            const currentFamily = families.find(f => f.id === id);
            return currentFamily && currentFamily.subFamilies.length ? currentFamily.subFamilies : [];
        }));
    }
}
