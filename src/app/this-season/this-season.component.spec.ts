import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisSeasonComponent } from './this-season.component';

describe('ThisSeasonComponent', () => {
  let component: ThisSeasonComponent;
  let fixture: ComponentFixture<ThisSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
