import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Poll} from '../../../models/poll';
import {GridData} from '../../commons/grids/basic-grid/basic-grid.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type State = {id: number, name: string};

const states: State[] = [
  {id: 0, name: 'MAC DONALD\'S ALIMENTOS S.A.'},
  {id: 1, name: 'Alaska'},
  {id: 2, name: 'American Samoa'},
  {id: 3, name: 'Arizona'},
  {id: 4, name: 'Arkansas'},
  {id: 5, name: 'California'},
  {id: 6, name: 'Colorado'},
  {id: 7, name: 'Connecticut'},
  {id: 8, name: 'Delaware'},
  {id: 9, name: 'District Of Columbia'},
  {id: 10, name: 'Federated States Of Micronesia'},
  {id: 11, name: 'Florida'},
  {id: 12, name: 'Georgia'},
  {id: 13, name: 'Guam'},
  {id: 14, name: 'Hawaii'},
  {id: 15, name: 'Idaho'},
  {id: 16, name: 'Illinois'},
  {id: 17, name: 'Indiana'},
  {id: 18, name: 'Iowa'},
  {id: 19, name: 'Kansas'},
  {id: 20, name: 'Kentucky'},
  {id: 21, name: 'Louisiana'},
  {id: 22, name: 'Maine'},
  {id: 23, name: 'Marshall Islands'},
  {id: 24, name: 'Maryland'},
  {id: 25, name: 'Massachusetts'},
  {id: 26, name: 'Michigan'},
  {id: 27, name: 'Minnesota'},
  {id: 28, name: 'Mississippi'},
  {id: 29, name: 'Missouri'},
  {id: 30, name: 'Montana'},
  {id: 31, name: 'Nebraska'},
  {id: 32, name: 'Nevada'},
  {id: 33, name: 'New Hampshire'},
  {id: 34, name: 'New Jersey'},
  {id: 35, name: 'New Mexico'},
  {id: 36, name: 'New York'},
  {id: 37, name: 'North Carolina'},
  {id: 38, name: 'North Dakota'},
  {id: 39, name: 'Northern Mariana Islands'},
  {id: 40, name: 'Ohio'},
  {id: 41, name: 'Oklahoma'},
  {id: 42, name: 'Oregon'},
  {id: 43, name: 'Palau'},
  {id: 44, name: 'Pennsylvania'},
  {id: 45, name: 'Puerto Rico'},
  {id: 46, name: 'Rhode Island'},
  {id: 47, name: 'South Carolina'},
  {id: 48, name: 'South Dakota'},
  {id: 49, name: 'Tennessee'},
  {id: 50, name: 'Texas'},
  {id: 51, name: 'Utah'},
  {id: 52, name: 'Vermont'},
  {id: 53, name: 'Virgin Islands'},
  {id: 54, name: 'Virginia'},
  {id: 55, name: 'Washington'},
  {id: 56, name: 'West Virginia'},
  {id: 57, name: 'Wisconsin'},
  {id: 58, name: 'Wyoming'}
];

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  @Input() poll: Poll;
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSaveAndContinue: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
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
  formatter = (state: State) => state.name;

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
      if (this.chkSaveAndContinue == true) {
      } else {
        this.onSave.emit(this.poll);
        this.onClose.emit(true); // notifies the modal close event
        
      }
    } 
  }

  doSaveAndContinueCheckOnChange(event) {
    this.chkSaveAndContinue = !this.chkSaveAndContinue;
  }

  doOnCancel(event) {
    this.onClose.emit(true);
  }


  search: OperatorFunction<string, readonly {id, name}[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => states.filter(state => new RegExp(term, 'mi').test(state.name)).slice(0, 10))
  )
 

 }
