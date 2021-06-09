import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GridData } from '../../commons/grids/basic-grid/basic-grid.component';

@Component({
	selector: 'app-grid-question-options',
	templateUrl: './grid-question-options.component.html',
	styleUrls: ['./grid-question-options.component.css']
})
export class GridQuestionOptionsComponent implements OnInit {
	@Input() gridData: GridData;
	@Input() showSelectColumn: boolean;
	@Input() showActionsColumn: boolean;
	@Input() idFieldName: string;
	@Input() selectedIndex: number;
	@Output() onSelectionChange: EventEmitter<any> = new EventEmitter<any>( ); 
	gridQuestionsColumnNames: string[] = ["#", "Number", "Question", "Value", "Answer", "Hint"];

	constructor() { }

	ngOnInit(): void {
		console.log(["GridQuestionOptionsComponent::onInit",this.gridData, this.gridQuestionsColumnNames]);
	}

	doOnSelectionChange(event) {
		this.onSelectionChange.emit(event);
	}
}
