import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRecentComponent } from './place-recent.component';

describe('PlaceRecentComponent', () => {
  let component: PlaceRecentComponent;
  let fixture: ComponentFixture<PlaceRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
