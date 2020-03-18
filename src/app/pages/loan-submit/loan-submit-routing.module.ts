import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanSubmitPage } from './loan-submit.page';

const routes: Routes = [
  {
    path: '',
    component: LoanSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanSubmitPageRoutingModule {}
