import {Injectable} from '@angular/core';
import {LoadingController} from "@ionic/angular";
import {from} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(private loadingController: LoadingController) {
    }

    show() {
        return from(this.loadingController.create({message: 'Veuillez patienter...'})).pipe(map(loader => from(loader.present()).pipe(map(() => loader))))
    }

}
