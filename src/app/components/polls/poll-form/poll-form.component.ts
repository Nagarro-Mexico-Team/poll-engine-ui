import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Poll} from '../../../models/poll';
import {GridData} from '../../commons/grids/basic-grid/basic-grid.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  @Input() poll: Poll;
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  pollForm: any;
  gridData: GridData;
  showOp: boolean = false;
  modal: any;
  crudMode: string;
  selectedItem: any;
  selectedIndex: number;
  creationDt: string;
  dueDt: string;
  placement: any;
  submitted: boolean;
  chkSaveAndContinue: boolean;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.gridData = {rows: [], fieldNames: []};
  }

  ngOnInit(): void {
    this.pollForm = this.buildForm();
    this.prepareGridData();
    this.selectedItem = {};
    this.selectedIndex = 0;
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      pollId: [-1],
      title: ['', Validators.required],
      creationDate: ['', Validators.required],
      clientName: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: [1, Validators.required]
    });
  }

  prepareGridData() {

    this.gridData.rows = this.poll.questions.map((question) => {
      return {
        "questionId": question.questionId,
        "questionNumber": question.questionNumber,
        "questionText": question.questionText,
        "questionValue": question.questionValue,
        "questionAnswer": question.questionAnswer,
        "questionHint": question.questionHint
      }
    });
    this.gridData.fieldNames = ['questionId', "questionNumber", "questionText",
    'questionValue', "questionAnswer", "questionHint"]
  }

  addNewQuestionClick(content: any): void {
    console.log(content);
    this.modal = content;
    this.crudMode = 'create';
    this.modalService.open(content, {centered: true, size: 'xl'});
  }

  editQuestionClick(content: any) {
    console.log(content);
    this.modal = content;
    this.crudMode = 'update';
    console.log(this.gridData.rows);
    this.selectedItem = this.poll.questions[this.selectedIndex];
    console.log(this.selectedItem);
    this.modalService.open(content, {centered: true, size: 'xl'});
  }

  doOnSaveQuestion(item: any): void {
    console.log(item);
    if (this.crudMode=="create") {
      this.poll.questions.push(item);
    } else if (this.crudMode = "update") {
      this.poll.questions[this.selectedIndex] = item;
    }
    this.prepareGridData();
  }


  doOnSelectionChange(event: number) {
    console.log(event);
    this.selectedIndex = event;
  }

  doOnClickSavePoll(event) {
    console.log("PollForm::doSavePollClick");
    this.submitted = true;
    if (this.pollForm.valid) {
      
      this.submitted = false;
      if (this.chkSaveAndContinue == false) {
        this.onClose.emit(true); // notifies the modal close event
        this.modal.close(); // closes the modal dialog.
      }
    } 
  }

  doSaveAndContinueCheckOnChange(event) {
    this.chkSaveAndContinue = !this.chkSaveAndContinue;
  }

}
