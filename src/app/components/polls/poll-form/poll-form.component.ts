import {Component, OnInit, Input} from '@angular/core';
import {Poll} from '../../../models/poll';
import {GridData} from '../../commons/grids/basic-grid/basic-grid.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollFormComponent implements OnInit {

  @Input() poll: Poll;
  gridData: GridData;
  showOp: boolean = false;
  modal: any;
  crudMode: string;
  selectedItem: any;
  selectedIndex: number;
  creationDt: string;
  dueDt: string;
  placement: any;

  constructor(private modalService: NgbModal) {
    this.gridData = {rows: [], fieldNames: []};
  }

  ngOnInit(): void {
    this.prepareGridData();
    this.selectedItem = {};
    this.selectedIndex = 0;
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

}
