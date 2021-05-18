import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-basic-grid',
	templateUrl: './basic-grid.component.html',
	styleUrls: ['./basic-grid.component.css']
})
export class BasicGridComponent implements OnInit {
	@Input() columnNames : string[] = [];
	@Input() gridData: GridData;
	@Input() showSelectColumn: boolean;
	@Input() showActionsColumn: boolean;
	@Input() idFieldName: string;

	constructor() { }

	ngOnInit(): void {
		console.log(["BasicGridComponent::onInit",this.gridData, this.columnNames]);
	}

}

export interface GridData {
	rows: any[];
	fieldNames: string[];
}
