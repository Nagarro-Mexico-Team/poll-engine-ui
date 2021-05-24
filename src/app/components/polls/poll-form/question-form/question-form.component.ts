import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  @Input() modal: any;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSaveAndContinue: EventEmitter<any> = new EventEmitter<any>();
  //@Output()    onCancel()

  questionForm: any;

  constructor(private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      questionId: [-1],
      questionNumber: [1, Validators.required],
      questionText: ['', Validators.required],
      questionValue: [0, Validators.required],
      questionAnswer: ['', Validators.required],
      questionHint: ['']
    });
  }


  doSaveQuestionClick(event) {
  	if (this.questionForm.valid) {
	  	this.onSave.emit(this.questionForm.value)
	}
  }
}
