import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UserGuard} from "./user.guard";

const routes: Routes = [
    {path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [UserGuard]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
