import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-basic-grid',
	templateUrl: './basic-grid.component.html',
	styleUrls: ['./basic-grid.component.css']
})
export class BasicGridComponent implements OnInit {
	@Input() columnNames : string[] = [];
	@Input() gridData: GridData;
	@Input() includeControlButtons: boolean = false;

	constructor() { }

	ngOnInit(): void {
		console.log(["BasicGridComponent::onInit",this.gridData, this.columnNames]);
	}

	get numOfColumns(): number {
		let num: number = 0;
		try {
			num = this.columnNames.length + ((this.includeControlButtons == true) ? 1:0);
		} catch (e) {
			console.log(["BasicGridComponent::numOfColumns", e])
		}
		return num;
	}

}

export interface GridData {
	rows: any[];
	fieldNames: string[];
}
