import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	@Input() isLoggedIn: boolean;
	@Output() onLogin: EventEmitter<any> = new EventEmitter<any>();
	username: string;

	constructor() { }

	ngOnInit(): void {
	}

	doOnLoginSuccess($event) {
		console.log(["loginSuccess", $event]);
		this.username = $event.username;
		this.isLoggedIn = $event.isLoggedIn;
		this.onLogin.emit(true);
	}
}
