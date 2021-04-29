import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-polls-list',
	templateUrl: './polls-list.component.html',
	styleUrls: ['./polls-list.component.css']
})
export class PollsListComponent implements OnInit {
	dataSource: any[] = [
			{
				id: 1,
				activity_module: "create poll",
				datetime: new Date(),
				reference_id: 1000
			},
			{
				id: 2,
				activity_module: "update poll",
				datetime: new Date(),
				reference_id: 1010
			},
			{
				id: 3,
				activity_module: "create a new poll",
				datetime: new Date(),
				reference_id: 1030
			}
		];
		
	constructor() { }

	ngOnInit(): void {
	}

}
