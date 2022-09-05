import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCancellationComponent } from './display-cancellation.component';

describe('DisplayCancellationComponent', () => {
  let component: DisplayCancellationComponent;
  let fixture: ComponentFixture<DisplayCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
