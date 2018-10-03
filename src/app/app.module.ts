import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { LongPressModule } from 'ionic-long-press';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewProductPage } from '../pages/new-product/new-product';
import { AssociatePage } from '../pages/associate/associate';
import { BrandPage } from '../pages/brand/brand';
import { BrandsProvider } from '../providers/brands/brands';
import { HttpClientModule } from '@angular/common/http';
import { FamiliesProvider } from '../providers/families/families';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewProductPage,
    AssociatePage,
    BrandPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    LongPressModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewProductPage,
    AssociatePage,
    BrandPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BrandsProvider,
    FamiliesProvider
  ]
})
export class AppModule {}
