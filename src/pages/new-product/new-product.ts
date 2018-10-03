import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import  { Product } from '../../models/product';
import { FamiliesProvider } from '../../providers/families/families';
import { Camera } from '@ionic-native/camera';
import { BrandsProvider } from '../../providers/brands/brands';
/**
 * Generated class for the NewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-product',
  templateUrl: 'new-product.html',
})
export class NewProductPage {
  product: Product;
  selectedFamily = {}
  cordova: boolean;
  constructor(private platform: Platform,
      public navCtrl: NavController,
      public navParams: NavParams,
      public families : FamiliesProvider,
      public brands : BrandsProvider,
       private camera: Camera
       ) {
    this.product = new Product()
    this.product.gtin = this.navParams.get('text')
    this.product.gtinFormat = this.navParams.get('format')
    this.brands.update();
    this.platform.ready().then((v) => {
      this.cordova = v === 'cordova';
    })
  }

  ionViewDidLoad() {
    console.log(this.product.toString());
  }
  selectFamily(e) {
    this.families.get().subscribe(families => {
      this.selectedFamily = families.find(f => f.id === e)
      this.product.subFamily = ''
      console.log(this.selectedFamily);
    })
  }

  picture(){
    if (this.cordova) {
      this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      }).then((v) => {
        this.product.image = 'data:image/jpeg;base64,' + v
      })
    }
  }

}
