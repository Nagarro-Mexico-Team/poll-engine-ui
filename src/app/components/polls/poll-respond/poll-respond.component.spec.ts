import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollRespondComponent } from './poll-respond.component';

describe('PollRespondComponent', () => {
  let component: PollRespondComponent;
  let fixture: ComponentFixture<PollRespondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollRespondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollRespondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
