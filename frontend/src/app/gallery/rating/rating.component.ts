import { Component, OnInit, Input } from '@angular/core';
import { RatingModule } from 'ngx-rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() stars: number;
  constructor() { }

  ngOnInit() {
  }

}
