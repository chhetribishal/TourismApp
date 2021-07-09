import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFeatureComponent } from './place-feature.component';

describe('PlaceFeatureComponent', () => {
  let component: PlaceFeatureComponent;
  let fixture: ComponentFixture<PlaceFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
