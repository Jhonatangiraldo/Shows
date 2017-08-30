import { ShowsService } from './../services/shows/shows.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-main-gallery',
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.css']
})

export class MainGalleryComponent implements OnInit {

  private page: number;
  private shows: any[];
  public selectedShow: {};
  public nameShow: string;
  public rating: number;
  constructor(private showService: ShowsService) { }

  ngOnInit() {
    this.page = 1;
    this.getShowsInformation();
  }

  /**
   * get the shows information
   */
  private getShowsInformation() {
    this.showService.getShowsInformation().subscribe((response: Response) => {
      this.shows = response.json();
      this.shows = this.shows;
    });
  }

  /**
   * select show to detail
   */
  private detailShow(show: {}) {
    this.selectedShow = show;
  }

  private updatePipe(event: any) {
    if (+event.type === 1) {
        this.nameShow = event.value;
    } else {
        this.rating = event.value;
    }
  }


}
