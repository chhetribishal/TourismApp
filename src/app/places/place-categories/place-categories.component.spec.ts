import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCategoriesComponent } from './place-categories.component';

describe('PlaceCategoriesComponent', () => {
  let component: PlaceCategoriesComponent;
  let fixture: ComponentFixture<PlaceCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
