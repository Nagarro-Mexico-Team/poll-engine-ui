import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  private _modal: any;
  @Input() crudMode: string;
  @Input() data: any;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  questionForm: any;
  chkSaveAndContinue: boolean;
  saveMessage: String = "Question was saved successfully!";
  questionSaved: boolean = false;
  submitted: boolean = false;


  @Input() 
  set modal(value: any) {
    console.log(value);
    this._modal = value;
  }

  get modal(): any {
    return this._modal;
  }

  constructor(private formBuilder: FormBuilder) {
    this.chkSaveAndContinue = false;

  }

  ngOnInit(): void {
    this.questionForm = this.buildForm();
    if (this.crudMode == 'update') {
      this.questionForm = this.formBuilder.group({
        questionId: [this.data['questionId']],
        questionNumber: [this.data['questionNumber'], Validators.required],
        questionText: [this.data['questionText'], Validators.required],
        questionValue: [this.data['questionValue'], [Validators.required, Validators.pattern('[0-9\.]*'), Validators.min(1), Validators.max(100)]],
        questionAnswer: [this.data['questionAnswer'], Validators.required],
        questionHint: [this.data['questionHint']]
      });
    }
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      questionId: [-1],
      questionNumber: [1, Validators.required],
      questionText: ['', Validators.required],
      questionValue: [0, [Validators.required, Validators.pattern('[0-9\.]*'), Validators.min(1), Validators.max(100)]] ,
      questionAnswer: ['', Validators.required],
      questionHint: ['']
    });
  }

  doSaveQuestionClick(event: any) {
  	console.log("QuestionFormComponent::doSaveQuestionClick");
    this.submitted = true;
    if (this.questionForm.valid) {
      this.onSave.emit(this.questionForm.value);
      this.questionSaved = true;
      this.questionForm = this.buildForm();
      this.submitted = false;
      if (this.chkSaveAndContinue == false) {
        this.modal.close();
        this.onClose.emit(true); // notifies the modal close event
      }
    } else {
      this.questionSaved = false;
    }

  }

  doSaveAndContinueCheckOnChange(event) {
    this.chkSaveAndContinue = !this.chkSaveAndContinue;
  }

}
