import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() onMenuSelect: EventEmitter<any> = new EventEmitter<any>();
	@Output() onLogout: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  logout(): void {
  	this.onLogout.emit(true);
  }

  doOnMenuSelect(event) {
    console.log(event);
    this.onMenuSelect.emit(event);
  }

  doOnLogout(event) {
    console.log(event);
    this.onLogout.emit(event);
  }

}
