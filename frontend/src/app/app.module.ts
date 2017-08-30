import { AppRoutingModule } from './app.routh.module';
import { AuthGuard } from './guard/auth.guard';
import { ConfigurationService } from './configuration/configuration.service';
import { LoginModule } from './login/login.module';
import { GalleryModule } from './gallery/gallery.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainPresentationComponent } from './presentation/main-presentation/main-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPresentationComponent
  ],
  imports: [
    BrowserModule,
    GalleryModule,
    HttpModule,
    FormsModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RequestOptions, useClass: ConfigurationService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
