import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Output() update: EventEmitter<{}> = new EventEmitter();
  @Input() show: {};
  constructor() { }

  ngOnInit() {
  }

  /**
   * select show to detail
   */
  private detail() {
    this.update.emit(this.show);
  }

  private like(show: any) {
    console.log(show);
  }

}
