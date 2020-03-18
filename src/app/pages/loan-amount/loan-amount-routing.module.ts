import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanAmountPage } from './loan-amount.page';

const routes: Routes = [
  {
    path: '',
    component: LoanAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanAmountPageRoutingModule {}
