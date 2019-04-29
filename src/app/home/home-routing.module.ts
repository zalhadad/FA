import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home.component";
import {BrandsComponent} from "./brands/brands.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'brands', component: BrandsComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
