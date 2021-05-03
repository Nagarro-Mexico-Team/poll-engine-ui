import { Component, OnInit } from '@angular/core';
import { Poll } from '../../../models/poll';

@Component({
	selector: 'app-poll-create',
	templateUrl: './poll-create.component.html',
	styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {

	model: Poll;

	constructor() { 
		this.model = new Poll();
	}

	ngOnInit(): void {
	}

}
