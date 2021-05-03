import { Component, OnInit, Input } from '@angular/core';
import { GridData } from '../../commons/grids/basic-grid/basic-grid.component';

@Component({
	selector: 'app-grid-question-options',
	templateUrl: './grid-question-options.component.html',
	styleUrls: ['./grid-question-options.component.css']
})
export class GridQuestionOptionsComponent implements OnInit {
	@Input() gridData: GridData;
	gridQuestionsColumnNames: string[] = ["#", "Question", "Answer", "Hint", "Select"];

	constructor() { }

	ngOnInit(): void {
		console.log(["GridQuestionOptionsComponent::onInit",this.gridData, this.gridQuestionsColumnNames]);
	}

}
