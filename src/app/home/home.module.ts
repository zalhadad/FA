import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeComponent} from './home.component';
import {NewProductComponent} from "./products/new-product/new-product.component";
import {BrandsComponent} from "./brands/brands.component";
import {HomeRoutingModule} from "./home-routing.module";
import {Dialogs} from "@ionic-native/dialogs/ngx";
import {Camera} from "@ionic-native/camera/ngx";
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {DashboardComponent} from "../dashboard/dashboard.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeRoutingModule,
        ReactiveFormsModule,
    ],
    declarations: [
        HomeComponent,
        NewProductComponent,
        BrandsComponent,
        DashboardComponent,
    ],
    providers: [
        Dialogs,
        Camera,
        BarcodeScanner,
    ]
})
export class HomePageModule {
}
