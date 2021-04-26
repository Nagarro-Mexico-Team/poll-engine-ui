import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	isLoggedIn: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

}
