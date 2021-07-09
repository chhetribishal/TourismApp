import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path:'page/:slug',component:PageComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
