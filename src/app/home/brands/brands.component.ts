import {Component, OnInit} from '@angular/core';
import {BrandsService} from "../../providers/brands.service";
import * as stringSimilarity from 'string-similarity';
import {Brand} from "../../models/brand";
import {ActivatedRoute} from "@angular/router";
import {Dialogs} from "@ionic-native/dialogs/ngx";
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent implements OnInit {

    name = new FormControl(null, [Validators.required]);
    brandsList: Array<Brand>;

    constructor(public route: ActivatedRoute, public brands: BrandsService, private dialog: Dialogs) {
        this.brandsList = [];
    }

    ngOnInit(): void {
        this.route.data.subscribe(data => {
            this.update(data.marque);
        })
    }

    addBrand(event: Event) {
        event.preventDefault();
        const similarity = stringSimilarity.findBestMatch(this.name.value.toLocaleLowerCase(), this.brandsList.map(b => b.name.toLocaleLowerCase()));

        if (similarity.bestMatch.rating > 0.4) {
            this.dialog.confirm(
                this.name.value + ' & ' + this.brandsList[similarity.bestMatchIndex].name + ' sont presque similaires. êtes vous sûr de vouloir l\'ajouter ?',
                'Confirmation ! ',
                [
                    'Ajouter',
                    'Annuler',
                ]
            ).then((v) => {
                if (v) {
                    this.brands.add(this.name.value).subscribe(() => this.update());
                }
            });
        } else {
            this.brands.add(this.name.value).subscribe(() => this.update());

        }
    }


    update(marque?) {
        this.brands.get().subscribe(l => this.brandsList = l);
        this.name.setValue(marque);
        if (!marque) {
            this.name.markAsUntouched();
        }
    }
}
