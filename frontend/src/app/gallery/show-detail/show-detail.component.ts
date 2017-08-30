import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  @Input() selectedShow: {};
  constructor() { }

  ngOnInit() {
  }

}
