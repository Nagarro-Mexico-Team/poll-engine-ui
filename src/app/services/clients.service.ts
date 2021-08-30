import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url: string = "http://localhost:8090/clients/" 

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url, httpOptions);
  }

  filterClients(term: string): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + "/?filter=" + term, httpOptions);
  }

  saveClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client, httpOptions);
  }

}
