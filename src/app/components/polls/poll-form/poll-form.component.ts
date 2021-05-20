import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../../../models/poll';
import { GridData } from '../../commons/grids/basic-grid/basic-grid.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-poll-form',
	templateUrl: './poll-form.component.html',
	styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

	@Input() poll: Poll;
	gridData: GridData;
	showOp: boolean = false;
	modal: any;

	constructor(private modalService: NgbModal) {
		this.gridData = {rows:[],fieldNames: []};
	}

	ngOnInit(): void {
		this.prepareGridData();
	}

	prepareGridData() {
		
		this.gridData.rows = this.poll.questions.map((question) => {
			return {
				"questionId": question.questionId,
				"questionNumber": question.questionNumber,
				"questionText": question.questionText,
				"questionValue": question.questionValue,
				"questionAnswer": question.questionAnswer,
				"questionHint": question.questionHint
			}
		});
		this.gridData.fieldNames = ["questionId", "questionNumber","questionText",
				"questionValue","questionAnswer","questionHint"]
	}

	addNewQuestionClick(content: any) {
		console.log(content);
 		this.modal = content;
 		this.modalService.open(content, {centered: true, size: 'xl'});
	}
}
