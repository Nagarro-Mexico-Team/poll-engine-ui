import { Component, OnInit, Input } from '@angular/core';
import { RecentChangesService } from '../../services/recent-changes.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Activity } from '../../models/activity';
import { StubMatRowDefDirective } from '../../helpers/stub-mat-row-def.directive';
import { StubMatHeaderRowDefDirective } from '../../helpers/stub-mat-header-row-def.directive';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	recentChanges: Activity[];
	displayedColumns: string[] = ['id', 'activity_module', 'datetime', 'reference_id'];
	@Input() username: string;

	

	constructor(private recentChangesService: RecentChangesService) {
		this.recentChanges = [];
	}


	ngOnInit(): void {

	}

	getRecentChanges() {
		this.recentChanges = [
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
		// this.recentChangesService.getRecentChanges()
		// 	.subscribe(data => {
			// 		this.recentChanges = data
			// 	});
		}

	}
