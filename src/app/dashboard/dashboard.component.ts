import {Component, OnInit} from '@angular/core';
import {BarcodeScanner, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    private cordova: boolean;

    constructor(private platform: Platform,
                private scanner: BarcodeScanner,
                private router: Router,
    ) {
    }

    ngOnInit() {
        this.platform.ready().then((v) => {
            this.cordova = v === 'cordova';
        })
    }

    addProduct() {
        if (this.cordova) {
            this.scanner.scan({
                orientation: 'portrait',
                disableAnimations: true,
                showTorchButton: true,
                showFlipCameraButton: false,
                resultDisplayDuration: 0,
            }).then((v: BarcodeScanResult) => {
                if (!v.cancelled) {
                    this.router.navigate(["/new-product"], {state: {code: v,}});
                }
                return false;
            })
        } else {
            this.router.navigate(["/new-product"], {state: {code: {text: "5901234123457", format: 'EAN_13'},}});
        }
    }

}
