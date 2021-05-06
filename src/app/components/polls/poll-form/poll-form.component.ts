import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../../models/poll';
import { GridData } from '../../commons/grids/basic-grid/basic-grid.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionFormComponent } from './question-form/question-form.component';


@Component({
	selector: 'app-poll-form',
	templateUrl: './poll-form.component.html',
	styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

	@Input() poll: Poll;
	gridData: GridData;

	constructor(public dialog: MatDialog) {
		
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

	addQuestion() {
		let dialogRef = this.dialog.open(QuestionFormComponent, {
		  height: '650px',
		  width: '850px',
		});
	}

}
