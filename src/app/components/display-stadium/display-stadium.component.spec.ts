import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStadiumComponent } from './display-stadium.component';

describe('DisplayStadiumComponent', () => {
  let component: DisplayStadiumComponent;
  let fixture: ComponentFixture<DisplayStadiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayStadiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
