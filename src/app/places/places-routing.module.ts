import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  {
    path: '', component: PlacesComponent,
  },
  { path: ':id', component: PlaceDetailComponent },


  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
