import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMatchComponent } from './data-match.component';

describe('DataMatchComponent', () => {
  let component: DataMatchComponent;
  let fixture: ComponentFixture<DataMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
