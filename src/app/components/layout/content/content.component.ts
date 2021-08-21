import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	@Input() isLoggedIn: boolean;
	@Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
	@Input() selectedMenu: string;
	username: string;

	constructor() { }

	ngOnInit(): void {
		this.selectedMenu = 'dashboard';
	}

	doOnLoginSuccess($event) {
		console.log(["loginSuccess", $event]);
		this.username = $event.username;
		this.isLoggedIn = $event.isLoggedIn;
		this.onLogin.emit(true);
	}
}
