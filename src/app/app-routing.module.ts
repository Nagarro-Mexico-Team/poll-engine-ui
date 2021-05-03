import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollsListComponent } from './components/polls/polls-list/polls-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PollCreateComponent } from './components/polls/poll-create/poll-create.component';
import { PollRespondComponent } from './components/polls/poll-respond/poll-respond.component';

const routes: Routes = [
	{path:'', pathMatch: 'full', redirectTo: 'dashboard'},
	{path: 'polls', component: PollsListComponent }, 
	{path: 'dashboard', component: DashboardComponent }, 
	{path: 'create-poll', component: PollCreateComponent }, 
	{path: 'respond-poll', component: PollRespondComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	enableTracing: true,
  	paramsInheritanceStrategy: 'always',
  	useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
