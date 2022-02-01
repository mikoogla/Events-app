import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableEventsComponent } from './list-available-events.component';

describe('ListAvailableEventsComponent', () => {
  let component: ListAvailableEventsComponent;
  let fixture: ComponentFixture<ListAvailableEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailableEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
