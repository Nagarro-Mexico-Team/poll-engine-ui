import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollUpdateComponent } from './poll-update.component';

describe('PollUpdateComponent', () => {
  let component: PollUpdateComponent;
  let fixture: ComponentFixture<PollUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
