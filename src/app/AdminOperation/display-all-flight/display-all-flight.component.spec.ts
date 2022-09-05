import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllFlightComponent } from './display-all-flight.component';

describe('DisplayAllFlightComponent', () => {
  let component: DisplayAllFlightComponent;
  let fixture: ComponentFixture<DisplayAllFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
