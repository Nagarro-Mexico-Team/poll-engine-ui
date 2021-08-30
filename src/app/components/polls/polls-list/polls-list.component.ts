import {Component, OnInit} from '@angular/core';
import {PollsService} from '../../../services/polls.service';
import {Poll} from '../../../models/poll';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.css']
})
export class PollsListComponent implements OnInit {
  dataSource: any[] = [];
  statusesList = {
    1: "Created",
    2: "Scheduled",
    3: "Presented",
    4: "Evaluated",
    5: "Completed",
  };
  poll: Poll;
  mode: string = "list";
  dataSavedOK: boolean;
  model: Poll;
  selectedIndex: number;


  constructor(private pollsService: PollsService) {
    this.poll = new Poll();
    this.dataSavedOK = false;
    this.mode = 'list';
    this.selectedIndex = -1;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.pollsService.getPolls()
      .subscribe(data => {
        console.log(data);
        this.dataSource = data;
      });
  }

  doCreateNewPoll(event) {
    event.preventDefault();
    this.mode = 'create';
  }

  doOnSavePoll(data: any) {
    console.log(data);
    this.dataSavedOK = true;
    this.dataSource.push(data);
    this.mode = 'list';
  }

  doOnSavePollAndContinue(data: any) {
    console.log(data);
    this.dataSavedOK = true;
    this.dataSource.push(data);
  }

  doOnUpdatePoll(data: any) {
    console.log(data);
    this.pollsService.updatePoll(data)
    	.subscribe(resp => {
		    this.dataSavedOK = true;
		    this.dataSource[this.selectedIndex]=data;
		    this.mode = 'list';
		});
  }

  doOnDeletePoll(event): void {
    console.log(event);
    this.loadData();
  }

  doOnCloseCreatePoll(event) {
    this.mode = 'list';
  }

  doEditSelect(item: any, index: number) {
  	console.log(item);
    this.model = item;
    this.selectedIndex = index;
    this.mode = 'update';
  }

  doDeleteSelect(item: any) {
    this.model = item;
    this.mode = 'delete';
  }

  doViewSelect(item: any) {
    this.model = item;
    this.mode = 'consult';
  }
}
