import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PollsService {


  url: string = "http://localhost:8090/polls/" 


  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.url, httpOptions);
  }

  savePoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.url + "create", poll, httpOptions)
      .pipe(
        catchError(this.handleError('createPoll', poll))
      );
  }

  handleError(title, obj): any {
    console.log([title, obj]);
  }
}


export class Poll {
  pollId: number;
  title: string;
  creationDate: string;
  clientName: string;
  dueDate: string;
  status: number;
  questions: Question[];
}

export class Question {
  questionId: number;
  pollId: Poll;
  questionNumber: number;
  questionText: string;
  questionValue: number;
  questionAnswer: string;
  questionHint: string;
}
