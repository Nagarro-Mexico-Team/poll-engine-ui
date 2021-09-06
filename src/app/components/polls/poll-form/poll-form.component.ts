import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GridData} from '../../commons/grids/basic-grid/basic-grid.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';
import {Poll} from '../../../models/poll';
import {Client} from '../../../models/client';
import {ClientsService} from '../../../services/clients.service';


@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  @Input() model: Poll;
  @Input() crudMode: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSaveAndContinue: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  pollForm: any;
  gridData: GridData;
  showOp = false;
  modal: any;
  questionCrudMode: string;
  selectedItem: any;
  selectedIndex: number;
  creationDt: string;
  dueDt: string;
  placement: any;
  submitted: boolean;
  chkSaveAndContinue: boolean;
  clients: Client[] = [];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private clientsService: ClientsService) {
    this.gridData = {rows: [], fieldNames: []};
  }

  ngOnInit(): void {
    this.pollForm = this.buildForm(this.model);
    console.log(this.pollForm.value);
    this.prepareGridData();
    this.selectedItem = {};
    this.selectedIndex = 0;
    this.clientsService.getClients()
      .subscribe(data => {
        this.clients = data;
      });
  }

  refreshData() {
    console.log("refreshing data");
    this.clientsService.getClients()
      .subscribe(data => {
        this.clients = data;
      });
  }

  buildForm(data: Poll): FormGroup {
    return this.formBuilder.group({
      pollId: {value: data['pollId'], disabled: true},
      title: [data['title'], Validators.required],
      creationDate: [this.getStringAsDate(data['creationDate']), Validators.required],
      clientName: [data['clientName'], Validators.required],
      dueDate: [this.getStringAsDate(data['dueDate']), Validators.required],
      status: [data['status'], Validators.required]
    });
  }

  prepareGridData() {

    this.gridData.rows = this.model.questions.map((question) => {
      return {
        questionId: question.questionId,
        questionNumber: question.questionNumber,
        questionText: question.questionText,
        questionValue: question.questionValue,
        questionAnswer: question.questionAnswer,
        questionHint: question.questionHint
      };
    });
    this.gridData.fieldNames = ['questionId', 'questionNumber', 'questionText',
      'questionValue', 'questionAnswer', 'questionHint'];
  }

  addNewQuestionClick(content: any): void {
    console.log(content);
    this.modal = content;
    this.questionCrudMode = 'create';
    this.modalService.open(content, {centered: true, size: 'xl'});
  }

  editQuestionClick(content: any): void {
    console.log(content);
    this.modal = content;
    this.questionCrudMode = 'update';
    console.log(this.gridData.rows);
    this.selectedItem = this.model.questions[this.selectedIndex];
    console.log(this.selectedItem);
    this.modalService.open(content, {centered: true, size: 'xl'});
  }

  doOnSaveQuestion(item: any): void {
    console.log(item);
    if (this.questionCrudMode == 'create') {
      item.questionId = null;
      this.model.questions.push(item);
    } else if (this.questionCrudMode == 'update') {
      this.model.questions[this.selectedIndex] = item;
    }
    this.prepareGridData();
  }


  doOnSelectionChange(event: number): void {
    console.log(event);
    this.selectedIndex = event;
  }

  doOnClickSavePoll(event): void {
    console.log('PollForm::doSavePollClick');
    event.preventDefault();
    this.submitted = true;
    if (this.pollForm.valid) {
      if (this.crudMode = 'create') {
        this.model.pollId = null;
      }
      console.log(this.pollForm.value);
      this.model.title = this.pollForm.value.title;
      this.model.creationDate = this.getDateAsString(this.pollForm.value.creationDate);
      this.model.clientName = this.pollForm.value.clientName.clientName;
      this.model.dueDate = this.getDateAsString(this.pollForm.value.dueDate);
      this.model.status = this.pollForm.value.status;
      this.submitted = false;
      if (this.chkSaveAndContinue == true) {
        this.onSaveAndContinue.emit(this.model);
      } else {
        this.onSave.emit(this.model);
      }
    }
  }

  getDateAsString(a_date: any): string {
    return a_date.year + '-' + a_date.month + '-' + a_date.day;
  }

  getStringAsDate(a_date: string): any {
    let parsed_date:string[] = a_date.split("-");
    console.log(["parsedDate", parsed_date]);
    return {day: parseInt(parsed_date[2]), month: parseInt(parsed_date[1]), year: parseInt(parsed_date[0])};
  }

  doSaveAndContinueCheckOnChange(event) {
    this.chkSaveAndContinue = !this.chkSaveAndContinue;
  }

  doOnCancel(event) {
    this.onClose.emit(true);
  }

  search: OperatorFunction<string, readonly { id, clientName }[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => this.clients.filter(client => new RegExp(term, 'mi').test(client.clientName)).slice(0, 10))
  )
  formatter = (client: Client) => client.clientName;

  doOnCloseQuestionForm(event) {
    this.modal.close();
  }

}
