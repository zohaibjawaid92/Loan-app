import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationEmploymentPage } from './education-employment.page';

const routes: Routes = [
  {
    path: '',
    component: EducationEmploymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationEmploymentPageRoutingModule {}
