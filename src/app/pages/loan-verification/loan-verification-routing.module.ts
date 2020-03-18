import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanVerificationPage } from './loan-verification.page';

const routes: Routes = [
  {
    path: '',
    component: LoanVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanVerificationPageRoutingModule {}
