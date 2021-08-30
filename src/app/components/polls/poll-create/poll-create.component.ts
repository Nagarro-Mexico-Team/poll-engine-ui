import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Poll } from '../../../models/poll';
import {PollsService} from '../../../services/polls.service';

@Component({
	selector: 'app-poll-create',
	templateUrl: './poll-create.component.html',
	styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {
	@Output() onSaveAndContinue: EventEmitter<any> = new EventEmitter<any>();
	@Output() onSave: EventEmitter<any> = new EventEmitter<any>();
	@Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
	@Output() onClose: EventEmitter<any> = new EventEmitter<any>();

	model: Poll;

	constructor(private pollsService: PollsService) { 
		this.model = new Poll();
	}

	ngOnInit(): void {
	}

	doOnSavePoll(event) {
		console.log(event);
		this.pollsService.savePoll(event)
			.subscribe(data => {
				this.onSave.emit(data);
			});
		
	}

	doOnSaveAndContinuePoll(event) {
		console.log(event);
		this.pollsService.savePoll(event)
			.subscribe(data => {
				this.onSaveAndContinue.emit(event);
			});
	}

	doOnDeletePoll(event) {
		console.log(event);
		this.onDelete.emit(event);
	}

	doOnClose(event) {
		console.log(event);
		this.onClose.emit(true); 
	}

}
