import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAddedComponent } from './flight-added.component';

describe('FlightAddedComponent', () => {
  let component: FlightAddedComponent;
  let fixture: ComponentFixture<FlightAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
