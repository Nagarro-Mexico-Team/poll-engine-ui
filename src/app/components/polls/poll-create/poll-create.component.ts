import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Poll } from '../../../models/poll';

@Component({
	selector: 'app-poll-create',
	templateUrl: './poll-create.component.html',
	styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
	@Input() poll: Poll;
	@Output() onSave: EventEmitter<any> = new EventEmitter<any>();
	@Output() onSaveAndContinue: EventEmitter<any> = new EventEmitter<any>();
	@Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();

	model: Poll;

	constructor() { 
		this.model = new Poll();
	}

	ngOnInit(): void {
	}

	doOnSavePoll(event) {
		this.onSave.emit(event);
	}

	doOnSaveAndContinue(event) {
		this.onSaveAndContinue.emit(event);
	}

	doOnDeletePoll(event) {
		this.onDelete.emit(event);
	}

	doOnClose(event) {
		this.onClose.emit(true); 
	}

}
