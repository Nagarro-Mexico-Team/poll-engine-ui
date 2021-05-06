import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicGridComponent } from './components/commons/grids/basic-grid/basic-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './components/layout/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridQuestionOptionsComponent } from './components/polls/grid-question-options/grid-question-options.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PollCreateComponent } from './components/polls/poll-create/poll-create.component';
import { PollFormComponent } from './components/polls/poll-form/poll-form.component';
import { PollRespondComponent } from './components/polls/poll-respond/poll-respond.component';
import { PollsListComponent } from './components/polls/polls-list/polls-list.component';
import { PollUpdateComponent } from './components/polls/poll-update/poll-update.component';
import { PollViewComponent } from './components/polls/poll-view/poll-view.component';
import { StubMatHeaderRowDefDirective } from './helpers/stub-mat-header-row-def.directive';
import { StubMatRowDefDirective } from './helpers/stub-mat-row-def.directive';
import { QuestionFormComponent } from './components/polls/poll-form/question-form/question-form.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

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
    MatDatepickerModule,
    MatNativeDateModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    MatToolbarModule
  ],
  providers: [
    MatNativeDateModule,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
