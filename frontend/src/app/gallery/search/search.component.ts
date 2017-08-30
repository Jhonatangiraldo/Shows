import { TokenService } from './../services/token/token.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  @Output() update = new EventEmitter();
  public name: string;
  public rating: number;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
      this.name = '';
      this.update.emit({'type': 1, 'value': ''});
      this.update.emit({'type': 2, 'value': ''});
	}

  private updateName() {
    this.update.emit({'type': 1, 'value': this.name});
  }

  private updateRating() {
    this.update.emit({'type': 2, 'value': this.rating});
  }

  private logOut() {
    this.tokenService.logOut();
  }


}
