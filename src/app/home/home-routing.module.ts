import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {BrandsComponent} from "./brands/brands.component";
import {NewProductComponent} from "./products/new-product/new-product.component";
import {DashboardComponent} from "../dashboard/dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'brands', component: BrandsComponent},
            {path: 'new-product', component: NewProductComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
