import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Storage} from "@ionic/storage";
import {User} from "../models/user";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    baseURI = environment.api + 'users'

    constructor(public http: HttpClient, private storageService: Storage) {
    }

    get(): Observable<User[]> {
        return this.http.get<User[]>(this.baseURI);
    }

    addUser(user: User) {
        return this.http.post<User[]>(this.baseURI, user);
    }

    authState(): Observable<boolean> {
        return from(this.storageService.get('authData')).pipe(map((v) => !!v));
    }

    logout() {
        return this.storageService.remove('authData');
    }

    login(username: string, password: string) {
        return this.storageService.set('authData', btoa(encodeURIComponent(username) + ':' + encodeURIComponent(password)));
    }

    getloginInfo() {
        return from(this.storageService.get('authData'))
    }
}
