import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NewProductPage } from '../new-product/new-product';
import { AssociatePage } from '../associate/associate';
import { BrandPage } from '../brand/brand';
import { BrandsProvider } from '../../providers/brands/brands';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cordova = false;
  constructor(private platform: Platform, public navCtrl: NavController, private brands: BrandsProvider, private scanner: BarcodeScanner) {
    this.platform.ready().then((v) => {
      this.cordova = v === 'cordova';
    })
  }

  addProduct(){
    if (this.cordova) {
      this.scanner.scan({
        orientation: 'portrait',
        disableAnimations : true,
        showTorchButton: true,
        showFlipCameraButton: false,
        resultDisplayDuration : 0,
      }).then((v: BarcodeScanResult) => {
        if (!v.cancelled) {
          this.navCtrl.push(NewProductPage, v);
        }
        return false;
      })
    } else {
      this.navCtrl.push(NewProductPage, {text : "5901234123457", format : 'EAN_13'})
    }
  }
  associate(){
    this.navCtrl.push(AssociatePage);
  }
  newBrand(){
    this.brands.update();
    this.navCtrl.push(BrandPage);
  }

}
