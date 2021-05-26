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
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  questionForm: any;
  chkSaveAndContinue: boolean = false;
  saveMessage: String = "Question was saved successfully!";
  questionSaved: boolean = false;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.questionForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      questionId: [-1],
      questionNumber: [1, Validators.required],
      questionText: ['', Validators.required],
      questionValue: [0, Validators.required],
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
        this.onClose.emit(true); // notifies the modal close event
        this.modal.close(); // closes the modal dialog.
      }
    } else {
      this.questionSaved = false;
    }

  }

  doSaveAndContinueCheckOnChange(event) {
    this.chkSaveAndContinue = !this.chkSaveAndContinue;
  }

}
