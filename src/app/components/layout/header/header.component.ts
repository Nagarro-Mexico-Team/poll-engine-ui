import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

}
