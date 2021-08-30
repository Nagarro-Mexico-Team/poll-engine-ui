import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Poll } from '../../../models/poll';

@Component({
  selector: 'app-poll-view',
  templateUrl: './poll-view.component.html',
  styleUrls: ['./poll-view.component.css']
})
export class PollViewComponent implements OnInit {
  @Input() model: Poll;
  @Input() crudMode: string;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }


  doOnClose(event) {
    this.onClose.emit(event);
  }

}
