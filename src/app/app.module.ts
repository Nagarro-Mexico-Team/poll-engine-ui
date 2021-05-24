import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ContentComponent} from './components/layout/content/content.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {StubMatRowDefDirective} from './helpers/stub-mat-row-def.directive';
import {StubMatHeaderRowDefDirective} from './helpers/stub-mat-header-row-def.directive';
import {PollsListComponent} from './components/polls/polls-list/polls-list.component';
import {PollFormComponent} from './components/polls/poll-form/poll-form.component';
import {PollCreateComponent} from './components/polls/poll-create/poll-create.component';
import {PollUpdateComponent} from './components/polls/poll-update/poll-update.component';
import {PollViewComponent} from './components/polls/poll-view/poll-view.component';
import {PollRespondComponent} from './components/polls/poll-respond/poll-respond.component';
import {BasicGridComponent} from './components/commons/grids/basic-grid/basic-grid.component';
import {GridQuestionOptionsComponent} from './components/polls/grid-question-options/grid-question-options.component';
import {QuestionFormComponent} from './components/polls/poll-form/question-form/question-form.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    StubMatRowDefDirective,
    StubMatHeaderRowDefDirective,
    PollsListComponent,
    PollFormComponent,
    PollCreateComponent,
    PollUpdateComponent,
    PollViewComponent,
    PollRespondComponent,
    BasicGridComponent,
    GridQuestionOptionsComponent,
    QuestionFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        NgbModule,
        NgbPaginationModule,
        NgbAlertModule,
        ReactiveFormsModule,
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
