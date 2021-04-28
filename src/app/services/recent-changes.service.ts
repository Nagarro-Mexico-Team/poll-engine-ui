import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecentChangesService {

  constructor() { }

  getRecentChanges() {
  	//this.http.get('/recentChanges')
  	//	.map(res => res.json());
  }
}
