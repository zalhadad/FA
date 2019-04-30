import {AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {Platform} from "@ionic/angular";
import {Product, TVA, UNIT} from "../../../models/product";
import {FamiliesService} from "../../../providers/families.service";
import {BrandsService} from "../../../providers/brands.service";
import {ProductsService} from "../../../providers/products.service";
import {Dialogs} from "@ionic-native/dialogs/ngx";
import {ActivatedRoute, Router} from "@angular/router";
import {BarcodeScanner, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";
import {Observable} from "rxjs";
import {Brand} from "../../../models/brand";

@Component({
    selector: 'app-new-product',
    templateUrl: './new-product.component.html',
    styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

    product: Product;
    cordova: boolean;
    TVA5: TVA = TVA.FIVE;
    TVA20: TVA = TVA.TWENTY;
    UNITK: UNIT = UNIT.K;
    UNITL: UNIT = UNIT.L;
    private brandsList: Observable<Brand[]>;

    constructor(private platform: Platform,
                private route: ActivatedRoute,
                private router: Router,
                public families: FamiliesService,
                public brands: BrandsService,
                public productService: ProductsService,
                private dialog: Dialogs,
                private camera: Camera,
    ) {
        this.product = new Product()
        this.platform.ready().then((v) => {
            this.cordova = v === 'cordova';
        })
    }

    ngOnInit(): void {
        this.brandsList = this.brands.get();
        this.route.data.subscribe(data => {
            if (data.code) {
                this.product.gtin = data.code.text;
                this.product.gtinFormat = data.code.format;
            } else {
                this.router.navigateByUrl('/');
            }
        });
    }


    picture() {
        if (this.cordova) {
            const opt: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.PNG,
                mediaType: this.camera.MediaType.PICTURE,
            };
            this.camera.getPicture(opt).then((v) => {
                this.product.image = 'data:image/jpeg;base64,' + v
            })
        }
    }

    add() {
        this.productService.add(this.product).subscribe(() => {
            this.dialog.alert('Produit ajouté').then(() => {
                this.router.navigateByUrl('/');
            });
        }, (e) => {
            this.dialog.alert(e);
        });
    }

    balancedToggled() {
        this.product.weight = null;
        if (this.product.shouldBalanced) {
            this.product.unit = UNIT.K;
        }
    }
}
