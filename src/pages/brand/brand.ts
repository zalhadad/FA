import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrandsProvider } from '../../providers/brands/brands';
import * as stringSimilarity from 'string-similarity';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the BrandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brand',
  templateUrl: 'brand.html',
})
export class BrandPage {
  brandsList: any;
  @ViewChild('name') nameEl;
  constructor(public navCtrl: NavController, public navParams: NavParams, public brands: BrandsProvider, private dialog: Dialogs) {
    this.brands.get().subscribe(l => this.brandsList = l);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandPage');
  }
  addBrand(name){
    let similarity;
    if(this.brandsList && this.brandsList.length){
      similarity =  stringSimilarity.findBestMatch(name, this.brandsList.map(b => b.name)).bestMatch;
    }
    if(similarity && similarity.rating > 0.49) {
      this.dialog.confirm(
        name + ' & ' + similarity.target + ' sont presque similaires. êtes vous sûr de vouloir l\'ajouter ?',
        'Confirmation ! ',
        [
          'Ajouter',
          'Annuler',
        ]
        ).then((v) => {
          if(v === 1) {
            this.brands.add(name);
            this.nameEl.value = '';
          }
        })
    } else {
      this.brands.add(name);
      this.nameEl.value = '';
    }
  }

}
