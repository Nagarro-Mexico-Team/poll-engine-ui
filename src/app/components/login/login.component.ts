import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isNotValid: boolean = false;
	errorMessage: string = '';
	username: string = '';
	password: string = '';

	@Output() onLoginSuccess = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit(): void {
	}

	doLogin(): void {
		this.isNotValid = false;
		console.log('doLogin');
		if (this.username == "admin" && this.password == "123") {
			console.log('authenticated!');
			this.onLoginSuccess.emit(true);
		} else {
			console.log('error!');
			this.isNotValid = true;
			this.errorMessage = "User or password must be provided.";
		}

	}
}
