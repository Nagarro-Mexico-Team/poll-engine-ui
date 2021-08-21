import { Component, OnInit } from '@angular/core';
import { PollsService, Poll } from '../../../services/polls.service';

@Component({
	selector: 'app-polls-list',
	templateUrl: './polls-list.component.html',
	styleUrls: ['./polls-list.component.css']
})
export class PollsListComponent implements OnInit {
	dataSource: any[] = [];
	statusesList = {
		1: "Created",
		2: "Scheduled",
		3: "Presented",
		4: "Evaluated",
		5: "Completed",
	};
	poll: Poll;
	mode: string = "list";
	dataSavedOK: boolean;


	constructor(private pollsService: PollsService) {
		this.poll = new Poll();
		this.dataSavedOK = false;
	}

	ngOnInit(): void {
		this.pollsService.getPolls()
		 	.subscribe(data => {
		 		console.log(data);
		 		this.dataSource = data;
		 	});
	}

	doCreateNewPoll(event) {
		event.preventDefault();
		this.mode = 'create';
	}

	doOnSavePoll(data: any) {
		this.dataSavedOK = true;
		this.dataSource.push(data);
		this.mode = 'list';
	}

	doOnCloseCreatePoll(event) {
		this.mode = 'list';
	}

}
