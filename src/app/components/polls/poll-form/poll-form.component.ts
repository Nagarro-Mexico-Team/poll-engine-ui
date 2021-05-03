import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../../models/poll';
import { GridData } from '../../commons/grids/basic-grid/basic-grid.component';

@Component({
	selector: 'app-poll-form',
	templateUrl: './poll-form.component.html',
	styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

	@Input() poll: Poll;
	gridData: GridData;

	constructor() {
		
	}

	ngOnInit(): void {
		this.prepareGridData();
	}

	prepareGridData() {
		this.gridData = {rows:[],fieldNames: []};
		this.gridData.rows = this.poll.questions.map((question) => {
			return {
				"questionNumber": question.questionNumber,
				"questionText": question.questionText,
				"questionValue": question.questionValue,
				"questionAnswer": question.questionAnswer,
				"questionHint": question.questionHint
			}
		});
		this.gridData.fieldNames = ["questionNumber","questionText",
				"questionValue","questionAnswer","questionHint"]
	}

}