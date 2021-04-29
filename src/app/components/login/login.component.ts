import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserSession } from '../../models/user-session';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isNotValid: boolean = false;
	errorMessage: string = '';
	username: string = 'admin';
	password: string = '123';

	@Output() onLoginSuccess = new EventEmitter<UserSession>();

	constructor() { }

	ngOnInit(): void {
	}

	doLogin(): void {
		this.isNotValid = false;
		console.log('doLogin');
		if (this.username == "admin" && this.password == "123") {
			console.log('authenticated!');
			let userSession: UserSession = new UserSession();
			userSession.username = this.username;
			userSession.password = this.password;
			userSession.isLoggedIn = true;
			this.onLoginSuccess.emit(userSession);
		} else {
			console.log('error!');
			this.isNotValid = true;
			this.errorMessage = "User or password must be provided.";
		}

	}
}
