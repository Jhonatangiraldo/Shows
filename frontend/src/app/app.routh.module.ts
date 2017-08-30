import { RegisterComponent } from './login/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { MainGalleryComponent } from './gallery/main-gallery/main-gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full'},
    { path: 'gallery', component: MainGalleryComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}