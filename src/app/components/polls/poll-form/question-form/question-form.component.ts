import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-question-form',
	templateUrl: './question-form.component.html',
	styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
	@Input() modal: any;

	constructor() { }

	ngOnInit(): void { }
	
	

}
