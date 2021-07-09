import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceRecentComponent } from './place-recent/place-recent.component';
import { PlaceCategoriesComponent } from './place-categories/place-categories.component';
import { PlaceFeatureComponent } from './place-feature/place-feature.component';


@NgModule({
  declarations: [
    PlacesComponent,
    PlaceDetailComponent,
    PlaceRecentComponent,
    PlaceCategoriesComponent,
    PlaceFeatureComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ],
  exports:[
    PlacesComponent,
    PlaceDetailComponent,
    PlaceRecentComponent,
    PlaceCategoriesComponent,
    PlaceFeatureComponent

  ]
})
export class PlacesModule { }
