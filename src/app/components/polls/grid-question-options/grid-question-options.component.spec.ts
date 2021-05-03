import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridQuestionOptionsComponent } from './grid-question-options.component';

describe('GridQuestionOptionsComponent', () => {
  let component: GridQuestionOptionsComponent;
  let fixture: ComponentFixture<GridQuestionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridQuestionOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridQuestionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
