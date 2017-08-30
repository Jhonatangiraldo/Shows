import { TokenService } from './services/token/token.service';
import { FormsModule } from '@angular/forms';
import { ShowsService } from './services/shows/shows.service';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ShowComponent } from './show/show.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { SearchComponent } from './search/search.component';
import { RatingComponent } from './rating/rating.component';
import { RatingModule } from 'ngx-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { NamePipe } from './pipes/name.pipe';
import { RatingPipe } from './pipes/rating.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    NgxPaginationModule
  ],
  declarations: [
    ModalComponent,
    ShowComponent,
    ShowDetailComponent,
    SearchComponent,
    MainGalleryComponent,
    RatingComponent,
    NamePipe,
    RatingPipe
  ],
  exports: [
    MainGalleryComponent
  ],
  providers: [
    ShowsService,
    TokenService
  ]
})
export class GalleryModule { }
