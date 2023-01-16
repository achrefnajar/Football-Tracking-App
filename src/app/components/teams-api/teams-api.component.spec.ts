import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsApiComponent } from './teams-api.component';

describe('TeamsApiComponent', () => {
  let component: TeamsApiComponent;
  let fixture: ComponentFixture<TeamsApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
