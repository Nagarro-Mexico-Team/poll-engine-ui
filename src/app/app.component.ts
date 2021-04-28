import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poll-engine-ui';
  isLoggedIn: boolean = false;

  doLogin($event) {
  	console.log($event);
  	this.isLoggedIn = true;
  }

  doLogout(event): void {
  	console.log(event);
  	this.isLoggedIn = false;
  }

}
