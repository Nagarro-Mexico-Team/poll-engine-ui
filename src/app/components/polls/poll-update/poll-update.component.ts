import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Poll } from '../../../models/poll';

@Component({
  selector: 'app-poll-update',
  templateUrl: './poll-update.component.html',
  styleUrls: ['./poll-update.component.css']
})
export class PollUpdateComponent implements OnInit {
  @Input() model: Poll;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  doOnSavePoll(event) {
    this.onUpdate.emit(event);
  }

  doOnClose(event) {
    this.onClose.emit(event);
  }

}
