import { Component, OnInit, Input } from '@angular/core';
import { RecentChangesService } from '../../services/recent-changes.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	recentChanges: any[] = [];
	@Input() username: string;

	constructor(private recentChangesService: RecentChangesService) { }

	ngOnInit(): void {
	}

	getRecentChanges() {
		// this.recentChangesService.getRecentChanges()
		// 	.subscribe(data => {
		// 		this.recentChanges = data
		// 	});
	}

}
